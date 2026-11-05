# Global AI Trainer Jobs Aggregator

## Product Requirements, Technical Architecture & Phase-by-Phase Implementation Guide

**Document type:** Product + engineering implementation specification\
**Version:** 1.0\
**Status:** Build specification for an AI coding agent\
**Primary implementation environment:** Google Antigravity (or another
repository-aware AI coding agent)\
**Target product:** A global job discovery and referral platform for AI
training, AI evaluation, data annotation, language, coding, and
subject-matter expert opportunities.

------------------------------------------------------------------------

# 0. Instructions to the AI Coding Agent

You are building a production-minded, responsive web application called
**AI Jobs Hub** (working name; keep the brand configurable).

Do not treat this as a static landing page or a simple list of links. It
is a global job aggregation product with:

1.  A public job discovery website.
2.  A secure admin portal.
3.  A job-source and platform management system.
4.  A controlled job discovery and refresh pipeline.
5.  A mandatory human review and approval workflow.
6.  A centralized referral-link system.
7.  Click tracking and operational analytics.
8.  Global country, region, currency, language, and remote-work support.

## Non-negotiable product rules

-   The product is **global from day one**. Do not prioritize Sri Lanka
    or any other country in the data model, UX, SEO, copy, defaults, or
    feature roadmap.
-   Every public job must have exactly one primary application action:
    **Apply Now**.
-   Every public application action must route through the site's
    internal redirect endpoint and then redirect to the correct platform
    referral URL.
-   Do not show a separate public "Original listing", "Official
    website", or direct-application button.
-   Keep the original source URL privately in the database and admin
    interface for verification, deduplication, and status checks.
-   All automatically discovered jobs enter a **Pending Review** state.
    Never publish automatically.
-   Only approved and published jobs may be visible in public job
    search, public job detail pages, sitemap, or public APIs.
-   Do not invent vacancies, salary amounts, country eligibility, work
    arrangements, application requirements, or referral terms.
-   Do not scrape, crawl behind login, bypass bot protection, defeat
    CAPTCHAs, or violate platform terms. Use only authorized APIs,
    feeds, partner integrations, permitted public sources, email alerts
    where authorized, or manual admin entry.
-   A remote job must not automatically be labelled worldwide. Country
    eligibility must be supported by evidence or marked **Not
    confirmed**.
-   A referral click is not a confirmed application, hire, or
    commission. Report only the events actually measured.
-   Protect credentials and personal information. Never expose
    service-role keys or secrets in client-side code.
-   Build in phases. At the end of every phase, run tests, fix issues,
    update documentation, and report what is complete before moving on.
-   Do not replace real backend functionality with mock data. Seed data
    may be used only in clearly labelled development/demo mode.

## Agent working protocol

Before coding: 1. Inspect the repository and identify existing code,
package manager, and conventions. 2. If the repository is empty,
scaffold the application using the stack below. 3. Create
`docs/PRODUCT_SPEC.md` from this document if it is not already present.
4. Create `docs/IMPLEMENTATION_PLAN.md` with checkboxes for all phases.
5. Create `docs/DECISIONS.md` and record significant architecture
decisions. 6. Present a concise architecture and phased plan. 7. Wait
for approval only if a decision requires credentials, paid services,
legal permission, or an irreversible action. Otherwise proceed phase by
phase.

For each phase: - State the goal and files/modules to be created or
changed. - Implement the smallest complete vertical slice. - Run
formatting, lint, type checks, tests, and build as appropriate. - Fix
all errors before marking the phase complete. - Update `.env.example`,
README, and docs when configuration changes. - Do not silently skip
requirements. Record blocked integrations and their reason.

------------------------------------------------------------------------

# 1. Product Vision and Scope

## 1.1 Product vision

Create one reliable global destination where people can discover
legitimate remote and location-specific AI-related work opportunities
from multiple companies and platforms.

The site aggregates opportunities such as: - AI trainer and AI tutor
roles. - AI model evaluator and response evaluator roles. - Data
annotation and data labelling tasks. - AI writing, editing, and research
tasks. - Coding and software engineering expert tasks. - Mathematics,
science, finance, law, medicine, and other subject-matter expert
opportunities. - Translation, transcription, language evaluation, and
bilingual expert tasks. - Image, audio, video, and data contribution
tasks. - Other relevant AI data and model-improvement opportunities.

Example platforms may include Mercor, Micro1, SME Careers, RWS, Outlier,
DataAnnotation, TELUS Digital AI, OneForma, and others. These names are
examples only. Do not assume a platform has an integration, referral
programme, open jobs, or permission to collect its listings until
verified.

## 1.2 Primary audiences

-   People looking for AI-related freelance, contract, part-time, or
    full-time opportunities.
-   Students, professionals, specialists, multilingual contributors, and
    remote workers worldwide.
-   Admins who curate and verify listings.
-   Future authorized editors/moderators who help manage content.

## 1.3 Product value

The product should help visitors: - Discover opportunities from multiple
platforms in one place. - Understand the work, skills, pay structure,
and requirements. - Check which countries or regions are eligible. -
Compare opportunities using consistent filters. - Apply through the
site's referral link for the relevant platform. - See when a listing was
last checked and whether its details are verified.

## 1.4 Out of scope for the first release

Do not build these unless explicitly requested later: - User accounts
for ordinary job seekers. - CV upload or CV parsing. - In-site job
applications. - A recruitment/ATS system. - Direct messaging between
candidates and employers. - Payments, subscriptions, or paid
memberships. - Automated application submission. - Claims of guaranteed
earnings or guaranteed selection. - Scraping systems that violate source
terms.

------------------------------------------------------------------------

# 2. Core User Journeys

## 2.1 Visitor discovers and applies for a job

1.  Visitor opens the homepage.
2.  Visitor searches by keyword or applies filters.
3.  Visitor opens a public job detail page.
4.  Visitor reviews the description, requirements, pay information,
    eligibility, and verification metadata.
5.  Visitor clicks **Apply Now**.
6.  Browser requests the internal endpoint `/out/[jobSlug]`.
7.  Server validates that the job is published and has an active
    referral destination.
8.  Server records a click event, using privacy-conscious tracking.
9.  Server redirects to the configured referral URL.
10. The external platform handles registration and application.

There must be no public direct-application link that bypasses the
referral URL.

## 2.2 Admin manually adds a job

1.  Admin signs in.
2.  Admin opens Job Management and selects Add Job.
3.  Admin enters the source URL, title, platform, description,
    compensation, work arrangement, requirements, country eligibility,
    and referral destination.
4.  System validates required fields and checks possible duplicates.
5.  Admin saves as Draft or submits for review.
6.  Admin reviews the public preview.
7.  Admin approves and publishes.
8.  Job becomes visible publicly and is included in the sitemap.

## 2.3 Automated source discovers a job

1.  Scheduled source connector runs.
2.  Connector fetches data using an authorized method.
3.  Raw source response and fetch metadata are logged where permitted.
4.  Parser maps fields into the canonical job format.
5.  System validates required fields.
6.  System attempts duplicate matching.
7.  New or materially changed records enter Pending Review.
8.  Admin receives a notification.
9.  Admin checks source, eligibility, compensation, job status, and
    referral destination.
10. Admin approves, edits, rejects, or marks as duplicate.
11. Only approved records can be published.

## 2.4 Existing job is rechecked

1.  Scheduled refresh process checks active published jobs using an
    authorized source method.
2.  Source status is classified as Active, Closed, Expired, Unavailable,
    or Unknown.
3.  System records `last_checked_at`, source response, and confidence.
4.  A confirmed closure creates a review item or changes status
    according to the configured policy.
5.  An inaccessible source must not automatically mean the job is
    closed.
