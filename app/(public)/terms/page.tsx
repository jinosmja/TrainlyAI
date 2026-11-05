import { Container } from "@/components/ui/container";

export default function TermsOfServicePage() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2 border-b border-border pb-6">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-muted-foreground font-mono">
              Effective Date: November 2026
            </p>
          </div>

          <div className="space-y-5 text-sm text-foreground/90 leading-relaxed">
            <h2 className="text-base font-bold text-foreground">1. Informational & Discovery Purpose</h2>
            <p>
              TrainlyAI is an informational aggregation platform designed to facilitate discovery of remote and global opportunities in AI model training, data annotation, and related fields. TrainlyAI is not an employer, staffing agency, or recruiter for the external listings featured on this website.
            </p>

            <h2 className="text-base font-bold text-foreground">2. No Guarantee of Earnings or Employment</h2>
            <p>
              TrainlyAI makes no guarantees regarding job offer issuance, application acceptance, project duration, or monetary compensation. External platforms establish independent assessment criteria, onboarding tests, and pricing schedules that remain entirely under their own discretion.
            </p>

            <h2 className="text-base font-bold text-foreground">3. Accuracy of External Listings</h2>
            <p>
              While our moderation team reviews and rechecks listings to maintain high data fidelity, hiring requirements, country restrictions, and pay benchmarks may change on external platforms without prior notice.
            </p>

            <h2 className="text-base font-bold text-foreground">4. Acceptable Use</h2>
            <p>
              Users agree not to exploit the platform for automated bot crawling, security vulnerability probing, or denial-of-service disruptions.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

