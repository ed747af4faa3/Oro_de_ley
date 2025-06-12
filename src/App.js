// ----------  src/App.js  ----------
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // 👈 usa HashRouter
import Home from './pages/Home';
import CategoriaDetalle from './pages/CategoriaDetalle';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categoria/:nombre' element={<CategoriaDetalle />} />
      </Routes>
    </Router>
  );
}



