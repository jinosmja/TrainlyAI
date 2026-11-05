import { Container } from "@/components/ui/container";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";

export default function ReferralDisclosurePage() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2 border-b border-border pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Full Affiliate & Referral Transparency</span>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
              Referral Disclosure Statement
            </h1>
            <p className="text-sm text-muted-foreground">
              Committed to clear and honest communication with our global contributor community.
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-2">
              <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                Affiliate & Partner Relationships
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                TrainlyAI operates as a free resource for job seekers. To fund ongoing platform maintenance, data moderation, and infrastructure expenses, some of the application links on this website contain referral or affiliate identifiers.
              </p>
            </div>

            <h3 className="text-base font-bold text-foreground">What this means for you:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero added cost to you:</strong> Applying through a TrainlyAI referral link never incurs any fee or deduction from your compensation.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Identical platform terms:</strong> You receive the exact same rates, assessment conditions, and contractual terms established directly by the external platform.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Objective evaluation:</strong> Moderation decisions and verification statuses are strictly based on factual listing requirements, never on affiliate payout sizes.
                </span>
              </li>
            </ul>

            <h3 className="text-base font-bold text-foreground pt-4">Internal Redirect Mechanics</h3>
            <p>
              When you click &ldquo;Apply Now&rdquo;, your browser connects to our internal routing service (<code>/out/[jobSlug]</code>). This endpoint validates that the target listing is approved and current, logs an anonymous click event, and redirects directly to the platform partner.
            </p>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              This disclosure is provided in compliance with global advertising and consumer protection guidelines, including the Federal Trade Commission (FTC) Guides Concerning the Use of Endorsements and Testimonials in Advertising.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

