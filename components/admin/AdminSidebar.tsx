"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  Briefcase,
  Clock,
  Layers,
  Radio,
  Share2,
  BarChart3,
  FileText,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ADMIN_NAV = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "All Jobs", href: "/admin/jobs", icon: Briefcase },
  { label: "Pending Review", href: "/admin/pending", icon: Clock },
  { label: "Platforms", href: "/admin/platforms", icon: Layers },
  { label: "Sources & Connectors", href: "/admin/sources", icon: Radio },
  { label: "Referral Links", href: "/admin/referrals", icon: Share2 },
  { label: "Click Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Audit Logs", href: "/admin/audit-logs", icon: FileText },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col justify-between shrink-0 min-h-screen">
      <div className="p-4 space-y-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">TrainlyAI Admin</div>
            <div className="text-[10px] text-muted-foreground uppercase font-semibold">Moderation & Ops</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {ADMIN_NAV.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Switch back to public site */}
      <div className="p-4 border-t border-border space-y-2">
        <Link
          href="/"
          className="flex items-center justify-between px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
        >
          <span>View Public Website</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
        <div className="px-3 text-[11px] text-muted-foreground/60 font-mono">
          TrainlyAI v0.1.0 • Admin Shell
        </div>
      </div>
    </aside>
  );
}

