export default function Home() {
  return (
    <div className="font-sans text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Painting & Plastering
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 text-slate-200">
            Shield Finishing Services delivers high-quality finishes for
            residential and commercial properties — clean, reliable, and built to last.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded font-bold text-lg transition"
            >
              Get a Free Quote
            </a>

            <a
              href="/gallery"
              className="border-2 border-white/80 hover:bg-white hover:text-slate-900 px-10 py-4 rounded font-bold text-lg transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-xl font-bold mb-3">Painting</h3>
          <p className="text-slate-600">
            Interior and exterior painting with sharp lines,
            durable finishes, and attention to detail.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Plastering</h3>
          <p className="text-slate-600">
            Smooth walls, ceilings, repairs, and new installations
            finished to a professional standard.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Reliability</h3>
          <p className="text-slate-600">
            Clear quotes, punctual delivery, tidy workspaces,
            and results you can trust.
          </p>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-semibold text-slate-800">
            Quality Workmanship • Professional Service • Satisfaction Guaranteed
          </p>
        </div>
      </section>

    </div>
  );
}
