"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

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
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-foreground font-black text-2xl tracking-tight">
              Trainly<span className="text-primary font-bold">AI</span>
            </span>
          </Link>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-1">
            Moderator & Administrator Portal
          </div>
        </div>

        {/* Login Form Card */}
        <Card className="border-border shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              Sign In to Admin
            </CardTitle>
            <CardDescription className="text-xs">
              Access is restricted to authorized moderators and operators.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
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
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                    Password
                  </label>
                  <span className="text-[11px] text-muted-foreground hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <Input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-3 pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full font-bold shadow-sm justify-center"
              >
                {loading ? "Authenticating..." : "Sign In to Admin Portal"}
              </Button>

              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground justify-center pt-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Protected by PostgreSQL Row-Level Security</span>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Return to Public Site */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Return to public TrainlyAI website
          </Link>
        </div>
      </div>
    </div>
  );
}

