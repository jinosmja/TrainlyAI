import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Globe,
  Briefcase,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Share2,
  AlertCircle,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;

  // Placeholder data mapping for initial phase scaffold
  const job = {
    title: "Senior AI Evaluator — General Reasoning",
    slug: slug || "senior-ai-evaluator-general-reasoning",
    platform: "DataAnnotation",
    workArrangement: "Remote",
    countryEligibility: "Worldwide",
    eligibilityType: "worldwide" as const,
    payMin: 20,
    payMax: 40,
    payCurrency: "USD",
    payPeriod: "hour",
    category: "AI Model Evaluation",
    skills: ["Critical Thinking", "Fact Checking", "Writing", "Logic Evaluation"],
    requiredLanguages: [{ name: "English", level: "Fluent / Native" }],
    experienceLevel: "Intermediate / Specialist",
    workload: "Flexible (15 - 40 hrs/week)",
    equipmentRequirements: "Personal computer with high-speed internet and modern web browser.",
    verificationStatus: "Verified by Human Moderator",
    lastVerifiedDate: "Recently verified",
    postedDate: "November 2026",
    description: `We are looking for detail-oriented AI Evaluators to review, evaluate, and benchmark responses produced by state-of-the-art large language models (LLMs). In this role, you will analyze model completions for factual correctness, coherence, safety, and reasoning soundness.

Key Responsibilities:
• Review paired model responses and rank which is more helpful and truthful based on detailed guidelines.
• Identify hallucinations, factual errors, logical fallacies, or unsubstantiated claims in model responses.
• Provide clear, objective rationales explaining grading decisions.
• Author counter-prompts or edge cases to test model resilience and safety boundaries.

Qualifications & Skills:
• Excellent reading comprehension and written English skills.
• Strong attention to detail and ability to follow nuanced evaluation rubrics.
• Background or interest in linguistics, philosophy, computer science, research, or editorial evaluation.
• Reliable workstation and consistent self-directed pacing.`,
  };

  return (
    <div className="py-10 bg-background min-h-screen">
      <Container size="sm">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Job Directory
          </Link>
        </div>

        {/* Job Header Card */}
        <div className="border border-border rounded-xl bg-card p-6 md:p-8 space-y-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-semibold text-xs">
                {job.platform}
              </Badge>
              <Badge
                variant={job.eligibilityType === "worldwide" ? "worldwide" : "info"}
                className="text-xs"
              >
                {job.countryEligibility}
              </Badge>
              <span className="text-xs text-muted-foreground">• {job.workArrangement}</span>
            </div>

            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{job.verificationStatus}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-black text-foreground">
                ${job.payMin} - ${job.payMax}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                {job.payCurrency} / {job.payPeriod}
              </span>
              <span className="text-xs text-muted-foreground ml-2">
                ({job.workload})
              </span>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-border/60 text-xs">
            <div>
              <div className="text-muted-foreground font-medium">Category</div>
              <div className="font-semibold text-foreground mt-0.5">{job.category}</div>
            </div>
            <div>
              <div className="text-muted-foreground font-medium">Language</div>
              <div className="font-semibold text-foreground mt-0.5">
                {job.requiredLanguages[0].name} ({job.requiredLanguages[0].level})
              </div>
            </div>
            <div>
              <div className="text-muted-foreground font-medium">Experience</div>
              <div className="font-semibold text-foreground mt-0.5">{job.experienceLevel}</div>
            </div>
            <div>
              <div className="text-muted-foreground font-medium">Last Checked</div>
              <div className="font-semibold text-foreground mt-0.5">{job.lastVerifiedDate}</div>
            </div>
          </div>

          {/* Primary Action Button (Single Apply Now button routing to /out/[jobSlug]) */}
          <div className="space-y-2 pt-2">
            <Link href={`/out/${job.slug}`} className="w-full">
              <Button size="lg" className="w-full text-base font-bold shadow-md justify-center">
                Apply Now
              </Button>
            </Link>
            <p className="text-[11px] text-muted-foreground text-center">
              Routes securely via TrainlyAI referral redirection to the external application page.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-8 space-y-6">
          {/* Job Description Card */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-primary" />
                Role Description & Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-foreground/90 whitespace-pre-line leading-relaxed">
                {job.description}
              </div>
            </CardContent>
          </Card>

          {/* Skills Required Card */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Required Skills & Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical & Hardware Requirements */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Equipment & Environment Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {job.equipmentRequirements}
              </p>
            </CardContent>
          </Card>

          {/* Bottom Call to Action */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center space-y-4">
            <h3 className="text-base font-bold text-foreground">
              Ready to submit your application?
            </h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              You will be directed to the official platform application form through TrainlyAI's verified tracking link.
            </p>
            <Link href={`/out/${job.slug}`} className="inline-block">
              <Button size="lg" className="font-bold px-8">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

