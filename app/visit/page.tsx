export default function VisitPage() {
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("BLTN Better Late Than Never, 27 Haven Street, Causeway Bay, Hong Kong");

  return (
    <section className="px-5 pt-16 pb-24 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent-brick">visit</p>
        <h1 className="mt-5 font-display font-medium text-5xl sm:text-6xl leading-[1.05] text-ink-900">
          The end of
          <span className="italic-display text-accent-brick"> Haven </span>
          Street
        </h1>
        <p className="mt-6 text-lg text-ink-700 max-w-xl mx-auto">
          A short walk from Causeway Bay MTR, on a quieter side street near
          Victoria Park.
        </p>
        <div className="mt-8 flex justify-center"><span className="squiggle" aria-hidden></span></div>
      </div>

      <div className="mx-auto max-w-3xl mt-12 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl bg-sand-100 border border-sand-200/60 p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-500">address</p>
          <p className="mt-3 font-display text-xl text-ink-900 leading-snug">
            G/F, Lei Wen Court
            <br />27 Haven Street, Causeway Bay
          </p>
          <p className="mt-3 text-ink-500">銅鑼灣希雲街27號利雲大廈地舖</p>
        </div>

        <div className="rounded-2xl bg-sand-100 border border-sand-200/60 p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-500">hours</p>
          <p className="mt-3 font-display text-xl text-ink-900 leading-snug">
            Daily, 10am to 7pm
          </p>
          <p className="mt-3 text-ink-700">
            Mornings are easiest. The room fills up by around 10:30 on weekends.
          </p>
        </div>

        <div className="rounded-2xl bg-sand-100 border border-sand-200/60 p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-500">by MTR</p>
          <p className="mt-3 font-display text-xl text-ink-900 leading-snug">
            Causeway Bay, Exit F
          </p>
          <p className="mt-3 text-ink-700">
            About 6 minutes on foot. Walk east along Yee Wo Street, then cut
            up Cleveland Street to Haven Street.
          </p>
        </div>

        <div className="rounded-2xl bg-sand-100 border border-sand-200/60 p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-500">good to know</p>
          <p className="mt-3 text-ink-700 leading-relaxed">
            Outdoor seats welcome dogs. Indoor seating is limited. We are at
            the quieter end of Haven Street, on the ground floor.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl mt-10 text-center">
        <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-ink-900 text-sand-50 px-7 py-3 text-sm hover:bg-accent-brick transition-colors">
          open directions in google maps
        </a>
      </div>
    </section>
  );
}
