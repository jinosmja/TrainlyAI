# External Credentials, Accounts & Services Setup — TrainlyAI

This document outlines the external services, credentials, and permissions required to build, test, and deploy **TrainlyAI**.

---

## 1. Credentials Matrix

| Service | Environment Variables | Purpose | Required For Phase | Can Mock/Local First? |
|---|---|---|---|---|
| **Supabase** | `NEXT_PUBLIC_SUPABASE_URL`<br>`NEXT_PUBLIC_SUPABASE_ANON_KEY`<br>`SUPABASE_SERVICE_ROLE_KEY` | PostgreSQL database, Auth, Storage, Row-Level Security | Phase 2+ | Yes (Supabase local CLI or mock client in Phase 1) |
| **Inngest** | `INNGEST_EVENT_KEY`<br>`INNGEST_SIGNING_KEY` | Scheduled workflows (job discovery, status refresh) | Phase 8+ | Yes (Inngest Dev Server runs locally without keys) |
| **Resend** | `RESEND_API_KEY`<br>`ADMIN_NOTIFICATION_EMAIL` | Transactional email for admin alerts | Phase 11+ | Yes (console log provider for local testing) |
| **AI Enrichment** *(Optional)* | `AI_PROVIDER_API_KEY`<br>`AI_PROVIDER_MODEL` | Category suggestions, skill extraction | Phase 10 | Yes (deterministic fallback implemented first) |
| **Sentry** *(Optional)* | `SENTRY_DSN`<br>`NEXT_PUBLIC_SENTRY_DSN` | Exception and crash monitoring | Phase 13 | Yes (optional) |
| **Hosting & Domain** | `NEXT_PUBLIC_APP_URL` | Vercel deployment, Custom domain DNS | Phase 13 | Yes (runs on `http://localhost:3000` locally) |

---

## 2. Service Details & Acquisition Steps

### 2.1 Supabase
- **What it provides:** Managed PostgreSQL 15+, Supabase Auth with secure JWT cookies, Row-Level Security (RLS).
- **How to obtain:**
  1. Create a free account at [supabase.com](https://supabase.com).
  2. Create a new project named `TrainlyAI-dev` (and later `TrainlyAI-prod`).
  3. Navigate to **Project Settings -> API** to retrieve:
     - Project URL (`NEXT_PUBLIC_SUPABASE_URL`)
     - Anon/Public Key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
     - Service Role Key (`SUPABASE_SERVICE_ROLE_KEY` — *Keep secret! Never commit or expose to client*)
- **Alternative for local development:** Supabase CLI with Docker (`npx supabase init && npx supabase start`).

### 2.2 Inngest
- **What it provides:** Durable workflow execution, scheduled cron triggers for automated connectors, exponential backoff retries.
- **Local Dev:** The local Inngest development server (`npx inngest-cli@latest dev`) works without signing keys or external accounts.
- **Production Setup:**
  1. Create account at [inngest.com](https://inngest.com).
  2. Create an Inngest app for `TrainlyAI`.
  3. Retrieve `INNGEST_EVENT_KEY` and `INNGEST_SIGNING_KEY`.

### 2.3 Resend
- **What it provides:** Transactional email delivery for admin moderation alerts.
- **How to obtain:**
  1. Create account at [resend.com](https://resend.com).
  2. Verify your custom sending domain (e.g., `mail.trainlyai.com`).
  3. Generate an API Key with sending permissions (`RESEND_API_KEY`).

### 2.4 External Platform Referral Accounts & Authorized Data Sources
To publish and monetize listings, partner agreements or referral program memberships are needed from platforms such as:
- Mercor, Micro1, Outlier, DataAnnotation, TELUS International AI, OneForma, Alignerr, Mindrift.
- **Permission Requirements:**
  - Verify that commercial referral linking is permitted.
  - Record the authorized domain for each platform (e.g., `https://outlier.ai/...`, `https://dataannotation.tech/...`).
  - Document approved public feeds or APIs (no scraping behind logins).

---

## 3. Immediate Action Items for the Project Owner

For Phase 1 and local development, **no paid credentials or external subscriptions are blocking us right now**. We can build the scaffold, design system, types, and mock fixtures locally.

When ready to connect the database in Phase 2:
1. Provide a Supabase project URL and API keys (or indicate if you prefer local Supabase CLI).

