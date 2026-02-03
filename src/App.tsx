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
  Hammer,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

function useBusinessCopy() {
  // Change these later to match your real business details
  return useMemo(
    () => ({
      brand: "Shield Finishing",
      tagline: "Premium Painting & Finishing in Brisbane",
      area: "Brisbane & surrounding suburbs",
      phone: "0400 000 000",
      email: "hello@yourdomain.com",
      bullets: [
        "Interior & exterior painting",
        "Plaster repairs & patching",
        "Feature walls & texture finishes",
        "Reliable scheduling + clean workmanship",
      ],
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

function Home() {
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
                Free quotes • Licensed-ready workmanship • {c.area}
              </div>

              <h1 className="h1">
                Make your home look <span style={{ color: "var(--brand)" }}>new</span> again —
                <br />
                with a finish that lasts.
              </h1>

              <p className="lead">
                We deliver clean lines, durable coatings, and tidy job sites — from preparation to final
                walkthrough. Perfect for homeowners, rentals, and small commercial spaces.
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
                {c.bullets.map((t) => (
                  <div key={t} className="mini">
                    <CheckCircle2 size={18} />
                    <b>{t}</b>
                    <p>Professional prep, premium materials, and a smooth handover.</p>
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
                <b>Typical response time</b>
                <p>Same day (business hours). Emergency touch-ups available.</p>
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
                  Everything you need for a high-quality finish — including prep, repairs, and protective
                  coatings.
                </p>
              </div>
            </div>

            <div className="cards">
              <ServiceCard
                icon={<Paintbrush size={20} />}
                title="Interior Painting"
                desc="Walls, ceilings, trims, doors — crisp edges and durable finishes."
              />
              <ServiceCard
                icon={<Hammer size={20} />}
                title="Repairs & Patching"
                desc="Cracks, dents, water marks, nail holes — smooth, ready-to-paint surfaces."
              />
              <ServiceCard
                icon={<ShieldCheck size={20} />}
                title="Exterior Protection"
                desc="Weather-resistant coatings, proper prep, and long-lasting results."
              />
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">Our Process</h2>
                <p className="sub">
                  No surprises. You get a simple plan, clear communication, and a tidy job site.
                </p>
              </div>
            </div>

            <div className="split">
              <Step n="1" title="Inspect & Quote" text="We check surfaces, measure, and confirm materials." />
              <Step n="2" title="Prep Properly" text="Protect floors, patch, sand, prime — the finish starts here." />
              <Step n="3" title="Paint & Finish" text="Even coats, clean edges, and consistent sheen." />
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
                  Add your own photos later. For now these are placeholders to show layout.
                </p>
              </div>
              <span className="pill">
                <MapPin size={16} /> {c.area}
              </span>
            </div>

            <div className="cards">
              <WorkCard title="Modern Living Room Refresh" detail="Neutral walls + bright trims" />
              <WorkCard title="Rental Repaint" detail="Fast turnaround, durable finish" />
              <WorkCard title="Exterior Touch-up" detail="Prep + protective coating" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="split">
              <div className="quote">
                <p>
                  “Arrived on time, explained the process clearly, and the finish looks perfect. Cleaned up
                  everything.”
                </p>
                <b>— Local homeowner</b>
              </div>
              <div className="quote">
                <p>
                  “Great communication and fast job. The patching work was seamless — can’t see where the
                  damage was.”
                </p>
                <b>— Property manager</b>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">FAQ</h2>
                <p className="sub">Common questions clients ask before booking.</p>
              </div>
            </div>

            <FAQ
              items={[
                {
                  q: "How do you price jobs?",
                  a: "We price based on surface area, prep condition, access, materials, and finish level. You’ll get a clear written quote.",
                },
                {
                  q: "Do I need to move furniture?",
                  a: "We can help move light items. For large furniture, we’ll advise what to move to speed up the job and protect surfaces.",
                },
                {
                  q: "What paint do you use?",
                  a: "We use reputable brands suitable for the job. If you have a preferred brand, we can quote with that too.",
                },
                {
                  q: "How long will it take?",
                  a: "After inspection we provide a timeline. Most single rooms are 1–2 days depending on prep and drying time.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="heroCard">
              <h3 className="cardTitle">Ready to get started?</h3>
              <p className="cardMuted">
                Send a quick request and we’ll reply with next steps, timing, and a quote.
              </p>
              <div className="ctas">
                <a className="btn primary" href="#quote">
                  Request a Quote <ArrowRight size={18} />
                </a>
                <a className="btn" href={`tel:${c.phone.replace(/\s+/g, "")}`}>
                  Call {c.phone}
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
  const [message, setMessage] = useState("");

  // Simple mailto form (no backend needed)
  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Quote request - ${name || "New client"} (${suburb || "Suburb"})`);
    const body = encodeURIComponent(
      `Name: ${name}\nSuburb: ${suburb}\n\nRequest:\n${message}\n\nSent from website form.`
    );
    return `mailto:${c.email}?subject=${subject}&body=${body}`;
  }, [c.email, name, suburb, message]);

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
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What do you need painted? (rooms, repairs, timing)"
        className="btn"
        style={{ justifyContent: "flex-start", minHeight: 96, paddingTop: 10 }}
      />
      <a className="btn primary" href={mailto}>
        Send Request <ArrowRight size={18} />
      </a>

      <div className="small">
        Prefer phone? <a href={`tel:${c.phone.replace(/\s+/g, "")}`}>Call {c.phone}</a>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card">
      <div className="iconWrap">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
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
          Tip: Put photos into <b>public/work/</b> and reference them here later.
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
              Premium finishing work with clean prep, tidy sites, and durable coatings.
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
                <Sparkles size={16} /> Free quotes & fast turnaround
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
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
