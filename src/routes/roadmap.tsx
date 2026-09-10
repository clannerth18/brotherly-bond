import { Link, createFileRoute } from "@tanstack/react-router";
import { TrainFront } from "lucide-react";

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
          <div className="railway-track-v absolute bottom-4 left-0 top-4 w-6" aria-hidden="true" />
          <div className="railway-progress-v absolute left-0 top-4 h-8 w-6" aria-hidden="true" />
          <div className="space-y-8">
            {MILESTONES.map((milestone) => (
              <div key={milestone.quarter} className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-4">
                <StationMarker current={milestone.current} mobile />
                <MilestoneCard milestone={milestone} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 hidden min-h-[540px] grid-cols-4 md:grid">
          <div className="railway-track-h absolute inset-x-0 top-1/2 h-6 -translate-y-1/2" aria-hidden="true" />
          <div className="railway-progress-h absolute left-0 top-1/2 h-6 w-[12.5%] -translate-y-1/2" aria-hidden="true" />
          {MILESTONES.map((milestone, index) => {
            const above = index % 2 === 0;
            return (
              <div key={milestone.quarter} className="relative grid grid-rows-2 px-3">
                {above && <div className="flex items-end pb-14"><MilestoneCard milestone={milestone} /></div>}
                <div className={`absolute left-1/2 w-px -translate-x-1/2 bg-black/20 ${above ? "bottom-1/2 h-10" : "top-1/2 h-10"}`} />
                <StationMarker current={milestone.current} />
                {!above && <div className="row-start-2 flex items-start pt-14"><MilestoneCard milestone={milestone} /></div>}
              </div>
            );
          })}
        </div>

        <Link to="/" className="btn fx-9 btn-pill btn-blue mt-10 inline-flex">
          <span className="btn-label">Back to mint</span>
        </Link>
      </section>
    </main>
  );
}

function StationMarker({ current, mobile = false }: { current?: boolean; mobile?: boolean }) {
  if (current) {
    return (
      <span
        className={`${mobile ? "relative mt-4" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"} railway-train z-20 flex size-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.6)]`}
        aria-label="Current station"
      >
        <TrainFront className="size-5" strokeWidth={2} aria-hidden="true" />
      </span>
    );
  }

  return (
    <span
      className={`${mobile ? "relative z-10 ml-0.5 mt-6" : "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"} block size-5 rounded-full border-[3px] border-black/25 bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.85)]`}
      aria-hidden="true"
    />
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