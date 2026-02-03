export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-slate-800">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-16 text-center">
        Our Services
      </h1>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">

        {/* Painting Card */}
        <div className="border border-slate-200 rounded-lg p-10 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4">
            Painting Services
          </h2>

          <p className="mb-6 text-slate-600">
            High-quality painting services for residential and commercial
            properties, delivered with precision and care.
          </p>

          <ul className="space-y-3 list-disc ml-6">
            <li>Interior & Exterior Painting</li>
            <li>Residential & Commercial Projects</li>
            <li>Feature Walls & Decorative Finishes</li>
            <li>Surface Preparation & Priming</li>
            <li>Clean, long-lasting finishes</li>
          </ul>
        </div>

        {/* Plastering Card */}
        <div className="border border-slate-200 rounded-lg p-10 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4">
            Plastering Services
          </h2>

          <p className="mb-6 text-slate-600">
            Professional plastering solutions that create smooth,
            durable surfaces ready for finishing.
          </p>

          <ul className="space-y-3 list-disc ml-6">
            <li>Wall & Ceiling Skimming</li>
            <li>Crack & Damage Repairs</li>
            <li>New Walls & Ceilings</li>
            <li>Cornice Installation</li>
            <li>High-standard craftsmanship</li>
          </ul>
        </div>

      </div>

      {/* Process Flow */}
      <section className="bg-slate-100 rounded-lg p-12">
        <h2 className="text-2xl font-bold mb-12 text-center">
          Our Proven Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-slate-900 font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Consultation</h3>
            <p className="text-slate-600">
              We assess your needs and provide clear, honest advice.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-slate-900 font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Preparation</h3>
            <p className="text-slate-600">
              Careful preparation ensures a flawless final result.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-slate-900 font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Execution</h3>
            <p className="text-slate-600">
              Skilled workmanship delivered efficiently and cleanly.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-slate-900 font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Completion</h3>
            <p className="text-slate-600">
              Final inspection to ensure complete satisfaction.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
