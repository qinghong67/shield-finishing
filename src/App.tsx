import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import GalleryAdmin from './pages/admin/GalleryAdmin';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin/gallery" element={<GalleryAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
