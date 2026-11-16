import Link from "next/link";
import { Sparkles, Brain, Layers, Code2, BookOpen, Languages, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const ALL_CATEGORIES = [
  {
    name: "AI Model Evaluation",
    slug: "ai-evaluation",
    description: "Assess and benchmark responses from generative models for factual accuracy, safety, and reasoning coherence.",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "LLM & AI Trainers",
    slug: "ai-trainer",
    description: "Train foundational models through high-complexity reasoning, chain-of-thought, and prompt engineering.",
    icon: Sparkles,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/40",
  },
  {
    name: "Data Annotation & Labelling",
    slug: "data-annotation",
    description: "Label and classify multi-modal datasets, including image, audio, video, and text bounding.",
    icon: Layers,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/40",
  },
  {
    name: "Coding & Software Engineering",
    slug: "coding-and-software",
    description: "Write code benchmarks, test synthetic code outputs, and review language generation in Python, JS, C++, and Go.",
    icon: Code2,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    name: "Subject-Matter Experts",
    slug: "subject-matter-experts",
    description: "Deep domain evaluations in Mathematics, Physics, Chemistry, Law, Medicine, Finance, and Philosophy.",
    icon: BookOpen,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/40",
  },
  {
    name: "Language & Translation",
    slug: "language-and-translation",
    description: "Bilingual translation, dialect nuances, multi-language speech transcription, and local cultural alignment.",
    icon: Languages,
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-50 dark:bg-sky-950/40",
  },
];

export default function CategoriesPage() {
  return (
    <div className="py-12 bg-slate-50/50 dark:bg-slate-950/20 min-h-screen">
      <Container size="default">
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Category Directory</span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
            AI Job Categories & Specializations
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Browse global AI opportunities tailored to your background, technical skills, or language expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.slug} className="bento-card bg-card flex flex-col justify-between">
                <div className="space-y-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cat.bgColor} ${cat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Listings
                  </span>
                  <Link href={`/jobs?category=${cat.slug}`}>
                    <Button variant="outline" size="sm" className="font-semibold text-xs gap-1">
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
