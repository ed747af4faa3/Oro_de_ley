import React from 'react';
import './FiltroGenero.css';

export default function FiltroGenero({ genero, setGenero }) {
  return (
    <div className="filtro-genero">
      <button className={genero === 'Todos' ? 'activo' : ''} onClick={() => setGenero('Todos')}>Todos</button>
      <button className={genero === 'Dama' ? 'activo' : ''} onClick={() => setGenero('Dama')}>Dama</button>
      <button className={genero === 'Caballero' ? 'activo' : ''} onClick={() => setGenero('Caballero')}>Caballero</button>
    </div>
  );
}