6.  Admin can review uncertain cases.
7.  Closed/expired jobs are removed from default active search but
    retained historically.

------------------------------------------------------------------------

# 3. Technology Stack

Use a single TypeScript-based application unless a documented technical
reason requires otherwise.

## 3.1 Core stack

  -----------------------------------------------------------------------
  Layer                   Technology              Responsibility
  ----------------------- ----------------------- -----------------------
  Web framework           Next.js App Router      Public site, admin UI,
                                                  server routes, SEO

  Language                TypeScript              Shared type safety

  UI styling              Tailwind CSS            Responsive styling

  Component system        shadcn/ui + Radix UI    Accessible UI
                                                  components

  Icons                   Lucide React            Consistent icons

  Database                Supabase PostgreSQL     Jobs, platforms, users,
                                                  logs, analytics

  Authentication          Supabase Auth           Admin sign-in and
                                                  sessions

  Authorization           PostgreSQL RLS + server Protect admin and
                          checks                  private data

  Background workflows    Inngest                 Scheduled discovery,
                                                  retries, refresh jobs

  Email                   Resend                  Admin notifications and
                                                  operational emails

  Hosting                 Vercel Pro for          Next.js deployment
                          commercial production   

  Source control          GitHub                  Repository and
                                                  deployment workflow

  Validation              Zod                     Request and form
                                                  validation

  Forms                   React Hook Form + Zod   Admin forms

  Date/time               date-fns                Date formatting and
                                                  calculations

  Testing                 Vitest + Playwright     Unit, integration, and
                                                  browser tests

  Error monitoring        Sentry (optional)       Runtime error reporting

  Analytics               Privacy-conscious       Site usage and
                          first-party events; GA4 acquisition
                          optional                

  AI enrichment           Optional model API      Classification and
                          behind an abstraction   duplicate suggestions
                                                  only
  -----------------------------------------------------------------------

Use current stable, mutually compatible versions at project creation.
Pin dependencies and commit the lockfile. Do not blindly upgrade major
versions during implementation.

## 3.2 Why this stack

-   Next.js supports public SEO pages and protected admin routes in one
    project.
-   Supabase provides PostgreSQL, authentication, and row-level security
    without operating a separate database server.
-   Inngest provides scheduled and retryable background workflows.
-   Vercel simplifies deployment for Next.js.
-   TypeScript makes it easier for an AI coding agent to maintain shared
    models across UI, API, and automation.
-   shadcn/ui gives editable components rather than a rigid hosted page
    builder.

## 3.3 Architecture overview

``` text
                         VISITORS
                            |
                            v
                 Next.js Public Website
                 - Home / Search / Filters
                 - Job Detail Pages
                 - Platform / Category Pages
                            |
             +--------------+----------------+
             |                               |
             v                               v
     Supabase Public Queries           /out/[jobSlug]
     Approved Jobs Only                      |
                                             v
                                     Server-side validation
                                             |
                                             v
                                      Click event record
                                             |
                                             v
                                    Referral URL resolution
                                             |
                                             v
                                   External platform referral


                           ADMINS
                             |
                             v
                    Next.js Admin Portal
                    - Authentication
                    - Job moderation
                    - Platform management
                    - Source management
                    - Analytics and logs
                             |
                             v
                       Supabase
                 PostgreSQL + Auth + RLS
                             ^
                             |
                       Inngest workflows
                 - Scheduled discovery
                 - Job normalization
                 - Duplicate detection
                 - Status refresh
                 - Notifications
                             |
                             v
                    Authorized source adapters
                 - Official API / approved feed
                 - Permitted public source
                 - Authorized email alert
                 - Manual admin entry
```

## 3.4 Application folder structure

Use a maintainable structure similar to:

``` text
ai-jobs-hub/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── platforms/
│   │   ├── categories/
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── privacy/page.tsx
│   ├── admin/
│   │   ├── login/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── jobs/
│   │   ├── pending/
│   │   ├── platforms/
│   │   ├── sources/
│   │   ├── automation/
│   │   ├── analytics/
│   │   ├── users/
│   │   └── settings/
│   ├── out/[jobSlug]/route.ts
│   ├── api/
│   │   ├── jobs/
│   │   ├── admin/
│   │   └── webhooks/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
├── components/
│   ├── public/
│   ├── admin/
│   ├── jobs/
│   ├── filters/
│   └── ui/
├── lib/
│   ├── supabase/
│   ├── auth/
│   ├── validation/
│   ├── referral/
│   ├── jobs/
│   ├── permissions/
│   └── utils/
├── features/
│   ├── jobs/
│   ├── platforms/
│   ├── sources/
│   ├── moderation/
│   ├── analytics/
│   └── automation/
├── inngest/
│   ├── client.ts
│   ├── functions/
│   └── adapters/
├── supabase/
│   ├── migrations/
│   ├── seed.sql
│   └── config.toml
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── public/
├── .env.example
├── README.md
└── package.json
```

This is a suggested structure. Keep it coherent and avoid unnecessary
abstraction for a small initial release.

------------------------------------------------------------------------

# 4. Global Product and UX Requirements

## 4.1 Brand and visual direction

Build a polished, professional, modern job discovery product. The design
should feel trustworthy and editorial, not like a generic admin
template.

Design principles: - Mobile-first and fully responsive. - Clear
typography and strong visual hierarchy. - Neutral background with one
consistent accent color. - High contrast and accessible controls. -
Clean cards and readable job descriptions. - Subtle animation only where
useful. - Consistent spacing, borders, radii, and icon sizing. - Good
empty, loading, error, and success states. - Avoid excessive gradients,
glass effects, and decorative clutter.

Create design tokens for: - Brand colors. - Background and surface
colors. - Text colors. - Border colors. - Status colors. - Typography
scale. - Spacing. - Radius. - Shadows.

Support light and dark themes if practical, but ensure the initial light
theme is complete and polished.

## 4.2 Global design behavior

-   Do not hardcode Sri Lanka as the default country.
-   Do not rank or feature listings based on one country by default.
-   Country filters must support all countries and territories
    represented by a maintained ISO country dataset.
-   Store country codes in ISO 3166-1 alpha-2 format where applicable.
-   Store currencies using ISO 4217 codes.
-   Store timestamps in UTC; render in the visitor's local timezone.
-   Use a locale-aware formatting library for money and dates.
-   Do not assume a job is worldwide because it says Remote.
-   Make language, country, currency, and work arrangement filters
    independent.

## 4.3 Public navigation

Suggested main navigation: - Home - Browse Jobs - Platforms -
Categories - About

Include a prominent global job search. On mobile, use an accessible menu
and preserve search access.

## 4.4 Homepage sections

1.  Hero section with concise global value proposition.
2.  Search bar for job title, skill, language, or platform.
3.  Popular categories.
4.  Latest verified opportunities.
5.  Featured platforms.
6.  How it works.
7.  Trust and verification explanation.
8.  Newsletter/job alert call-to-action (can be Phase 7).
9.  Footer with About, Contact, Privacy, Terms, and Referral Disclosure.

Do not publish fake counters such as "10,000 jobs" or "50,000 users".
All metrics must come from real data.

## 4.5 Job listing cards

Each card should show, when known: - Job title. - Platform/company. -
Platform logo or neutral fallback. - Compensation range and currency. -
Pay basis (hourly, fixed, monthly, annual, task-based, unpaid, or not
disclosed). - Remote/hybrid/onsite. - Country/region eligibility
summary. - Job category. - Posted/discovered date. - Last verified date
or verification label. - Active status.

Do not invent missing values. Display "Not disclosed" or omit optional
values.

## 4.6 Job detail page

