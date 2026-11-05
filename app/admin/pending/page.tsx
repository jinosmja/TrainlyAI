import { Clock, ShieldCheck, CheckCircle2, XCircle, AlertTriangle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PendingReviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
          Pending Moderation Queue
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          All ingested jobs require human verification of source authenticity, eligibility, and referral links before publication.
        </p>
      </div>

      <Card className="border-border">
        <CardHeader className="p-4 border-b border-border/80 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            Unreviewed Job Queue
          </CardTitle>
          <Badge variant="outline" className="text-xs font-mono">0 Pending</Badge>
        </CardHeader>
        <CardContent className="p-8 text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-foreground">Queue is completely clear!</h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            All newly discovered opportunities from authorized feeds and manual entries have been reviewed. When background connectors ingest new listings, they will automatically appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

