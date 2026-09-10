import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "LitDEX Genesis Champions FAQ" },
      { name: "description", content: "Frequently asked questions about LitDEX Genesis Champions." },
      { property: "og:title", content: "LitDEX Genesis Champions FAQ" },
      { property: "og:description", content: "Answers to common questions about LitDEX Genesis Champions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="min-h-[70vh] bg-background px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-black md:p-14">
        <p className="btn-text text-[#0038FF]">Help center</p>
        <h1 className="mt-4 font-display text-4xl uppercase md:text-6xl">FAQ</h1>
        <div className="mt-10 border-y-2 border-black/10 py-8">
          <p className="btn-heading">Questions are coming soon.</p>
          <p className="mt-3 font-sans leading-7 text-black/60">
            This page is ready for the final frequently asked questions and answers.
          </p>
        </div>
        <Link to="/" className="btn fx-9 btn-pill btn-blue mt-10 inline-flex">
          <span className="btn-label">Back to mint</span>
        </Link>
      </div>
    </main>
  );
}