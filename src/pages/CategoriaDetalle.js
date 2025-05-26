// ----------  src/pages/CategoriaDetalle.js  ----------
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos';
import Header from '../components/Header';
import FiltroGenero from '../components/FiltroGenero';
import ProductoCard from '../components/ProductoCard';
import './CategoriaDetalle.css';

export default function CategoriaDetalle() {
  const { nombre } = useParams();
  const [genero, setGenero] = useState('Todos');
  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const productosFiltrados = productos.filter(
    (p) => p.categoria === nombre && (genero === 'Todos' || p.genero === genero)
  );

  return (
    <>
      <Header onToggleFiltro={() => setMostrarFiltro(!mostrarFiltro)} />

      <div className="main-content">
        {/* Aside de filtros */}
        <aside className={`filtro-container ${mostrarFiltro ? 'mostrar' : ''}`}>
          <FiltroGenero genero={genero} setGenero={setGenero} />
        </aside>

        {/* Grid de productos */}
        <section className="grid-productos">
          {productosFiltrados.map((prod) => (
            <ProductoCard key={prod.id} producto={prod} />
          ))}
        </section>
      </div>
    </>
  );
}

