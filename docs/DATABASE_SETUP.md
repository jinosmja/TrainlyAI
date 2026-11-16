# TrainlyAI — Database Setup & Migration Guide

This document describes the PostgreSQL database architecture, schema migrations, Row-Level Security (RLS) policies, and seed data for **TrainlyAI**.

---

## 1. Architecture & Security Model

TrainlyAI uses **Supabase PostgreSQL 15+** with defense-in-depth isolation:
1. **Public Queries**: Anonymous and public visitors interact only with approved, published opportunities and active platforms. Public views (`public_jobs`, `public_platforms`) strictly omit private operational fields (`source_url`, `referral_url_override`, `rejection_reason`, and `default_referral_url`).
2. **Mandatory Referral Obfuscation**: The outbound redirect route (`/out/[jobSlug]`) resolves destinations server-side via the `resolve_referral_destination(slug)` PostgreSQL function. Raw destination URLs and affiliate tags are never embedded into public page HTML.
3. **Immutable Audit Logs**: The `admin_audit_logs` table has a database trigger that disallows `UPDATE` and `DELETE` operations, creating a permanent ledger of system mutations.
4. **Row-Level Security (RLS)**: Enabled across all 11 tables. Only authenticated users with an active record in `admin_profiles` can access moderation, configuration, and telemetry data.

---

## 2. Directory Structure

```
supabase/
├── migrations/
│   ├── 00001_initial_schema.sql       # Core tables, constraints, enums, indexes, triggers
│   ├── 00002_row_level_security.sql   # RLS enablement and granular role policies
│   └── 00003_public_views.sql         # Public-safe views and secure referral resolver function
└── seed.sql                           # Development seed data (categories, platforms, jobs, feeds)
```

---

## 3. Core Tables Summary

| Table | Description | Access Rules |
|---|---|---|
| `platforms` | Partner platforms with allowed domain whitelists and referral statuses | Public: `is_active=true` (referral URLs hidden); Admin: Full |
| `job_categories` | Hierarchical AI job categories | Public: `is_active=true`; Admin: Full |
| `jobs` | Canonical job records with country eligibility, compensation, and review state | Public: `status='approved'` & published only; Admin: Full |
| `job_sources` | Ingestion connector configurations and ethical permission review gates | Admin only (zero public access) |
| `job_source_records` | Ingestion provenance, external IDs, and content fingerprints for deduplication | Admin only (zero public access) |
| `job_status_history` | Audit trail of all status transitions (`pending_review` -> `approved`, etc.) | Admin only |
| `referral_click_events`| Privacy-conscious referral telemetry measured strictly via `/out/[jobSlug]` | Public: Insert only; Admin: Read analytics |
| `admin_profiles` | RBAC profiles (`owner`, `admin`, `editor`, `reviewer`) tied to Supabase Auth | Admin only (`owner`/`admin` manage) |
| `admin_audit_logs` | Immutable operational ledger | Admin: Read & Append only (mutations rejected by trigger) |
| `automation_runs` | Background Inngest sync executions, item counters, and error summaries | Admin only |
| `job_submissions` | Candidate/public job suggestions queue with rate limiting | Public: Insert pending; Admin: Full |

---

## 4. How to Apply Migrations

### Option A: Via Supabase CLI (Recommended for Local Dev & CI)

1. **Install Supabase CLI** (if not already installed):
   ```bash
   npx supabase --version
   ```
2. **Initialize & Start Local Database** (requires Docker):
   ```bash
   npx supabase start
   ```
3. **Apply Migrations and Seed Data**:
   ```bash
   npx supabase db reset
   ```
   *This automatically applies all files in `supabase/migrations/` in numerical order, followed by `supabase/seed.sql`.*

### Option B: Via Supabase Web Dashboard (Hosted Project)

1. Open your project on [supabase.com](https://supabase.com).
2. Go to **SQL Editor -> New Query**.
3. Copy and run the contents of each file in this exact sequence:
   - `supabase/migrations/00001_initial_schema.sql`
   - `supabase/migrations/00002_row_level_security.sql`
   - `supabase/migrations/00003_public_views.sql`
4. (Optional for development) Run `supabase/seed.sql` to populate realistic test data.

---

## 5. TypeScript Database Types

Database definitions are maintained in:
- `lib/supabase/types.ts`

These types match the schema definitions, enabling full TypeScript compilation and autocomplete when querying with the Supabase client:
```typescript
import { createClient } from '@/lib/supabase/server';

const supabase = await createClient();
const { data: jobs, error } = await supabase
  .from('public_jobs')
  .select('*')
  .order('published_at', { ascending: false });
```

---

## 6. Client Helper Architecture

- `lib/supabase/client.ts` — Browser client for client-side components (`createBrowserClient` from `@supabase/ssr`).
- `lib/supabase/server.ts` — Server client for Next.js App Router Server Components and Route Handlers (`createServerClient` from `@supabase/ssr`).
- `lib/supabase/admin.ts` — Privileged service-role client for background automation and internal redirects. Throws an error if called in a browser bundle.
- `lib/supabase/middleware.ts` — Session validation and token refreshing in Next.js middleware.
