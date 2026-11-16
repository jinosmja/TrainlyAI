-- ==============================================================================
-- TrainlyAI — Migration 00002: Row-Level Security (RLS) & Access Control
-- Platform: Supabase PostgreSQL 15+
-- ==============================================================================

-- ==============================================================================
-- 1. Helper Security Functions (SECURITY DEFINER)
-- ==============================================================================

-- Check if current authenticated user is an active admin
CREATE OR REPLACE FUNCTION is_active_admin()
RETURNS BOOLEAN
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM admin_profiles
    WHERE user_id = auth.uid()
      AND is_active = true
  );
END;
$$;

-- Check if current authenticated user is an owner or admin role
CREATE OR REPLACE FUNCTION is_owner_or_admin()
RETURNS BOOLEAN
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM admin_profiles
    WHERE user_id = auth.uid()
      AND is_active = true
      AND role IN ('owner', 'admin')
  );
END;
$$;

-- ==============================================================================
-- 2. Enable Row-Level Security on All Core Tables
-- ==============================================================================

ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_source_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_click_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE automation_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_submissions ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- 3. Row-Level Security Policies
-- ==============================================================================

-- 3.1 Platforms Table
-- Public: Read active platforms only
CREATE POLICY "Public can view active platforms"
  ON platforms
  FOR SELECT
  TO public
  USING (is_active = true);

-- Admin: Full management
CREATE POLICY "Admins have full access to platforms"
  ON platforms
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

-- 3.2 Job Categories Table
-- Public: Read active categories only
CREATE POLICY "Public can view active categories"
  ON job_categories
  FOR SELECT
  TO public
  USING (is_active = true);

-- Admin: Full management
CREATE POLICY "Admins have full access to job categories"
  ON job_categories
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

-- 3.3 Jobs Table
-- Public: Read approved and published listings only
CREATE POLICY "Public can view published approved jobs"
  ON jobs
  FOR SELECT
  TO public
  USING (
    status = 'approved'
    AND published_at IS NOT NULL
    AND published_at <= NOW()
  );

-- Admin: Full management
CREATE POLICY "Admins have full access to jobs"
  ON jobs
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

-- 3.4 Job Sources Table
-- Public: No access (Sources & internal endpoints are strictly private)
-- Admin: Full management
CREATE POLICY "Admins have full access to job sources"
  ON job_sources
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

-- 3.5 Job Source Records Table
-- Public: No access (Raw ingestion feeds & fingerprints are private)
-- Admin: Full management
CREATE POLICY "Admins have full access to job source records"
  ON job_source_records
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

-- 3.6 Job Status History Table
-- Public: No access
-- Admin: Read and insert history entries
CREATE POLICY "Admins can view job status history"
  ON job_status_history
  FOR SELECT
  TO authenticated
  USING (is_active_admin());

CREATE POLICY "Admins can insert job status history"
  ON job_status_history
  FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

-- 3.7 Referral Click Events Table
-- Public: Insertion only (via backend API / internal router)
CREATE POLICY "Allow logging referral click events"
  ON referral_click_events
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Admin: Read telemetry events
CREATE POLICY "Admins can view referral click analytics"
  ON referral_click_events
  FOR SELECT
  TO authenticated
  USING (is_active_admin());

-- 3.8 Admin Profiles Table
-- Admin: View all profiles
CREATE POLICY "Admins can view admin profiles"
  ON admin_profiles
  FOR SELECT
  TO authenticated
  USING (is_active_admin());

-- Owner/Admin: Manage profiles
CREATE POLICY "Owners and Admins can manage admin profiles"
  ON admin_profiles
  FOR ALL
  TO authenticated
  USING (is_owner_or_admin())
  WITH CHECK (is_owner_or_admin());

-- 3.9 Admin Audit Logs Table
-- Admin: Read-only access to audit trail
CREATE POLICY "Admins can view audit logs"
  ON admin_audit_logs
  FOR SELECT
  TO authenticated
  USING (is_active_admin());

-- Admin: Append-only insert (mutations blocked by trigger)
CREATE POLICY "Admins can insert audit logs"
  ON admin_audit_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

-- 3.10 Automation Runs Table
-- Public: No access
-- Admin: View and record automation workflows
CREATE POLICY "Admins have full access to automation runs"
  ON automation_runs
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

-- 3.11 Public Job Submissions Table
-- Public: Can submit opportunity suggestions
CREATE POLICY "Public can submit job suggestions"
  ON job_submissions
  FOR INSERT
  TO public
  WITH CHECK (status = 'pending');

-- Admin: Review and manage submissions
CREATE POLICY "Admins can manage job submissions"
  ON job_submissions
  FOR ALL
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());
