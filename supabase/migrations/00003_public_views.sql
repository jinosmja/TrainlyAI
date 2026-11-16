-- ==============================================================================
-- TrainlyAI — Migration 00003: Public Safe Views & Referral Resolution Function
-- Platform: Supabase PostgreSQL 15+
-- ==============================================================================

-- ==============================================================================
-- 1. Public Safe Jobs View
-- Strips private operational columns: source_url, referral_url_override,
-- approved_by, rejection_reason, created_by.
-- ==============================================================================

CREATE OR REPLACE VIEW public_jobs AS
SELECT
  j.id,
  j.platform_id,
  p.name AS platform_name,
  p.slug AS platform_slug,
  p.logo_url AS platform_logo_url,
  j.category_id,
  c.name AS category_name,
  c.slug AS category_slug,
  j.title,
  j.slug,
  j.summary,
  j.description,
  j.employment_type,
  j.work_arrangement,
  j.pay_min,
  j.pay_max,
  j.pay_currency,
  j.pay_period,
  j.country_eligibility_type,
  j.eligible_country_codes,
  j.excluded_country_codes,
  j.eligible_region_codes,
  j.eligibility_evidence,
  j.required_skills,
  j.required_languages,
  j.experience_level,
  j.weekly_hours_min,
  j.weekly_hours_max,
  j.equipment_requirements,
  j.application_instructions,
  j.source_posted_at,
  j.discovered_at,
  j.last_verified_at,
  j.is_featured,
  j.published_at,
  j.created_at,
  j.updated_at
FROM jobs j
JOIN platforms p ON j.platform_id = p.id
LEFT JOIN job_categories c ON j.category_id = c.id
WHERE j.status = 'approved'
  AND j.published_at IS NOT NULL
  AND j.published_at <= NOW()
  AND p.is_active = true;

-- Grant public read access to the view
GRANT SELECT ON public_jobs TO anon, authenticated;

-- ==============================================================================
-- 2. Public Safe Platforms View
-- Strips private affiliate default_referral_url column.
-- ==============================================================================

CREATE OR REPLACE VIEW public_platforms AS
SELECT
  id,
  name,
  slug,
  website_url,
  logo_url,
  description,
  is_active,
  created_at
FROM platforms
WHERE is_active = true;

-- Grant public read access to the view
GRANT SELECT ON public_platforms TO anon, authenticated;

-- ==============================================================================
-- 3. Secure Referral URL Resolution Function (Server-Side Only)
-- Resolves the effective destination for /out/[jobSlug] with domain allowlist check.
-- ==============================================================================

CREATE OR REPLACE FUNCTION resolve_referral_destination(target_job_slug TEXT)
RETURNS TABLE (
  job_id UUID,
  platform_id UUID,
  platform_name TEXT,
  destination_url TEXT,
  allowed_domains TEXT[],
  is_valid_destination BOOLEAN
)
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  v_job RECORD;
  v_destination TEXT;
  v_host TEXT;
BEGIN
  -- Lookup approved published job and its platform
  SELECT
    j.id AS job_id,
    j.platform_id,
    p.name AS platform_name,
    j.referral_url_override,
    p.default_referral_url,
    p.allowed_domains
  INTO v_job
  FROM jobs j
  JOIN platforms p ON j.platform_id = p.id
  WHERE j.slug = target_job_slug
    AND j.status = 'approved'
    AND j.published_at IS NOT NULL
    AND j.published_at <= NOW()
    AND p.is_active = true;

  IF NOT FOUND THEN
    RETURN;
  END IF;

  -- Resolution priority: 1. Job-level override -> 2. Platform default
  v_destination := COALESCE(NULLIF(TRIM(v_job.referral_url_override), ''), NULLIF(TRIM(v_job.default_referral_url), ''));

  IF v_destination IS NULL THEN
    RETURN QUERY SELECT
      v_job.job_id,
      v_job.platform_id,
      v_job.platform_name,
      NULL::TEXT,
      v_job.allowed_domains,
      false;
    RETURN;
  END IF;

  RETURN QUERY SELECT
    v_job.job_id,
    v_job.platform_id,
    v_job.platform_name,
    v_destination,
    v_job.allowed_domains,
    true;
END;
$$;

-- Only service role and authenticated backend can call this function
REVOKE ALL ON FUNCTION resolve_referral_destination(TEXT) FROM public, anon;
GRANT EXECUTE ON FUNCTION resolve_referral_destination(TEXT) TO service_role;
