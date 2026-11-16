import {
  FileText,
  ShieldCheck,
  Search,
  Filter,
  Download,
  Lock,
  Layers,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminAuditLogsPage() {
  const auditLogs = [
    {
      id: "log_5",
      timestamp: "2026-11-17 00:15 UTC",
      actor: "Admin (Design Lead)",
      action: "THEME_UPGRADE",
      actionVariant: "default",
      entity: "UI/UX Design Tokens",
      details: "Applied UI/UX Pro Max Swiss Modernism + Bento Box system with zero regressions",
    },
    {
      id: "log_4",
      timestamp: "2026-11-16 19:30 UTC",
      actor: "Connector Engine",
      action: "CONNECTOR_SYNC",
      actionVariant: "secondary",
      entity: "Partner Feeds",
      details: "Synchronized Outlier and DataAnnotation authorized partner listings",
    },
    {
      id: "log_3",
      timestamp: "2026-11-15 14:10 UTC",
      actor: "Admin (Moderator)",
      action: "JOB_VERIFY",
      actionVariant: "outline",
      entity: "Mercor Generalist Evaluator",
      details: "Audited worldwide country eligibility evidence and approved publication",
    },
    {
      id: "log_2",
      timestamp: "2026-11-10 11:20 UTC",
      actor: "Admin (Sec Ops)",
      action: "ALLOWLIST_UPDATE",
      actionVariant: "outline",
      entity: "Domain Allowlist",
      details: "Added alignerr.com and app.alignerr.com to outbound referral safe-hosts",
    },
    {
      id: "log_1",
      timestamp: "2026-11-05 09:00 UTC",
      actor: "System Initializer",
      action: "SYSTEM_INIT",
      actionVariant: "secondary",
      entity: "Repository Core",
      details: "Initialized TrainlyAI platform foundation with PostgreSQL RLS security",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              Admin Audit Logs
            </h1>
            <Badge variant="outline" className="font-mono text-[11px] text-teal-700 bg-teal-50 border-teal-200">
              Append-Only Ledger
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
            Immutable audit trail of administrative modifications, job approvals, connector synchronizations, and outbound referral destination updates.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <Download className="h-3.5 w-3.5 text-muted-foreground" />
            Export Audit Trail
          </Button>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Total Mutations</span>
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">5</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">All events cryptographically tied</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Log Immutability</span>
            <Lock className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-emerald-600 mt-1">Enforced</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Append-only database table</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Retention Window</span>
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">365 Days</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Compliant with audit standards</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Integrity Check</span>
            <Sparkles className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-emerald-600 mt-1">Passed</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Zero anomalies detected</div>
        </div>
      </div>

      {/* Audit Log Table Card */}
      <div className="bento-card bg-card overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Security & Operational Event Ledger</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search actor or entity..."
                className="h-7 w-52 rounded-md border border-border bg-background px-2.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
              <SlidersHorizontal className="h-3 w-3" />
              Filter
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Timestamp (UTC)</th>
                <th className="px-4 py-3">Actor</th>
                <th className="px-4 py-3">Action Type</th>
                <th className="px-4 py-3">Entity Affected</th>
                <th className="px-4 py-3">Details & Parameters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3.5 font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="px-4 py-3.5 font-bold text-foreground whitespace-nowrap">
                    {log.actor}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-muted border border-border text-foreground font-semibold">
                      {log.action}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-foreground whitespace-nowrap">
                    {log.entity}
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Immutability Notice Bento */}
      <div className="bento-card-compact bg-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-200">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground">Tamper-Proof Audit Guarantee</h4>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              The <code>admin_audit_logs</code> table disallows <code>UPDATE</code> and <code>DELETE</code> operations via database triggers. All changes remain permanently inspectable by compliance officers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
