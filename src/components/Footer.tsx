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
    <footer className="bg-[#0038FF] text-foreground">
      <div className="relative mx-auto max-w-[calc(100%-2rem)] overflow-hidden rounded-t-[2.5rem] bg-[#0038FF] px-6 py-8 sm:max-w-[calc(100%-3rem)] md:rounded-t-[4rem] md:px-12 lg:max-w-[calc(100%-6rem)] lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center border-b border-foreground/20 pb-6 text-center">
          <Link to="/" aria-label="LitDEX Genesis Champions home" className="inline-flex">
            <img
              src="/favicon-512x512.png"
              alt="LitDEX"
              className="size-14 rounded-xl object-contain shadow-sm md:size-16"
            />
          </Link>

          <nav aria-label="Footer navigation" className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-10">
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

          <div className="mt-5 flex items-center justify-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img src={social.icon} alt="" className="size-5 object-contain" loading="lazy" />
              </a>
            ))}
          </div>
        </div>

        <p className="relative z-10 btn-text pt-5 text-center text-foreground/65">
          © 2026 LitDEX Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}