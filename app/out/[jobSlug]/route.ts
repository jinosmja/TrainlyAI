import { NextRequest, NextResponse } from "next/server";

// Static mapping for Phase 1 testing and scaffold verification
const MOCK_REFERRAL_DESTINATIONS: Record<string, string> = {
  "senior-ai-evaluator-general-reasoning": "https://www.dataannotation.tech",
  "python-code-evaluator-ai-trainer": "https://outlier.ai",
  "multilingual-ai-safety-reviewer": "https://mercor.com",
  "stem-math-science-ai-trainer": "https://alignerr.com",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobSlug: string }> }
) {
  const { jobSlug } = await params;

  if (!jobSlug || typeof jobSlug !== "string") {
    return new NextResponse("Invalid Job Slug", { status: 400 });
  }

  // Look up destination (in Phase 2+, this will query Supabase via server client with RLS)
  const destination = MOCK_REFERRAL_DESTINATIONS[jobSlug] || "https://trainlyai.com/jobs";

  // Validate URL protocol
  try {
    const parsedUrl = new URL(destination);
    if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
      return new NextResponse("Invalid Destination Protocol", { status: 400 });
    }
  } catch {
    return new NextResponse("Malformed Destination URL", { status: 400 });
  }

  // In Phase 2+, record privacy-conscious click event in referral_click_events table

  // Issue 307 Temporary Redirect (never 301 permanent redirect)
  return NextResponse.redirect(destination, {
    status: 307,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}

