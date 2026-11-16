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
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ADMIN_NAV = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "All Jobs", href: "/admin/jobs", icon: Briefcase },
  { label: "Pending Review", href: "/admin/pending", icon: Clock, badge: "0" },
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
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-foreground tracking-tight">TrainlyAI Admin</div>
            <div className="text-[10px] text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider">Ops & Moderation</div>
          </div>
        </div>

        {/* Navigation - Data-Dense Swiss Layout */}
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
                  "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Switch back to public site */}
      <div className="p-4 border-t border-border space-y-2">
        <Link
          href="/"
          className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
        >
          <span>View Public Website</span>
          <ExternalLink className="h-3.5 w-3.5 text-primary" />
        </Link>
        <div className="px-3 text-[10px] text-muted-foreground/70 font-mono">
          TrainlyAI v0.1.0 • Data-Dense Ops
        </div>
      </div>
    </aside>
  );
}
