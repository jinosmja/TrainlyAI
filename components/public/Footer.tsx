import Link from "next/link";
import { Sparkles, Globe, Shield, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card text-card-foreground">
      <Container size="default" className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-foreground font-black text-xl tracking-tight">
                Trainly<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Global AI Training & Career Opportunities. Discover legitimate freelance, contract, and full-time roles in AI evaluation, LLM training, data annotation, and domain expertise worldwide.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
              <span className="inline-flex items-center gap-1 font-medium bg-muted/60 px-2.5 py-1 rounded-md border border-border">
                <Globe className="h-3.5 w-3.5 text-primary" />
                Global Platform
              </span>
              <span className="inline-flex items-center gap-1 font-medium bg-muted/60 px-2.5 py-1 rounded-md border border-border">
                <Shield className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                Verified Sources
              </span>
            </div>
          </div>

          {/* Links: Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Opportunities
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/jobs" className="hover:text-foreground transition-colors">
                  All AI Jobs
                </Link>
              </li>
              <li>
                <Link href="/categories/ai-evaluation" className="hover:text-foreground transition-colors">
                  AI Evaluator Roles
                </Link>
              </li>
              <li>
                <Link href="/categories/ai-trainer" className="hover:text-foreground transition-colors">
                  LLM Trainer Roles
                </Link>
              </li>
              <li>
                <Link href="/categories/data-annotation" className="hover:text-foreground transition-colors">
                  Data Annotation
                </Link>
              </li>
              <li>
                <Link href="/categories/subject-matter-experts" className="hover:text-foreground transition-colors">
                  Subject-Matter Experts
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Platforms & Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/platforms" className="hover:text-foreground transition-colors">
                  Platform Directory
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-foreground transition-colors">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  How TrainlyAI Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact & Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Legal & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/referral-disclosure" className="hover:text-foreground transition-colors font-medium text-foreground/80 flex items-center gap-1">
                  Referral Disclosure <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-foreground transition-colors text-xs text-muted-foreground/80">
                  Moderator Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Referral Disclosure Bar */}
        <div className="mt-10 pt-6 border-t border-border/80">
          <div className="rounded-lg bg-muted/40 p-4 border border-border/60 text-xs text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground/90 mb-1">
              Referral & Affiliate Transparency Notice
            </p>
            <p>
              Some application links on TrainlyAI are referral links. If you register or qualify through these links, TrainlyAI may receive a referral benefit at no cost to you. This does not alter the compensation or conditions offered by external platforms. Opportunities, eligibility, and pay rates change frequently; listings reflect information verified at the time of publication.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} TrainlyAI. All rights reserved. Global AI Career Aggregation.</p>
            <p className="font-mono text-[11px]">Timestamps stored in UTC • ISO 3166-1 / ISO 4217 Compliant</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

