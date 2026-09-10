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
  const stats = [
    ["1,000", "Total Supply"],
    ["1,600+", "LitVM Community Members"],
    ["4", "Rarity Tiers"],
    ["Base", "Mainnet Chain"],
  ];

  return (
    <main className="min-h-[70vh] bg-background px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-border bg-white p-6 text-black shadow-2xl sm:p-8 md:p-14">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-blue-600">LitDEX Network</p>
        <h1 className="mt-4 font-display text-4xl uppercase md:text-6xl">About LitDEX</h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
        <div className="mt-8 max-w-4xl space-y-5 font-sans text-base leading-8 text-black/70 md:text-lg">
          <p>LitDEX Genesis Champions is the first NFT collection to bridge the LitDEX ecosystem from testnet to mainnet. Built on top of LitVM, an active testnet DeFi platform that has hosted over 1,600 participants across swaps, liquidity provision, staking, and daily engagement, Genesis Champions carries that existing community, and the points they&apos;ve earned, directly onto Base.</p>
          <p>Every pass in the collection is a living, on-chain record rather than static art. It starts as Common and evolves in rarity and tier as its holder engages with the ecosystem: earning points on LitVM, spending them to level up, and eventually competing in on-chain gameplay to be promoted into rarer tiers.</p>
          <p>The collection totals 1,000 passes on Base Mainnet, with core mechanics governed entirely by verified, open-source smart contracts. Nothing about supply, minting, leveling, or revenue distribution relies on a centralized backend that could be changed without transparency.</p>
          <p>LitDEX&apos;s long-term goal is to keep building real utility for holders: partnerships, revenue-sharing from protocol activity, and an eventual $LITDEX token, all rewarding the holders who help grow the ecosystem from the ground up.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-black/10 bg-white p-5 shadow-md">
              <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text font-display text-3xl uppercase text-transparent">{value}</p>
              <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-black/55">{label}</p>
            </div>
          ))}
        </div>
        <Link to="/" className="btn fx-9 btn-pill btn-blue mt-10 inline-flex">
          <span className="btn-label">Back to mint</span>
        </Link>
      </div>
    </main>
  );
}