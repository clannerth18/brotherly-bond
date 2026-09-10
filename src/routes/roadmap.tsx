import { Link, createFileRoute } from "@tanstack/react-router";

const MILESTONES = [
  {
    quarter: "Q3 2026",
    title: "Mint live",
    description:
      "Genesis Champions launches on Base Mainnet. Whitelist and public mint open, bringing the LitDEX community fully on-chain.",
    current: true,
  },
  {
    quarter: "Q4 2026",
    title: "Game live",
    description:
      "On-chain gameplay launches, unlocking the promotion path between rarities. Common, Rare, Epic, and Legend tiers become earnable through play.",
  },
  {
    quarter: "Q1 2027",
    title: "Holder utility activation",
    description:
      "Partnership opportunities, community giveaways, and protocol repair-revenue sharing begin for Rare, Epic, and Legend holders.",
  },
  {
    quarter: "Q2 2027",
    title: "TGE and airdrop",
    description:
      "$LITDEX token generation event. Airdrop allocations distributed to Epic and Legend holders as outlined in the whitepaper.",
  },
];

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — LitDEX Genesis Champions" },
      { name: "description", content: "Explore the LitDEX Genesis Champions roadmap from mint to token launch." },
      { property: "og:title", content: "LitDEX Genesis Champions Roadmap" },
      { property: "og:description", content: "Mint, gameplay, holder utility, and the LitDEX token roadmap." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <main className="min-h-[70vh] bg-background px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <section className="mx-auto max-w-[1400px] rounded-[2.5rem] border border-border bg-white p-6 text-black shadow-2xl sm:p-8 md:p-12">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-blue-600">What comes next</p>
        <h1 className="mt-3 font-display text-4xl uppercase md:text-6xl">Roadmap</h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

        <div className="relative mt-12 md:hidden">
          <div className="absolute bottom-4 left-[11px] top-4 w-px bg-black/15" />
          <div className="absolute left-[11px] top-4 h-12 w-px bg-gradient-to-b from-blue-600 to-violet-600" />
          <div className="space-y-8">
            {MILESTONES.map((milestone) => (
              <div key={milestone.quarter} className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-4">
                <span className={`relative z-10 mt-6 block rounded-full border-2 ${milestone.current ? "size-6 border-white bg-gradient-to-br from-blue-600 to-violet-600 shadow-[0_0_18px_rgba(79,70,229,0.55)]" : "ml-1 size-4 border-black/25 bg-white"}`} />
                <MilestoneCard milestone={milestone} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 hidden min-h-[540px] grid-cols-4 md:grid">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-0.5 -translate-y-1/2 bg-black/15" />
          <div className="absolute left-[12.5%] top-1/2 h-0.5 w-0 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-violet-600" />
          {MILESTONES.map((milestone, index) => {
            const above = index % 2 === 0;
            return (
              <div key={milestone.quarter} className="relative grid grid-rows-2 px-3">
                {above && <div className="flex items-end pb-14"><MilestoneCard milestone={milestone} /></div>}
                <div className={`absolute left-1/2 w-px -translate-x-1/2 bg-black/20 ${above ? "bottom-1/2 h-10" : "top-1/2 h-10"}`} />
                <span className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${milestone.current ? "size-7 border-white bg-gradient-to-br from-blue-600 to-violet-600 shadow-[0_0_20px_rgba(79,70,229,0.6)]" : "size-5 border-black/25 bg-white"}`} />
                {!above && <div className="row-start-2 flex items-start pt-14"><MilestoneCard milestone={milestone} /></div>}
              </div>
            );
          })}
        </div>

        <Link to="/" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 font-mono text-[12px] font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5">
          Back to mint
        </Link>
      </section>
    </main>
  );
}

function MilestoneCard({ milestone }: { milestone: (typeof MILESTONES)[number] }) {
  return (
    <article className="w-full rounded-3xl border border-black/10 bg-white p-5 shadow-lg">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-blue-600">{milestone.quarter}</span>
        {milestone.current && (
          <span className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white">Current</span>
        )}
      </div>
      <h2 className="mt-3 font-sans text-lg font-bold uppercase">{milestone.title}</h2>
      <p className="mt-3 font-sans text-sm leading-6 text-black/65">{milestone.description}</p>
    </article>
  );
}