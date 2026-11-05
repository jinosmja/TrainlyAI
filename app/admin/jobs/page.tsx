import Link from "next/link";
import { PlusCircle, Search, Filter, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
      lastChecked: "2 days ago",
    },
    {
      id: "2",
      slug: "python-code-evaluator-ai-trainer",
      title: "Python Software Specialist — AI Model Training",
      platform: "Outlier",
      status: "approved",
      eligibility: "Selected countries",
      pay: "$35 - $55 USD/hr",
      lastChecked: "1 day ago",
    },
    {
      id: "3",
      slug: "multilingual-ai-safety-reviewer",
      title: "Multilingual AI Safety & Localization Reviewer",
      platform: "Mercor",
      status: "approved",
      eligibility: "Worldwide",
      pay: "$18 - $30 USD/hr",
      lastChecked: "Today",
    },
    {
      id: "4",
      slug: "stem-math-science-ai-trainer",
      title: "STEM AI Trainer — Advanced Mathematics & Physics",
      platform: "Alignerr",
      status: "approved",
      eligibility: "Selected countries",
      pay: "$40 - $65 USD/hr",
      lastChecked: "3 days ago",
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
            Manage all draft, published, and archived listings.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Job Manually
        </Button>
      </div>

      <Card className="border-border">
        <CardHeader className="p-4 border-b border-border/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs by title or platform..."
                className="h-8 w-full rounded-md border border-input bg-background pl-8 pr-3 text-xs"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
                <Filter className="h-3 w-3" />
                All Statuses
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
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
                      <Badge variant="outline" className="text-[10px]">
                        {job.eligibility}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">{job.pay}</td>
                    <td className="px-4 py-3">
                      <Badge variant="success" className="text-[10px] capitalize">
                        {job.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{job.lastChecked}</td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/jobs/${job.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                      >
                        Preview <ExternalLink className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

