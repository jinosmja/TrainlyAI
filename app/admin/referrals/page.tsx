import {
  Share2,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  Lock,
  ArrowRight,
  SlidersHorizontal,
  Check,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminReferralsPage() {
  const destinations = [
    {
      platform: "DataAnnotation",
      slug: "dataannotation",
      status: "Active Verified",
      mode: "Platform Default Referral",
      targetSample: "https://dataannotation.tech/?ref=trainlyai",
      allowedHost: "dataannotation.tech",
      lastAudit: "Nov 2026",
    },
    {
      platform: "Outlier",
      slug: "outlier",
      status: "Active Verified",
      mode: "Platform Default Referral",
      targetSample: "https://outlier.ai/?referral=trainlyai",
      allowedHost: "outlier.ai",
      lastAudit: "Nov 2026",
    },
    {
      platform: "Mercor",
      slug: "mercor",
      status: "Active Verified",
      mode: "Platform Default Referral",
      targetSample: "https://mercor.com/?ref=trainlyai",
      allowedHost: "mercor.com",
      lastAudit: "Nov 2026",
    },
    {
      platform: "Alignerr",
      slug: "alignerr",
      status: "Active Verified",
      mode: "Direct Career Portal",
      targetSample: "https://alignerr.com/careers",
      allowedHost: "alignerr.com",
      lastAudit: "Nov 2026",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              Central Referral Link Configuration
            </h1>
            <Badge variant="outline" className="font-mono text-[11px] text-teal-700 bg-teal-50 border-teal-200">
              Host Validated
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
            Audit and configure platform affiliate destinations, link overrides, and destination domain allowlists. All public application CTAs route strictly through <code>/out/[jobSlug]</code>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
            Validate All Hosts
          </Button>
          <Button size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <Share2 className="h-3.5 w-3.5" />
            Add Destination
          </Button>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Routing Mechanism</span>
            <Lock className="h-4 w-4 text-primary" />
          </div>
          <div className="text-xl font-black text-foreground mt-1">HTTP 307</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">Temporary redirect</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Raw Links in HTML</span>
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-xl font-black text-emerald-600 mt-1">Zero (0)</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Strict server obfuscation</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Host Whitelisting</span>
            <CheckCircle2 className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-xl font-black text-foreground mt-1">Enforced</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">Zero open-redirect risk</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Click Telemetry</span>
            <Share2 className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-xl font-black text-foreground mt-1">Anonymous</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Zero PII collected</div>
        </div>
      </div>

      {/* Referral Policy Bento Card */}
      <div className="bento-card bg-card p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Anti-Hijack & Open Redirect Safeguard Architecture</h2>
          </div>
          <Badge variant="outline" className="font-mono text-[10px]">SSR Router Policy</Badge>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          TrainlyAI does not expose partner referral parameters in public client DOMs. When a user clicks <strong>Apply Now</strong>, the request arrives at <code>/out/[jobSlug]</code>. The router looks up the verified destination, validates that the URL host matches the registered platform domain allowlist, increments the privacy-preserving click counter, and issues a <code>307 Temporary Redirect</code>.
        </p>
      </div>

      {/* Destinations Table Bento */}
      <div className="bento-card bg-card overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground">Platform Destination Allowlist & Fallbacks</h3>
          </div>
          <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
            <SlidersHorizontal className="h-3 w-3" />
            Filter
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Resolution Mode</th>
                <th className="px-4 py-3">Destination Template</th>
                <th className="px-4 py-3">Allowed Host</th>
                <th className="px-4 py-3">Last Verified</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {destinations.map((dest) => (
                <tr key={dest.slug} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="font-bold text-foreground">{dest.platform}</div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {dest.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground font-medium">
                    {dest.mode}
                  </td>
                  <td className="px-4 py-3.5 font-mono text-[11px] text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-muted border border-border">
                      {dest.targetSample}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                      ✓ {dest.allowedHost}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-muted-foreground">
                    {dest.lastAudit}
                  </td>
                  <td className="px-4 py-3.5 text-right space-x-2">
                    <button className="text-primary hover:underline font-bold text-xs">
                      Edit
                    </button>
                    <span className="text-border">|</span>
                    <button className="text-muted-foreground hover:text-foreground font-medium text-xs">
                      Test 307
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
