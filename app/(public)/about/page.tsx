import { Container } from "@/components/ui/container";
import { CheckCircle2, Globe, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <Container size="sm">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>About TrainlyAI</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Global AI Training & Career Opportunities
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              TrainlyAI is an independent discovery and aggregation platform connecting contributors worldwide with legitimate freelance, contract, and full-time opportunities in artificial intelligence model training, evaluation, and data annotation.
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed border-t border-border pt-8">
            <h2 className="text-xl font-bold text-foreground">Our Core Principles</h2>
            
            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Globe className="h-4 w-4 text-primary" />
                  <span>Global From Day One</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use universal ISO 3166-1 country codes and ISO 4217 currencies. We do not artificially favor or promote any single country over another.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Mandatory Human Moderation</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  No automated scraper can publish directly to our public catalog. Every listing is reviewed by human operators before going live.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Strict Source Ethics</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We never scrape behind logins or bypass security barriers. We ingest data only via authorized APIs, partner feeds, or verified public notices.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>Transparent Attribution</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every public job routes cleanly to its official hiring portal through an internal redirect endpoint, ensuring complete referral transparency.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground pt-4">Verification Methodology</h2>
            <p>
              When a job listing is ingested, our team checks the external platform status, verifies the country eligibility guidelines, notes the stated compensation period and currency, and confirms that the application link is operational and secure. Listings that are closed or expired are promptly removed from active public search.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

