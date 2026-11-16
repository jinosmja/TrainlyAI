"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Lock, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminLoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In Phase 4, this integrates directly with Supabase Auth
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/admin";
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 bg-slate-50/60 dark:bg-slate-950/40">
      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-xl group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-bento group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-foreground font-black text-2xl tracking-tight">
              Trainly<span className="text-primary font-bold">AI</span>
            </span>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="font-mono text-[10px] text-teal-700 bg-teal-50 border-teal-200">
              Admin & Ops Gate
            </Badge>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground font-medium">Session Security v1.4</span>
          </div>
        </div>

        {/* Login Form Bento Card */}
        <div className="bento-card bg-card p-6 sm:p-8 space-y-6 shadow-bento">
          <div className="space-y-1.5 text-center">
            <div className="mx-auto h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
              <Lock className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-black text-foreground tracking-tight">
              Sign In to Admin Portal
            </h1>
            <p className="text-xs text-muted-foreground max-w-xs mx-auto">
              Access is restricted to authorized operators and moderators of TrainlyAI.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Admin Email
              </label>
              <Input
                type="email"
                required
                placeholder="admin@trainlyai.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 text-xs bg-background"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                  Password
                </label>
                <span className="text-[11px] text-primary hover:underline cursor-pointer font-medium">
                  Forgot password?
                </span>
              </div>
              <Input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 text-xs bg-background font-mono"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-10 font-bold shadow-bento justify-center text-xs active:scale-[0.98] transition-transform"
              >
                {loading ? "Authenticating Operator..." : "Sign In to Admin Console"}
              </Button>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Protected by PostgreSQL Row-Level Security</span>
            </div>
          </form>
        </div>

        {/* Return to Public Site */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Return to public TrainlyAI website
          </Link>
        </div>
      </div>
    </div>
  );
}
