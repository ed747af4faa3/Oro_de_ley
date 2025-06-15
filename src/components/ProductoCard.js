import React from "react";
import "../components/ProductoCard.css";
import { FaWhatsapp } from 'react-icons/fa';

function ProductoCard({ producto }) {
  // Número con clave internacional (México = 52)
  const numeroVendedora = "525632316907";

  // Mensaje sin saltos de línea, separado con guiones u otros separadores compatibles
  const mensaje = `Hola, estoy interesad@ en este producto: ${producto.nombre} - Precio: $${producto.precio}`;

  // Enlace a WhatsApp con mensaje codificado
  const urlWhatsApp = `https://wa.me/${numeroVendedora}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="producto-card">
      <img src={`${process.env.PUBLIC_URL}${producto.imagen}`} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <a
        href={urlWhatsApp}
        className="btn-comprar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icono-wa" />
        Comprar por WhatsApp
      </a>
    </div>
  );
}

export default ProductoCard;
