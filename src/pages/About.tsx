export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-slate-800">

      <h1 className="text-4xl font-bold mb-12 text-center">
        About Shield Finishing Services
      </h1>

      {/* Company Story */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <p className="text-lg leading-relaxed">
          Shield Finishing Services was founded with a simple mission:
          to deliver high-quality painting and plastering services with
          professionalism, reliability, and pride in our workmanship.
          <br /><br />
          We work with both residential and commercial clients, providing
          clean, durable finishes that enhance and protect every space we
          work on.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-bold text-xl mb-2">Reliability</h3>
            <p>
              We show up on time, communicate clearly, and complete projects
              as agreed.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Professionalism</h3>
            <p>
              From preparation to clean-up, we maintain the highest standards
              on every job.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Customer Satisfaction</h3>
            <p>
              We take pride in delivering results our clients are happy to
              recommend.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100 p-10 rounded">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose Us
        </h2>

        <ul className="max-w-2xl mx-auto list-disc ml-6 space-y-3 text-lg">
          <li>Eco-friendly and low-VOC materials where possible</li>
          <li>Punctual delivery and respect for your property</li>
          <li>Skilled craftsmanship with attention to detail</li>
          <li>Residential and commercial expertise</li>
          <li>Clear quotes with no hidden costs</li>
        </ul>
      </section>

    </div>
  );
}
