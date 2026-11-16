import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Briefcase, Globe, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlatformDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlatformDetailPage({ params }: PlatformDetailPageProps) {
  const { slug } = await params;
  const platformName = slug ? slug.replace(/-/g, " ") : "Platform";

  return (
    <div className="py-12 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="default">
        <div className="mb-6">
          <Link
            href="/platforms"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Platform Directory
          </Link>
        </div>

        {/* Bento Hero Header */}
        <div className="bento-card bg-card p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black text-2xl uppercase">
                {slug ? slug.charAt(0) : "P"}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground capitalize tracking-tight">
                  {platformName}
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Verified Partner Platform • ISO Standard Attribution
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="verified" className="text-xs gap-1 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified Active Partner</span>
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-foreground">Active Opportunities & Referral Terms</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              All jobs listed under this platform are actively monitored and re-verified. Applications route securely through TrainlyAI&apos;s internal tracking system (<code>/out/[jobSlug]</code>) directly to the official platform portal with verified referral attribution.
            </p>
            <div className="pt-2">
              <Link href={`/jobs?platform=${slug}`}>
                <Button size="sm" className="gap-1.5 font-semibold">
                  <Briefcase className="h-3.5 w-3.5" />
                  View All Open Listings for {platformName}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