Include: - Job title. - Platform name and logo. - Compensation and pay
basis. - Job type and work arrangement. - Country eligibility and
evidence/verification state. - Required skills. - Required languages and
proficiency if stated. - Experience and education requirements if
stated. - Weekly hours or estimated workload if stated. - Full job
description (originally authored or summarized within source
permissions). - Application steps. - Important limitations or equipment
requirements. - First published date. - Last verified date. - Job
status. - Referral disclosure.

### Mandatory application action

There must be exactly one primary public application button:

**Apply Now**

Button behavior: - Calls `/out/[jobSlug]`. - Does not reveal or link
directly to the original source URL. - Does not expose a raw referral
URL in page HTML unnecessarily. - Server verifies job status and
referral configuration. - Server records the click. - Server redirects
to the referral URL. - If the referral destination is missing or
invalid, do not redirect to a non-referral direct link. Show a clear
unavailable state and notify admins.

No separate "Visit official listing", "Original job", or direct
application button on public pages.

The source URL remains private for admin review and authorized status
checking.

## 4.7 Search and filters

Support: - Keyword search across title, description, skills, platform,
and language. - Platform. - Job category. - Country eligibility. -
Region. - Remote, hybrid, onsite. - Employment type. - Pay type. -
Minimum and maximum compensation. - Currency. - Experience level. -
Language. - Date posted. - Verification status.

Requirements: - Filters must be shareable through URL query
parameters. - Pagination must be stable. - Add sorting: newest, recently
verified, compensation (only where comparable). - Do not compare
different currencies as if they were the same. - Avoid presenting hourly
and annual compensation in one misleading ranking. - Provide a clear
reset-filters action. - On mobile, filters should use a drawer or
accessible collapsible panel.

## 4.8 Global eligibility model

Use clear labels: - **Worldwide** --- source explicitly confirms
worldwide eligibility. - **Selected countries** --- only specified
countries/regions are eligible. - **Not confirmed** --- eligibility has
not been verified. - **Restricted** --- source explicitly excludes the
visitor's country/region or defines restrictions.

Store the evidence source, date checked, and admin verification status
for eligibility.

A listing with unknown eligibility can still be published if the admin
explicitly approves it, but it must be labelled "Not confirmed". Never
infer eligibility from language, timezone, remote status, or the
visitor's location.

------------------------------------------------------------------------

# 5. Data Model and Database Design

Use Supabase PostgreSQL. Create migrations; do not rely on manually
editing the production database.

## 5.1 Main tables

### `platforms`

Purpose: stores each external job platform.

Suggested fields: - `id` UUID primary key. - `name` text, required,
unique. - `slug` text, required, unique. - `website_url` text. -
`logo_url` text nullable. - `description` text nullable. - `is_active`
boolean default true. - `default_referral_url` text nullable. -
`referral_program_status` enum/text: unknown, active, inactive,
not_applicable. - `referral_terms_checked_at` timestamptz nullable. -
`created_at`, `updated_at`.

The default referral URL is private. Do not expose it in public platform
queries.

### `jobs`

Purpose: canonical job records.

Suggested fields: - `id` UUID primary key. - `platform_id` UUID foreign
key. - `category_id` UUID nullable. - `title` text required. - `slug`
text required, unique. - `summary` text nullable. - `description` text
required. - `employment_type` text/enum. - `work_arrangement` text/enum:
remote, hybrid, onsite, unknown. - `pay_min` numeric nullable. -
`pay_max` numeric nullable. - `pay_currency` char(3) nullable. -
`pay_period` text/enum: hour, day, week, month, year, task, fixed,
unknown. - `country_eligibility_type` text/enum: worldwide,
selected_countries, not_confirmed, restricted. -
`eligible_country_codes` text\[\] default empty. -
`excluded_country_codes` text\[\] default empty. -
`eligible_region_codes` text\[\] default empty. - `required_skills`
text\[\] default empty. - `required_languages` JSONB default empty
array. - `experience_level` text nullable. - `weekly_hours_min` numeric
nullable. - `weekly_hours_max` numeric nullable. -
`equipment_requirements` text nullable. - `application_instructions`
text nullable. - `source_job_id` text nullable. - `source_url` text
required, private. - `referral_url_override` text nullable, private. -
`source_posted_at` timestamptz nullable. - `discovered_at` timestamptz
required. - `last_checked_at` timestamptz nullable. - `last_verified_at`
timestamptz nullable. - `expires_at` timestamptz nullable. - `status`
enum: draft, pending_review, approved, rejected, closed, expired,
archived. - `verification_status` enum: unverified, needs_review,
verified, disputed. - `is_featured` boolean default false. -
`published_at` timestamptz nullable. - `approved_by` UUID nullable. -
`approved_at` timestamptz nullable. - `rejection_reason` text
nullable. - `created_by` UUID nullable. - `created_at`, `updated_at`.

Use database constraints to prevent invalid pay ranges and invalid
status transitions where appropriate.

### `job_categories`

-   `id` UUID.
-   `name`.
-   `slug`.
-   `description`.
-   `parent_id` nullable.
-   `is_active`.
-   timestamps.

Seed useful categories such as: - General AI Training. - AI
Evaluation. - Writing and Editing. - Coding and Software. - Mathematics
and Science. - Language and Translation. - Data Annotation. - Audio and
Speech. - Image and Video. - Subject-Matter Experts. - Research.

### `job_sources`

Purpose: configured authorized source connectors.

Fields: - `id`. - `platform_id`. - `name`. - `source_type`:
official_api, rss, authorized_feed, email_alert, permitted_public_page,
manual. - `endpoint_or_reference` private. - `is_enabled`. -
`poll_interval_minutes`. - `last_success_at`. - `last_attempt_at`. -
`last_error`. - `terms_review_status`: not_reviewed, approved,
prohibited, needs_legal_review. - `terms_reviewed_at`. - `notes`. -
timestamps.

Do not store credentials directly in this table. Use environment secrets
or a secrets manager.

### `job_source_records`

Purpose: retain source identity and ingestion metadata.

Fields: - `id`. - `source_id`. - `job_id` nullable until matched. -
`external_id` nullable. - `canonical_source_url`. -
`content_fingerprint`. - `raw_payload` JSONB only if permitted and
necessary. - `first_seen_at`. - `last_seen_at`. - `last_fetched_at`. -
`source_status`. - timestamps.

Add unique constraints on `(source_id, external_id)` where external ID
exists and on suitable canonical URL/fingerprint combinations.

### `job_status_history`

Fields: - `id`. - `job_id`. - `old_status`. - `new_status`. -
`reason`. - `changed_by` nullable for automation. - `created_at`.

### `referral_click_events`

Fields: - `id`. - `job_id`. - `platform_id`. - `clicked_at`. -
`referral_destination_version` or safe destination identifier. -
`anonymous_session_id` nullable, random and privacy-conscious. -
`country_code` nullable only if lawfully and transparently collected. -
`referrer_domain` nullable. - `user_agent_family` nullable if needed. -
`bot_flag` boolean default false.

Do not store full IP addresses by default. If short-lived IP processing
is required for abuse prevention, document the purpose, minimize
retention, and avoid storing raw IP unnecessarily.

### `admin_profiles`

Fields: - `user_id` UUID referencing Supabase Auth. - `display_name`. -
`role`: owner, admin, editor, reviewer. - `is_active`. - timestamps.

### `admin_audit_logs`

Fields: - `id`. - `actor_user_id`. - `action`. - `entity_type`. -
`entity_id`. - `before_data` JSONB nullable. - `after_data` JSONB
nullable. - `reason` nullable. - `created_at`.

Avoid logging secrets or unnecessary personal information.

### `automation_runs`

