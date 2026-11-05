import { Layers, PlusCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
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
    },
    {
      name: "Outlier",
      slug: "outlier",
      referralStatus: "active",
      allowedDomains: ["outlier.ai", "app.outlier.ai"],
      jobsCount: 1,
    },
    {
      name: "Mercor",
      slug: "mercor",
      referralStatus: "active",
      allowedDomains: ["mercor.com", "jobs.mercor.com"],
      jobsCount: 1,
    },
    {
      name: "Alignerr",
      slug: "alignerr",
      referralStatus: "active",
      allowedDomains: ["alignerr.com", "app.alignerr.com"],
      jobsCount: 1,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
            Platform Management
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Configure partner platforms, referral domain allowlists, and default affiliate destinations.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Platform
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform Name</th>
                  <th className="px-4 py-3">Referral Status</th>
                  <th className="px-4 py-3">Allowed Domains</th>
                  <th className="px-4 py-3">Active Jobs</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {platforms.map((plat) => (
                  <tr key={plat.slug} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {plat.name}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="success" className="text-[10px] capitalize">
                        {plat.referralStatus}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">
                      {plat.allowedDomains.join(", ")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {plat.jobsCount}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-primary hover:underline font-medium">
                        Configure
                      </button>
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

