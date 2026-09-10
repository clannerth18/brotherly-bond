import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LitDEX Genesis Champions" },
      {
        name: "description",
        content: "Learn about LitDEX Genesis Champions and its place in the LitDEX and LitVM ecosystem.",
      },
      { property: "og:title", content: "About LitDEX Genesis Champions" },
      {
        property: "og:description",
        content: "A dynamic, evolving membership pass collection on Base Mainnet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-[70vh] bg-background px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-black md:p-14">
        <p className="btn-text text-[#0038FF]">LitDEX Network</p>
        <h1 className="mt-4 font-display text-4xl uppercase md:text-6xl">About</h1>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-black/70">
          LitDEX Genesis Champions is a dynamic, evolving membership pass collection on Base Mainnet,
          extending the LitDEX and LitVM ecosystem.
        </p>
        <Link to="/" className="btn fx-9 btn-pill btn-blue mt-10 inline-flex">
          <span className="btn-label">Back to mint</span>
        </Link>
      </div>
    </main>
  );
}