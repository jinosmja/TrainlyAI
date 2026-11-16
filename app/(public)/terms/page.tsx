import { Container } from "@/components/ui/container";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="py-16 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2 border-b border-border pb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              <FileText className="h-3.5 w-3.5" />
              <span>Legal Terms</span>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-muted-foreground font-mono">
              Effective Date: November 2026
            </p>
          </div>

          <div className="bento-card bg-card space-y-6 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-foreground">1. Informational & Discovery Purpose</h2>
              <p className="text-muted-foreground">
                TrainlyAI is an informational aggregation platform designed to facilitate discovery of remote and global opportunities in AI model training, data annotation, and related fields. TrainlyAI is not an employer, staffing agency, or recruiter for the external listings featured on this website.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-border">
              <h2 className="text-base font-bold text-foreground">2. No Guarantee of Earnings or Employment</h2>
              <p className="text-muted-foreground">
                TrainlyAI makes no guarantees regarding job offer issuance, application acceptance, project duration, or monetary compensation. External platforms establish independent assessment criteria, onboarding tests, and pricing schedules that remain entirely under their own discretion.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-border">
              <h2 className="text-base font-bold text-foreground">3. Accuracy of External Listings</h2>
              <p className="text-muted-foreground">
                While our moderation team reviews and rechecks listings to maintain high data fidelity, hiring requirements, country restrictions, and pay benchmarks may change on external platforms without prior notice.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
