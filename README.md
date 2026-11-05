# TrainlyAI

> **Discover. Train. Earn.**  
> Global AI Training & Career Opportunities

TrainlyAI is a production-minded global platform designed to discover and aggregate legitimate remote and location-specific AI opportunities—including AI trainer, model evaluator, data annotation, and subject-matter expert roles worldwide.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15+ (App Router)](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Components:** [shadcn/ui](https://ui.shadcn.com) & [Radix UI](https://www.radix-ui.com)
- **Icons:** [Lucide React](https://lucide.dev)
- **Database:** [Supabase PostgreSQL](https://supabase.com)
- **Authentication:** Supabase Auth + Row-Level Security (RLS)
- **Workflows:** [Inngest](https://www.inngest.com)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js:** v18.17+ or v20+ / v25+
- **npm:** v9+

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Installation
Install dependencies:
```bash
npm install
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the public site.

---

## 📋 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| **dev** | `npm run dev` | Start local development server |
| **build** | `npm run build` | Build optimized production bundle |
| **start** | `npm run start` | Run production server |
| **lint** | `npm run lint` | Run ESLint checks |
| **typecheck** | `npm run typecheck` | Run TypeScript type checking (`tsc --noEmit`) |

---

## 🧭 Architecture Highlights

- **Global from Day One:** Zero country favoritism. Universal ISO standard codes for countries (`ISO 3166-1`) and currencies (`ISO 4217`).
- **Single "Apply Now" Action:** All public job application buttons route strictly through `/out/[jobSlug]`, tracking referral clicks and redirecting safely. Original source links and sensitive affiliate tokens remain private.
- **Mandatory Human Review:** All ingested opportunities enter `pending_review` status. Zero automated publishing.
- **Privacy-Conscious Analytics:** No raw IP addresses stored; minimal operational event data only.

---

## 📄 Documentation

- [Product Specification (`docs/PRODUCT_SPEC.md`)](docs/PRODUCT_SPEC.md)
- [Implementation Plan (`docs/IMPLEMENTATION_PLAN.md`)](docs/IMPLEMENTATION_PLAN.md)
- [Architecture Decisions (`docs/DECISIONS.md`)](docs/DECISIONS.md)
- [Credentials & Setup Guide (`docs/CREDENTIALS_AND_EXTERNAL_SETUP.md`)](docs/CREDENTIALS_AND_EXTERNAL_SETUP.md)

