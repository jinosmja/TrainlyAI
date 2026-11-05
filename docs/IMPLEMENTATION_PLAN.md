# TrainlyAI — Implementation Plan

This document tracks the phase-by-phase execution of the **TrainlyAI** platform. Each phase represents a self-contained, verifiable milestone.

---

## Phase Summary Status

| Phase | Title | Status |
|---|---|---|
| **Phase 0** | Repository Inspection & Project Planning | Completed |
| **Phase 1** | App Scaffold & Design System | Completed |
| **Phase 2** | Supabase Database, Migrations & Security Foundation | Ready to Start |
| **Phase 3** | Public Homepage & Job Browsing | Pending |
| **Phase 4** | Admin Authentication & Authorization | Pending |
| **Phase 5** | Manual Job Management & Approval Workflow | Pending |
| **Phase 6** | Platform & Referral Management | Pending |
| **Phase 7** | Referral Redirect & Click Analytics | Pending |
| **Phase 8** | Automation Framework & Source Connector Interface | Pending |
| **Phase 9** | First Authorized Source Integration | Pending |
| **Phase 10** | Duplicate Detection, Enrichment & Status Refresh | Pending |
| **Phase 11** | Email Notifications & Operational Reporting | Pending |
| **Phase 12** | SEO, Accessibility, Performance & Legal/Trust Pages | Pending |
| **Phase 13** | Full QA, Staging & Production Launch | Pending |
| **Phase 14** | Post-Launch Enhancements | Pending |

---

## Detailed Phase Breakdown

### [x] Phase 0: Repository Inspection & Project Planning
- [x] Inspect existing repository files, git status, and environment.
- [x] Identify package manager (`npm` installed, Node v25.2.1) and check for existing framework code.
- [x] Check for existing Supabase setup and environment configuration.
- [x] Create `docs/PRODUCT_SPEC.md` incorporating the TrainlyAI brand, tagline, and requirements.
- [x] Create `docs/IMPLEMENTATION_PLAN.md` with complete phase checklist.
- [x] Create `docs/DECISIONS.md` documenting core architectural decisions.
- [x] Create `docs/CREDENTIALS_AND_EXTERNAL_SETUP.md` detailing external requirements and blockers.
- [x] Confirm Phase 0 sign-off and prepare for Phase 1.

### [x] Phase 1: App Scaffold & Design System
- [x] Initialize Next.js 15+ App Router with TypeScript and Tailwind CSS.
- [x] Install and configure UI primitives (`shadcn/ui`, `radix-ui`, `lucide-react`, `class-variance-authority`).
- [x] Configure TrainlyAI branding, typography, color palette, and design tokens.
- [x] Build shared shell components: Header/Navbar, Footer, Container, Button, Card, Badge, Input, Skeleton.
- [x] Build responsive shell layout for desktop, tablet, and mobile (no horizontal overflow).
- [x] Create route placeholders: Public pages (`/`, `/jobs`, `/platforms`, `/categories`, `/about`, `/contact`, `/privacy`, `/terms`, `/referral-disclosure`) and Admin portal (`/admin/login`, `/admin`, `/admin/jobs`, `/admin/pending`, `/admin/platforms`, `/admin/sources`, `/admin/referrals`, `/admin/analytics`, `/admin/audit-logs`).
- [x] Implement internal `/out/[jobSlug]` redirect handler foundation with 307 temporary redirect.
- [x] Set up scripts in `package.json` (`dev`, `build`, `start`, `lint`, `typecheck`).
- [x] Create `.env.example` and standard `.gitignore`.
- [x] Verify clean build and typecheck with zero errors.

### [ ] Phase 2: Supabase Database, Migrations & Security Foundation
- [ ] Create initial SQL migrations for all core tables:
  - `platforms`
  - `job_categories`
  - `jobs`
  - `job_sources`
  - `job_source_records`
  - `job_status_history`
  - `referral_click_events`
  - `admin_profiles`
  - `admin_audit_logs`
  - `automation_runs`
