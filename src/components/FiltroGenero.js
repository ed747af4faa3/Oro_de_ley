import React from 'react';
import categorias from '../data/categorias';
import { useNavigate } from 'react-router-dom';
import './FiltroGenero.css';

export default function FiltroGenero() {
  const navigate = useNavigate();

  return (
    <div className="filtro-genero">
      {categorias.map((cat) => (
        <button key={cat.nombre} onClick={() => navigate(`/categoria/${cat.nombre}`)}>
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}
