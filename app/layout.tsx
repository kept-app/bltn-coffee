import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Better Late Than Never, BLTN Coffee, Causeway Bay",
  description:
    "A small neighborhood cafe on the quiet end of Haven Street. Coffee, all-day breakfast, pet-friendly outdoor seating in Causeway Bay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteNav() {
  return (
    <header className="border-b border-cream-200/80">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-5 py-5 sm:py-6">
        <Link href="/" className="font-display text-xl tracking-tight text-ink-900">
          bltn
          <span className="italic-wonk text-accent-terracotta">.</span>
        </Link>
        <ul className="flex items-center gap-6 sm:gap-8 text-sm text-ink-700">
          <li><Link href="/" className="hover:text-ink-900 transition-colors">home</Link></li>
          <li><Link href="/menu" className="hover:text-ink-900 transition-colors">menu</Link></li>
          <li><Link href="/visit" className="hover:text-ink-900 transition-colors">visit</Link></li>
          <li>
            <a
              href="https://instagram.com/bltncoffee.hk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-900 transition-colors"
            >
              instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-cream-200/80 mt-20">
      <div className="mx-auto max-w-5xl px-5 py-10 grid gap-8 sm:grid-cols-3 text-sm text-ink-700">
        <div>
          <p className="font-display text-lg text-ink-900">Better Late Than Never</p>
          <p className="mt-2 text-ink-500">Causeway Bay, Hong Kong</p>
        </div>
        <div>
          <p className="text-ink-900">G/F, Lei Wen Court</p>
          <p>27 Haven Street, Causeway Bay</p>
          <p className="mt-1 text-ink-500">銅鑼灣希雲街27號利雲大廈地舖</p>
        </div>
        <div>
          <p className="text-ink-900">Daily, 10am to 7pm</p>
          <a
            href="https://instagram.com/bltncoffee.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block underline decoration-cream-300 underline-offset-4 hover:decoration-accent-terracotta"
          >
            @bltncoffee.hk
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-8 text-xs text-ink-500">
        <span className="squiggle align-middle mr-3" aria-hidden />
        a small bar at the end of haven street.
      </div>
    </footer>
  );
}
