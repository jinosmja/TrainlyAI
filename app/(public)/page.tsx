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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const POPULAR_CATEGORIES = [
  {
    name: "AI Model Evaluation",
    slug: "ai-evaluation",
    description: "Grade model responses for safety, factual accuracy, and helpfulness.",
    icon: Brain,
    countLabel: "Active roles",
  },
  {
    name: "LLM & AI Trainers",
    slug: "ai-trainer",
    description: "Train foundational models through complex reasoning and chain-of-thought.",
    icon: Sparkles,
    countLabel: "Active roles",
  },
  {
    name: "Data Annotation & Labelling",
    slug: "data-annotation",
    description: "Multi-modal text, audio, and visual classification tasks.",
    icon: Layers,
    countLabel: "Active roles",
  },
  {
    name: "Coding & Software Experts",
    slug: "coding-and-software",
    description: "Author benchmarks, write synthetic unit tests, and evaluate code generation.",
    icon: Code2,
    countLabel: "Active roles",
  },
  {
    name: "Subject-Matter Experts",
    slug: "subject-matter-experts",
    description: "Mathematics, science, law, medicine, and finance specialists.",
    icon: BookOpen,
    countLabel: "Active roles",
  },
  {
    name: "Bilingual & Translation",
    slug: "language-and-translation",
    description: "Evaluate multi-language nuance, transcription, and translation outputs.",
    icon: Languages,
    countLabel: "Active roles",
  },
];

const SAMPLE_FEATURED_JOBS = [
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
    category: "AI Evaluation",
    skills: ["Critical Thinking", "Fact Checking", "Writing"],
    verifiedDate: "Verified recently",
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
    verifiedDate: "Verified recently",
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
    verifiedDate: "Verified recently",
  },
];

