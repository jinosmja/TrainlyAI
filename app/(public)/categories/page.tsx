import Link from "next/link";
import { Sparkles, Brain, Layers, Code2, BookOpen, Languages, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ALL_CATEGORIES = [
  {
    name: "AI Model Evaluation",
    slug: "ai-evaluation",
    description: "Assess and benchmark responses from generative models for factual accuracy, safety, and coherence.",
    icon: Brain,
  },
  {
    name: "LLM & AI Trainers",
    slug: "ai-trainer",
    description: "Train foundational models through high-complexity reasoning, chain-of-thought, and prompt engineering.",
    icon: Sparkles,
  },
  {
    name: "Data Annotation & Labelling",
    slug: "data-annotation",
    description: "Label and classify multi-modal datasets, including image, audio, video, and text bounding.",
    icon: Layers,
  },
  {
    name: "Coding & Software Engineering",
    slug: "coding-and-software",
    description: "Write code benchmarks, test synthetic code outputs, and review language generation in Python, JS, C++, and Go.",
    icon: Code2,
  },
  {
    name: "Subject-Matter Experts",
    slug: "subject-matter-experts",
    description: "Deep domain evaluations in Mathematics, Physics, Chemistry, Law, Medicine, Finance, and Philosophy.",
    icon: BookOpen,
  },
  {
    name: "Language, Translation & Localization",
    slug: "language-and-translation",
    description: "Bilingual translation, dialect nuances, multi-language speech transcription, and local cultural alignment.",
    icon: Languages,
  },
];

export default function CategoriesPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <Container size="default">
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-primary">
            Category Directory
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
            AI Job Categories & Specializations
          </h1>
          <p className="text-sm text-muted-foreground">
            Browse global AI opportunities tailored to your background, technical skills, or language expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.slug} className="flex flex-col justify-between border-border hover:shadow-md transition-all">
                <CardHeader className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold">{cat.name}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {cat.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-2 border-t border-border/60">
                  <Link href={`/jobs?category=${cat.slug}`} className="w-full">
                    <Button variant="outline" size="sm" className="w-full justify-between font-semibold">
                      <span>View Open Listings</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

