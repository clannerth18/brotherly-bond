import { Link } from "@tanstack/react-router";

const WHITEPAPER_URL =
  "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/nft@main/files/boardpass/LitDEX_Genesis_Champions_Whitepaper.pdf";

const SOCIALS = [
  {
    name: "X",
    href: "https://x.com/LitDEXApp",
    icon: "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/nft@main/files/boardpass/X-logo-white.png",
  },
  {
    name: "Telegram",
    href: "https://t.me/litdex_app",
    icon: "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/nft@main/files/boardpass/Telegram-logo.png",
  },
  {
    name: "OpenSea",
    href: "https://opensea.io/collection/litdex",
    icon: "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/nft@main/files/boardpass/openseawhite.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 border-b border-card-foreground/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" aria-label="LitDEX Genesis Champions home" className="inline-flex items-center font-display text-xl uppercase">
              <span className="rounded-md bg-primary px-2 py-1 text-primary-foreground">LIT</span>
              <span className="ml-1 rounded-md border border-card-foreground/30 px-2 py-1">DEX</span>
            </Link>

            <nav aria-label="Footer navigation" className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
              <a
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text transition-colors hover:text-primary"
              >
                Whitepaper
              </a>
              <Link to="/about" className="btn-text transition-colors hover:text-primary">
                About
              </Link>
              <Link to="/contact" className="btn-text transition-colors hover:text-primary">
                Contact Us
              </Link>
              <Link to="/faq" className="btn-text transition-colors hover:text-primary">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex size-11 items-center justify-center rounded-full border border-card-foreground/25 transition-colors hover:border-primary hover:bg-primary/10"
              >
                <img src={social.icon} alt="" className="size-5 object-contain" loading="lazy" />
              </a>
            ))}
          </div>
        </div>

        <p className="btn-text pt-7 text-card-foreground/55">
          © 2026 LitDEX Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}