Fields: - `id`. - `source_id` nullable. - `workflow_name`. -
`started_at`. - `finished_at`. - `status`: running, success,
partial_success, failed. - `items_found`. - `items_created`. -
`items_updated`. - `items_skipped`. - `error_summary`.

### `job_submissions` (optional public suggestion form)

Fields: - `id`. - `submitter_email` nullable. -
`suggested_source_url`. - `suggested_title` nullable. - `message`
nullable. - `status`: pending, reviewed, accepted, rejected. -
`created_at`.

Protect personal data and add rate limiting and anti-spam controls if
this feature is enabled.

## 5.2 Database indexes

Create indexes for: - `jobs.status`. - `jobs.published_at`. -
`jobs.platform_id`. - `jobs.category_id`. -
`jobs.country_eligibility_type`. - `jobs.eligible_country_codes` using
appropriate array indexing. - `jobs.work_arrangement`. -
`jobs.pay_currency`. - `jobs.last_verified_at`. -
`job_source_records.external_id`. -
`job_source_records.content_fingerprint`. -
`referral_click_events.job_id, clicked_at`. -
`referral_click_events.platform_id, clicked_at`.

Use PostgreSQL full-text search initially. Consider a dedicated search
service only when measured search performance or relevance requires it.

## 5.3 Referral link resolution

Referral URLs are managed centrally: 1. Job-level
`referral_url_override`, if valid and approved. 2. Otherwise
platform-level `default_referral_url`, if active and valid. 3. Otherwise
no application destination; block publication or disable Apply Now and
alert admins.

Do not concatenate arbitrary query parameters or user-supplied URLs.
Validate destination URLs server-side: - HTTPS required, except
explicitly permitted local development. - Host must match the platform's
approved referral host/domain list. - Reject `javascript:`, `data:`,
protocol-relative, localhost, private-network, and unapproved external
destinations. - Prevent open redirects. - Never accept a destination URL
directly from the browser.

Maintain an admin-managed list of allowed referral domains per platform.
Referral URL changes must be audit logged.

## 5.4 Row Level Security

Enable RLS on all tables.

Public/anonymous users: - May read only public-safe fields of approved,
published, active jobs. - May read public platform names, logos, and
descriptions. - Must not read source URLs, referral URLs, admin data,
raw ingestion payloads, private notes, audit logs, or click-level
records. - Must not insert/update/delete jobs or platforms. - May submit
a job suggestion only through a validated, rate-limited server endpoint
if that feature is enabled.

Authenticated admins: - Access is granted only if their Supabase Auth
user ID has an active `admin_profiles` record and an allowed role. -
Role checks must happen server-side and in RLS policies. - Never trust a
client-supplied role. - Owner-only operations include managing admins
and critical settings.

Use a Supabase server client for privileged operations only in
server-side code. Never expose the service-role key to the browser.

------------------------------------------------------------------------

# 6. Referral Redirect and Analytics Specification

## 6.1 Redirect endpoint

Implement: `GET /out/[jobSlug]`

Server-side sequence: 1. Validate slug format. 2. Fetch job using a
server-side query. 3. Confirm `status = approved` and the job is
currently published and not closed/expired/archived. 4. Resolve referral
destination from job override or platform default. 5. Validate URL
protocol and allowed host. 6. Record click event. Use a short timeout or
resilient event queue if database availability is an issue. 7. Return a
temporary redirect (302 or 307) to the referral destination. 8. If job
or referral destination is unavailable, show a helpful page with no
direct source link and log the problem.

Do not use a permanent 301 redirect because referral destinations may
change and clicks must remain trackable.

Use appropriate cache-control headers to avoid caching referral
resolution. Consider rate limiting and bot filtering.

## 6.2 Public application button

All public job cards and detail pages may link only to the internal
`/out/[jobSlug]` route for application. The job detail page should have
one clear **Apply Now** button.

The raw referral URL must not be exposed in the page's client-side props
or HTML.

## 6.3 Analytics dashboard

Admin dashboard should report: - Total referral clicks. - Clicks by
platform. - Clicks by job. - Clicks by day/week/month. - Top clicked
jobs. - Top clicked platforms. - Click trends. - Bot-filtered versus
valid clicks, if reliable detection is implemented.

Use clear labels: **Referral clicks**, not applications or conversions.

If the platform supplies an authorized conversion report/API, add a
separate conversion metric with source and sync timestamp. Do not infer
conversions from clicks.

## 6.4 Referral disclosure

Include a clear disclosure in the footer and near application actions,
for example:

"Some links are referral links. If you register or qualify through these
links, the site may receive a referral benefit. This does not change the
price or terms offered by the platform. We aim to provide accurate
information, but opportunities and eligibility can change."

Have legal/privacy terms reviewed for the jurisdictions where the site
operates.

------------------------------------------------------------------------

# 7. Job Discovery and Automation

## 7.1 Connector architecture

Create a common adapter interface so platforms can be added without
changing the main ingestion pipeline.

Conceptual interface:

``` ts
type SourceJob = {
  externalId?: string;
  title: string;
  sourceUrl: string;
  description?: string;
  summary?: string;
  postedAt?: string;
  compensation?: {
    min?: number;
    max?: number;
    currency?: string;
    period?: string;
  };
  workArrangement?: string;
  employmentType?: string;
  eligibleCountries?: string[];
  excludedCountries?: string[];
  skills?: string[];
  languages?: Array<{ name: string; level?: string }>;
  sourceStatus?: "active" | "closed" | "unknown";
  rawMetadata?: Record<string, unknown>;
};

interface JobSourceAdapter {
  sourceKey: string;
  validateConfiguration(): Promise<void>;
  discoverJobs(): Promise<SourceJob[]>;
  fetchJobStatus?(job: SourceJob): Promise<"active" | "closed" | "unknown">;
}
```

This is illustrative. Adapt the final types to the actual source and
avoid requiring fields the source does not provide.

## 7.2 Source authorization gate

Before enabling a connector: - Identify the official source owner. -
Review current terms, robots guidance, API documentation, and referral
programme terms as applicable. - Confirm the permitted collection method
and commercial reuse rights. - Record who reviewed it and when. - Store
the approved method in `job_sources`. - Disable connectors marked
prohibited or not reviewed. - Re-review source permissions periodically
and when terms change.

A source being publicly viewable does not automatically grant permission
to scrape, republish, or commercially reuse its content.

## 7.3 Scheduled workflows

Use Inngest for: - `discover-source-jobs` - `refresh-active-jobs` -
`process-source-record` - `detect-job-duplicates` -
`notify-admin-pending-jobs` - `check-expiration-dates` -
`generate-weekly-report`

Suggested initial schedules (configurable): - Discovery: every 3--6
hours per enabled source, respecting source limits. - Status refresh:
every 12--24 hours, subject to source rules and rate limits. -
Expiration review: daily. - Weekly admin report: once per week.

Do not poll a source more frequently than it permits. Per-source
settings override global defaults.

## 7.4 Ingestion pipeline

For each source: 1. Check that source is enabled and permission status
is approved. 2. Acquire a per-source lock to prevent overlapping runs.
3. Fetch data with configured rate limits and timeout. 4. Retry
transient failures with exponential backoff and jitter. 5. Do not retry
permanent 4xx/permission failures endlessly. 6. Parse the response. 7.
Validate and normalize fields. 8. Sanitize HTML and remove
scripts/unsafe content. 9. Preserve source provenance. 10. Match
existing records. 11. Create/update a pending review item. 12. Write run
metrics and errors. 13. Notify admins when new or materially changed
jobs require review.

## 7.5 Normalization rules

-   Normalize whitespace and title casing without changing meaning.
-   Normalize URLs for duplicate comparison; preserve the original
    source URL separately.
-   Map currency to ISO 4217 codes.
-   Map countries to ISO codes.
-   Convert source timestamps to UTC.
-   Keep the source's original compensation text in internal metadata if
    allowed.
