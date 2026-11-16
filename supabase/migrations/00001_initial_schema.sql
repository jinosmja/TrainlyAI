-- ==============================================================================
-- TrainlyAI — Migration 00001: Initial Core Schema
-- Platform: Supabase PostgreSQL 15+
-- ==============================================================================

-- Enable UUID and Cryptographic Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 1. Custom Types / Enums
-- ==============================================================================

DO $$ BEGIN
  CREATE TYPE job_status AS ENUM (
    'draft',
    'pending_review',
    'approved',
    'rejected',
    'closed',
    'expired',
    'archived'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE verification_status AS ENUM (
    'unverified',
    'needs_review',
    'verified',
    'disputed'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE country_eligibility_type AS ENUM (
    'worldwide',
    'selected_countries',
    'not_confirmed',
    'restricted'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE work_arrangement AS ENUM (
    'remote',
    'hybrid',
    'onsite',
    'unknown'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE pay_period AS ENUM (
    'hour',
    'day',
    'week',
    'month',
    'year',
    'task',
    'fixed',
    'unknown'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE referral_program_status AS ENUM (
    'unknown',
    'active',
    'inactive',
    'not_applicable'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE source_type AS ENUM (
    'official_api',
    'rss',
    'authorized_feed',
    'email_alert',
    'permitted_public_page',
    'manual'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE terms_review_status AS ENUM (
    'not_reviewed',
    'approved',
    'prohibited',
    'needs_legal_review'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE admin_role AS ENUM (
    'owner',
    'admin',
    'editor',
    'reviewer'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE automation_status AS ENUM (
    'running',
    'success',
    'partial_success',
    'failed'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE submission_status AS ENUM (
    'pending',
    'reviewed',
    'accepted',
    'rejected'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- ==============================================================================
-- 2. Helper Functions & Triggers
-- ==============================================================================

-- Automatic updated_at timestamp generator
CREATE OR REPLACE FUNCTION set_updated_at_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Prevent mutations on immutable audit logs
CREATE OR REPLACE FUNCTION prevent_audit_log_mutation()
RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'TrainlyAI Security Policy: Audit log records are immutable and cannot be updated or deleted.';
END;
$$ LANGUAGE plpgsql;

-- ==============================================================================
-- 3. Core Tables
-- ==============================================================================

-- 3.1 Platforms Table
CREATE TABLE IF NOT EXISTS platforms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  website_url TEXT NOT NULL,
  logo_url TEXT,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  default_referral_url TEXT,
  allowed_domains TEXT[] NOT NULL DEFAULT '{}',
  referral_program_status referral_program_status NOT NULL DEFAULT 'unknown',
  referral_terms_checked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_platforms_modtime
  BEFORE UPDATE ON platforms
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_timestamp();

-- 3.2 Job Categories Table
CREATE TABLE IF NOT EXISTS job_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon_name TEXT,
  parent_id UUID REFERENCES job_categories(id) ON DELETE SET NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_job_categories_modtime
  BEFORE UPDATE ON job_categories
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_timestamp();

-- 3.3 Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id UUID NOT NULL REFERENCES platforms(id) ON DELETE RESTRICT,
  category_id UUID REFERENCES job_categories(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  summary TEXT,
  description TEXT NOT NULL,
  employment_type TEXT NOT NULL DEFAULT 'Contract / Freelance',
  work_arrangement work_arrangement NOT NULL DEFAULT 'remote',
  pay_min NUMERIC(12, 2),
  pay_max NUMERIC(12, 2),
  pay_currency VARCHAR(3) DEFAULT 'USD',
  pay_period pay_period NOT NULL DEFAULT 'hour',
  country_eligibility_type country_eligibility_type NOT NULL DEFAULT 'not_confirmed',
  eligible_country_codes TEXT[] NOT NULL DEFAULT '{}',
  excluded_country_codes TEXT[] NOT NULL DEFAULT '{}',
  eligible_region_codes TEXT[] NOT NULL DEFAULT '{}',
  eligibility_evidence TEXT,
  required_skills TEXT[] NOT NULL DEFAULT '{}',
  required_languages JSONB NOT NULL DEFAULT '[]',
  experience_level TEXT,
  weekly_hours_min NUMERIC(5, 1),
  weekly_hours_max NUMERIC(5, 1),
  equipment_requirements TEXT,
  application_instructions TEXT,
  source_job_id TEXT,
  source_url TEXT NOT NULL,
  referral_url_override TEXT,
  source_posted_at TIMESTAMPTZ,
  discovered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_checked_at TIMESTAMPTZ,
  last_verified_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  status job_status NOT NULL DEFAULT 'pending_review',
  verification_status verification_status NOT NULL DEFAULT 'needs_review',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  approved_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  approved_at TIMESTAMPTZ,
  rejection_reason TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Constraints
  CONSTRAINT check_pay_range CHECK (pay_min IS NULL OR pay_max IS NULL OR pay_min <= pay_max),
  CONSTRAINT check_weekly_hours CHECK (weekly_hours_min IS NULL OR weekly_hours_max IS NULL OR weekly_hours_min <= weekly_hours_max),
  CONSTRAINT check_published_consistency CHECK (status != 'approved' OR published_at IS NOT NULL)
);

CREATE TRIGGER update_jobs_modtime
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_timestamp();

-- 3.4 Job Sources (Authorized Connectors)
CREATE TABLE IF NOT EXISTS job_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id UUID NOT NULL REFERENCES platforms(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  source_type source_type NOT NULL DEFAULT 'official_api',
  endpoint_or_reference TEXT,
  is_enabled BOOLEAN NOT NULL DEFAULT true,
  poll_interval_minutes INT NOT NULL DEFAULT 360,
  last_success_at TIMESTAMPTZ,
  last_attempt_at TIMESTAMPTZ,
  last_error TEXT,
  terms_review_status terms_review_status NOT NULL DEFAULT 'not_reviewed',
  terms_reviewed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_job_sources_modtime
  BEFORE UPDATE ON job_sources
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_timestamp();

-- 3.5 Job Source Records (Raw Provenance & Deduplication)
CREATE TABLE IF NOT EXISTS job_source_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id UUID NOT NULL REFERENCES job_sources(id) ON DELETE CASCADE,
  job_id UUID REFERENCES jobs(id) ON DELETE SET NULL,
  external_id TEXT,
  canonical_source_url TEXT NOT NULL,
  content_fingerprint TEXT NOT NULL,
  raw_payload JSONB,
  first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  source_status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT unique_source_external_id UNIQUE NULLS NOT DISTINCT (source_id, external_id)
);

CREATE TRIGGER update_job_source_records_modtime
  BEFORE UPDATE ON job_source_records
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_timestamp();

-- 3.6 Job Status History
CREATE TABLE IF NOT EXISTS job_status_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  old_status job_status,
  new_status job_status NOT NULL,
  reason TEXT,
  changed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.7 Referral Click Events (Privacy-Conscious Telemetry)
CREATE TABLE IF NOT EXISTS referral_click_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  platform_id UUID NOT NULL REFERENCES platforms(id) ON DELETE CASCADE,
  clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  referral_destination_version TEXT,
  anonymous_session_id TEXT,
  country_code VARCHAR(2),
  referrer_domain TEXT,
  user_agent_family TEXT,
  bot_flag BOOLEAN NOT NULL DEFAULT false
);

-- 3.8 Admin Profiles
CREATE TABLE IF NOT EXISTS admin_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  role admin_role NOT NULL DEFAULT 'reviewer',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_admin_profiles_modtime
  BEFORE UPDATE ON admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_timestamp();

-- 3.9 Admin Audit Logs (Immutable Ledger)
CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  before_data JSONB,
  after_data JSONB,
  reason TEXT,
  ip_address_masked TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enforce Audit Log Immutability
CREATE TRIGGER protect_admin_audit_logs
  BEFORE UPDATE OR DELETE ON admin_audit_logs
  FOR EACH ROW
  EXECUTE FUNCTION prevent_audit_log_mutation();

-- 3.10 Automation Runs
CREATE TABLE IF NOT EXISTS automation_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id UUID REFERENCES job_sources(id) ON DELETE SET NULL,
  workflow_name TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  finished_at TIMESTAMPTZ,
  status automation_status NOT NULL DEFAULT 'running',
  items_found INT NOT NULL DEFAULT 0,
  items_created INT NOT NULL DEFAULT 0,
  items_updated INT NOT NULL DEFAULT 0,
  items_skipped INT NOT NULL DEFAULT 0,
  error_summary TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.11 Public Job Submissions (Optional suggestions with rate limiting)
CREATE TABLE IF NOT EXISTS job_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submitter_email TEXT,
  suggested_source_url TEXT NOT NULL,
  suggested_title TEXT,
  message TEXT,
  status submission_status NOT NULL DEFAULT 'pending',
  reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==============================================================================
-- 4. Query Performance Indexes
-- ==============================================================================

-- Jobs indexes
CREATE INDEX IF NOT EXISTS idx_jobs_status_published_at ON jobs (status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_platform_id ON jobs (platform_id);
CREATE INDEX IF NOT EXISTS idx_jobs_category_id ON jobs (category_id);
CREATE INDEX IF NOT EXISTS idx_jobs_country_eligibility ON jobs (country_eligibility_type);
CREATE INDEX IF NOT EXISTS idx_jobs_work_arrangement ON jobs (work_arrangement);
CREATE INDEX IF NOT EXISTS idx_jobs_pay_currency ON jobs (pay_currency);
CREATE INDEX IF NOT EXISTS idx_jobs_last_verified_at ON jobs (last_verified_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_is_featured ON jobs (is_featured) WHERE is_featured = true;

-- GIN indexes for array lookups
CREATE INDEX IF NOT EXISTS idx_jobs_eligible_country_codes ON jobs USING GIN (eligible_country_codes);
CREATE INDEX IF NOT EXISTS idx_jobs_required_skills ON jobs USING GIN (required_skills);

-- Full-Text Search index (English dictionary)
CREATE INDEX IF NOT EXISTS idx_jobs_fts ON jobs USING GIN (
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(summary, '') || ' ' || coalesce(description, ''))
);

-- Referral Click Events indexes
CREATE INDEX IF NOT EXISTS idx_clicks_job_timestamp ON referral_click_events (job_id, clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_clicks_platform_timestamp ON referral_click_events (platform_id, clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_clicks_timestamp ON referral_click_events (clicked_at DESC);

-- Job Source Records indexes (Deduplication)
CREATE INDEX IF NOT EXISTS idx_source_records_fingerprint ON job_source_records (content_fingerprint);
CREATE INDEX IF NOT EXISTS idx_source_records_canonical_url ON job_source_records (canonical_source_url);

-- Audit Logs index
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON admin_audit_logs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON admin_audit_logs (actor_user_id);
