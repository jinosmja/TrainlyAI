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
  ShieldCheck,
  AlertTriangle,
  Layers,
  Copy,
  Activity,
  FileText,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const KPI_STATS = [
  {
    label: "Total Jobs Tracked",
    value: "4",
    subtext: "Across 4 active platforms",
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
    label: "Pending Review Queue",
    value: "0",
    subtext: "All items reviewed",
    icon: Clock,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/40",
  },
  {
    label: "Referral Clicks",
    value: "0",
    subtext: "Measured via /out/[jobSlug]",
    icon: Share2,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/40",
  },
];

const RECENT_JOBS = [
  {
    title: "Senior AI Evaluator — General Reasoning",
    platform: "DataAnnotation",
    status: "approved",
    eligibility: "Worldwide",
    pay: "$20 - $40 USD/hr",
    lastChecked: "2 hours ago",
    duplicateRisk: "None",
  },
  {
    title: "Python Software Specialist — AI Model Training",
    platform: "Outlier",
    status: "approved",
    eligibility: "Selected countries",
    pay: "$35 - $55 USD/hr",
    lastChecked: "5 hours ago",
    duplicateRisk: "None",
  },
  {
    title: "Multilingual AI Safety & Localization Reviewer",
    platform: "Mercor",
    status: "approved",
    eligibility: "Worldwide",
    pay: "$18 - $30 USD/hr",
    lastChecked: "1 day ago",
    duplicateRisk: "None",
  },
  {
    title: "STEM AI Trainer — Advanced Mathematics & Physics",
    platform: "Alignerr",
    status: "approved",
    eligibility: "Selected countries",
    pay: "$40 - $65 USD/hr",
    lastChecked: "1 day ago",
    duplicateRisk: "None",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
            Operational Dashboard & Review Console
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Real-time job aggregation health, human moderation queue, and referral click monitoring.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/admin/pending">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs font-semibold">
              <Clock className="h-3.5 w-3.5 text-teal-600" />
              <span>Pending Queue (0)</span>
            </Button>
          </Link>
          <Link href="/admin/jobs">
            <Button size="sm" className="gap-1.5 text-xs font-semibold shadow-xs">
              <PlusCircle className="h-3.5 w-3.5" />
              <span>Add Job Manually</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid — Data-Dense Style (#28) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bento-card-compact bg-card flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-muted-foreground">{stat.label}</div>
                <div className="text-2xl font-black text-foreground font-mono mt-1">{stat.value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{stat.subtext}</div>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Two-Column Operational Bento Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Recent Jobs & Moderation Queue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bento-card bg-card p-0 overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>Recently Verified Jobs</span>
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Latest listings published following human moderator verification.
                </p>
              </div>
              <Link href="/admin/jobs">
                <Button variant="ghost" size="sm" className="text-xs text-primary font-semibold gap-1">
                  <span>View All (4)</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
                  <tr>
                    <th className="px-4 py-2.5">Job Title</th>
                    <th className="px-4 py-2.5">Platform</th>
                    <th className="px-4 py-2.5">Eligibility</th>
                    <th className="px-4 py-2.5">Stated Compensation</th>
                    <th className="px-4 py-2.5">Status</th>
                    <th className="px-4 py-2.5">Duplicate Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {RECENT_JOBS.map((job) => (
                    <tr key={job.title} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground max-w-[220px] truncate">
                        {job.title}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{job.platform}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={job.eligibility === "Worldwide" ? "worldwide" : "selected"}
                          className="text-[10px]"
                        >
                          {job.eligibility}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 font-mono font-medium text-slate-700 dark:text-slate-300">
                        {job.pay}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="verified" className="text-[10px] capitalize">
                          {job.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                          {job.duplicateRisk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: System Status & Duplicate Detection Monitor */}
        <div className="space-y-6">
          {/* Duplicate Detection Monitor */}
          <div className="bento-card bg-card space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Copy className="h-4 w-4 text-teal-600" />
                <span>Duplicate Detection</span>
              </h3>
              <Badge variant="verified" className="text-[10px]">Active</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automated multi-signal matching (canonical URL fingerprint, external job ID, title similarity) scans newly ingested records.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-border text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Exact URL Matches:</span>
                <span className="font-mono font-bold text-foreground">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Probable Title Duplicates:</span>
                <span className="font-mono font-bold text-foreground">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Resolution Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Clean</span>
              </div>
            </div>
          </div>

          {/* Automated Discovery Connectors Health */}
          <div className="bento-card bg-card space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Radio className="h-4 w-4 text-primary" />
                <span>Automated Discovery</span>
              </h3>
              <Badge variant="outline" className="text-[10px]">2 Connectors</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Background workers poll authorized APIs and feeds. All discovered records enter Pending Review automatically.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted/60">
                <span className="font-semibold text-foreground">DataAnnotation Feed</span>
                <Badge variant="verified" className="text-[10px]">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted/60">
                <span className="font-semibold text-foreground">Outlier Partner API</span>
                <Badge variant="verified" className="text-[10px]">Healthy</Badge>
              </div>
            </div>
            <Link href="/admin/sources" className="block pt-1">
              <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
                Manage Ingestion Sources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