-   Do not convert currency automatically for stored source
    compensation.
-   Do not infer salary if absent.
-   Distinguish hourly, monthly, annual, fixed, and task-based pay.
-   Do not infer worldwide eligibility.
-   Keep unknown values null or explicitly unknown.

## 7.6 Duplicate detection

Use multiple signals: 1. Same platform and external job ID: exact
duplicate. 2. Same canonical source URL: exact duplicate. 3. Same
platform and normalized title: possible duplicate. 4. Similar title +
overlapping description + same platform: possible duplicate. 5. Similar
title across platforms: not automatically a duplicate; may be separately
syndicated.

Use deterministic checks first. Optional AI similarity can suggest
matches, but it must not automatically delete or merge records.

Admin actions: - Keep separate. - Merge. - Mark duplicate. - Reject
duplicate. - Reopen existing record.

## 7.7 Job status refresh

Possible source outcomes: - Active: source confirms open. - Closed:
source confirms closed. - Unknown: source provides no reliable status. -
Unavailable: source request failed or was blocked.

Rules: - A timeout is not proof of closure. - A 404 may be closure
evidence but should be reviewed if the source has unstable URLs. - Do
not remove historical records. - Status changes should be auditable. -
If a source confirms closure, mark the listing closed or queue it for
review according to admin settings. - Expiration dates are hints unless
source-defined and reliable.

## 7.8 AI enrichment (optional)

AI may: - Suggest a job category. - Extract skills from authorized job
text. - Summarize a long description, if republishing/summarization is
permitted. - Suggest possible duplicates. - Flag missing eligibility or
compensation data. - Detect suspicious or inconsistent fields.

AI must not: - Invent eligibility. - Invent salary. - Invent
requirements. - Mark a job verified without evidence. - Approve or
publish jobs. - Rewrite source terms in a misleading way.

All AI-generated values should be marked as suggestions and reviewed by
an admin.

------------------------------------------------------------------------

# 8. Admin Portal Specification

## 8.1 Access and roles

Roles: - `owner`: full access, manage admins, security settings,
referral settings. - `admin`: manage jobs, platforms, sources, review,
analytics. - `editor`: create/edit jobs and prepare review
submissions. - `reviewer`: review and approve/reject jobs, but cannot
manage sensitive settings unless granted.

Require: - Secure sign-in. - Password reset. - Optional MFA if
supported/configured. - Session expiry and secure cookies. - Server-side
role checks. - Audit log for sensitive operations.

Do not provide public admin registration. Admin accounts must be
created/invited by the owner.

## 8.2 Admin navigation

-   Overview
-   Jobs
    -   All Jobs
    -   Add Job
    -   Pending Review
    -   Published
    -   Closed / Expired
    -   Rejected / Archived
-   Platforms
-   Sources & Integrations
-   Referral Links
-   Automation Runs
-   Analytics
-   Admin Users
-   Audit Logs
-   Settings

## 8.3 Dashboard overview

Show real metrics: - Total jobs. - Published active jobs. - Pending
review. - Closed/expired jobs. - Jobs discovered in last 7 days. -
Referral clicks in last 7/30 days. - Top platforms by clicks. - Recent
automation runs. - Failed source connectors. - Jobs requiring
verification.

Every card/chart must be backed by actual database queries.

## 8.4 Pending review queue

Table columns: - Title. - Platform. - Discovery source. - Discovered
date. - Compensation. - Country eligibility. - Duplicate warning. -
Verification status. - Review status.

Actions: - Open review. - Edit. - Approve and publish. - Save as
draft. - Reject with reason. - Mark duplicate. - Request recheck.

Review screen must show: - Parsed fields. - Original source URL
(admin-only). - Source evidence and fetch date. - Proposed public
preview. - Referral destination status (mask sensitive URL where
appropriate). - Eligibility evidence. - Duplicate suggestions. - Change
history.

## 8.5 Approval validation

Before publishing, require: - Title. - Platform. - Description or useful
summary. - Valid private source URL or documented manual source. -
Active platform record. - Valid referral destination. - Job category or
explicit uncategorized state. - Work arrangement or unknown. - Country
eligibility status. - Verification status and last checked date. - Admin
approval.

Allow compensation and some optional fields to be unknown. Do not force
admins to invent them.

If referral programme status is inactive/unknown or the URL fails
validation, block publication until resolved or an owner explicitly
applies a documented exception. Do not silently substitute a direct
link.

## 8.6 Job editing

-   Use validated forms.
-   Warn before leaving with unsaved changes.
-   Track material edits.
-   Generate stable slugs; preserve old slugs with redirects if a
    published slug changes.
-   Provide a public preview.
-   Make job status transitions explicit.
-   Never allow a public user to change a job.

## 8.7 Platform management

For each platform: - Name, slug, logo, website. - Description. -
Referral programme state. - Default referral URL (private). - Allowed
referral domains. - Referral terms review date. - Default category
mapping if useful. - Active/inactive. - Source integrations.

Platform deactivation must not delete historical jobs or click data.

## 8.8 Source management

For each source: - Platform. - Source type. - Permission review
status. - Enabled/disabled. - Poll interval. - Last attempt and last
success. - Last error. - Rate limit settings. - Connector configuration
status. - Manual "Run now" action for authorized sources. - Test
connection action where possible.

The UI must make it impossible to enable a source whose permission
review is prohibited or incomplete.

## 8.9 Admin audit log

Record: - Job created/edited/approved/rejected/closed. - Referral link
changed. - Platform settings changed. - Source enabled/disabled. - Admin
role changed. - Security settings changed.

Audit entries should include actor, timestamp, entity, action, and safe
before/after snapshots. Never store passwords, access tokens, or secrets
in audit logs.

------------------------------------------------------------------------

# 9. Public Pages and Routes

Implement these routes:

  ------------------------------------------------------------------------
  Route                    Purpose                 Access
  ------------------------ ----------------------- -----------------------
  `/`                      Homepage                Public

  `/jobs`                  Search and browse jobs  Public

  `/jobs/[slug]`           Job details             Public, approved only

  `/platforms`             Platform directory      Public

  `/platforms/[slug]`      Platform profile and    Public
                           approved jobs           

  `/categories`            Category directory      Public

  `/categories/[slug]`     Category jobs           Public

  `/about`                 About the product       Public

  `/contact`               Contact form            Public

  `/privacy`               Privacy policy          Public

  `/terms`                 Terms                   Public

  `/referral-disclosure`   Referral disclosure     Public

  `/out/[jobSlug]`         Track and redirect      Public endpoint
                           referral click          

  `/admin/login`           Admin login             Public sign-in page

  `/admin`                 Admin overview          Admin

  `/admin/jobs`            Job management          Admin

  `/admin/pending`         Review queue            Reviewer+

  `/admin/platforms`       Platform management     Admin+

  `/admin/sources`         Source management       Admin+

  `/admin/referrals`       Referral configuration  Owner/Admin as
                                                   configured

  `/admin/automation`      Workflow monitoring     Admin+

  `/admin/analytics`       Analytics               Admin+

  `/admin/users`           Admin user management   Owner

  `/admin/audit-logs`      Audit log               Owner/Admin as
                                                   configured
  ------------------------------------------------------------------------

Return 404 for unpublished jobs rather than revealing their existence
publicly.

------------------------------------------------------------------------

# 10. SEO, Performance, Accessibility, and Trust

## 10.1 SEO

-   Server-render public job pages.
-   Unique title and meta description for each approved job.
-   Canonical URLs.
-   Open Graph metadata.
-   XML sitemap containing only approved, active public URLs.
-   `robots.txt` excludes admin and private routes.
-   Structured data only where the page meets current search-engine
    requirements. Use `JobPosting` structured data only for genuine job
    postings and accurate fields.
