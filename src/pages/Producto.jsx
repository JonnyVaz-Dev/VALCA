import './Producto.css';

const productos = [
  {
    id: 1,
    nombre: 'Anillo Aurora',
    precio: '$2,500 MXN',
    imagen: '/assets/anillo1.jpg',
  },
  {
    id: 2,
    nombre: 'Collar Eclipse',
    precio: '$3,800 MXN',
    imagen: '/assets/collar1.jpg',
  },
  {
    id: 3,
    nombre: 'Pulsera Estelar',
    precio: '$1,900 MXN',
    imagen: '/assets/pulsera1.jpg',
  },
  {
    id: 4,
    nombre: 'Pulsera León',
    precio: '$2,200 MXN',
    imagen: '/assets/pulsera2.jpg',
  },
];


export default function Producto() {
  return (
    <section className="producto">
      <h2 className="catalogo-titulo">Colección VALCA</h2>
      <div className="catalogo-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-precio">{producto.precio}</p>
            <button className="producto-boton">Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

