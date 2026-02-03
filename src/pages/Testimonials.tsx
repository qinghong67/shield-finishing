export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-slate-800">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Customer Testimonials
      </h1>

      {/* Review Cards */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">

        <div className="border rounded p-6 shadow-sm">
          <p className="italic">
            “Excellent workmanship and attention to detail.
            The team were punctual, tidy, and professional throughout.”
          </p>
          <p className="mt-4 font-bold">
            — John D., Residential Painting
          </p>
        </div>

        <div className="border rounded p-6 shadow-sm">
          <p className="italic">
            “Very happy with the plastering work.
            Smooth finish and completed on time.”
          </p>
          <p className="mt-4 font-bold">
            — Sarah L., Commercial Property
          </p>
        </div>

        <div className="border rounded p-6 shadow-sm">
          <p className="italic">
            “Reliable, clean, and high-quality results.
            Would definitely recommend Shield Finishing Services.”
          </p>
          <p className="mt-4 font-bold">
            — Michael R., Interior Renovation
          </p>
        </div>

      </section>

      {/* Google Reviews Placeholder */}
      <section className="bg-slate-100 p-10 rounded text-center">
        <h2 className="text-2xl font-bold mb-4">
          More Reviews
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          We are proud of our reputation and customer feedback.
          A live Google Reviews feed will be displayed here in the future.
        </p>

        <div className="mt-6 border-2 border-dashed border-slate-400 p-6 rounded">
          <p className="italic text-slate-600">
            Google Reviews Widget Placeholder
          </p>
        </div>
      </section>

    </div>
  );
}
