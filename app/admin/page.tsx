import Link from "next/link";
import {
  Briefcase,
  Clock,
  CheckCircle2,
  Share2,
  PlusCircle,
  Radio,
  BarChart3,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const STATS = [
  {
    label: "Total Jobs Tracked",
    value: "4",
    subtext: "Across 4 vetted platforms",
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Published & Public",
    value: "4",
    subtext: "100% human-verified",
    icon: CheckCircle2,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    label: "Pending Review",
    value: "0",
    subtext: "Queue cleared",
    icon: Clock,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/40",
  },
  {
    label: "Total Referral Clicks",
    value: "0",
    subtext: "Measured via /out/[jobSlug]",
    icon: Share2,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/40",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
            Admin Overview & Moderation Dashboard
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Operational status and content moderation for TrainlyAI.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/admin/pending">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs font-semibold">
              <Clock className="h-3.5 w-3.5" />
              Review Queue (0)
            </Button>
          </Link>
          <Link href="/admin/jobs">
            <Button size="sm" className="gap-1.5 text-xs font-semibold">
              <PlusCircle className="h-3.5 w-3.5" />
              Add Manual Job
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-border">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                  <div className="text-2xl font-black text-foreground mt-1">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{stat.subtext}</div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Action Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Moderation Checklist */}
        <Card className="border-border">
          <CardHeader className="pb-3 border-b border-border/80">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Pending Moderation Queue
              </CardTitle>
              <Badge variant="outline" className="text-xs">0 awaiting</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              No jobs currently awaiting review. All ingested records from automated connectors or manual submissions are gated here and cannot be published without human sign-off.
            </p>
            <div className="pt-2">
              <Link href="/admin/pending">
                <Button variant="outline" size="sm" className="w-full justify-center text-xs">
                  Open Pending Queue
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Source Connectors Health */}
        <Card className="border-border">
          <CardHeader className="pb-3 border-b border-border/80">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Radio className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Authorized Ingestion Connectors
              </CardTitle>
              <Badge variant="outline" className="text-xs text-emerald-600 dark:text-emerald-400">
                Ethical Gate Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Connectors are restricted to explicitly permitted APIs and feeds. Background automation places all discovered records strictly in Pending Review with automated duplicate matching.
            </p>
            <div className="pt-2">
              <Link href="/admin/sources">
                <Button variant="outline" size="sm" className="w-full justify-center text-xs">
                  Manage Ingestion Sources
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

