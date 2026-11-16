import {
  Layers,
  PlusCircle,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter,
  Globe,
  ArrowUpRight,
  Lock,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminPlatformsPage() {
  const platforms = [
    {
      name: "DataAnnotation",
      slug: "dataannotation",
      referralStatus: "active",
      allowedDomains: ["dataannotation.tech", "www.dataannotation.tech"],
      jobsCount: 1,
      mode: "Platform Default Affiliate",
      lastAudit: "Nov 2026",
    },
    {
      name: "Outlier",
      slug: "outlier",
      referralStatus: "active",
      allowedDomains: ["outlier.ai", "app.outlier.ai"],
      jobsCount: 1,
      mode: "Platform Default Affiliate",
      lastAudit: "Nov 2026",
    },
    {
      name: "Mercor",
      slug: "mercor",
      referralStatus: "active",
      allowedDomains: ["mercor.com", "jobs.mercor.com"],
      jobsCount: 1,
      mode: "Platform Default Affiliate",
      lastAudit: "Nov 2026",
    },
    {
      name: "Alignerr",
      slug: "alignerr",
      referralStatus: "active",
      allowedDomains: ["alignerr.com", "app.alignerr.com"],
      jobsCount: 1,
      mode: "Direct Career Portal",
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
              Platform Management
            </h1>
            <Badge variant="outline" className="font-mono text-[11px] text-teal-700 bg-teal-50 border-teal-200">
              4 Active Partners
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
            Configure partner platforms, referral domain allowlists, and outbound destination URLs. Outbound redirects enforce strict host validation.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold h-8">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Platform
        </Button>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Vetted Platforms</span>
            <Layers className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">4</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">100% domain verified</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Allowed Domains</span>
            <Globe className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">8</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">SSR allowlist locked</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Active Opportunities</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">4</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Live on public index</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Security Policy</span>
            <ShieldCheck className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">Enforced</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">Zero unvetted redirects</div>
        </div>
      </div>

      {/* Platforms Table Card */}
      <div className="bento-card bg-card overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Registered Platforms & Destination Whitelist</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter platforms..."
                className="h-7 w-48 rounded-md border border-border bg-background px-2.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
              <SlidersHorizontal className="h-3 w-3" />
              Columns
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Referral Status</th>
                <th className="px-4 py-3">Resolution Mode</th>
                <th className="px-4 py-3">Allowed Inbound/Outbound Hosts</th>
                <th className="px-4 py-3 text-center">Active Jobs</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {platforms.map((plat) => (
                <tr key={plat.slug} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-[11px] uppercase">
                        {plat.name.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{plat.name}</div>
                        <div className="font-mono text-[10px] text-muted-foreground">/{plat.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground">
                    <span className="font-medium text-foreground">{plat.mode}</span>
                    <div className="text-[10px] text-muted-foreground">Audited {plat.lastAudit}</div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {plat.allowedDomains.map((dom) => (
                        <span
                          key={dom}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-muted border border-border text-foreground"
                        >
                          {dom}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center font-black text-foreground">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono text-[11px]">
                      {plat.jobsCount}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right space-x-2">
                    <button className="text-primary hover:underline font-bold text-xs">
                      Edit
                    </button>
                    <span className="text-border">|</span>
                    <button className="text-muted-foreground hover:text-foreground font-medium text-xs">
                      Allowlist
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Info Card */}
      <div className="bento-card-compact bg-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-200">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground">Strict Host Allowlist Policy Enforced</h4>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Outbound redirect engine (<code>/out/[jobSlug]</code>) parses URL hostnames and verifies they are registered above. Unauthorized hosts immediately reject with a 400 Bad Request error.
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold shrink-0 gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
          Audit Rules
        </Button>
      </div>
    </div>
  );
}
