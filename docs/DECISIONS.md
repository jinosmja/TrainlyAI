# Architecture Decision Records (ADRs) — TrainlyAI

This document records the architectural and engineering decisions made for the **TrainlyAI** platform.

---

### ADR-001: Adoption of Next.js 15+ App Router and TypeScript
- **Status:** Accepted
- **Context:** The platform requires high-performance, SEO-optimized public pages (SSR/SSG), coupled with a dynamic, secure, authenticated admin portal and internal API route handlers.
- **Decision:** Use Next.js App Router with strict TypeScript across the entire project.
- **Consequences:** Eliminates context switching between separate backend and frontend projects. Ensures type sharing across database schemas, validation models, UI components, and API routes.

---

### ADR-002: UI Component Architecture with Tailwind CSS & shadcn/ui
- **Status:** Accepted
- **Context:** The application needs a polished, modern, highly accessible, and responsive user experience that works across mobile, tablet, and desktop without bulky opinionated frameworks.
- **Decision:** Use Tailwind CSS for utility styling paired with Radix UI / shadcn/ui unstyled accessible primitives and Lucide React icons.
- **Consequences:** Code ownership of UI components without runtime CSS-in-JS overhead. High accessibility (WCAG AA compliant) with built-in keyboard navigation.

---

### ADR-003: Supabase for PostgreSQL, Authentication, and Row-Level Security (RLS)
- **Status:** Accepted
- **Context:** Need a relational database with strong integrity constraints, built-in user authentication, and granular data access controls for public visitors vs. administrative users.
- **Decision:** Utilize Supabase PostgreSQL with RLS enabled on all tables, paired with Supabase Auth for admin sessions.
- **Consequences:** Eliminates separate auth and database infrastructure management. Enforces defense-in-depth where anonymous visitors are physically prevented by database policies from accessing private source URLs, affiliate secrets, or unapproved draft jobs.

---

### ADR-004: Centralized Referral Routing via `/out/[jobSlug]` & Single "Apply Now" Action
- **Status:** Accepted
- **Context:** Monetization and affiliate attribution require reliable click measurement and routing. Showing multiple application buttons or exposing raw source links degrades attribution and confuses visitors.
- **Decision:** Every public job card and detail page contains exactly one primary application button: **Apply Now**. This button strictly targets the internal endpoint `/out/[jobSlug]`, which logs the click and returns a temporary redirect (`302/307`) to the verified referral destination. Direct source URLs are kept private in the database and admin dashboard.
- **Consequences:** Guarantees 100% affiliate attribution path integrity. Prevents external platforms from being scraped via our public URLs. Ensures invalid or unapproved referral links can be intercepted safely before redirecting.

---

### ADR-005: Mandatory Human Review Queue for all Ingested Jobs
- **Status:** Accepted
- **Context:** Automated discovery can pull inaccurate, expired, duplicate, or misclassified listings. Inaccurate or low-quality listings damage platform credibility.
- **Decision:** All jobs discovered by background connectors or external inputs are assigned a `pending_review` status. Zero automated publishing is permitted.
- **Consequences:** Guarantees quality control and protects against spam or fake job listings. Requires an admin review step before any job is publicly indexed or searchable.

---

### ADR-006: Inngest for Background Workflows and Job Scheduling
- **Status:** Accepted
- **Context:** Job discovery, status rechecks, and duplicate checks require reliable scheduled execution, retry semantics with exponential backoff, and concurrency control.
- **Decision:** Use Inngest serverless workflows instead of ad-hoc cron scripts or self-managed background workers.
- **Consequences:** Resilient, testable background tasks with automatic step retries, observability, and concurrency limiting without managing long-running worker servers.

---

### ADR-007: ISO Standards for Country, Currency, and Locale Independence
- **Status:** Accepted
- **Context:** The platform is global from day one. Job seekers come from every continent, and compensation structures vary widely.
- **Decision:** 
  - Countries and territories must use ISO 3166-1 alpha-2 codes.
  - Currencies must use ISO 4217 standard codes.
  - Timestamps stored in UTC.
  - No country or region (e.g., US, UK, or Sri Lanka) will be hardcoded as a default or ranked higher without explicit user filtering.
- **Consequences:** Clean internationalization foundation. Prevents currency conversion confusion or misleading pay comparisons.

---

### ADR-008: Privacy-Conscious Click Tracking
- **Status:** Accepted
- **Context:** Transparent analytics are needed to evaluate platform performance, but user privacy must be respected in accordance with global data protection standards (GDPR, CCPA).
- **Decision:** Click tracking records job ID, platform ID, timestamp, and an anonymous session hash. Full IP addresses are never permanently retained or stored in the database.
- **Consequences:** High privacy compliance with low regulatory liability, while providing actionable aggregate metrics for operators.

---

### ADR-009: Strict Source Authorization Gate & No Scraping Behind Logins
- **Status:** Accepted
- **Context:** Collecting job listings must comply with ethical guidelines, platform terms, and copyright/API agreements.
- **Decision:** No connector may be enabled without documented source authorization (API, permitted feed, or official public board). Anti-bot bypass, CAPTCHA defeating, and scraping behind authenticated sessions are strictly prohibited.
- **Consequences:** Ensures long-term platform viability, legal compliance, and positive partner relationships.

---

### ADR-010: Transparent Referral Disclosure
- **Status:** Accepted
- **Context:** Commercial disclosure laws (such as FTC guidelines) require clear and conspicuous disclosure when links generate compensation.
- **Decision:** Maintain a dedicated `/referral-disclosure` page, display disclosure notices in the footer across all public views, and present a disclosure note near the primary application action.
- **Consequences:** Builds trust with users and ensures full compliance with consumer protection standards.

