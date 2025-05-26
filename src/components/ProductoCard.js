import './ProductoCard.css';

export default function ProductoCard({ producto }) {
  return (
    <div className="producto-card" tabIndex="0">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <a
        href="https://nodejs.org/api/documentation.html"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-comprar"
      >
        Comprar
      </a>
    </div>
  );
}