- [ ] Add check constraints, foreign keys, and indexes for query performance.
- [ ] Enable PostgreSQL Row-Level Security (RLS) on all tables with strict policies.
- [ ] Create public views or restricted query helpers for approved, published jobs only.
- [ ] Configure Supabase client helpers (browser client, server-component client, route-handler client, privileged admin client).
- [ ] Create TypeScript database definitions (`lib/supabase/types.ts`).
- [ ] Create realistic seed data script (`supabase/seed.sql`) clearly marked as development seed data.
- [ ] Document database setup and migration workflow.

### [ ] Phase 3: Public Homepage & Job Browsing
- [ ] Implement TrainlyAI Homepage (`/`):
  - Hero with global value proposition & search
  - Popular job categories
  - Latest verified AI training & evaluation opportunities
  - Featured platforms
  - "How It Works" & "Verification & Trust" modules
  - Newsletter / Job alert placeholder
- [ ] Implement `/jobs` catalog:
  - Keyword search (title, skills, language, platform)
  - Faceted filters (category, platform, country eligibility, work arrangement, pay type, currency)
  - URL query state synchronization
  - Pagination and sorting (newest, recently verified, compensation)
  - Clear filter reset
- [ ] Implement Job Card component:
  - Role title, platform logo/fallback, compensation range, pay period, country eligibility badge, verification badge.
- [ ] Implement Job Detail page (`/jobs/[slug]`):
  - Comprehensive job details, eligibility verification details, workload, required skills and languages.
  - Exactly one primary **Apply Now** button routing to `/out/[jobSlug]`.
  - Transparent affiliate/referral disclosure.
- [ ] Implement Platform directory (`/platforms`) and detail pages (`/platforms/[slug]`).
- [ ] Implement Category directory (`/categories`) and detail pages (`/categories/[slug]`).
- [ ] Handle empty states, loading skeletons, and error boundaries.

### [ ] Phase 4: Admin Authentication & Authorization
- [ ] Implement secure Admin Login (`/admin/login`) with Supabase Auth.
- [ ] Implement session handling, sign-out, and protected layout (`/admin/layout.tsx`).
- [ ] Enforce role-based access control (`owner`, `admin`, `editor`, `reviewer`) with server-side middleware and RLS checks.
- [ ] Create custom Unauthorized (401) and Forbidden (403) states.
- [ ] Build admin user profile management and password reset flows.
- [ ] Ensure public registration is strictly disabled.

### [ ] Phase 5: Manual Job Management & Approval Workflow
- [ ] Build All-Jobs management table with status filtering (`draft`, `pending_review`, `approved`, `rejected`, `closed`, `expired`).
- [ ] Build Add Job form (`/admin/jobs/new`) with comprehensive validation (Zod + React Hook Form).
- [ ] Build Edit Job form (`/admin/jobs/[id]/edit`) with status transition safeguards and audit trails.
- [ ] Build Pending Review Queue (`/admin/pending`) displaying evidence, duplicate warnings, and source details.
- [ ] Build side-by-side or modal Public Preview before publishing.
- [ ] Implement publication gate: Validate valid referral destination and required metadata before approval.
- [ ] Implement reject (with mandatory reason), close, and archive actions.
- [ ] Log all actions to `admin_audit_logs`.

### [ ] Phase 6: Platform & Referral Management
- [ ] Build Platform management UI (`/admin/platforms`) for CRUD operations.
- [ ] Configure default referral URLs, allowed destination domains, and referral terms review dates.
- [ ] Support job-level referral URL overrides.
- [ ] Implement server-side referral URL validation (HTTPS only, domain allowlist match, open redirect defense).
- [ ] Add safe URL testing and masking of private affiliate tokens in the UI.
- [ ] Implement platform activation/deactivation without breaking historical records.
- [ ] Audit-log all referral URL updates.

