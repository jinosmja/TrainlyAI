import { BarChart3, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
          Operational Click Analytics
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Privacy-conscious referral telemetry measured strictly through /out/[jobSlug] events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardContent className="p-5">
            <div className="text-xs text-muted-foreground font-medium">Total Referral Clicks</div>
            <div className="text-2xl font-black text-foreground mt-1">0</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">All-time tracked events</div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5">
            <div className="text-xs text-muted-foreground font-medium">Clicks Past 7 Days</div>
            <div className="text-2xl font-black text-foreground mt-1">0</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Active user interest</div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5">
            <div className="text-xs text-muted-foreground font-medium">Top Performing Platform</div>
            <div className="text-2xl font-black text-foreground mt-1">—</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Awaiting initial traffic</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border p-8 text-center space-y-2">
        <BarChart3 className="h-8 w-8 text-muted-foreground mx-auto" />
        <h3 className="text-sm font-bold text-foreground">Click Visualizer Active</h3>
        <p className="text-xs text-muted-foreground max-w-sm mx-auto">
          Detailed breakdown charts by platform, role title, and timeline will populate automatically as visitor referral clicks occur.
        </p>
      </Card>
    </div>
  );
}

