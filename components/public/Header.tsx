"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Briefcase, Layers, Info, Menu, X, ShieldCheck } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container size="default">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg tracking-tight transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-black text-xl leading-none">
                Trainly<span className="text-primary font-bold">AI</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                Discover • Train • Earn
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                    "flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link href="/admin/login">
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                Admin
              </Button>
            </Link>
            <Link href="/jobs">
              <Button size="sm" className="font-semibold shadow-sm">
                Explore All Jobs
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
                      "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
                <Link
                  href="/jobs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button className="w-full justify-center">
                    Explore All Jobs
                  </Button>
                </Link>
                <Link
                  href="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="outline" className="w-full justify-center text-xs">
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

