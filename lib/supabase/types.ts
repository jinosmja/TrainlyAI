/**
 * TrainlyAI — Supabase Database Types
 * Generated from Schema Migrations 00001 - 00003
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type JobStatus =
  | 'draft'
  | 'pending_review'
  | 'approved'
  | 'rejected'
  | 'closed'
  | 'expired'
  | 'archived';

export type VerificationStatus =
  | 'unverified'
  | 'needs_review'
  | 'verified'
  | 'disputed';

export type CountryEligibilityType =
  | 'worldwide'
  | 'selected_countries'
  | 'not_confirmed'
  | 'restricted';

export type WorkArrangement = 'remote' | 'hybrid' | 'onsite' | 'unknown';

export type PayPeriod =
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'
  | 'task'
  | 'fixed'
  | 'unknown';

export type ReferralProgramStatus =
  | 'unknown'
  | 'active'
  | 'inactive'
  | 'not_applicable';

export type SourceType =
  | 'official_api'
  | 'rss'
  | 'authorized_feed'
  | 'email_alert'
  | 'permitted_public_page'
  | 'manual';

export type TermsReviewStatus =
  | 'not_reviewed'
  | 'approved'
  | 'prohibited'
  | 'needs_legal_review';

export type AdminRole = 'owner' | 'admin' | 'editor' | 'reviewer';

export type AutomationStatus =
  | 'running'
  | 'success'
  | 'partial_success'
  | 'failed';

export type SubmissionStatus =
  | 'pending'
  | 'reviewed'
  | 'accepted'
  | 'rejected';

export interface Database {
  public: {
    Tables: {
      platforms: {
        Row: {
          id: string;
          name: string;
          slug: string;
          website_url: string;
          logo_url: string | null;
          description: string | null;
          is_active: boolean;
          default_referral_url: string | null;
          allowed_domains: string[];
          referral_program_status: ReferralProgramStatus;
          referral_terms_checked_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          website_url: string;
          logo_url?: string | null;
          description?: string | null;
          is_active?: boolean;
          default_referral_url?: string | null;
          allowed_domains?: string[];
          referral_program_status?: ReferralProgramStatus;
          referral_terms_checked_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          website_url?: string;
          logo_url?: string | null;
          description?: string | null;
          is_active?: boolean;
          default_referral_url?: string | null;
          allowed_domains?: string[];
          referral_program_status?: ReferralProgramStatus;
          referral_terms_checked_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      job_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon_name: string | null;
          parent_id: string | null;
          is_active: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          icon_name?: string | null;
          parent_id?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          icon_name?: string | null;
          parent_id?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      jobs: {
        Row: {
          id: string;
          platform_id: string;
          category_id: string | null;
          title: string;
          slug: string;
          summary: string | null;
          description: string;
          employment_type: string;
          work_arrangement: WorkArrangement;
          pay_min: number | null;
          pay_max: number | null;
          pay_currency: string | null;
          pay_period: PayPeriod;
          country_eligibility_type: CountryEligibilityType;
          eligible_country_codes: string[];
          excluded_country_codes: string[];
          eligible_region_codes: string[];
          eligibility_evidence: string | null;
          required_skills: string[];
          required_languages: Json;
          experience_level: string | null;
          weekly_hours_min: number | null;
          weekly_hours_max: number | null;
          equipment_requirements: string | null;
          application_instructions: string | null;
          source_job_id: string | null;
          source_url: string;
          referral_url_override: string | null;
          source_posted_at: string | null;
          discovered_at: string;
          last_checked_at: string | null;
          last_verified_at: string | null;
          expires_at: string | null;
          status: JobStatus;
          verification_status: VerificationStatus;
          is_featured: boolean;
          published_at: string | null;
          approved_by: string | null;
          approved_at: string | null;
          rejection_reason: string | null;
          created_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          platform_id: string;
          category_id?: string | null;
          title: string;
          slug: string;
          summary?: string | null;
          description: string;
          employment_type?: string;
          work_arrangement?: WorkArrangement;
          pay_min?: number | null;
          pay_max?: number | null;
          pay_currency?: string | null;
          pay_period?: PayPeriod;
          country_eligibility_type?: CountryEligibilityType;
          eligible_country_codes?: string[];
          excluded_country_codes?: string[];
          eligible_region_codes?: string[];
          eligibility_evidence?: string | null;
          required_skills?: string[];
          required_languages?: Json;
          experience_level?: string | null;
          weekly_hours_min?: number | null;
          weekly_hours_max?: number | null;
          equipment_requirements?: string | null;
          application_instructions?: string | null;
          source_job_id?: string | null;
          source_url: string;
          referral_url_override?: string | null;
          source_posted_at?: string | null;
          discovered_at?: string;
          last_checked_at?: string | null;
          last_verified_at?: string | null;
          expires_at?: string | null;
          status?: JobStatus;
          verification_status?: VerificationStatus;
          is_featured?: boolean;
          published_at?: string | null;
          approved_by?: string | null;
          approved_at?: string | null;
          rejection_reason?: string | null;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          platform_id?: string;
          category_id?: string | null;
          title?: string;
          slug?: string;
          summary?: string | null;
          description?: string;
          employment_type?: string;
          work_arrangement?: WorkArrangement;
          pay_min?: number | null;
          pay_max?: number | null;
          pay_currency?: string | null;
          pay_period?: PayPeriod;
          country_eligibility_type?: CountryEligibilityType;
          eligible_country_codes?: string[];
          excluded_country_codes?: string[];
          eligible_region_codes?: string[];
          eligibility_evidence?: string | null;
          required_skills?: string[];
          required_languages?: Json;
          experience_level?: string | null;
          weekly_hours_min?: number | null;
          weekly_hours_max?: number | null;
          equipment_requirements?: string | null;
          application_instructions?: string | null;
          source_job_id?: string | null;
          source_url?: string;
          referral_url_override?: string | null;
          source_posted_at?: string | null;
          discovered_at?: string;
          last_checked_at?: string | null;
          last_verified_at?: string | null;
          expires_at?: string | null;
          status?: JobStatus;
          verification_status?: VerificationStatus;
          is_featured?: boolean;
          published_at?: string | null;
          approved_by?: string | null;
          approved_at?: string | null;
          rejection_reason?: string | null;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      job_sources: {
        Row: {
          id: string;
          platform_id: string;
          name: string;
          source_type: SourceType;
          endpoint_or_reference: string | null;
          is_enabled: boolean;
          poll_interval_minutes: number;
          last_success_at: string | null;
          last_attempt_at: string | null;
          last_error: string | null;
          terms_review_status: TermsReviewStatus;
          terms_reviewed_at: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          platform_id: string;
          name: string;
          source_type?: SourceType;
          endpoint_or_reference?: string | null;
          is_enabled?: boolean;
          poll_interval_minutes?: number;
          last_success_at?: string | null;
          last_attempt_at?: string | null;
          last_error?: string | null;
          terms_review_status?: TermsReviewStatus;
          terms_reviewed_at?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          platform_id?: string;
          name?: string;
          source_type?: SourceType;
          endpoint_or_reference?: string | null;
          is_enabled?: boolean;
          poll_interval_minutes?: number;
          last_success_at?: string | null;
          last_attempt_at?: string | null;
          last_error?: string | null;
          terms_review_status?: TermsReviewStatus;
          terms_reviewed_at?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      job_source_records: {
        Row: {
          id: string;
          source_id: string;
          job_id: string | null;
          external_id: string | null;
          canonical_source_url: string;
          content_fingerprint: string;
          raw_payload: Json | null;
          first_seen_at: string;
          last_seen_at: string;
          last_fetched_at: string;
          source_status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          source_id: string;
          job_id?: string | null;
          external_id?: string | null;
          canonical_source_url: string;
          content_fingerprint: string;
          raw_payload?: Json | null;
          first_seen_at?: string;
          last_seen_at?: string;
          last_fetched_at?: string;
          source_status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          source_id?: string;
          job_id?: string | null;
          external_id?: string | null;
          canonical_source_url?: string;
          content_fingerprint?: string;
          raw_payload?: Json | null;
          first_seen_at?: string;
          last_seen_at?: string;
          last_fetched_at?: string;
          source_status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      job_status_history: {
        Row: {
          id: string;
          job_id: string;
          old_status: JobStatus | null;
          new_status: JobStatus;
          reason: string | null;
          changed_by: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          job_id: string;
          old_status?: JobStatus | null;
          new_status: JobStatus;
          reason?: string | null;
          changed_by?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          job_id?: string;
          old_status?: JobStatus | null;
          new_status?: JobStatus;
          reason?: string | null;
          changed_by?: string | null;
          created_at?: string;
        };
      };
      referral_click_events: {
        Row: {
          id: string;
          job_id: string;
          platform_id: string;
          clicked_at: string;
          referral_destination_version: string | null;
          anonymous_session_id: string | null;
          country_code: string | null;
          referrer_domain: string | null;
          user_agent_family: string | null;
          bot_flag: boolean;
        };
        Insert: {
          id?: string;
          job_id: string;
          platform_id: string;
          clicked_at?: string;
          referral_destination_version?: string | null;
          anonymous_session_id?: string | null;
          country_code?: string | null;
          referrer_domain?: string | null;
          user_agent_family?: string | null;
          bot_flag?: boolean;
        };
        Update: {
          id?: string;
          job_id?: string;
          platform_id?: string;
          clicked_at?: string;
          referral_destination_version?: string | null;
          anonymous_session_id?: string | null;
          country_code?: string | null;
          referrer_domain?: string | null;
          user_agent_family?: string | null;
          bot_flag?: boolean;
        };
      };
      admin_profiles: {
        Row: {
          user_id: string;
          display_name: string;
          role: AdminRole;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          display_name: string;
          role?: AdminRole;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          display_name?: string;
          role?: AdminRole;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_audit_logs: {
        Row: {
          id: string;
          actor_user_id: string | null;
          action: string;
          entity_type: string;
          entity_id: string;
          before_data: Json | null;
          after_data: Json | null;
          reason: string | null;
          ip_address_masked: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          actor_user_id?: string | null;
          action: string;
          entity_type: string;
          entity_id: string;
          before_data?: Json | null;
          after_data?: Json | null;
          reason?: string | null;
          ip_address_masked?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          actor_user_id?: string | null;
          action?: string;
          entity_type?: string;
          entity_id?: string;
          before_data?: Json | null;
          after_data?: Json | null;
          reason?: string | null;
          ip_address_masked?: string | null;
          created_at?: string;
        };
      };
      automation_runs: {
        Row: {
          id: string;
          source_id: string | null;
          workflow_name: string;
          started_at: string;
          finished_at: string | null;
          status: AutomationStatus;
          items_found: number;
          items_created: number;
          items_updated: number;
          items_skipped: number;
          error_summary: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          source_id?: string | null;
          workflow_name: string;
          started_at?: string;
          finished_at?: string | null;
          status?: AutomationStatus;
          items_found?: number;
          items_created?: number;
          items_updated?: number;
          items_skipped?: number;
          error_summary?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          source_id?: string | null;
          workflow_name?: string;
          started_at?: string;
          finished_at?: string | null;
          status?: AutomationStatus;
          items_found?: number;
          items_created?: number;
          items_updated?: number;
          items_skipped?: number;
          error_summary?: string | null;
          created_at?: string;
        };
      };
      job_submissions: {
        Row: {
          id: string;
          submitter_email: string | null;
          suggested_source_url: string;
          suggested_title: string | null;
          message: string | null;
          status: SubmissionStatus;
          reviewed_by: string | null;
          reviewed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          submitter_email?: string | null;
          suggested_source_url: string;
          suggested_title?: string | null;
          message?: string | null;
          status?: SubmissionStatus;
          reviewed_by?: string | null;
          reviewed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          submitter_email?: string | null;
          suggested_source_url?: string;
          suggested_title?: string | null;
          message?: string | null;
          status?: SubmissionStatus;
          reviewed_by?: string | null;
          reviewed_at?: string | null;
          created_at?: string;
        };
      };
    };
    Views: {
      public_jobs: {
        Row: {
          id: string;
          platform_id: string;
          platform_name: string;
          platform_slug: string;
          platform_logo_url: string | null;
          category_id: string | null;
          category_name: string | null;
          category_slug: string | null;
          title: string;
          slug: string;
          summary: string | null;
          description: string;
          employment_type: string;
          work_arrangement: WorkArrangement;
          pay_min: number | null;
          pay_max: number | null;
          pay_currency: string | null;
          pay_period: PayPeriod;
          country_eligibility_type: CountryEligibilityType;
          eligible_country_codes: string[];
          excluded_country_codes: string[];
          eligible_region_codes: string[];
          eligibility_evidence: string | null;
          required_skills: string[];
          required_languages: Json;
          experience_level: string | null;
          weekly_hours_min: number | null;
          weekly_hours_max: number | null;
          equipment_requirements: string | null;
          application_instructions: string | null;
          source_posted_at: string | null;
          discovered_at: string;
          last_verified_at: string | null;
          is_featured: boolean;
          published_at: string;
          created_at: string;
          updated_at: string;
        };
      };
      public_platforms: {
        Row: {
          id: string;
          name: string;
          slug: string;
          website_url: string;
          logo_url: string | null;
          description: string | null;
          is_active: boolean;
          created_at: string;
        };
      };
    };
    Functions: {
      is_active_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      is_owner_or_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      resolve_referral_destination: {
        Args: { target_job_slug: string };
        Returns: {
          job_id: string;
          platform_id: string;
          platform_name: string;
          destination_url: string | null;
          allowed_domains: string[];
          is_valid_destination: boolean;
        }[];
      };
    };
  };
}
