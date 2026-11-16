"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Briefcase, Layers, Info, Menu, X, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Browse Jobs", href: "/jobs", icon: Briefcase },
  { label: "Platforms", href: "/platforms", icon: Layers },
  { label: "Categories", href: "/categories", icon: Sparkles },
  { label: "About", href: "/about", icon: Info },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <Container size="default">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo - Swiss Clarity with AI-Native Accent */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs transition-transform group-hover:scale-105">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-foreground font-black text-xl tracking-tight leading-none">
                  Trainly<span className="text-primary font-bold">AI</span>
                </span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" title="Live Global Platform" />
              </div>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">
                Discover • Train • Earn
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Swiss Minimalist Bar */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                    isActive
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/admin/login">
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 mr-1 text-slate-500" />
                Admin
              </Button>
            </Link>
            <Link href="/jobs">
              <Button size="sm" className="font-semibold shadow-xs gap-1.5">
                <span>Explore Jobs</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="h-10 w-10 min-h-[44px] min-w-[44px]"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-in fade-in-20 duration-150">
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3.5 py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px]",
                      isActive
                        ? "text-primary bg-primary/10 font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
                <Link
                  href="/jobs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button className="w-full justify-center min-h-[44px]">
                    Explore All Jobs
                  </Button>
                </Link>
                <Link
                  href="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="outline" className="w-full justify-center text-xs min-h-[44px]">
                    <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
                    Admin Portal
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
