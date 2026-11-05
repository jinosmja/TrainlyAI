import { FileText, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
          Admin Audit Logs
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Immutable log of administrative mutations, job status changes, and referral destination adjustments.
        </p>
      </div>

      <Card className="border-border">
        <CardHeader className="p-4 border-b border-border">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            Security & Mutation Trail
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Timestamp (UTC)</th>
                <th className="px-4 py-3">Actor</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/20">
                <td className="px-4 py-3 font-mono text-muted-foreground">2026-11-05 19:30</td>
                <td className="px-4 py-3 font-semibold text-foreground">System Initializer</td>
                <td className="px-4 py-3">
                  <Badge variant="outline" className="text-[10px]">SYSTEM_INIT</Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Repository Scaffold</td>
                <td className="px-4 py-3 text-muted-foreground">Scaffolded TrainlyAI Phase 1 Foundation</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

