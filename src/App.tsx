import React, { useMemo, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Paintbrush,
  Sparkles,
  Building2,
  Home,
  Wrench,
  HardHat,
  CheckCircle2,
  ChevronDown,
  SprayCan,
} from "lucide-react";

function useBusinessCopy() {
  return useMemo(
    () => ({
      brand: "SFS Painting",
      tagline: "Painting • Plastering • Repairs • Restorations",
      area: "Brisbane & surrounding suburbs",
      phone: "0461 522 444",
      email: "Admin@sfspainting.com.au",
      heroPoints: [
        "Fast, clean, professional finish",
        "Prep-first approach (repairs, patching, sanding)",
        "Great for rentals, open homes, and commercial sites",
        "Clear quote + tidy handover",
      ],
      services: {
        commercial: [
          "Commercial painting",
          "Plastering & patching",
          "Gyprock sheeting",
          "End-of-lease refresh",
        ],
        residential: [
          "Open home / bond repaint",
          "Maintenance repaint",
          "Damage repair",
          "Weatherboard repairs",
        ],
        roofing: ["Roof restoration", "Colorbond roofing", "Tiled roofing"],
        fence: ["Fence respray"],
      },
    }),
    []
  );
}

function TopBar() {
  const c = useBusinessCopy();
  return (
    <div className="topbar">
      <div className="container">
        <div className="nav">
          <Link to="/" className="brand">
            <span className="badge" aria-hidden="true">
              <ShieldCheck size={18} />
            </span>
            <span>
              {c.brand}
              <small>{c.tagline}</small>
            </span>
          </Link>

          <div className="navlinks" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="ctas">
            <a className="btn" href={`mailto:${c.email}`}>
              <Mail size={18} /> Email
            </a>
            <a className="btn primary" href={`tel:${c.phone.replace(/\s+/g, "")}`}>
              <Phone size={18} /> Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const c = useBusinessCopy();
  return (
    <>
      <TopBar />

      <header className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <div className="kicker">
                <Sparkles size={16} />
                Free quotes • Reliable scheduling • {c.area}
              </div>

              <h1 className="h1">
                Clean prep. Sharp lines.
                <br />
                <span style={{ color: "var(--brand)" }}>A finish that lasts.</span>
              </h1>

              <p className="lead">
                From rental refreshes to commercial repainting, plaster repairs, and roof restoration — we
                deliver a professional result with clear communication and a tidy job site.
              </p>

              <div className="ctas" style={{ marginTop: 8 }}>
                <a className="btn primary" href="#quote">
                  Get a Free Quote <ArrowRight size={18} />
                </a>
                <a className="btn" href="#services">
                  View Services
                </a>
              </div>

              <div className="grid3" style={{ marginTop: 18 }}>
                {c.heroPoints.map((t) => (
                  <div key={t} className="mini">
                    <CheckCircle2 size={18} />
                    <b>{t}</b>
                    <p>Quality materials, good prep, and a smooth handover.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="heroCard">
              <h3 className="cardTitle" id="quote">
                Quick Quote Request
              </h3>
              <p className="cardMuted">
                Tell us what you need. We’ll reply with a clear plan, timeline, and estimate.
              </p>

              <QuoteForm />

              <div style={{ marginTop: 14 }} className="mini">
                <b>Contact</b>
                <p style={{ marginTop: 8 }}>
                  <span className="pill">
                    <Phone size={16} /> {c.phone}
                  </span>
                </p>
                <p style={{ marginTop: 8 }}>
                  <span className="pill">
                    <Mail size={16} /> {c.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="services">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">Services</h2>
                <p className="sub">
                  Commercial, residential, roofing restoration, and fence respray — done with strong prep and
                  a durable finish.
                </p>
              </div>
              <span className="pill">
                <MapPin size={16} /> {c.area}
              </span>
            </div>

            <div className="cards">
              <ServiceCard
                icon={<Building2 size={20} />}
                title="Commercial"
                bullets={c.services.commercial}
                desc="Professional painting and finishing for offices, shops, units, and site work."
              />
              <ServiceCard
                icon={<Home size={20} />}
                title="Residential"
                bullets={c.services.residential}
                desc="Bond repaints, open-home refresh, maintenance repaint, and repairs."
              />
              <ServiceCard
                icon={<HardHat size={20} />}
                title="Roofing Restoration"
                bullets={c.services.roofing}
                desc="Restoration coatings and repainting for Colorbond and tiled roofs."
              />
            </div>

            <div className="cards" style={{ marginTop: 14 }}>
              <ServiceCard
                icon={<SprayCan size={20} />}
                title="Fence Respray"
                bullets={c.services.fence}
                desc="Spray refresh for a clean, consistent look and better street appeal."
              />
              <ServiceCard
                icon={<Wrench size={20} />}
                title="Prep & Repairs"
                bullets={["Patching", "Sanding", "Priming", "Surface protection"]}
                desc="The finish is only as good as the prep — we do it properly."
              />
              <ServiceCard
                icon={<Paintbrush size={20} />}
                title="End of Lease Refresh"
                bullets={["Walls & trims", "Touch-ups", "Quick turnaround", "Tidy handover"]}
                desc="Perfect for tenants, owners, and property managers."
              />
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">Our Process</h2>
                <p className="sub">No surprises. Clear scope, clean work, and a simple handover.</p>
              </div>
            </div>

            <div className="split">
              <Step n="1" title="Inspect & Quote" text="We confirm scope, surfaces, access, and timing." />
              <Step n="2" title="Protect & Prep" text="Cover floors, patch, sand, prime — prep-first." />
              <Step n="3" title="Paint / Spray" text="Even coats, crisp edges, consistent sheen." />
              <Step n="4" title="Walkthrough" text="Final check, touch-ups, and cleanup before handover." />
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">Recent Work</h2>
                <p className="sub">
                  Replace these placeholders with your real photos later (add to <b>public/work/</b>).
                </p>
              </div>
            </div>

            <div className="cards">
              <WorkCard title="Bond Repaint Refresh" detail="Quick turnaround, clean finish" />
              <WorkCard title="Commercial Repaint" detail="Prep + durable coating system" />
              <WorkCard title="Roof Restoration" detail="Colorbond / tiled coating refresh" />
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">FAQ</h2>
                <p className="sub">Common questions before booking.</p>
              </div>
            </div>

            <FAQ
              items={[
                {
                  q: "How do you quote?",
                  a: "We quote based on area, surface condition, prep needs, access, materials, and finish level. You’ll get a clear written scope.",
                },
                {
                  q: "Do you do end-of-lease / bond repaints?",
                  a: "Yes — we do full repaints and touch-up refreshes for rentals and property managers with fast turnaround.",
                },
                {
                  q: "Can you repair damage first?",
                  a: "Yes — patching, plaster repairs, and weatherboard repairs are part of our prep-first approach.",
                },
                {
                  q: "Roof restoration: Colorbond and tiled?",
                  a: "Yes — we can restore and repaint both Colorbond and tiled roofs, depending on condition and coating system.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="heroCard">
              <h3 className="cardTitle">Request a quote</h3>
              <p className="cardMuted">
                Tell us the job type, suburb, and preferred timing — we’ll get back to you fast.
              </p>
              <div className="ctas">
                <a className="btn primary" href="#quote">
                  Send a Quote Request <ArrowRight size={18} />
                </a>
                <a className="btn" href={`tel:${c.phone.replace(/\s+/g, "")}`}>
                  Call {c.phone}
                </a>
                <a className="btn" href={`mailto:${c.email}`}>
                  Email {c.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function QuoteForm() {
  const c = useBusinessCopy();
  const [name, setName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [jobType, setJobType] = useState("Residential repaint");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Quote request - ${name || "New client"} (${suburb || "Suburb"})`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: \nEmail: \nSuburb: ${suburb}\nJob type: ${jobType}\n\nDetails:\n${message}\n\nSent from website form.`
    );
    return `mailto:${c.email}?subject=${subject}&body=${body}`;
  }, [c.email, name, suburb, jobType, message]);

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="btn"
        style={{ justifyContent: "flex-start" }}
      />
      <input
        value={suburb}
        onChange={(e) => setSuburb(e.target.value)}
        placeholder="Suburb"
        className="btn"
        style={{ justifyContent: "flex-start" }}
      />
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="btn"
        style={{ justifyContent: "flex-start" }}
      >
        <option>Residential repaint</option>
        <option>Open home / bond repaint</option>
        <option>Maintenance repaint</option>
        <option>Commercial painting</option>
        <option>Plastering / patching</option>
        <option>Gyprock sheeting</option>
        <option>End of lease refresh</option>
        <option>Roof restoration</option>
        <option>Fence respray</option>
        <option>Other</option>
      </select>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe the job (rooms, repairs, roof type, fence length, timing, photos if any)"
        className="btn"
        style={{ justifyContent: "flex-start", minHeight: 110, paddingTop: 10 }}
      />

      <a className="btn primary" href={mailto}>
        Email Quote Request <ArrowRight size={18} />
      </a>

      <div className="small">
        Or call <a href={`tel:${c.phone.replace(/\s+/g, "")}`}>{c.phone}</a>
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="card">
      <div className="iconWrap">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{ marginTop: 12 }} className="mini">
        <p style={{ margin: 0 }}>
          {bullets.map((b, i) => (
            <span key={b}>
              • {b}
              {i < bullets.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="card">
      <div className="kicker" style={{ width: "fit-content" }}>
        Step {n}
      </div>
      <h3 style={{ marginTop: 10 }}>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function WorkCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="card">
      <div className="iconWrap">
        <Paintbrush size={20} />
      </div>
      <h3>{title}</h3>
      <p>{detail}</p>
      <div style={{ marginTop: 12 }} className="mini">
        <p style={{ margin: 0 }}>
          Add photos later: put images in <b>public/work/</b> then reference them in components.
        </p>
      </div>
    </div>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map((it, idx) => (
        <div key={it.q} className="faqItem">
          <div className="faqQ" onClick={() => setOpen(open === idx ? null : idx)}>
            <span>{it.q}</span>
            <ChevronDown size={18} style={{ opacity: 0.9, transform: open === idx ? "rotate(180deg)" : "none" }} />
          </div>
          {open === idx && <div className="faqA">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}

function Footer() {
  const c = useBusinessCopy();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="brand" style={{ marginBottom: 8 }}>
              <span className="badge" aria-hidden="true">
                <ShieldCheck size={18} />
              </span>
              <span>{c.brand}</span>
            </div>
            <div className="small">
              Painting, plastering, repairs, and restorations — Brisbane and nearby suburbs.
            </div>
          </div>

          <div>
            <b>Contact</b>
            <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
              <span className="pill">
                <Phone size={16} /> {c.phone}
              </span>
              <span className="pill">
                <Mail size={16} /> {c.email}
              </span>
            </div>
          </div>

          <div>
            <b>Service Area</b>
            <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
              <span className="pill">
                <MapPin size={16} /> {c.area}
              </span>
              <span className="pill">
                <Sparkles size={16} /> Free quotes • Fast turnaround
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }} className="small">
          © {new Date().getFullYear()} {c.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function NotFound() {
  const nav = useNavigate();
  return (
    <div style={{ padding: 30 }} className="container">
      <div className="heroCard">
        <h3 className="cardTitle">Page not found</h3>
        <p className="cardMuted">The page you requested doesn’t exist.</p>
        <button className="btn primary" onClick={() => nav("/")}>
          Go Home <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