### [ ] Phase 7: Referral Redirect & Click Analytics
- [ ] Implement internal redirect route `/out/[jobSlug]`:
  - Validate slug and verify job is published and active.
  - Resolve referral destination (job override -> platform default).
  - Validate destination against platform's approved domain list.
  - Log click event into `referral_click_events` (anonymous hash, timestamp, platform ID, job ID).
  - Issue temporary redirect (`302/307`).
  - Fall back to a helpful, safe error screen if unavailable (no raw source links exposed).
- [ ] Build Admin Analytics dashboard (`/admin/analytics`):
  - Total referral clicks, clicks by platform, clicks by job, trends over time.
  - Clearly labelled as **Referral clicks** (not applications or hires).
- [ ] Ensure public pages disclose referral relationships.

### [ ] Phase 8: Automation Framework & Source Connector Interface
- [ ] Set up Inngest client and API route handler.
- [ ] Define standardized `JobSourceAdapter` interface:
  - `discoverJobs()`, `fetchJobStatus()`, `validateConfiguration()`.
- [ ] Build Source Management interface (`/admin/sources`):
  - Connector configuration, terms review gate, poll intervals, manual "Run Now" trigger.
- [ ] Implement ingestion pipeline safeguards:
  - Rate limiting, concurrency locks, exponential backoff, sanitization.
  - Forced `pending_review` status for all ingested jobs.
- [ ] Build fixture-based test connector for safe offline verification.
- [ ] Build automation run logging and error alerting.

### [ ] Phase 9: First Authorized Source Integration
- [ ] Select initial authorized platform/source with verified permission.
- [ ] Document collection permissions, terms review, and approved feed/API.
- [ ] Implement dedicated connector module and canonical schema mapping.
- [ ] Test with fixture data and verify duplicate detection idempotency.
- [ ] Verify that new records land strictly in `pending_review`.
- [ ] Verify error handling and ensure failures do not falsely mark jobs closed.

### [ ] Phase 10: Duplicate Detection, Enrichment & Status Refresh
- [ ] Implement multi-signal duplicate detection:
  - Exact match (external ID, canonical source URL).
  - Probable match (normalized title, description similarity, same platform).
- [ ] Build Duplicate Review & Resolution UI in admin moderation queue.
- [ ] Implement scheduled job status refresh workflow to verify active listings.
- [ ] Implement expiration review workflow.
- [ ] Optional AI enrichment (category suggestion, skill extraction) strictly as review suggestions.

### [ ] Phase 11: Email Notifications & Operational Reporting
- [ ] Integrate Resend for administrative email alerts.
- [ ] Build email templates:
  - New pending jobs batch alert.
  - Connector failure / permission warning.
  - Weekly operational health summary.
- [ ] Add admin notification preferences.

### [ ] Phase 12: SEO, Accessibility, Performance & Legal/Trust Pages
- [ ] Implement dynamic SEO metadata, Open Graph cards, and canonical tags for public jobs.
- [ ] Implement dynamic XML sitemap (`/sitemap.xml`) including only active, published jobs.
- [ ] Configure `robots.txt` strictly excluding `/admin/*` and `/out/*`.
- [ ] Add valid JSON-LD `JobPosting` structured data for eligible approved listings.
- [ ] Author legal and trust pages: About, Contact, Privacy Policy, Terms of Service, Referral Disclosure.
- [ ] Conduct accessibility audit (keyboard navigation, ARIA attributes, contrast).
- [ ] Add rate limiting to public endpoints.

### [ ] Phase 13: Full QA, Staging & Production Launch
- [ ] End-to-end user journey tests with Playwright.
- [ ] Verify RLS isolation: anonymous users cannot read unapproved jobs or private fields.
- [ ] Verify referral redirect flow with mock referral domains.
- [ ] Prepare deployment runbook for Vercel and Supabase production projects.
- [ ] Final production build and configuration verification.

### [ ] Phase 14: Post-Launch Enhancements
- [ ] Implement job alert subscriptions.
- [ ] Add saved jobs functionality (local storage or user accounts).
- [ ] Expand authorized platform connectors.
