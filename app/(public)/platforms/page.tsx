import Link from "next/link";
import { Layers, Globe, Shield, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PLATFORMS_DATA = [
  {
    name: "DataAnnotation",
    slug: "dataannotation",
    description: "Specializes in AI model evaluation, high-volume coding benchmarks, and factual response verification.",
    categoryFocus: "Evaluation & Coding",
    headquarters: "United States",
    status: "Active Verified",
    verifiedJobsCount: "1 Verified Role",
  },
  {
    name: "Outlier",
    slug: "outlier",
    description: "Focuses on domain expert model training, mathematics, science, software development, and linguistic evaluation.",
    categoryFocus: "Subject-Matter Experts & LLMs",
    headquarters: "United States",
    status: "Active Verified",
    verifiedJobsCount: "1 Verified Role",
  },
  {
    name: "Mercor",
    slug: "mercor",
    description: "AI hiring platform matching software engineers and multilingual talent with cutting-edge frontier AI labs.",
    categoryFocus: "Engineering & Multilingual",
    headquarters: "United States",
    status: "Active Verified",
    verifiedJobsCount: "1 Verified Role",
  },
  {
    name: "Alignerr",
    slug: "alignerr",
    description: "Community of experts training foundational models across code, humanities, and STEM disciplines.",
    categoryFocus: "Specialist Model Alignment",
    headquarters: "Global",
    status: "Active Verified",
    verifiedJobsCount: "1 Verified Role",
  },
  {
    name: "Micro1",
    slug: "micro1",
    description: "Global talent network connecting software developers and AI contributors with vetted technology companies.",
    categoryFocus: "Software & AI Training",
    headquarters: "Global",
    status: "Active Verified",
    verifiedJobsCount: "Explore Roles",
  },
  {
    name: "TELUS Digital AI",
    slug: "telus-ai",
    description: "Global crowdsourcing data provider supporting multi-modal data annotation, speech evaluation, and localization.",
    categoryFocus: "Data Annotation & Speech",
    headquarters: "Canada",
    status: "Active Verified",
    verifiedJobsCount: "Explore Roles",
  },
];

export default function PlatformsPage() {
  return (
    <div className="py-12 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="default">
        {/* Header */}
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Platform Directory</span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
            Trusted AI Platforms & Companies
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Explore verified external platforms offering legitimate AI evaluation, data labelling, and expert training roles worldwide.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS_DATA.map((platform) => (
            <div key={platform.slug} className="bento-card bg-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-base">
                    {platform.name.charAt(0)}
                  </div>
                  <Badge variant="verified" className="text-[11px] gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {platform.status}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground">{platform.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {platform.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 text-xs border-t border-border">
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="font-semibold text-foreground">{platform.categoryFocus}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Base:</span>
                    <span className="font-semibold text-foreground">{platform.headquarters}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border">
                <Link href={`/platforms/${platform.slug}`} className="w-full block">
                  <Button variant="outline" size="sm" className="w-full justify-between font-semibold text-xs">
                    <span>View Platform Roles ({platform.verifiedJobsCount})</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
