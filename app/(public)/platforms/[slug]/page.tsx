import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlatformDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlatformDetailPage({ params }: PlatformDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container size="default">
        <div className="mb-6">
          <Link
            href="/platforms"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Platforms
          </Link>
        </div>

        <div className="border border-border rounded-xl bg-card p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-2xl">
                {slug ? slug.charAt(0).toUpperCase() : "P"}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground capitalize">
                  {slug.replace(/-/g, " ")}
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Verified AI Platform Partner
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                Verified Active
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-foreground">Active Opportunities</h2>
            <p className="text-xs text-muted-foreground">
              All jobs listed under this platform are actively monitored and re-verified. Applications route securely through our internal tracking system to the official platform portal.
            </p>
            <div className="pt-2">
              <Link href={`/jobs?platform=${slug}`}>
                <Button size="sm" className="gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" />
                  View All Open Listings for this Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

