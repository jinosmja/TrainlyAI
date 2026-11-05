import { Container } from "@/components/ui/container";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2 border-b border-border pb-6">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted-foreground font-mono">
              Last Updated: November 2026 • TrainlyAI Compliance Standards
            </p>
          </div>

          <div className="prose prose-sm dark:prose-invert space-y-5 text-sm text-foreground/90 leading-relaxed">
            <h2 className="text-base font-bold text-foreground">1. Privacy-Conscious Principles</h2>
            <p>
              TrainlyAI is committed to respecting user privacy. We do not require general visitors to create accounts, upload resumes, or disclose sensitive personal identifiers to browse opportunities.
            </p>

            <h2 className="text-base font-bold text-foreground">2. Click Tracking & Analytics</h2>
            <p>
              When you click an application link (routing through <code>/out/[jobSlug]</code>), our internal redirect service logs minimal operational telemetry: the job identifier, the platform identifier, a UTC timestamp, and a pseudonymous session hash. We do not store or retain raw, unhashed IP addresses in our persistent analytics database.
            </p>

            <h2 className="text-base font-bold text-foreground">3. Third-Party Platforms</h2>
            <p>
              When you leave TrainlyAI and navigate to an external hiring or assessment platform (such as Outlier, Mercor, or DataAnnotation), the collection and handling of your data are governed entirely by that platform's independent privacy policy.
            </p>

            <h2 className="text-base font-bold text-foreground">4. Cookies & Local Storage</h2>
            <p>
              TrainlyAI uses strictly necessary cookies and local storage tokens solely for session security and administrative authentication. We do not deploy third-party cross-site advertising tracking cookies.
            </p>

            <h2 className="text-base font-bold text-foreground">5. Inquiries & Data Rights</h2>
            <p>
              If you have questions regarding our privacy practices or wish to submit a data inquiry, please contact our privacy compliance team via our contact portal.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

