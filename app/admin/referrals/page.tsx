import { Share2, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminReferralsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
          Central Referral Link Configuration
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Audit and manage platform affiliate destinations, link overrides, and destination domain allowlists.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Referral Routing Policy
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          All public application links route through <code>/out/[jobSlug]</code>. Referral URLs are never exposed in public HTML. The routing engine validates that the target host belongs to the platform&apos;s approved domain allowlist before issuing a temporary redirect (307).
        </p>
      </div>

      <Card className="border-border">
        <CardHeader className="p-4 border-b border-border">
          <CardTitle className="text-sm font-bold">Platform Referral Destinations</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground font-semibold">
              <tr>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Referral Resolution Mode</th>
                <th className="px-4 py-3">Audit Checked</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/20">
                <td className="px-4 py-3 font-semibold text-foreground">DataAnnotation</td>
                <td className="px-4 py-3">
                  <Badge variant="success" className="text-[10px]">Active Verified</Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Platform Default Referral URL</td>
                <td className="px-4 py-3 text-muted-foreground">Nov 2026</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-primary hover:underline font-medium">Edit Destination</button>
                </td>
              </tr>
              <tr className="hover:bg-muted/20">
                <td className="px-4 py-3 font-semibold text-foreground">Outlier</td>
                <td className="px-4 py-3">
                  <Badge variant="success" className="text-[10px]">Active Verified</Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Platform Default Referral URL</td>
                <td className="px-4 py-3 text-muted-foreground">Nov 2026</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-primary hover:underline font-medium">Edit Destination</button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