-   Do not include expired, rejected, draft, or pending jobs in sitemap
    or structured data.
-   Avoid thin indexable pages for empty filters.
-   Use clean, stable slugs.

## 10.2 Performance

-   Optimize images and logos.
-   Use responsive image sizes.
-   Paginate job results.
-   Add database indexes based on actual query patterns.
-   Avoid loading all jobs into the browser.
-   Cache public queries safely, but ensure newly closed jobs are not
    shown indefinitely.
-   Do not cache referral redirects.
-   Add loading skeletons and graceful error states.
-   Monitor Core Web Vitals after launch.

## 10.3 Accessibility

-   Semantic HTML.
-   Keyboard navigable menus and dialogs.
-   Visible focus states.
-   Proper labels and error messages.
-   Sufficient color contrast.
-   Accessible tables and filters.
-   Respect reduced-motion preference.
-   Do not rely on color alone to communicate job status.

## 10.4 Trust and transparency

-   Show last checked date.
-   Explain what "Verified" means.
-   Distinguish admin approval from source verification.
-   Clearly label unknown country eligibility.
-   Disclose referral relationships.
-   Provide a correction/report form.
-   Do not make earnings guarantees.
-   Keep job information updated and provide a way to report closed
    listings.

------------------------------------------------------------------------

# 11. Security and Privacy

Implement: - Supabase RLS on every relevant table. - Server-side
authorization for admin actions. - Zod validation for all inputs. - Rate
limits for login, contact, submissions, and redirect abuse. - CSRF
protection where applicable to mutation flows. - Secure HTTP headers. -
Content Security Policy where feasible. - Safe HTML rendering; never
inject unsanitized source HTML. - Secret management through environment
variables. - No secrets in Git. - No service-role key in browser
bundles. - Dependency and vulnerability checks. - Backups and migration
discipline. - Data retention policy for click events and logs. - Privacy
notice and consent controls where required by applicable law.

Use least privilege. A reviewer should not be able to change referral
destination settings or manage owner accounts unless explicitly
authorized.

------------------------------------------------------------------------

# 12. Testing Strategy

## 12.1 Unit tests

Test: - URL validation and referral host allowlist. - Referral
resolution precedence. - Job status eligibility. - Country eligibility
labels. - Currency/pay formatting. - Job normalization. - Duplicate
matching. - Admin role checks. - Job publication validation.

## 12.2 Integration tests

Test: - Public query returns approved jobs only. - Public query never
exposes source/referral URLs. - Admin can create and edit jobs. -
Reviewer can approve/reject according to role. - Unapproved job cannot
be published by public API. - Referral endpoint logs and redirects
correctly. - Missing referral URL blocks redirect. - Invalid referral
domain is rejected. - Automation creates pending jobs only. - Failed
source fetch does not close jobs. - Audit log is created for sensitive
changes.

## 12.3 End-to-end tests

Use Playwright to test: 1. Visitor loads homepage on desktop. 2. Visitor
loads homepage on mobile viewport. 3. Visitor searches and filters jobs.
4. Visitor opens a job detail page. 5. Visitor clicks Apply Now and
reaches a test referral destination. 6. Click event is recorded. 7.
Visitor cannot open admin pages. 8. Admin signs in. 9. Admin reviews
pending listing. 10. Admin approves listing. 11. Approved listing
becomes public. 12. Admin rejects another listing. 13. Rejected listing
remains private. 14. Admin changes referral link and redirect uses new
destination. 15. Expired job disappears from active public results.

Use test referral domains and test records in staging. Never use live
referral URLs in automated tests that could generate unwanted real
traffic.

## 12.4 Required quality gates

Before each phase is complete: - `npm run lint` - `npm run typecheck`
(add script) - `npm run test` - `npm run build` - Playwright tests for
completed user journeys - Review RLS and secret exposure for
backend-related phases

Fix errors. Do not mark a phase complete with failing required checks
unless a documented external blocker exists.

------------------------------------------------------------------------

# 13. Phase-by-Phase Implementation Plan

Do not implement all phases in one giant generation request. Work in
order. Each phase should produce a working, testable result.

## Phase 0 --- Repository inspection and project planning

### Goal

Understand the environment and create a reliable plan before changing
files.

### Tasks

-   Inspect existing repository.
-   Identify package manager and current dependencies.
-   Check whether Next.js already exists.
-   Check existing Supabase setup and environment files.
-   Identify reusable code.
-   Create `docs/PRODUCT_SPEC.md`.
-   Create `docs/IMPLEMENTATION_PLAN.md`.
-   Create `docs/DECISIONS.md`.
-   Create a list of external credentials and permissions required.

### Acceptance criteria

-   No existing user work is overwritten.
-   Architecture is documented.
-   Phase checklist exists.
-   External blockers are identified.

## Phase 1 --- App scaffold and design system

### Goal

Create a running Next.js application with a polished responsive shell.

### Tasks

-   Initialize or configure Next.js App Router and TypeScript.
-   Configure Tailwind CSS.
-   Install and configure shadcn/ui.
-   Add Lucide icons.
-   Add fonts and design tokens.
-   Create shared header, navigation, footer, container, button, card,
    badge, input, and skeleton components.
-   Add responsive desktop/tablet/mobile layouts.
-   Add light theme. Add dark theme only if it can be completed
    consistently.
-   Create public route placeholders and admin shell placeholders.
-   Add ESLint, formatting, typecheck, and test scripts.
-   Add `.env.example`.

### Deliverables

-   Working local development server.
-   Responsive design system.
-   Consistent project structure.
-   README setup instructions.

### Acceptance criteria

-   No TypeScript or lint errors.
-   Main layout works at mobile, tablet, and desktop sizes.
-   No horizontal overflow.
-   Accessible navigation and focus states.

## Phase 2 --- Supabase database, migrations, and security foundation

### Goal

Create the database schema and secure access rules.

### Tasks

-   Create Supabase project or connect to existing authorized project.
-   Configure local Supabase development if practical.
-   Create SQL migrations for all core tables.
-   Create enums/check constraints.
-   Add indexes.
-   Add updated-at triggers where appropriate.
-   Configure Auth.
-   Create admin profiles and roles.
-   Enable RLS on every table.
-   Add public-safe views or restricted queries for published jobs.
-   Add server-side Supabase client helpers.
-   Add seed categories and example platforms clearly marked as seed
    data.
-   Create database types.
-   Document migration and reset procedures.

### Deliverables

-   Versioned migrations.
-   RLS policies.
-   Database type definitions.
-   Safe Supabase clients.

### Acceptance criteria

-   Anonymous users can read only approved public-safe records.
-   Anonymous users cannot read private URLs or admin tables.
-   Anonymous users cannot write jobs or platform settings.
-   Admin role is checked server-side and by RLS.
-   Service-role secret is not in client code.

## Phase 3 --- Public homepage and job browsing

### Goal

Build the complete public job discovery experience using real database
queries.

### Tasks

-   Implement homepage sections.
-   Implement `/jobs`.
-   Implement job cards.
-   Implement job detail route.
-   Implement platform directory and platform detail pages.
-   Implement category directory and category detail pages.
-   Implement search.
-   Implement filters and URL query state.
-   Implement pagination and sorting.
-   Implement global country and region filters.
-   Implement pay display with currency and pay period.
-   Implement eligibility labels.
-   Implement last-verified information.
-   Implement loading, empty, and error states.
-   Ensure only approved and published jobs are queried.
-   Add responsive behavior.

### Deliverables

-   Fully navigable public website.
-   Search and filters backed by database.
-   Public job detail pages.

