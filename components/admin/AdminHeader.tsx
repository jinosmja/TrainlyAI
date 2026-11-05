"use client";

import Link from "next/link";
import { ShieldCheck, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  return (
    <header className="h-16 border-b border-border bg-card/60 backdrop-blur px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>System Healthy</span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">
          RLS Active • Non-negotiable review gate enabled
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/admin/pending">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
            <Bell className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Pending Review</span>
            <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              0
            </span>
          </Button>
        </Link>

        <div className="flex items-center gap-2 pl-2 border-l border-border">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <User className="h-4 w-4" />
          </div>
          <div className="hidden md:block text-left text-xs">
            <div className="font-semibold text-foreground">Admin Session</div>
            <div className="text-muted-foreground text-[10px]">Owner / Moderator</div>
          </div>
        </div>
      </div>
    </header>
  );
}

