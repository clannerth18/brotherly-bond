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
    <footer className="bg-white text-foreground">
      <div className="mx-auto max-w-[calc(100%-2rem)] rounded-t-[2.5rem] bg-background px-6 py-12 sm:max-w-[calc(100%-3rem)] md:rounded-t-[4rem] md:px-12 lg:max-w-[calc(100%-6rem)] lg:px-16">
        <div className="flex flex-col items-center border-b border-foreground/20 pb-10 text-center">
          <Link to="/" aria-label="LitDEX Genesis Champions home" className="inline-flex">
            <img
              src="/favicon-512x512.png"
              alt="LitDEX"
              className="size-14 rounded-xl object-contain shadow-sm md:size-16"
            />
          </Link>

          <nav aria-label="Footer navigation" className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-4">
            <a
              href={WHITEPAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text transition-colors hover:text-primary"
            >
              Whitepaper
            </a>
            <Link to="/roadmap" className="btn-text transition-colors hover:text-primary">
              Roadmap
            </Link>
            <Link to="/about" className="btn-text transition-colors hover:text-primary">
              About Us
            </Link>
            <Link to="/contact" className="btn-text transition-colors hover:text-primary">
              Contact Us
            </Link>
            <Link to="/faq" className="btn-text transition-colors hover:text-primary">
              FAQ
            </Link>
          </nav>

          <div className="mt-7 flex items-center justify-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex size-11 items-center justify-center rounded-full border border-foreground/35 transition-colors hover:border-primary hover:bg-primary/10"
              >
                <img src={social.icon} alt="" className="size-5 object-contain" loading="lazy" />
              </a>
            ))}
          </div>
        </div>

        <p className="btn-text pt-7 text-center text-foreground/65">
          © 2026 LitDEX Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}