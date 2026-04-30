import Link from "next/link";

export default function MenuPage() {
  return (
    <section className="px-5 pt-16 pb-24 sm:pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent-brick">menu</p>
        <h1 className="mt-5 font-display font-medium text-5xl sm:text-6xl leading-[1.05] text-ink-900">
          What we
          <span className="italic-display text-accent-brick"> pour </span>
          and serve
        </h1>
        <div className="mt-8 flex justify-center"><span className="squiggle" aria-hidden></span></div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
          <div className="rounded-2xl bg-sand-100 border border-sand-200/60 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-ink-500">to drink</p>
            <p className="mt-3 font-display text-2xl text-ink-900 leading-snug">
              Coffee and a few non-coffee options.
            </p>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Espresso drinks, milk drinks, and seasonal options. The bar
              rotates often, so what is pouring this week is best seen on
              Instagram.
            </p>
          </div>

          <div className="rounded-2xl bg-sand-100 border border-sand-200/60 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-ink-500">to eat</p>
            <p className="mt-3 font-display text-2xl text-ink-900 leading-snug">
              All-day breakfast, croffles, croissants.
            </p>
            <p className="mt-3 text-ink-700 leading-relaxed">
              A short kitchen menu of breakfast plates, sweet and savoury
              croffles, croissants, and a few desserts. Available through the
              day.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-sand-300 p-7 sm:p-9 bg-sand-50">
          <p className="font-display text-xl sm:text-2xl text-ink-900 leading-snug">
            For the full list and current prices, the easiest place is our
            Instagram, or come by and we will walk you through it.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a href="https://instagram.com/bltncoffee.hk" target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink-900 text-sand-50 px-6 py-3 hover:bg-accent-brick transition-colors">
              see the menu on instagram
            </a>
            <Link href="/visit" className="rounded-full border border-ink-900/15 px-6 py-3 text-ink-900 hover:border-ink-900/40 transition-colors">
              how to get here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
