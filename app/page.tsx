import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-brick">
            Causeway Bay, Hong Kong
          </p>
          <h1 className="mt-5 font-display font-medium text-5xl sm:text-7xl leading-[1.05] text-ink-900">
            Better
            <span className="italic-display text-accent-brick"> Late </span>
            Than Never
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-700 max-w-xl mx-auto">
            A small coffee bar at the quiet end of Haven Street. Coffee,
            all-day breakfast, a few outdoor tables for you and the dog.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm">
            <Link
              href="/visit"
              className="rounded-full bg-ink-900 text-sand-50 px-6 py-3 hover:bg-accent-brick transition-colors"
            >
              find us
            </Link>
            
              href="https://instagram.com/bltncoffee.hk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-900/15 px-6 py-3 text-ink-900 hover:border-ink-900/40 transition-colors"
            >
              follow on instagram
            </a>
          </div>
          <div className="mt-12 flex justify-center">
            <span className="squiggle" aria-hidden></span>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="px-5">
        <div className="mx-auto max-w-4xl rounded-2xl bg-sand-100 shadow-soft border border-sand-200/60 grid gap-6 sm:grid-cols-3 p-6 sm:p-8 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-500">hours</p>
            <p className="mt-2 font-display text-xl text-ink-900">Daily, 10am to 7pm</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-500">address</p>
            <p className="mt-2 text-ink-900">G/F, 27 Haven Street</p>
            <p className="text-ink-500">Causeway Bay</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-500">getting here</p>
            <p className="mt-2 text-ink-900">Causeway Bay MTR</p>
            <p className="text-ink-500">Exit F, about 6 minutes on foot</p>
          </div>
        </div>
      </section>

      {/* THREE SHORT SECTIONS */}
      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          <Card
            tilt="-rotate-1"
            kicker="the room"
            title="A small bar, low-key inside"
            body="Limited indoor seating with a colour-coordinated interior, plus outdoor tables that fit a few more. It fills up fast on weekends, so mornings are easiest."
          />
          <Card
            tilt="rotate-1"
            kicker="what we serve"
            title="Coffee and all-day breakfast"
            body="Espresso drinks, a few non-coffee options, croissants and croffles, and a short list of breakfast plates available all day. Specials rotate."
          />
          <Card
            tilt="-rotate-1"
            kicker="bring the dog"
            title="Pet-friendly seats outside"
            body="The outdoor seating welcomes dogs, which is genuinely rare for this part of Causeway Bay."
          />
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl sm:text-3xl text-ink-900 leading-snug">
            For what is pouring this week and the latest from the kitchen,
            <span className="italic-display text-accent-brick"> Instagram</span> is
            where it lives.
          </p>
          
            href="https://instagram.com/bltncoffee.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm underline decoration-sand-300 decoration-2 underline-offset-[6px] hover:decoration-accent-brick"
          >
            @bltncoffee.hk
          </a>
        </div>
      </section>
    </>
  );
}

function Card({
  kicker,
  title,
  body,
  tilt,
}: {
  kicker: string;
  title: string;
  body: string;
  tilt: string;
}) {
  return (
    <article
      className={`bg-sand-50 rounded-2xl border border-sand-200/70 shadow-card p-6 sm:p-7 transform ${tilt} hover:rotate-0 transition-transform duration-500`}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-accent-brick">{kicker}</p>
      <h3 className="mt-3 font-display text-xl text-ink-900 leading-snug">{title}</h3>
      <p className="mt-3 text-ink-700 leading-relaxed">{body}</p>
    </article>
  );
}
