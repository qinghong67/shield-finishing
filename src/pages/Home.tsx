export default function Home() {
  return (
    <div className="font-sans text-slate-800">

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shield Finishing Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Professional Painting & Plastering for Residential and Commercial Properties
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-500 text-slate-900 px-8 py-4 rounded font-bold"
            >
              Get a Free Quote
            </a>
            <a
              href="/gallery"
              className="border border-white px-8 py-4 rounded font-bold"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Painting</h3>
          <p>
            High-quality interior and exterior painting with clean,
            long-lasting finishes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Plastering</h3>
          <p>
            Smooth walls, ceilings, repairs, and new installations finished to perfection.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Reliability</h3>
          <p>
            On-time delivery, tidy workspaces, and results you can trust.
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-semibold">
            Years of Experience • Quality Workmanship • Satisfaction Guaranteed
          </p>
        </div>
      </section>

    </div>
  );
}