const PLATFORMS_SPOTLIGHT = [
  { name: "Mercor", domain: "mercor.com", tag: "Engineering & General AI" },
  { name: "Outlier", domain: "outlier.ai", tag: "Subject Matter & Coding" },
  { name: "DataAnnotation", domain: "dataannotation.tech", tag: "Evaluation & Tasks" },
  { name: "Micro1", domain: "micro1.ai", tag: "Tech Specialists" },
  { name: "TELUS AI", domain: "telusinternational.ai", tag: "Global Contributors" },
  { name: "Alignerr", domain: "alignerr.com", tag: "Expert Model Training" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-muted/20 to-background py-16 md:py-24">
        <Container size="default">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Discover. Train. Earn.</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Global AI Training & Career Opportunities
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A single, transparent platform to discover remote AI trainer, AI evaluator, data annotation, and domain expert roles worldwide.
            </p>

            {/* Global Search Bar */}
            <div className="pt-4 max-w-2xl mx-auto">
              <form action="/jobs" method="GET" className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  name="q"
                  placeholder="Search by role, skill (e.g. Python, Math, Biology), or platform..."
                  className="h-14 w-full rounded-xl border border-input bg-card pl-12 pr-32 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  size="default"
                  className="absolute right-2 h-10 px-5 font-semibold"
                >
                  Search Jobs
                </Button>
              </form>

              {/* Quick Filter Tags */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">Trending:</span>
                <Link href="/jobs?category=ai-evaluation" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                  AI Evaluator
                </Link>
                <span>•</span>
                <Link href="/jobs?category=ai-trainer" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                  LLM Reasoning
                </Link>
                <span>•</span>
                <Link href="/jobs?arrangement=remote" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                  Remote Worldwide
                </Link>
                <span>•</span>
                <Link href="/jobs?category=coding-and-software" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                  Python & Coding
                </Link>
              </div>
            </div>

            {/* Core Trust Indicators */}
            <div className="pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Human Verified</div>
                  <div className="text-[11px] text-muted-foreground">Every listing manually checked</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Global Scope</div>
                  <div className="text-[11px] text-muted-foreground">ISO standard country filtering</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <DollarSign className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Transparent Pay</div>
                  <div className="text-[11px] text-muted-foreground">Verified currency & pay periods</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-foreground">Zero Bot Scrapes</div>
                  <div className="text-[11px] text-muted-foreground">Strict permission gates</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-20 bg-background border-b border-border">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Explore by Specialization
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Popular AI Job Categories
              </h2>
            </div>
            <Link href="/categories">
              <Button variant="outline" size="sm" className="gap-1.5 font-medium">
                View All Categories <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.slug} href={`/jobs?category=${cat.slug}`} className="group">
                  <Card className="h-full border border-border group-hover:border-primary/50 group-hover:shadow-md transition-all">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {cat.name}
                      </CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {cat.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Latest Verified Opportunities */}
      <section className="py-16 md:py-20 bg-muted/20 border-b border-border">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Live & Verified
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Latest AI Training Opportunities
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Approved by human moderators with verified platform referral routing.
              </p>
            </div>
            <Link href="/jobs">
              <Button className="font-semibold shadow-sm gap-1.5">
                Browse Full Catalog <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SAMPLE_FEATURED_JOBS.map((job) => (
              <Card key={job.slug} className="flex flex-col justify-between border-border hover:shadow-md transition-all">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="font-medium text-xs">
                      {job.platform}
                    </Badge>
                    <Badge
                      variant={job.eligibilityType === "worldwide" ? "worldwide" : "info"}
                      className="text-[11px]"
                    >
                      {job.countryEligibility}
                    </Badge>
                  </div>

                  <Link href={`/jobs/${job.slug}`}>
                    <CardTitle className="text-base font-bold leading-snug hover:text-primary transition-colors line-clamp-2">
                      {job.title}
                    </CardTitle>
                  </Link>

                  <div className="flex items-baseline gap-1 text-sm font-bold text-foreground">
                    <span>${job.payMin} - ${job.payMax}</span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {job.payCurrency} / {job.payPeriod}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 pt-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {job.verifiedDate}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/60">
                  {/* Non-negotiable: Single Apply Now action routing through /out/[jobSlug] */}
                  <Link href={`/out/${job.slug}`} className="w-full">
                    <Button className="w-full font-semibold shadow-sm justify-center">
                      Apply Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Platforms Directory */}
      <section className="py-16 md:py-20 bg-background border-b border-border">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-primary">
              Global Platform Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Opportunities from Trusted AI Companies
            </h2>
            <p className="text-sm text-muted-foreground">
              Discover opportunities across leading platforms advancing modern AI and large language models.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PLATFORMS_SPOTLIGHT.map((platform) => (
              <Card
                key={platform.name}
                className="p-4 text-center flex flex-col items-center justify-center space-y-2 border-border hover:border-primary/40 hover:bg-muted/30 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {platform.name.charAt(0)}
                </div>
                <div className="text-sm font-bold text-foreground">{platform.name}</div>
                <div className="text-[10px] text-muted-foreground leading-tight">
                  {platform.tag}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/platforms">
              <Button variant="outline" size="sm">
                Explore All Platforms Directory <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-muted/30">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-primary">
              The TrainlyAI Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              How TrainlyAI Connects You
            </h2>
            <p className="text-sm text-muted-foreground">
              We aggregate and verify opportunities so you spend time applying, not searching through unvetted boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-6 rounded-xl space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-base">
                1
              </div>
              <h3 className="text-base font-bold text-foreground">Discover & Filter</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Search verified AI opportunities by domain expertise, programming language, required spoken language, and country eligibility.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-base">
                2
              </div>
              <h3 className="text-base font-bold text-foreground">Review Eligibility & Pay</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Inspect confirmed pay ranges, workload requirements, and geographic restrictions verified by our moderation team.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-base">
                3
              </div>
              <h3 className="text-base font-bold text-foreground">Apply Confidently</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click Apply Now to route safely through our verified referral link directly to the hiring platform's application page.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

