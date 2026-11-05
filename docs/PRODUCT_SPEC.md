# TrainlyAI — Product Specification

**Brand:** TrainlyAI  
**Tagline:** Discover. Train. Earn.  
**Description:** Global AI Training & Career Opportunities  
**Website Concept:** A global platform to discover AI trainer, AI evaluator, data annotation, and subject-matter expert opportunities worldwide.  
**Document Version:** 1.0  
**Status:** Living Product & Engineering Specification  

---

## 1. Product Vision and Overview

TrainlyAI is a production-grade, responsive, and trustworthy global job discovery and referral platform. It connects contributors worldwide with legitimate freelance, contract, part-time, and full-time opportunities in AI data and model development.

### 1.1 Target Roles & Opportunities
- **AI Trainers & AI Tutors:** Training LLMs and specialized agents across reasoning, coding, and writing.
- **AI Evaluators & Model Graders:** Evaluating model responses for truthfulness, helpfulness, safety, and coherence.
- **Data Annotators & Labellers:** Multi-modal data labelling (text, image, audio, video).
- **Subject-Matter Experts (SMEs):** Mathematics, Science, Finance, Law, Medicine, and Engineering specialists.
- **Bilingual & Localization Experts:** Translation, transcription, regional nuance evaluation, and multi-language QA.
- **Coding & Technical Specialists:** Code review, synthetic data generation, and benchmark test writing.

### 1.2 Target Platforms
Representative platforms include (subject to verified permissions and referral agreements):
- Mercor, Micro1, SME Careers, RWS, Outlier, DataAnnotation, TELUS Digital AI, OneForma, Alignerr, Mindrift, and others.

---

## 2. Non-Negotiable Core Rules

1. **Global from Day One:** No single country or region is prioritized in data models, UX, SEO, copy, defaults, or features.
2. **Single Public Application Action:** Every public job card and job detail page must feature exactly one primary application action: **Apply Now**.
3. **Mandatory Referral Redirect:** Every **Apply Now** action routes strictly through the internal endpoint `/out/[jobSlug]`, which logs the referral click and redirects to the configured platform referral URL.
4. **No Direct Source Links on Public Pages:** The original source URL is strictly private, visible only to admins for verification, deduplication, and status checks. No public "Official listing" or "Direct apply" button is permitted.
5. **Mandatory Human Review:** All automatically discovered or ingested jobs enter a `pending_review` status. Automated jobs must never be auto-published.
6. **Strict Publication Gates:** Only approved and published jobs appear in public search, detail pages, sitemaps, or public APIs.
7. **No Inventions:** Never fabricate vacancies, salary amounts, country eligibility, work arrangements, or referral terms. If a value is unknown, explicitly display "Not disclosed" or "Not confirmed".
8. **Legitimate & Permitted Ingestion:** No scraping behind logins, bypassing bot protection, defeating CAPTCHAs, or violating terms of service. Use only authorized APIs, permitted RSS/Atom feeds, approved public boards, or manual admin entry.
9. **Conservative Remote & Country Eligibility:** A "Remote" job is never assumed to be worldwide. Country eligibility must be backed by evidence or marked **Not confirmed**.
10. **Truthful Analytics:** A referral click is solely a measured click event, never mislabelled as a confirmed application, hire, or conversion.
11. **Defense-in-Depth Security:** Service-role keys and database credentials must never be exposed to the browser or client-side bundles. PostgreSQL Row-Level Security (RLS) is enabled on every table.

---

## 3. Technology Stack

| Layer | Technology | Primary Purpose |
|---|---|---|
| **Framework** | Next.js 15+ (App Router) | Public SSR/SSG pages, API route handlers, admin portal |
| **Language** | TypeScript (Strict mode) | End-to-end type safety |
| **Styling** | Tailwind CSS | Responsive, utility-first design system |
| **UI Components** | Radix UI / shadcn/ui | Accessible, unstyled primitives |
| **Icons** | Lucide React | Uniform icon set |
| **Database** | Supabase PostgreSQL | Relational data, vector/FTS search, triggers |
| **Authentication** | Supabase Auth | Secure admin authentication and session management |
| **Authorization** | Supabase RLS + Server Gates | Enforce role-based access control |
| **Workflows** | Inngest | Scheduled discovery, status refresh, background retries |
| **Email** | Resend | Operational email alerts and notifications |
| **Validation** | Zod + React Hook Form | Request and admin form validation |
| **Date/Time** | date-fns | Locale-aware formatting and UTC calculations |
| **Testing** | Vitest + Playwright | Unit, integration, and E2E browser testing |

