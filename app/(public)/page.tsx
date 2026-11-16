import Link from "next/link";
import {
  Sparkles,
  Search,
  Briefcase,
  ShieldCheck,
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  Code2,
  BookOpen,
  Languages,
  Brain,
  DollarSign,
  ChevronRight,
  MapPin,
  HelpCircle,
  AlertCircle,
  ExternalLink,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const POPULAR_CATEGORIES = [
  {
    name: "AI Model Evaluation",
    slug: "ai-evaluation",
    description: "Grade model responses for safety, factual accuracy, and reasoning quality.",
    icon: Brain,
    rolesCount: "Active Opportunities",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "LLM & AI Trainers",
    slug: "ai-trainer",
    description: "Train foundational models through complex multi-turn reasoning and chain-of-thought.",
    icon: Sparkles,
    rolesCount: "Active Opportunities",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/40",
  },
  {
    name: "Data Annotation & Labelling",
    slug: "data-annotation",
    description: "Multi-modal text, audio, image, and video classification and bounding tasks.",
    icon: Layers,
    rolesCount: "Active Opportunities",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/40",
  },
  {
    name: "Coding & Software Experts",
    slug: "coding-and-software",
    description: "Author benchmarks, write synthetic unit tests, and evaluate code generation.",
    icon: Code2,
    rolesCount: "Active Opportunities",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    name: "Subject-Matter Experts",
    slug: "subject-matter-experts",
    description: "Mathematics, physics, law, medicine, finance, and engineering specialists.",
    icon: BookOpen,
    rolesCount: "Active Opportunities",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/40",
  },
  {
    name: "Language & Translation",
    slug: "language-and-translation",
    description: "Evaluate multi-language nuance, regional dialects, and cultural alignment.",
    icon: Languages,
    rolesCount: "Active Opportunities",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-50 dark:bg-sky-950/40",
  },
];

const FEATURED_JOBS = [
  {
    slug: "senior-ai-evaluator-general-reasoning",
    title: "Senior AI Evaluator — General Reasoning & Fact-Checking",
    platform: "DataAnnotation",
    workArrangement: "Remote",
    countryEligibility: "Worldwide",
    eligibilityType: "worldwide" as const,
    payMin: 20,
    payMax: 40,
    payCurrency: "USD",
    payPeriod: "hour",
    category: "AI Evaluation",
    skills: ["Critical Thinking", "Fact Checking", "Linguistics"],
    verifiedDate: "Verified by Moderator",
    summary: "Analyze model completions for factual correctness, logical coherence, and safety boundaries across benchmark tasks.",
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
    skills: ["Python", "Algorithms", "Unit Testing"],
    verifiedDate: "Verified by Moderator",
    summary: "Review AI-generated code snippets, write comprehensive test cases, and create reasoning prompts for frontier coding models.",
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
    verifiedDate: "Verified by Moderator",
    summary: "Evaluate conversational AI safety, regional nuances, and dialect fidelity across global contributor pools.",
  },
];

const PLATFORMS_SPOTLIGHT = [
  { name: "Mercor", domain: "mercor.com", tag: "Engineering & General AI", roles: "Open Roles" },
  { name: "Outlier", domain: "outlier.ai", tag: "Domain Experts & Coding", roles: "Open Roles" },
  { name: "DataAnnotation", domain: "dataannotation.tech", tag: "Evaluation & Tasks", roles: "Open Roles" },
  { name: "Micro1", domain: "micro1.ai", tag: "Tech Specialists", roles: "Open Roles" },
  { name: "TELUS AI", domain: "telusinternational.ai", tag: "Global Contributors", roles: "Open Roles" },
  { name: "Alignerr", domain: "alignerr.com", tag: "Expert Model Alignment", roles: "Open Roles" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      {/* 1. Hero Section — Swiss Hierarchy with AI-Native Luminous Search */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-background to-background py-16 md:py-24">
        {/* Subtle background ambient ring */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

        <Container size="default" className="relative">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Discover. Train. Earn.</span>
              <span className="h-1 w-1 rounded-full bg-teal-500" />
              <span className="text-muted-foreground font-normal">Global AI Directory</span>
            </div>

            {/* Swiss Editorial Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground text-balance">
              Global AI Training & Career Opportunities
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              Discover legitimate remote and location-specific opportunities in AI model evaluation, LLM training, data annotation, and domain expertise worldwide.
            </p>

            {/* AI-Native Search Interface */}
            <div className="pt-2 max-w-2xl mx-auto">
              <form action="/jobs" method="GET" className="relative flex items-center shadow-bento rounded-xl">
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  name="q"
                  placeholder="Search by role, skill (e.g. Python, Math, Biology), or platform..."
                  className="h-14 w-full rounded-xl border border-input bg-card pl-12 pr-36 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  size="default"
                  className="absolute right-2 h-10 px-5 font-semibold shadow-xs"
                >
                  Search Jobs
                </Button>
              </form>

              {/* Quick Filter Tags (Micro-interactions) */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/80 flex items-center gap-1">
                  <SlidersHorizontal className="h-3 w-3 text-teal-600" />
                  Popular:
                </span>
                <Link
                  href="/jobs?category=ai-evaluation"
                  className="rounded-md bg-card border border-border px-2.5 py-1 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:text-primary transition-all duration-150"
                >
                  AI Evaluator
                </Link>
                <Link
                  href="/jobs?category=ai-trainer"
                  className="rounded-md bg-card border border-border px-2.5 py-1 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:text-primary transition-all duration-150"
                >
                  LLM Reasoning
                </Link>
                <Link
                  href="/jobs?eligibility=worldwide"
                  className="rounded-md bg-card border border-border px-2.5 py-1 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:text-primary transition-all duration-150"
                >
                  Remote Worldwide
                </Link>
                <Link
                  href="/jobs?category=coding-and-software"
                  className="rounded-md bg-card border border-border px-2.5 py-1 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:text-primary transition-all duration-150"
                >
                  Python Coding
                </Link>
              </div>
            </div>

            {/* Core Trust Indicators — Inclusive Design (#8, #17) */}
            <div className="pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="flex items-start gap-2.5 bento-card-compact bg-card">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">100% Human Verified</div>
                  <div className="text-[11px] text-muted-foreground">Every listing manually vetted</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bento-card-compact bg-card">
                <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Global From Day One</div>
                  <div className="text-[11px] text-muted-foreground">Universal ISO 3166-1 filters</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bento-card-compact bg-card">
                <DollarSign className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Transparent Pay</div>
                  <div className="text-[11px] text-muted-foreground">Confirmed rates & periods</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bento-card-compact bg-card">
                <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Zero Bot Scrapes</div>
                  <div className="text-[11px] text-muted-foreground">Ethical permission gates</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Bento Box Grid Showcase (#39) — Key Ecosystem Modules */}
      <section className="py-16 md:py-20 border-b border-border bg-slate-50/50 dark:bg-slate-950/30">
        <Container size="default">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
              Platform Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Built for Global AI Contributors
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Structured discovery designed to eliminate the ambiguity of freelance and contract AI compensation.
            </p>
          </div>

          {/* Bento Grid: 4 Asymmetrical Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 (Span 2): Featured Role Live Spotlight */}
            <div className="md:col-span-2 bento-card bg-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 px-2.5 py-0.5 text-xs font-semibold">
                      <Sparkles className="h-3 w-3 text-teal-600" />
                      Featured Opportunity
                    </span>
                    <Badge variant="worldwide" className="gap-1 text-xs">
                      <Globe className="h-3 w-3" />
                      Worldwide
                    </Badge>
                  </div>
                  <span className="text-xs font-mono font-bold text-foreground">
                    $20 - $40 USD / hour
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    Senior AI Evaluator — General Reasoning & Logic
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                    Benchmark frontier large language models on factual correctness, logical coherence, and safety boundaries. Flexible hours (15–40 hrs/wk) from anywhere in the world.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Critical Thinking", "Fact Checking", "Writing", "Linguistics"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Platform: DataAnnotation • Verified Recently</span>
                </div>
                <Link href="/jobs/senior-ai-evaluator-general-reasoning">
                  <Button size="sm" className="font-semibold gap-1.5">
                    <span>View Role Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Bento Card 2: Global Eligibility Standards */}
            <div className="bento-card bg-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Globe className="h-4 w-4" />
                  <span>Eligibility Model</span>
                </div>
                <h3 className="text-base font-bold text-foreground">Clear Country Rules</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every listing states clear country eligibility, backed by verified platform evidence:
                </p>

                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/60 border border-border/80">
                    <Badge variant="worldwide" className="text-[10px]">Worldwide</Badge>
                    <span className="text-[11px] text-muted-foreground">Confirmed for all countries</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/60 border border-border/80">
                    <Badge variant="selected" className="text-[10px]">Selected</Badge>
                    <span className="text-[11px] text-muted-foreground">Specific country lists only</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/60 border border-border/80">
                    <Badge variant="unconfirmed" className="text-[10px]">Not Confirmed</Badge>
                    <span className="text-[11px] text-muted-foreground">Never falsely assumed</span>
                  </div>
                </div>
              </div>

              <Link href="/about" className="pt-4 text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                Learn our verification policy <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Popular Categories (Bento Grid) */}
      <section className="py-16 md:py-20 bg-background border-b border-border">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
                Domain Specializations
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Explore by AI Job Category
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                From prompt evaluation to university-level mathematics and coding benchmark authoring.
              </p>
            </div>
            <Link href="/categories">
              <Button variant="outline" size="sm" className="gap-1.5 font-semibold text-xs">
                <span>View All Categories</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.slug} href={`/jobs?category=${cat.slug}`} className="group">
                  <div className="bento-card h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.bgColor} ${cat.color} group-hover:scale-105 transition-transform`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-0.5">
                          Browse <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Human Verified
                      </span>
                      <span>Verified Listings</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Latest Verified Opportunities — Bento Job Cards */}
      <section className="py-16 md:py-20 bg-slate-50/50 dark:bg-slate-950/30 border-b border-border">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Moderation Approved
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Latest AI Training Opportunities
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Approved by human moderators with verified platform referral routing.
              </p>
            </div>
            <Link href="/jobs">
              <Button size="sm" className="font-semibold gap-1.5 shadow-xs">
                <span>Browse Full Directory</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FEATURED_JOBS.map((job) => (
              <div key={job.slug} className="bento-card bg-card flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground px-2.5 py-1 rounded-md bg-muted border border-border">
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
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <Link href={`/jobs/${job.slug}`}>
                      <h3 className="text-base font-bold text-foreground leading-snug hover:text-primary transition-colors line-clamp-2">
                        {job.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-2">
                      {job.summary}
                    </p>
                  </div>

                  {/* Compensation Display */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-border flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground font-medium">Stated Rate:</span>
                    <div className="text-sm font-extrabold text-foreground font-mono">
                      ${job.payMin} - ${job.payMax} {job.payCurrency}
                      <span className="text-xs font-normal text-muted-foreground font-sans ml-1">/ {job.payPeriod}</span>
                    </div>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Single Mandatory Apply Now Action */}
                <div className="pt-4 mt-6 border-t border-border flex items-center justify-between gap-3">
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>{job.verifiedDate}</span>
                  </div>

                  {/* Mandatory single Apply Now action routing through /out/[jobSlug] */}
                  <Link href={`/out/${job.slug}`}>
                    <Button size="sm" className="font-semibold shadow-xs">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Platform Ecosystem Directory Spotlight */}
      <section className="py-16 md:py-20 bg-background border-b border-border">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Verified Partner Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Opportunities from Trusted AI Companies
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Discover opportunities across vetted platforms advancing foundational models and specialized AI systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PLATFORMS_SPOTLIGHT.map((platform) => (
              <div
                key={platform.name}
                className="bento-card-compact bg-card p-4 text-center flex flex-col items-center justify-center space-y-2 hover:border-primary/40 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-sm">
                  {platform.name.charAt(0)}
                </div>
                <div className="text-sm font-bold text-foreground">{platform.name}</div>
                <div className="text-[10px] text-muted-foreground leading-tight">
                  {platform.tag}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/platforms">
              <Button variant="outline" size="sm" className="font-semibold text-xs gap-1.5">
                <span>Explore Full Platforms Directory</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. How It Works (Bento Process Flow) */}
      <section className="py-16 md:py-20 bg-slate-50/50 dark:bg-slate-950/30">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-primary">
              Ethical Moderation Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              How TrainlyAI Connects You
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Every job is reviewed by human moderators before entering our public catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card bg-card space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-sm shadow-xs">
                1
              </div>
              <h3 className="text-base font-bold text-foreground">Discover & Filter</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Search verified AI opportunities by domain expertise, programming language, required spoken language, and country eligibility.
              </p>
            </div>

            <div className="bento-card bg-card space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white font-black text-sm shadow-xs">
                2
              </div>
              <h3 className="text-base font-bold text-foreground">Review Eligibility & Pay</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Inspect confirmed pay ranges, workload requirements, and geographic restrictions verified by our moderation team.
              </p>
            </div>

            <div className="bento-card bg-card space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-sm shadow-xs">
                3
              </div>
              <h3 className="text-base font-bold text-foreground">Apply Confidently</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click Apply Now to route safely through our verified referral link directly to the hiring platform&apos;s application page.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
