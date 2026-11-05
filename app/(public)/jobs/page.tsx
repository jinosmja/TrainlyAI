import Link from "next/link";
import { Search, Filter, Globe, DollarSign, CheckCircle2, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const SAMPLE_JOBS = [
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
    <div className="py-10 bg-background min-h-screen">
      <Container size="default">
        {/* Page Title & Search Header */}
        <div className="space-y-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
              Global Job Directory
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
              Discover AI Training & Evaluation Roles
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Explore verified freelance and contract AI opportunities worldwide. Every listing is reviewed by human moderators before publication.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs by keyword, required skill, or platform..."
                className="h-10 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button className="font-semibold shadow-sm shrink-0">
              Apply Filters
            </Button>
            <Button variant="outline" className="gap-1.5 shrink-0 text-xs">
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Layout: Sidebar Filters + Job Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="space-y-6 lg:border-r lg:border-border lg:pr-6">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <Filter className="h-3.5 w-3.5 text-primary" />
                Filter Roles
              </span>
              <span className="text-xs text-muted-foreground font-mono">4 results</span>
            </div>

            {/* Category Filter */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                Category
              </label>
              <div className="space-y-1.5 text-xs text-foreground/80">
                {["AI Model Evaluation", "LLM & AI Trainers", "Data Annotation", "Coding & Software", "Subject-Matter Experts"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Country Eligibility Filter */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                Country Eligibility
              </label>
              <div className="space-y-1.5 text-xs text-foreground/80">
                {["Worldwide (All Countries)", "Selected Countries Only", "Not Confirmed"].map((elig) => (
                  <label key={elig} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5" />
                    <span>{elig}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Filter */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
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
          </aside>

          {/* Job List Results */}
          <main className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-2">
              <span>Showing 4 verified AI opportunities</span>
              <span>Sorted by: Newest First</span>
            </div>

            <div className="space-y-4">
              {SAMPLE_JOBS.map((job) => (
                <Card key={job.slug} className="border-border hover:shadow-sm transition-all">
                  <CardHeader className="space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-semibold text-xs">
                          {job.platform}
                        </Badge>
                        <Badge
                          variant={job.eligibilityType === "worldwide" ? "worldwide" : "info"}
                          className="text-[11px]"
                        >
                          {job.countryEligibility}
                        </Badge>
                        <span className="text-xs text-muted-foreground">• {job.workArrangement}</span>
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        ${job.payMin} - ${job.payMax} {job.payCurrency} / {job.payPeriod}
                      </div>
                    </div>

                    <Link href={`/jobs/${job.slug}`}>
                      <CardTitle className="text-lg font-bold hover:text-primary transition-colors">
                        {job.title}
                      </CardTitle>
                    </Link>

                    <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                      {job.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-2 pt-0">
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
                  </CardContent>

                  <CardFooter className="flex items-center justify-between pt-3 border-t border-border/60">
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {job.verifiedDate}
                    </div>

                    {/* Non-negotiable: Single Apply Now button routing strictly to /out/[jobSlug] */}
                    <Link href={`/out/${job.slug}`}>
                      <Button size="sm" className="font-semibold shadow-sm">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}