### Acceptance criteria

-   No pending/rejected/draft jobs are visible.
-   Search and filters work together.
-   Filters persist in URL.
-   Unknown eligibility is clearly labelled.
-   Currency and pay period are not misrepresented.
-   Mobile layout is usable.

## Phase 4 --- Admin authentication and authorization

### Goal

Build a secure admin area.

### Tasks

-   Implement admin login.
-   Implement sign-out.
-   Implement session handling.
-   Protect all `/admin` routes.
-   Add role-based navigation.
-   Add server-side permission helpers.
-   Add unauthorized and forbidden pages.
-   Add password reset flow.
-   Add optional MFA if available and configured.
-   Prevent public admin registration.
-   Add admin profile management.

### Deliverables

-   Secure admin sign-in.
-   Protected admin layout.
-   Role-based access control.

### Acceptance criteria

-   Anonymous visitors cannot access admin pages or data.
-   Ordinary authenticated users without admin profile are denied.
-   Reviewer/editor/admin/owner permissions are enforced server-side.
-   Admin routes do not rely only on hidden UI controls.

## Phase 5 --- Manual job management and approval workflow

### Goal

Allow admins to create, review, approve, reject, edit, close, and
archive listings.

### Tasks

-   Build all-jobs table.
-   Build add-job form.
-   Build edit-job form.
-   Build public preview.
-   Build pending review queue.
-   Build review detail screen.
-   Add required-field validation.
-   Add referral destination validation.
-   Add source URL and evidence fields.
-   Add country eligibility evidence.
-   Add duplicate warnings.
-   Add approve/publish action.
-   Add reject with reason.
-   Add close/expire/archive actions.
-   Add status history.
-   Add audit logs.
-   Add slug generation and safe slug changes.
-   Add admin filters and pagination.

### Deliverables

-   Complete manual content management.
-   Human approval workflow.
-   Audit history.

### Acceptance criteria

-   Admin can manually create and publish a valid job.
-   Reviewer can approve/reject only permitted records.
-   Invalid referral destination blocks publication.
-   Rejected and pending jobs remain private.
-   Every important action is logged.
-   Public preview matches the actual public page.

## Phase 6 --- Platform and referral management

### Goal

Manage platforms and their referral destinations centrally.

### Tasks

-   Build platform CRUD.
-   Add platform logo and description.
-   Add referral programme status.
-   Add default referral URL.
-   Add allowed referral host/domain list.
-   Add referral terms review date and notes.
-   Add job-level referral override.
-   Add referral URL validation.
-   Add referral URL test/preview with safe controls.
-   Mask sensitive URL values where appropriate.
-   Add audit logging for referral changes.
-   Add platform activation/deactivation.

### Deliverables

-   Admin platform management.
-   Central referral settings.
-   Per-job referral override support.

### Acceptance criteria

-   Referral links can be changed without code changes.
-   Every published job resolves to a valid referral URL.
-   Unapproved domains are rejected.
-   Private referral URLs are never exposed through public queries.
-   A platform's inactive referral programme blocks new publication
    unless a documented owner-approved exception exists.

## Phase 7 --- Referral redirect and click analytics

### Goal

Implement the single-button application experience and measure referral
clicks.

### Tasks

-   Implement `/out/[jobSlug]`.
-   Validate job publication status.
-   Resolve job override or platform default referral URL.
-   Validate allowed host.
-   Record click event.
-   Filter obvious bot traffic where practical.
-   Use temporary redirect.
-   Add safe unavailable/error page.
-   Add rate limiting.
-   Build analytics summary cards.
-   Build clicks by platform chart.
-   Build clicks by job table.
-   Build clicks over time chart.
-   Add privacy-conscious aggregation.
-   Add referral disclosure to public pages/footer.

### Deliverables

-   One Apply Now action on public listings.
-   Internal redirect and click logging.
-   Admin click analytics.

### Acceptance criteria

-   All application buttons use internal redirect.
-   No public direct source link is shown.
-   Click is logged before successful redirect, with a documented
    fallback if logging is unavailable.
-   Invalid, unpublished, closed, or expired job cannot redirect.
-   Clicks are not labelled applications or conversions.
-   No raw service secrets or referral configuration is sent to the
    client.

## Phase 8 --- Automation framework and source connector interface

### Goal

Create background job infrastructure without enabling unauthorized
collection.

### Tasks

-   Configure Inngest.
-   Create workflow client and route.
-   Create source adapter interface.
-   Create source configuration UI.
-   Add permission review gate.
-   Add source run logs.
-   Add rate limits, timeouts, retries, backoff, and locking.
-   Add manual "Run now" for approved sources.
-   Add test adapter using local fixtures only.
-   Add automation dashboard.
-   Add failure notifications.
-   Add run metrics.

### Deliverables

-   Working automation framework.
-   Connector interface.
-   Source management and logs.
-   Fixture-based end-to-end test.

### Acceptance criteria

-   Disabled or unapproved sources cannot run.
-   Overlapping runs are prevented or safely deduplicated.
-   Errors are visible to admins.
-   Retries do not create duplicate jobs.
-   No real platform connector is activated without authorization.

## Phase 9 --- First authorized source integration

### Goal

Integrate one source using an explicitly permitted method.

### Tasks

-   Choose a platform only after confirming authorized access.
-   Document its API/feed/email/public-source permission.
-   Implement connector in its own adapter module.
-   Map source fields into canonical job schema.
-   Add parser tests using approved fixtures.
-   Add rate limits and source-specific polling schedule.
-   Add source ID and URL deduplication.
-   Add ingestion to Pending Review.
-   Add source status refresh if permitted.
-   Add admin notification.
-   Test source failure cases.

### Deliverables

-   One real authorized connector.
-   Documentation of its permission and operation.
-   Pending review items created from real source data.

### Acceptance criteria

-   Connector uses only the approved collection method.
-   No login automation or anti-bot bypass.
-   Jobs are not auto-published.
-   Duplicate ingestion is idempotent.
-   Source attribution and timestamps are stored.
-   Failures do not falsely close jobs.

Repeat this phase separately for each additional platform. Do not assume
one connector's permission applies to another platform.

## Phase 10 --- Duplicate detection, enrichment, and status refresh

### Goal

Improve data quality and keep listings current.

### Tasks

-   Implement exact duplicate checks.
-   Implement canonical URL normalization.
-   Implement external ID matching.
-   Implement similarity suggestions.
-   Build duplicate review interface.
-   Add status refresh workflows.
-   Add expiration review.
-   Add material-change detection.
-   Add field-level source provenance.
-   Optionally add AI category/skill extraction.
-   Ensure AI outputs are suggestions only.
-   Add admin review for uncertain changes.

### Deliverables

-   Duplicate management.
-   Refresh workflow.
-   Data quality checks.

### Acceptance criteria

-   Exact duplicates are detected.
-   Potential duplicates are sent to review.
-   Similar jobs across different platforms are not automatically
    merged.
-   Failed fetch is not treated as closed.
-   Material changes are reviewed.
-   AI cannot approve or publish jobs.

## Phase 11 --- Email notifications and operational reporting

### Goal

Notify admins and provide operational visibility.

### Tasks

-   Configure Resend.
-   Verify sending domain.
-   Build templates for new pending jobs, failed source runs, and weekly
    report.
-   Add admin notification preferences.
-   Avoid sending duplicate notifications repeatedly.
-   Add weekly automation and job health summary.
-   Log delivery status safely.

### Deliverables

-   Admin email alerts.
-   Weekly operational report.

### Acceptance criteria

-   New pending jobs trigger appropriate alerts.
-   Failed source runs alert admins.
-   Notifications do not expose private credentials.
-   Delivery failures are visible.

