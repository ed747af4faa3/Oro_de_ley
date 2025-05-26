// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import productos from '../data/productos';
import categorias from '../data/categorias';
import ProductoCard from '../components/ProductoCard';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleCategoriaClick = (categoria) => {
    navigate(`/categoria/${categoria}`);
  };

  return (
    <div className="container">
      <div className="home">
        <h2>Categorías</h2>

        <div className="categorias">
          {categorias.map((cat) => (
            <div
              key={cat.nombre}
              className="categoria"
              onClick={() => handleCategoriaClick(cat.nombre)}
            >
              <img src={cat.imagen} alt={cat.nombre} />
              <span>{cat.nombre}</span>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '3rem' }}>Todos los productos</h2>
        <div className="grid-productos">
          {productos.map((prod) => (
            <ProductoCard key={prod.id} producto={prod} />
          ))}
        </div>
      </div>
    </div>
  );
}
