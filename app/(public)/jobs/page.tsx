import Link from "next/link";
import {
  Search,
  Filter,
  Globe,
  DollarSign,
  CheckCircle2,
  RotateCcw,
  MapPin,
  HelpCircle,
  Briefcase,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ALL_JOBS = [
  {
    slug: "senior-ai-evaluator-general-reasoning",
    title: "Senior AI Evaluator — General Reasoning",
    platform: "DataAnnotation",
    workArrangement: "Remote",
    countryEligibility: "Worldwide",
    eligibilityType: "worldwide" as const,
    payMin: 20,
    payMax: 40,
    payCurrency: "USD",
    payPeriod: "hour",
    category: "AI Model Evaluation",
    skills: ["Critical Thinking", "Fact Checking", "Writing"],
    verifiedDate: "Verified 2 days ago",
    summary:
      "Evaluate large language model responses for truthfulness, reasoning accuracy, logical consistency, and helpfulness across multifaceted benchmarks.",
  },
  {
    slug: "python-code-evaluator-ai-trainer",
    title: "Python Software Specialist — AI Model Training",
    platform: "Outlier",
    workArrangement: "Remote",
    countryEligibility: "Selected countries",
    eligibilityType: "selected" as const,
    payMin: 35,
    payMax: 55,
    payCurrency: "USD",
    payPeriod: "hour",
    category: "Coding & Software",
    skills: ["Python", "Algorithms", "Code Review"],
    verifiedDate: "Verified yesterday",
    summary:
      "Review generated code snippets, write comprehensive unit tests, and author multi-turn reasoning prompts to advance frontier coding models.",
  },
  {
    slug: "multilingual-ai-safety-reviewer",
    title: "Multilingual AI Safety & Localization Reviewer",
    platform: "Mercor",
    workArrangement: "Remote",
    countryEligibility: "Worldwide",
    eligibilityType: "worldwide" as const,
    payMin: 18,
    payMax: 30,
    payCurrency: "USD",
    payPeriod: "hour",
    category: "Language & Translation",
    skills: ["Bilingual", "Cultural Nuance", "Content Moderation"],
    verifiedDate: "Verified today",
    summary:
      "Assess language safety, cultural appropriateness, and dialect subtleties across regional AI chat outputs.",
  },
  {
    slug: "stem-math-science-ai-trainer",
    title: "STEM AI Trainer — Advanced Mathematics & Physics",
    platform: "Alignerr",
    workArrangement: "Remote",
    countryEligibility: "Selected countries",
    eligibilityType: "selected" as const,
    payMin: 40,
    payMax: 65,
    payCurrency: "USD",
    payPeriod: "hour",
    category: "Subject-Matter Experts",
    skills: ["Calculus", "Linear Algebra", "Physics", "LaTeX"],
    verifiedDate: "Verified 3 days ago",
    summary:
      "Solve advanced university-level STEM problems with rigorous step-by-step mathematical proofs and evaluate automated model solutions.",
  },
];

export default function JobsPage() {
  return (
    <div className="py-10 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="default">
        {/* Page Title & Search Header */}
        <div className="space-y-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
              <Globe className="h-3.5 w-3.5" />
              <span>Universal Job Directory</span>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
              Discover AI Training & Evaluation Roles
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
              Explore verified freelance and contract AI opportunities worldwide. Every listing is reviewed by human moderators before publication.
            </p>
          </div>

          {/* Search Bar - Swiss Precision with AI-Native Luminous Ring */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="relative flex-1 shadow-xs">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs by keyword, required skill, or platform..."
                className="h-10 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <Button className="font-semibold shadow-xs shrink-0 text-xs">
              Apply Filters
            </Button>
            <Link href="/jobs">
              <Button variant="outline" className="gap-1.5 shrink-0 text-xs w-full sm:w-auto">
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Filters
              </Button>
            </Link>
          </div>
        </div>

        {/* Layout: Bento Filter Sidebar + Bento Job List */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            <div className="bento-card-compact bg-card space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <Filter className="h-3.5 w-3.5 text-primary" />
                  Filter Roles
                </span>
                <span className="text-[11px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                  4 active
                </span>
              </div>

              {/* Country Eligibility Filter (Mandatory Indicator Section) */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                  <Globe className="h-3 w-3 text-primary" />
                  Country Eligibility
                </label>
                <div className="space-y-2 text-xs text-foreground/90">
                  {[
                    { label: "Worldwide (Confirmed)", variant: "worldwide" as const, desc: "Open to all countries" },
                    { label: "Selected Countries Only", variant: "selected" as const, desc: "Specific location list" },
                    { label: "Not Confirmed", variant: "unconfirmed" as const, desc: "Pending source check" },
                  ].map((elig) => (
                    <label key={elig.label} className="flex items-start gap-2.5 cursor-pointer hover:text-foreground group">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-4 w-4 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">{elig.label}</div>
                        <div className="text-[10px] text-muted-foreground">{elig.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-2.5 pt-4 border-t border-border">
                <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                  <Briefcase className="h-3 w-3 text-teal-600" />
                  Category
                </label>
                <div className="space-y-1.5 text-xs text-foreground/80">
                  {["AI Model Evaluation", "LLM & AI Trainers", "Data Annotation", "Coding & Software", "Subject-Matter Experts", "Language & Translation"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5" />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Work Arrangement Filter */}
              <div className="space-y-2.5 pt-4 border-t border-border">
                <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                  Work Arrangement
                </label>
                <div className="space-y-1.5 text-xs text-foreground/80">
                  {["Remote (Anywhere)", "Hybrid / Regional", "Onsite"].map((arr) => (
                    <label key={arr} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5" />
                      <span>{arr}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Platform Filter */}
              <div className="space-y-2.5 pt-4 border-t border-border">
                <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                  <Layers className="h-3 w-3 text-indigo-600" />
                  Platform
                </label>
                <div className="space-y-1.5 text-xs text-foreground/80">
                  {["DataAnnotation", "Outlier", "Mercor", "Alignerr", "Micro1", "TELUS AI"].map((plat) => (
                    <label key={plat} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5" />
                      <span>{plat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Job List Results — Bento Cards */}
          <main className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
              <span>Showing 4 verified AI opportunities</span>
              <span className="font-medium">Sorted by: Recently Verified</span>
            </div>

            <div className="space-y-4">
              {ALL_JOBS.map((job) => (
                <div key={job.slug} className="bento-card bg-card flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Top Row: Platform, Eligibility Badge & Compensation */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-foreground px-2.5 py-0.5 rounded-md bg-muted border border-border">
                          {job.platform}
                        </span>
                        <Badge
                          variant={job.eligibilityType === "worldwide" ? "worldwide" : "selected"}
                          className="gap-1 text-xs"
                        >
                          {job.eligibilityType === "worldwide" ? (
                            <Globe className="h-3 w-3" />
                          ) : (
                            <MapPin className="h-3 w-3" />
                          )}
                          {job.countryEligibility}
                        </Badge>
                        <span className="text-xs text-muted-foreground">• {job.workArrangement}</span>
                      </div>
                      
                      <div className="text-sm font-extrabold text-foreground font-mono">
                        ${job.payMin} - ${job.payMax} {job.payCurrency}
                        <span className="text-xs font-normal text-muted-foreground font-sans ml-1">/ {job.payPeriod}</span>
                      </div>
                    </div>

                    {/* Job Title */}
                    <Link href={`/jobs/${job.slug}`}>
                      <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                    </Link>

                    {/* Summary */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {job.summary}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-muted px-2.5 py-0.5 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Single Apply Now Action */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{job.verifiedDate}</span>
                    </div>

                    {/* Non-negotiable: Single Apply Now action strictly routing through /out/[jobSlug] */}
                    <Link href={`/out/${job.slug}`}>
                      <Button size="sm" className="font-semibold shadow-xs">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
