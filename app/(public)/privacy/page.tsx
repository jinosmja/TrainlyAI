import { Container } from "@/components/ui/container";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2 border-b border-border pb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Data Protection</span>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted-foreground font-mono">
              Last Updated: November 2026 • TrainlyAI Privacy-Conscious Architecture
            </p>
          </div>

          <div className="bento-card bg-card space-y-6 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-foreground">1. Privacy-Conscious Principles</h2>
              <p className="text-muted-foreground">
                TrainlyAI is committed to respecting user privacy. We do not require general visitors to create accounts, upload resumes, or disclose sensitive personal identifiers to browse opportunities.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-border">
              <h2 className="text-base font-bold text-foreground">2. Click Tracking & Analytics</h2>
              <p className="text-muted-foreground">
                When you click an application link (routing through <code>/out/[jobSlug]</code>), our internal redirect service logs minimal operational telemetry: the job identifier, the platform identifier, a UTC timestamp, and a pseudonymous session hash. We do not store or retain raw, unhashed IP addresses in our persistent analytics database.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-border">
              <h2 className="text-base font-bold text-foreground">3. Third-Party Platforms</h2>
              <p className="text-muted-foreground">
                When you leave TrainlyAI and navigate to an external hiring or assessment platform (such as Outlier, Mercor, or DataAnnotation), the collection and handling of your data are governed entirely by that platform&apos;s independent privacy policy.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-border">
              <h2 className="text-base font-bold text-foreground">4. Cookies & Local Storage</h2>
              <p className="text-muted-foreground">
                TrainlyAI uses strictly necessary cookies and local storage tokens solely for session security and administrative authentication. We do not deploy third-party cross-site advertising tracking cookies.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
