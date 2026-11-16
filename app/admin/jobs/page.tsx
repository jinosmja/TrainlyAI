import Link from "next/link";
import { PlusCircle, Search, Filter, Briefcase, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminJobsPage() {
  const jobs = [
    {
      id: "1",
      slug: "senior-ai-evaluator-general-reasoning",
      title: "Senior AI Evaluator — General Reasoning",
      platform: "DataAnnotation",
      status: "approved",
      eligibility: "Worldwide",
      pay: "$20 - $40 USD/hr",
      lastChecked: "2 hours ago",
    },
    {
      id: "2",
      slug: "python-code-evaluator-ai-trainer",
      title: "Python Software Specialist — AI Model Training",
      platform: "Outlier",
      status: "approved",
      eligibility: "Selected countries",
      pay: "$35 - $55 USD/hr",
      lastChecked: "5 hours ago",
    },
    {
      id: "3",
      slug: "multilingual-ai-safety-reviewer",
      title: "Multilingual AI Safety & Localization Reviewer",
      platform: "Mercor",
      status: "approved",
      eligibility: "Worldwide",
      pay: "$18 - $30 USD/hr",
      lastChecked: "1 day ago",
    },
    {
      id: "4",
      slug: "stem-math-science-ai-trainer",
      title: "STEM AI Trainer — Advanced Mathematics & Physics",
      platform: "Alignerr",
      status: "approved",
      eligibility: "Selected countries",
      pay: "$40 - $65 USD/hr",
      lastChecked: "1 day ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
            Job Catalog Management
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage all published, draft, closed, and rejected AI opportunity records.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold shadow-xs">
          <PlusCircle className="h-3.5 w-3.5" />
          <span>Add Job Manually</span>
        </Button>
      </div>

      <div className="bento-card bg-card p-0 overflow-hidden">
        {/* Status Filter Tabs & Search Bar */}
        <div className="p-4 border-b border-border space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold shadow-xs cursor-pointer">
                All Published (4)
              </span>
              <span className="px-3 py-1.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                Pending Review (0)
              </span>
              <span className="px-3 py-1.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                Drafts (0)
              </span>
              <span className="px-3 py-1.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                Closed / Expired (0)
              </span>
              <span className="px-3 py-1.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                Rejected (0)
              </span>
            </div>

            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Filter by title or platform..."
                className="h-8 w-full rounded-lg border border-input bg-card pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Eligibility</th>
                <th className="px-4 py-3">Compensation</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Last Verified</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-semibold text-foreground">
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
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">{job.pay}</td>
                  <td className="px-4 py-3">
                    <Badge variant="verified" className="text-[10px] capitalize">
                      {job.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{job.lastChecked}</td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Link
                      href={`/jobs/${job.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                    >
                      Preview <ExternalLink className="h-3 w-3" />
                    </Link>
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
