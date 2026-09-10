import { Link, createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  ["What is LitDEX Genesis Champions?", "A collection of 1,000 dynamic, evolving NFT passes on Base Mainnet. Each pass starts as Common and can be leveled up and promoted through Rare, Epic, and Legend based on on-chain activity."],
  ["What blockchain is this on?", "Base Mainnet. All contracts are deployed on Base and verified on Basescan and Sourcify."],
  ["How do I mint a pass?", "Connect your wallet on the Mint page. If you're whitelist-eligible, you'll see your discounted mint options first. Otherwise, you can mint in the public sale for $2 USDC once it opens, limited to 2 per wallet."],
  ["Who is eligible for the whitelist?", "Holders of the original LitVM testnet NFTs: LitShard (Common), LitCore (Rare), and LitGod (Epic). Each testnet NFT held grants one discounted mint: 20% off for LitShard, 30% off for LitCore, and 50% off for LitGod. Discounts apply per NFT held."],
  ["What's the difference between whitelist and public mint?", "Whitelist mint opens first and is exclusively for eligible LitVM holders at a discount. Public mint opens 48 hours later at the full $2 USDC price and is open to everyone, limited to 2 mints per wallet."],
  ["What are the rarities and tiers?", "Four rarities: Common (Tiers 1-9), Rare (Tiers 1-5), Epic (Tiers 1-3), and Legend (a single max tier). Every pass starts as Common Tier 1."],
  ["How does leveling up work?", "Leveling up spends LitDEX points, which you earn through activity on the LitVM testnet and claim onto Base. Each level costs a flat 1,000 points, regardless of rarity."],
  ["How does promotion between rarities work?", "Promotion—moving from Common to Rare, Rare to Epic, or Epic to Legend—requires reaching your rarity's max tier and winning on-chain gameplay challenges. Gameplay is launching soon; promotion is not yet active."],
  ["What happens if I lose a game challenge?", "Your pass becomes damaged and must be repaired before it can be leveled up or used in further challenges. Repair costs a flat 0.1 USDC plus 1,000 points, the same at every rarity and tier."],
  ["What do I get for holding a higher-tier pass?", "Rare and above receive priority access to partnerships and community giveaways. Epic and above receive a future $LITDEX airdrop allocation plus a 10% weekly share of protocol repair revenue; Legend holders receive a larger airdrop share and split a 20% weekly share among a maximum of 50 holders."],
  ["Is the smart contract safe and verified?", "Yes. Both core contracts, LitdexNFT and BasePoints, are open-source and independently verified on Basescan and Sourcify, so anyone can audit the exact rules governing the collection."],
  ["What is the total supply?", "1,000 passes total. 900 enter through the Common tier—800 for the community and 100 minted to the team. The remaining 100 team passes were minted directly at Rare, Epic, and Legend for collaborations and promotional purposes."],
  ["Where can I see or trade my pass after minting?", "On OpenSea, under the LitDEX collection. Every pass's tier, rarity, and full history are visible on-chain."],
  ["Where can I read more details?", "The full whitepaper is linked in the site footer, covering the complete supply model, contract addresses, and mechanics."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "LitDEX Genesis Champions FAQ" },
      { name: "description", content: "Frequently asked questions about LitDEX Genesis Champions." },
      { property: "og:title", content: "LitDEX Genesis Champions FAQ" },
      { property: "og:description", content: "Answers about minting, rarity, gameplay, contracts, and holder benefits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="min-h-[70vh] bg-background px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <section className="mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-white p-6 text-black shadow-2xl sm:p-8 md:p-14">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-blue-600">Help center</p>
        <h1 className="mt-4 font-display text-4xl uppercase md:text-6xl">FAQ</h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index}`} className="rounded-2xl border border-black/10 bg-white px-5 shadow-sm transition-shadow data-[state=open]:shadow-md md:px-6">
              <AccordionTrigger className="py-5 font-sans text-base font-bold hover:no-underline md:text-lg">
                <span className="min-w-0 pr-4 text-left">{question}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-5 font-sans text-sm leading-7 text-black/65 md:text-base">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Link to="/" className="btn fx-9 btn-pill btn-blue mt-10 inline-flex">
          <span className="btn-label">Back to mint</span>
        </Link>
      </section>
    </main>
  );
}