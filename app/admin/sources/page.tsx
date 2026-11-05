import { Radio, PlusCircle, CheckCircle2, AlertCircle, Play } from "lucide-react";
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
      isEnabled: true,
    },
    {
      id: "2",
      platform: "Outlier",
      name: "Partner API Connector",
      type: "official_api",
      permissionStatus: "approved",
      pollInterval: "180 mins",
      lastSuccess: "Today, 19:30 UTC",
      isEnabled: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
            Ingestion Sources & Connectors
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Strict ethical permission gate: Only sources marked &lsquo;approved&rsquo; can execute background jobs.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Authorized Source
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Connector Name</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Permission Review</th>
                  <th className="px-4 py-3">Poll Interval</th>
                  <th className="px-4 py-3">Last Run</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sources.map((src) => (
                  <tr key={src.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {src.platform}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{src.name}</td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">{src.type}</td>
                    <td className="px-4 py-3">
                      <Badge variant="success" className="text-[10px] capitalize">
                        {src.permissionStatus}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{src.pollInterval}</td>
                    <td className="px-4 py-3 text-muted-foreground">{src.lastSuccess}</td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="outline" size="sm" className="h-7 text-[11px] gap-1">
                        <Play className="h-2.5 w-2.5" />
                        Run Now
                      </Button>
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

