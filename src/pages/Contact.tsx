export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-slate-800">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Request a Free Quote
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <select className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Painting Services</option>
              <option>Plastering Services</option>
              <option>Residential Project</option>
              <option>Commercial Project</option>
            </select>

            <textarea
              placeholder="Tell us about your project"
              rows={3}
              className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <button
              type="submit"
              className="bg-yellow-500 text-slate-900 px-6 py-3 rounded font-bold"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Get in Touch
          </h2>

          <p className="mb-4">
            <strong>Phone:</strong> 07XXX XXXXXX
          </p>

          <p className="mb-8">
            <strong>Email:</strong> info@shieldfinishingservices.co.uk
          </p>

          <h3 className="text-xl font-bold mb-4">
            Business Hours
          </h3>

          <table className="w-full border text-left mb-8">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-semibold">Monday – Friday</td>
                <td className="p-2">8:00 AM – 6:00 PM</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Saturday</td>
                <td className="p-2">9:00 AM – 2:00 PM</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Sunday</td>
                <td className="p-2">Closed</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-bold mb-2">
            Service Area
          </h3>

          <p>
            We provide painting and plastering services across local and
            surrounding areas. Please contact us to confirm availability
            for your location.
          </p>
        </section>

      </div>

    </div>
  );
}
