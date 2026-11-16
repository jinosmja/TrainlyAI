import Link from "next/link";
import { ArrowLeft, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface CategoryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params;
  const categoryName = slug ? slug.replace(/-/g, " ") : "Category";

  return (
    <div className="py-12 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="default">
        <div className="mb-6">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Category Directory
          </Link>
        </div>

        <div className="bento-card bg-card p-6 md:p-8 space-y-6">
          <div className="border-b border-border pb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Category Overview</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground capitalize tracking-tight">
              {categoryName}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Verified opportunities specializing in {categoryName} across international partner platforms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-foreground">Available Opportunities</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Filter and search all verified roles tagged under this domain across multiple partner platforms with confirmed country eligibility and compensation rates.
            </p>
            <div className="pt-2">
              <Link href={`/jobs?category=${slug}`}>
                <Button size="sm" className="gap-1.5 font-semibold">
                  <Briefcase className="h-3.5 w-3.5" />
                  View Open Listings in {categoryName}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
