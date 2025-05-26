// ----------  src/App.js  ----------
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoriaDetalle from './pages/CategoriaDetalle';
import Comprar from './pages/Comprar';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categoria/:nombre' element={<CategoriaDetalle />} />
        <Route path='/comprar' element={<Comprar />} />
      </Routes>
    </Router>
  );
}