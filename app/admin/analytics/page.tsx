import {
  BarChart3,
  TrendingUp,
  Users,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Filter,
  Download,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminAnalyticsPage() {
  const platformStats = [
    { name: "DataAnnotation", clicks: 0, share: "0%", avgLatency: "18ms", status: "Active" },
    { name: "Outlier", clicks: 0, share: "0%", avgLatency: "21ms", status: "Active" },
    { name: "Mercor", clicks: 0, share: "0%", avgLatency: "19ms", status: "Active" },
    { name: "Alignerr", clicks: 0, share: "0%", avgLatency: "22ms", status: "Active" },
  ];

  const categoryStats = [
    { name: "AI Trainer & Coding Specialist", clicks: 0, share: "0%" },
    { name: "Domain Expert / STEM", clicks: 0, share: "0%" },
    { name: "Multimodal & Audio Evaluator", clicks: 0, share: "0%" },
    { name: "RLHF & Safety Annotator", clicks: 0, share: "0%" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              Operational Click Analytics
            </h1>
            <Badge variant="outline" className="font-mono text-[11px] text-teal-700 bg-teal-50 border-teal-200">
              Zero PII Telemetry
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
            Privacy-conscious referral telemetry measured strictly through server-side <code>/out/[jobSlug]</code> redirect invocations. No tracking cookies or client fingerprints.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            Past 30 Days
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <Download className="h-3.5 w-3.5 text-muted-foreground" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Total Outbound Clicks</span>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">0</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">All-time tracked events</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Clicks Past 7 Days</span>
            <Users className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">0</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Awaiting public launch</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Redirect Latency</span>
            <Sparkles className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">&lt; 25ms</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Edge SSR 307 routing</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Privacy Compliance</span>
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-600 mt-1">100%</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">GDPR/CCPA strict zero-cookie</div>
        </div>
      </div>

      {/* Analytics Breakdown Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Breakdown */}
        <div className="bento-card bg-card lg:col-span-2 overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-bold text-foreground">Outbound Clicks by Platform</h2>
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">Live Telemetry</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3 text-center">Referral Clicks</th>
                  <th className="px-4 py-3">Share Ratio</th>
                  <th className="px-4 py-3">Avg Latency</th>
                  <th className="px-4 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {platformStats.map((plat) => (
                  <tr key={plat.name} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-foreground">
                      {plat.name}
                    </td>
                    <td className="px-4 py-3.5 text-center font-mono font-bold text-foreground">
                      {plat.clicks}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground">{plat.share}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-mono text-muted-foreground">
                      {plat.avgLatency}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {plat.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bento-card bg-card p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-sm font-bold text-foreground">Demand by Category</h3>
            <Badge variant="outline" className="font-mono text-[10px]">All Traffic</Badge>
          </div>

          <div className="space-y-3.5 pt-1">
            {categoryStats.map((cat) => (
              <div key={cat.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground truncate max-w-[200px]">{cat.name}</span>
                  <span className="font-mono text-muted-foreground">{cat.clicks} clicks</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: "0%" }} />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-border text-[11px] text-muted-foreground leading-relaxed">
            Data aggregates in real-time as users click <strong>Apply Now</strong> across public job postings.
          </div>
        </div>
      </div>

      {/* Ethical Telemetry Architecture Notice */}
      <div className="bento-card-compact bg-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-200">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground">Privacy-Preserving Telemetry Architecture</h4>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Only anonymous aggregate counters are incremented in the database. No IP addresses, device canvas fingerprints, or browser identifying information are captured or logged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