## Phase 12 --- SEO, accessibility, performance, legal and trust pages

### Goal

Prepare the product for public launch.

### Tasks

-   Add metadata and Open Graph.
-   Add canonical URLs.
-   Add sitemap and robots rules.
-   Add valid structured data where appropriate.
-   Exclude non-public jobs from indexing.
-   Optimize images and loading.
-   Add privacy policy, terms, referral disclosure, about, and contact
    pages.
-   Add accessibility audit.
-   Add keyboard navigation tests.
-   Add responsive testing.
-   Add rate limiting and abuse protection.
-   Add correction/report listing form.
-   Add data retention settings.
-   Review source reuse and referral terms.

### Deliverables

-   SEO-ready public pages.
-   Legal/trust pages.
-   Accessibility and performance improvements.

### Acceptance criteria

-   Sitemap includes only approved public URLs.
-   Admin and private routes are excluded.
-   No expired or pending job structured data.
-   Mobile, tablet, desktop layouts work.
-   Referral disclosure is visible.
-   Legal/source permission blockers are documented and resolved before
    relevant integrations go live.

## Phase 13 --- Full QA, staging, and production launch

### Goal

Launch a reliable production application.

### Tasks

-   Create staging and production environments.
-   Configure separate Supabase projects or appropriately isolated
    environments.
-   Configure Vercel deployment.
-   Configure production environment variables.
-   Configure custom domain and DNS.
-   Configure HTTPS.
-   Apply database migrations.
-   Create owner account securely.
-   Verify backups and recovery process.
-   Run full test suite.
-   Run security/RLS checks.
-   Run referral redirect tests with test URLs.
-   Verify source connector permissions and schedules.
-   Seed only verified platform/category records.
-   Add initial approved jobs manually or from authorized integrations.
-   Monitor logs after launch.
-   Document rollback procedure.

### Deliverables

-   Production website.
-   Admin access.
-   Operational runbook.
-   Launch checklist.

### Acceptance criteria

-   Production build succeeds.
-   Critical E2E journeys pass.
-   RLS/security review passes.
-   No secrets are committed or exposed.
-   Referral redirects work.
-   Only approved listings are public.
-   Automation is enabled only for authorized sources.
-   Backups and recovery steps are documented.

## Phase 14 --- Post-launch improvements

Only after the core product is stable, consider: - Visitor job
alerts/newsletter. - Saved jobs (may require user accounts or local
storage). - Multi-language UI. - More source integrations. -
Employer/platform submission portal. - Public job suggestion workflow. -
More advanced analytics. - Conversion reporting through authorized
partner data. - Sponsored listings with clear labels. - PWA support. -
Dedicated search service if needed. - Mobile application only if
justified by usage.

------------------------------------------------------------------------

# 14. Budget and Deployment Plan

Costs change by provider, usage, region, and plan. Verify current
pricing before purchasing. Do not assume free plans are suitable for
commercial production.

## 14.1 Development stage

Possible low-cost setup: - GitHub free tier. - Local Next.js
development. - Supabase free tier for prototype/testing. - Inngest free
tier within limits. - Resend free tier within limits. - Local test
fixtures. - No paid AI API required for core features.

Expected initial infrastructure spend can be near zero while
prototyping, excluding domain purchase and any paid AI coding
subscription.

## 14.2 Production baseline

Potential services: - Vercel Pro for commercial Next.js hosting. -
Supabase Pro for production database/auth. - Inngest plan based on
workflow volume. - Resend based on email volume. - Domain
registration/renewal. - Optional Sentry or analytics.

An initial planning allowance of approximately **USD 50--100 per
month**, plus domain and taxes, is a reasonable budget envelope to
investigate, not a quote or guaranteed cost. Actual cost depends on
traffic, database size, workflow runs, email volume, and plan limits.

## 14.3 Cost control

-   Start with one authorized connector.
-   Run scheduled jobs at source-permitted intervals.
-   Use deterministic parsing before AI.
-   Use AI only when it adds clear value.
-   Avoid storing large raw payloads unless necessary and permitted.
-   Use database aggregation for dashboard metrics.
-   Set usage alerts.
-   Monitor function execution and database egress.
-   Upgrade plans only when limits or commercial requirements justify
    it.

------------------------------------------------------------------------

# 15. Environment Variables

Create `.env.example` with placeholders only:

``` env
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

RESEND_API_KEY=
ADMIN_NOTIFICATION_EMAIL=

# Optional AI enrichment
AI_PROVIDER_API_KEY=
AI_PROVIDER_MODEL=

# Optional error monitoring
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
```

Rules: - Never commit `.env.local`. - Never place service-role keys in
`NEXT_PUBLIC_*`. - Use separate secrets for development, staging, and
production. - Do not invent credentials. Ask the project owner to
configure them. - If a service is not configured, disable the related
feature gracefully.

------------------------------------------------------------------------

# 16. Definition of Done

The product is considered ready for its first production release only
when all the following are true:

## Public website

-   [ ] Responsive homepage.
-   [ ] Global job search and filters.
-   [ ] Job detail pages.
-   [ ] Country eligibility labels.
-   [ ] Compensation shown with correct currency and pay period.
-   [ ] Only approved/published jobs are public.
-   [ ] Exactly one primary Apply Now action.
-   [ ] No public direct original-source application link.
-   [ ] Referral disclosure.
-   [ ] About, contact, privacy, and terms pages.

## Admin

-   [ ] Secure admin authentication.
-   [ ] Role-based permissions.
-   [ ] Job CRUD.
-   [ ] Pending review queue.
-   [ ] Approve/reject workflow.
-   [ ] Platform management.
-   [ ] Referral link management.
-   [ ] Source management.
-   [ ] Automation logs.
-   [ ] Audit logs.
-   [ ] Analytics.

## Referral

-   [ ] Central platform referral links.
-   [ ] Optional job-level override.
-   [ ] Internal redirect endpoint.
-   [ ] Server-side destination validation.
-   [ ] Click event tracking.
-   [ ] No raw referral URLs exposed publicly.
-   [ ] No direct link fallback.
-   [ ] Clicks are not misrepresented as conversions.

## Automation

-   [ ] Source permission review gate.
-   [ ] Modular adapter architecture.
-   [ ] Scheduled discovery.
-   [ ] Duplicate detection.
-   [ ] Pending approval only.
-   [ ] Status refresh.
-   [ ] Retry and failure logging.
-   [ ] Admin notifications.
-   [ ] No unauthorized scraping.

## Security and operations

-   [ ] RLS enabled and tested.
-   [ ] Admin authorization server-side.
-   [ ] Secrets protected.
-   [ ] Input validation and rate limits.
-   [ ] Tests pass.
-   [ ] Production build passes.
-   [ ] Backups and rollback documented.
-   [ ] Monitoring configured.

------------------------------------------------------------------------

# 17. How the AI Coding Agent Should Execute This Document

Use the following implementation sequence:

1.  Read this complete specification.
2.  Inspect the repository.
3.  Produce a concise technical plan and identify required external
    setup.
4.  Implement Phase 0 and Phase 1 only.
5.  Run checks and show the result.
6.  Continue with Phase 2.
7.  At the end of every phase, summarize:
    -   What was implemented.
    -   Important files changed.
    -   Database migrations added.
    -   Tests and commands run.
    -   Test/build results.
    -   Configuration still required from the owner.
    -   Known limitations and next phase.
8.  Do not skip ahead to automation before the database, admin review,
    and referral architecture are stable.
9.  Do not connect real platforms until source permissions and
    credentials are supplied.
10. Maintain the implementation checklist and update it as work
    progresses.

**Start now with Phase 0. Inspect the repository and prepare the
architecture and implementation checklist. Do not attempt to build every
phase in a single response.**
