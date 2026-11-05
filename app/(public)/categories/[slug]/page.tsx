import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface CategoryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container size="default">
        <div className="mb-6">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Categories
          </Link>
        </div>

        <div className="border border-border rounded-xl bg-card p-6 md:p-8 space-y-6">
          <div className="border-b border-border pb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
              Category Overview
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground capitalize">
              {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Verified opportunities specializing in this domain.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-foreground">Available Roles</h2>
            <p className="text-xs text-muted-foreground">
              Filter and search all verified roles tagged under this domain across multiple partner platforms.
            </p>
            <div className="pt-2">
              <Link href={`/jobs?category=${slug}`}>
                <Button size="sm" className="gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" />
                  View All Open Listings in this Category
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

