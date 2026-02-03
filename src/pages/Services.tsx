export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-slate-800">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Our Services
      </h1>

      {/* Services */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">

        {/* Painting */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Painting Services
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Interior & Exterior Painting</li>
            <li>Residential & Commercial Properties</li>
            <li>Feature Walls & Decorative Finishes</li>
            <li>Surface Preparation & Priming</li>
            <li>Clean, professional finish every time</li>
          </ul>
        </div>

        {/* Plastering */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Plastering Services
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Skimming & Wall Leveling</li>
            <li>Crack & Damage Repairs</li>
            <li>New Walls & Ceilings</li>
            <li>Cornice Installation</li>
            <li>Smooth, long-lasting results</li>
          </ul>
        </div>

      </div>

      {/* Process Flow */}
      <section className="bg-slate-100 p-10 rounded">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center font-semibold">
          <div>
            <div className="text-yellow-500 text-3xl mb-2">1</div>
            <p>Consultation</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">2</div>
            <p>Preparation</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">3</div>
            <p>Execution</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">4</div>
            <p>Completion</p>
          </div>
        </div>
      </section>

    </div>
  );
}
