import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-bold text-lg mb-2">
            Shield Finishing Services
          </h3>
          <p>
            Professional painting and plastering services for residential
            and commercial properties.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p>Phone: 07XXX XXXXXX</p>
          <p>Email: info@shieldfinishingservices.co.uk</p>
        </div>

      </div>

      <div className="text-center text-sm bg-slate-950 py-4">
        © {new Date().getFullYear()} Shield Finishing Services. All rights reserved.
      </div>
    </footer>
  );
}
