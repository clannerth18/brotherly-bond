import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LitDEX Network" },
      { name: "description", content: "Contact LitDEX Network on Telegram or X." },
      { property: "og:title", content: "Contact LitDEX Network" },
      { property: "og:description", content: "Reach the LitDEX team on Telegram or X." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-background px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-black md:p-14">
        <p className="btn-text text-[#0038FF]">LitDEX Network</p>
        <h1 className="mt-4 font-display text-4xl uppercase md:text-6xl">Contact Us</h1>
        <p className="mt-8 font-sans text-lg leading-8 text-black/70">Reach us on Telegram or X.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://t.me/litdex_app" target="_blank" rel="noopener noreferrer" className="btn fx-9 btn-pill btn-blue inline-flex">
            <span className="btn-label">Telegram</span>
          </a>
          <a href="https://x.com/LitDEXApp" target="_blank" rel="noopener noreferrer" className="btn fx-9 btn-pill btn-lime inline-flex">
            <span className="btn-label">X / Twitter</span>
          </a>
        </div>
        <Link to="/" className="btn fx-9 btn-pill btn-blue mt-10 inline-flex">
          <span className="btn-label">Back to mint</span>
        </Link>
      </div>
    </main>
  );
}