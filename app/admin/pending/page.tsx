import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Eye,
  RefreshCw,
  Search,
  Filter,
  CheckCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Database,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PendingReviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              Pending Moderation Queue
            </h1>
            <Badge variant="outline" className="font-mono text-[11px] text-teal-700 bg-teal-50 border-teal-200">
              Zero Backlog
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
            Human verification gate: every opportunity ingested via background connectors or submitted manually must be audited for source authenticity, accurate compensation, and allowed referral destinations prior to public indexing.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
            Check Ingestion Feeds
          </Button>
          <Link href="/admin/jobs">
            <Button size="sm" className="h-8 gap-1.5 text-xs font-semibold">
              <Eye className="h-3.5 w-3.5" />
              View Published Jobs
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Pending Review</span>
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">0</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            100% reviewed
          </div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Ingested This Week</span>
            <Database className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">4</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Across 4 platforms</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Duplicate Risk Flags</span>
            <AlertTriangle className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">0</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Deduplication active</div>
        </div>

        <div className="bento-card-compact bg-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">Active Connectors</span>
            <Radio className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-foreground mt-1">2</div>
          <div className="text-[11px] text-teal-600 font-medium mt-0.5">All healthy & verified</div>
        </div>
      </div>

      {/* Empty State / Status Container */}
      <div className="bento-card bg-card overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Unreviewed Job Queue (0)</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span>Automated listener standing by</span>
          </div>
        </div>

        <div className="p-10 text-center space-y-4 max-w-lg mx-auto">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-200">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-base font-black text-foreground">Moderation Queue is Clear</h3>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              All newly discovered opportunities from authorized feeds and manual entries have been audited and verified. When background connectors discover new listings, they will automatically appear here with full duplicate risk scoring and source provenance.
            </p>
          </div>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link href="/admin/sources">
              <Button variant="outline" size="sm" className="h-8 text-xs font-semibold gap-1.5">
                <Radio className="h-3.5 w-3.5 text-teal-600" />
                View Connectors
              </Button>
            </Link>
            <Link href="/admin/jobs">
              <Button size="sm" className="h-8 text-xs font-semibold gap-1.5">
                <Eye className="h-3.5 w-3.5" />
                Manage Published
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Verification Standards Checklist (Data-Dense Bento) */}
      <div className="bento-card bg-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground">Moderator Standard Operating Procedure (SOP)</h3>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground">TrainlyAI Policy v1.4</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono">1</span>
              <span>Source Authenticity</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Validate original hiring URL belongs to the vetted platform domain before approving.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono">2</span>
              <span>Eligibility Evidence</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Confirm whether location is truly Worldwide or restricted to specific country codes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono">3</span>
              <span>Compensation Honesty</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Never invent salary figures. Display only confirmed platform compensation or &quot;Not disclosed&quot;.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono">4</span>
              <span>Referral Safety</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              Ensure referral destination host matches the platform allowlist for safe 307 redirects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
