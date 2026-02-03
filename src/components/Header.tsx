import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Shield Finishing Services Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-wide">
            Shield Finishing Services
          </span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 font-semibold hidden md:block">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
