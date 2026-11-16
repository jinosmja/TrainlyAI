import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-16 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              <Mail className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Contact & Inquiries
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Have feedback, a platform partnership request, or spotted a listing that needs re-verification? Reach out to the TrainlyAI moderation team.
            </p>
          </div>

          <div className="bento-card bg-card space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Full Name
              </label>
              <Input placeholder="Enter your full name" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Email Address
              </label>
              <Input type="email" placeholder="you@domain.com" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Subject
              </label>
              <Input placeholder="Listing update inquiry, platform partnership, etc." />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-input bg-card p-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
                placeholder="Share your question or feedback..."
              />
            </div>

            <Button className="w-full font-semibold shadow-xs justify-center gap-1.5">
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </Button>

            <p className="text-[11px] text-muted-foreground text-center">
              We aim to respond to inquiries within 1–2 business days.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
