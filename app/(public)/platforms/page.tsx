import Link from "next/link";
import { Layers, Globe, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PLATFORMS_DATA = [
  {
    name: "DataAnnotation",
    slug: "dataannotation",
    description: "Specializes in AI model evaluation, high-volume coding benchmarks, and factual response verification.",
    categoryFocus: "Evaluation & Coding",
    headquarters: "United States",
    status: "Active Opportunities",
  },
  {
    name: "Outlier",
    slug: "outlier",
    description: "Focuses on domain expert model training, mathematics, science, software development, and linguistic evaluation.",
    categoryFocus: "Subject-Matter Experts & LLMs",
    headquarters: "United States",
    status: "Active Opportunities",
  },
  {
    name: "Mercor",
    slug: "mercor",
    description: "AI hiring platform matching software engineers and multilingual talent with cutting-edge frontier AI labs.",
    categoryFocus: "Engineering & Multilingual",
    headquarters: "United States",
    status: "Active Opportunities",
  },
  {
    name: "Alignerr",
    slug: "alignerr",
    description: "Community of experts training foundational models across code, humanities, and STEM disciplines.",
    categoryFocus: "Specialist Model Alignment",
    headquarters: "Global",
    status: "Active Opportunities",
  },
  {
    name: "Micro1",
    slug: "micro1",
    description: "Global talent network connecting software developers and AI contributors with vetted technology companies.",
    categoryFocus: "Software & AI Training",
    headquarters: "Global",
    status: "Active Opportunities",
  },
  {
    name: "TELUS Digital AI",
    slug: "telus-ai",
    description: "Global crowdsourcing data provider supporting multi-modal data annotation, speech evaluation, and localization.",
    categoryFocus: "Data Annotation & Speech",
    headquarters: "Canada",
    status: "Active Opportunities",
  },
];

export default function PlatformsPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <Container size="default">
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-primary">
            Platform Directory
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
            Trusted AI Platforms & Companies
          </h1>
          <p className="text-sm text-muted-foreground">
            Explore verified external platforms offering legitimate AI evaluation, data labelling, and expert training roles worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS_DATA.map((platform) => (
            <Card key={platform.slug} className="flex flex-col justify-between border-border hover:shadow-md transition-all">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-black">
                    {platform.name.charAt(0)}
                  </div>
                  <Badge variant="outline" className="text-xs text-emerald-600 dark:text-emerald-400">
                    {platform.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold">{platform.name}</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  {platform.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-t border-border/60">
                  <span className="text-muted-foreground">Primary Focus:</span>
                  <span className="font-semibold text-foreground">{platform.categoryFocus}</span>
                </div>
                <div className="flex justify-between py-1 border-t border-border/60">
                  <span className="text-muted-foreground">Headquarters:</span>
                  <span className="font-semibold text-foreground">{platform.headquarters}</span>
                </div>
              </CardContent>

              <CardFooter className="pt-2 border-t border-border/60">
                <Link href={`/platforms/${platform.slug}`} className="w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between font-semibold">
                    <span>View Platform Roles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

