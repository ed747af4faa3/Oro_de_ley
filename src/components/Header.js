
// ----------  src/components/Header.js  ----------
import React from 'react';
import './Header.css';

export default function Header({ onToggleFiltro }) {
  return (
    <header className="header">
      <button className="inicio-btn" onClick={() => (window.location.href = '/')}>Inicio</button>
      {/* Botón tipo hamburguesa solo visible en pantallas ≤ 768 px */}
      <button className="menu-btn" onClick={onToggleFiltro}>☰</button>
    </header>
  );
}