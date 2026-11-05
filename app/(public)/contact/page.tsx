import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <Container size="sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Contact & Inquiries
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have feedback, a platform partnership request, or spotted a listing that needs re-verification? Reach out to the TrainlyAI team.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Full Name
              </label>
              <Input placeholder="Enter your name" />
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
              <Input placeholder="E.g., Listing update inquiry, platform partnership" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-foreground/80 tracking-wider">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Share your question or feedback..."
              />
            </div>

            <Button className="w-full font-semibold shadow-sm justify-center">
              Send Message
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

