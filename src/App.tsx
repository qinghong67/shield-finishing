import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Shield Finishing Services</h1>
      <p>Deployed with Vite + Cloudflare Pages.</p>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 24 }}>
      <h1>About</h1>
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
