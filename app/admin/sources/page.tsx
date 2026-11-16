import {
  Radio,
  PlusCircle,
  CheckCircle2,
  AlertCircle,
  Play,
  ShieldCheck,
  Clock,
  RefreshCw,
  SlidersHorizontal,
  ExternalLink,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminSourcesPage() {
  const sources = [
    {
      id: "1",
      platform: "DataAnnotation",
      name: "Authorized Public Feed",
      type: "permitted_public_feed",
      permissionStatus: "approved",
      pollInterval: "360 mins",
      lastSuccess: "Today, 18:00 UTC",
      health: "operational",
      recordsIngested: 1,
    },
    {
      id: "2",
      platform: "Outlier",
      name: "Partner API Connector",
      type: "official_api",
      permissionStatus: "approved",
      pollInterval: "180 mins",
      lastSuccess: "Today, 19:30 UTC",
      health: "operational",
      recordsIngested: 1,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              Ingestion Sources & Connectors
            </h1>
            <Badge variant="outline" className="font-mono text-[11px] text-teal-700 bg-teal-50 border-teal-200">
              Ethical Gated
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
            Ethical permission gate: background sync only executes for connectors marked &lsquo;approved&rsquo;. Newly ingested opportunities are automatically staged in Pending Review.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 text-xs font-semibold h-8">
            <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
            Sync All
          </Button>
          <Button size="sm" className="gap-1.5 text-xs font-semibold h-8">
            <PlusCircle className="h-3.5 w-3.5" />
            Add Connector
          </Button>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Active Connectors</span>
            <Radio className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">2</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">2 of 2 running</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Permission Review</span>
            <ShieldCheck className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">100%</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Zero unvetted syncs</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Auto-Staged to Queue</span>
            <Clock className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">100%</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Mandatory review gate</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Connector Health</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">Optimal</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5">0 errors past 30 days</div>
        </div>
      </div>

      {/* Connectors Table Card */}
      <div className="bento-card bg-card overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Registered Ingestion Feeds & APIs</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
              <SlidersHorizontal className="h-3 w-3" />
              Configure Intervals
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Platform & Feed</th>
                <th className="px-4 py-3">Connector Type</th>
                <th className="px-4 py-3">Permission Gate</th>
                <th className="px-4 py-3">Polling Interval</th>
                <th className="px-4 py-3">Last Success (UTC)</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sources.map((src) => (
                <tr key={src.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="font-bold text-foreground">{src.platform}</div>
                    <div className="text-[11px] text-muted-foreground">{src.name}</div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-muted border border-border text-foreground">
                      {src.type}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 capitalize">
                      <ShieldCheck className="h-3 w-3 text-emerald-600" />
                      {src.permissionStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-muted-foreground">
                    {src.pollInterval}
                  </td>
                  <td className="px-4 py-3.5 font-mono text-muted-foreground">
                    {src.lastSuccess}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right space-x-2">
                    <Button variant="outline" size="sm" className="h-7 text-[11px] gap-1 font-semibold">
                      <Play className="h-2.5 w-2.5 text-primary" />
                      Run Now
                    </Button>
                    <button className="text-primary hover:underline font-bold text-xs">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ethical Ingestion SOP Policy Bento */}
      <div className="bento-card bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-bold text-foreground">Automated Discovery Safeguards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center text-[10px] font-mono">1</span>
              <span>Explicit Permission Only</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Connectors run only when permissionStatus is explicitly &lsquo;approved&rsquo;. &lsquo;prohibited&rsquo; feeds are blocked at the engine layer.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center text-[10px] font-mono">2</span>
              <span>Staged in Pending Queue</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Zero automated publishing. Discovered listings always enter as <code>pending_review</code> until verified by a human administrator.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center text-[10px] font-mono">3</span>
              <span>Duplicate Pre-Screening</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Title + platform normalized hashing flags incoming items matching existing records before entering the human review queue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
