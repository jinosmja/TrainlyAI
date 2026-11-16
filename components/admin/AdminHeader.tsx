"use client";

import Link from "next/link";
import { ShieldCheck, Bell, User, CheckCircle2, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  return (
    <header className="h-14 border-b border-border bg-card/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
          <span>System Healthy</span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">
          RLS Active • Mandatory Human Review Gate Enabled
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/admin/pending">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs font-semibold">
            <Bell className="h-3.5 w-3.5 text-teal-600" />
            <span className="hidden sm:inline">Pending Review</span>
            <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              0
            </span>
          </Button>
        </Link>

        <div className="flex items-center gap-2 pl-2 border-l border-border">
          <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            AD
          </div>
          <div className="hidden md:block text-left text-xs">
            <div className="font-bold text-foreground leading-tight">Admin Session</div>
            <div className="text-muted-foreground text-[10px]">Owner • Full Access</div>
          </div>
        </div>
      </div>
    </header>
  );
}
