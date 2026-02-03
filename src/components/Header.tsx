import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="space-x-6 font-semibold hidden md:block">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col text-center font-semibold">
            <li>
              <Link onClick={() => setOpen(false)} to="/services" className="block py-4">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="/about" className="block py-4">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="/gallery" className="block py-4">
                Gallery
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="/testimonials" className="block py-4">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="/contact" className="block py-4">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