---

## 4. User Journeys

### 4.1 Visitor Journey (Discover & Apply)
1. **Browse:** Visitor explores the TrainlyAI homepage or `/jobs` catalog.
2. **Filter & Search:** Filters by category, platform, country eligibility, compensation, language, or work arrangement (persisted in URL params).
3. **Inspect:** Opens `/jobs/[slug]` to review role details, eligibility proof, pay structure, and last-verified date.
4. **Apply:** Clicks the single **Apply Now** button.
5. **Redirect & Tracking:** Browser requests `/out/[jobSlug]`. The server validates that the job is published and active, checks referral URL health and allowed domain, logs a privacy-safe click event, and issues a `302/307` temporary redirect to the referral URL.

### 4.2 Admin Ingestion & Moderation Journey
1. **Ingest/Entry:** Source connector (or manual admin form) introduces a job record into `pending_review`.
2. **Review:** Admin examines parsed fields, original source URL, platform referral status, and eligibility evidence.
3. **Deduplication:** System warns if duplicate records or canonical URLs match existing listings.
4. **Approval:** Admin verifies required fields, approves the listing, and sets it to `approved` and `published`.
5. **Live:** The job instantly becomes searchable publicly and eligible for sitemap inclusion.

### 4.3 Automated Recheck & Expiration Journey
1. Scheduled Inngest jobs poll active listings against source endpoints.
2. If confirmed closed, the job status updates to `closed` and is excluded from active public listings.
3. Network or transient failures do NOT mark a job closed; they log a warning for admin inspection.

---

## 5. Information Architecture & Key Routes

### Public Routes
- `/`: Homepage (Hero, Search, Featured Categories, Latest Verified Jobs, Featured Platforms, How It Works, Trust Statement)
- `/jobs`: Full job catalog with faceted search, filters, and pagination
- `/jobs/[slug]`: Public job detail page with single "Apply Now" button
- `/platforms`: Platform directory
- `/platforms/[slug]`: Individual platform profile and its active listings
- `/categories`: Category directory
- `/categories/[slug]`: Category-specific job listings
- `/about`: Mission, verification methodology, and standards
- `/contact`: Public inquiry form
- `/privacy`: Privacy policy (including click tracking transparency)
- `/terms`: Terms of service
- `/referral-disclosure`: Transparent affiliate/referral disclosure statement
- `/out/[jobSlug]`: Internal click-tracking and referral redirect route

### Admin Routes (Protected)
- `/admin/login`: Admin authentication portal
- `/admin`: Dashboard with real operational metrics
- `/admin/jobs`: Job catalog management (Drafts, Published, Closed, Expired)
- `/admin/jobs/new`: Manual job entry form
- `/admin/jobs/[id]/edit`: Job editor and public preview
- `/admin/pending`: Moderation queue for unapproved listings
- `/admin/platforms`: Platform and default referral link management
- `/admin/sources`: Authorized connector configuration and manual run triggers
- `/admin/referrals`: Referral link audit, allowed domains, and health check
- `/admin/analytics`: Real referral click analytics and performance metrics
- `/admin/users`: Admin user role management (`owner`, `admin`, `editor`, `reviewer`)
- `/admin/audit-logs`: Immutable log of administrative mutations

---

## 6. Global Eligibility & Currency Model

- **Eligibility Values:**
  - `worldwide`: Confirmed open to contributors in all nations.
  - `selected_countries`: Restricted to explicit ISO 3166-1 alpha-2 country codes.
  - `not_confirmed`: Source does not specify; clearly marked to visitors.
  - `restricted`: Excludes specified countries or regions.
- **Currencies:** Stored using ISO 4217 standard codes (e.g., `USD`, `EUR`, `GBP`, `CAD`). Never conflate currencies or convert without transparent rate context.
- **Pay Periods:** `hour`, `day`, `week`, `month`, `year`, `task`, `fixed`, `unknown`. Displayed alongside pay min/max.

---

## 7. Data Privacy & Operational Integrity

- **Click Tracking:** Logs job ID, platform ID, timestamp, and anonymous session hash. Full IP addresses are never permanently retained.
- **Open Redirect Prevention:** Referral URLs must match strict HTTPS schemes and belong to the platform's pre-approved domain allowlist.
- **Auditability:** Every administrative decision, job edit, referral URL update, and status change is recorded in `admin_audit_logs`.

