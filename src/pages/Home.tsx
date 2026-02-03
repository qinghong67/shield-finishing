export default function Home() {
  document.title =
    "Shield Finishing Services | Professional Painting & Plastering";

  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Painting & Plastering Services
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              Shield Finishing Services provides reliable, high-quality
              painting and plastering for residential and commercial
              properties. Clean workmanship, clear pricing, and results
              you can rely on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 font-semibold text-center"
              >
                Get a Free Quote
              </a>

              <a
                href="tel:07XXXXXXXX"
                className="border border-slate-300 px-8 py-4 font-semibold text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden md:block">
            <div className="w-full h-80 bg-slate-100 border flex items-center justify-center text-slate-400">
              Project Image Placeholder
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Residential Painting
            </h3>
            <p>
              Interior and exterior painting for homes, renovations,
              and new builds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Commercial Services
            </h3>
            <p>
              Professional finishing solutions for offices, shops,
              and commercial properties.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Plastering & Repairs
            </h3>
            <p>
              Wall and ceiling repairs, skimming, and plastering
              finished ready for paint.
            </p>
          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-slate-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <p className="text-2xl font-semibold mb-2">
            Reliable • Professional • Fully Insured
          </p>
          <p className="text-slate-600">
            Serving residential and commercial clients with pride and care
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get a Free, No-Obligation Quote
          </h2>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 font-semibold"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </div>
  );
}
