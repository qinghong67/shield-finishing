import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './components/PublicLayout';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import GalleryAdmin from './pages/admin/GalleryAdmin';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public pages */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/services"
          element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <PublicLayout>
              <Testimonials />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <PublicLayout>
              <Gallery />
            </PublicLayout>
          }
        />

        {/* Admin */}
        <Route path="/admin/gallery" element={<GalleryAdmin />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
