import './Nosotros.css';

export default function Nosotros() {
  return (
    <section className="nosotros">
      {/* Historia de VALCA */}
      <div className="section historia">
        <h2 className="section-title">Nuestra historia</h2>
        <p className="section-text">
          VALCA nació en Guadalajara, Jalisco, de la visión de Román Moreno Carreón. Tras más de ocho años explorando el mundo de la joyería, decidió crear una marca que uniera tradición, elegancia y tecnología. Inspirado por su familia, dedicada a los bienes raíces y la inversión en metales preciosos, Román encontró en la joyería una forma de contar historias con alma.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="section mision-vision">
        <div className="bloque">
          <h2 className="section-title">Misión</h2>
          <p className="section-text">
            Crear piezas de joyería que trasciendan el tiempo, fusionando diseño contemporáneo con técnicas artesanales, para acompañar a cada persona en los momentos más significativos de su vida.
          </p>
        </div>
        <div className="bloque">
          <h2 className="section-title">Visión</h2>
          <p className="section-text">
            Ser una marca referente en joyería de autor en México y el mundo, reconocida por su elegancia, autenticidad y compromiso con la excelencia artesanal.
          </p>
        </div>
      </div>

      {/* El arte detrás de cada pieza */}
      <div className="section proceso">
        <h2 className="section-title">El arte detrás de cada pieza</h2>
        <div className="proceso-contenido">
          <img src="/assets/taller.jpg" alt="Taller artesanal" className="proceso-imagen" />
          <p className="section-frase">
            “Cada joya nace de una idea, se forja con pasión y se entrega con propósito.”
          </p>
        </div>
      </div>

      {/* Valores de marca */}
      <div className="section valores">
        <h2 className="section-title">Nuestros valores</h2>
        <ul className="valores-lista">
          <li>🖤 Elegancia con propósito</li>
          <li>🔍 Detalle en cada acabado</li>
          <li>🤝 Conexión con cada cliente</li>
          <li>🌱 Respeto por lo artesanal</li>
        </ul>
      </div>

      {/* Línea de tiempo horizontal */}
      <div className="section linea-tiempo-horizontal">
        <h2 className="section-title">Nuestra evolución</h2>
        <div className="timeline-horizontal">
          <div className="evento">
            <span className="fecha">2015</span>
            <p>Primer contacto con la joyería</p>
          </div>
          <div className="evento">
            <span className="fecha">2018</span>
            <p>Inicio de diseño artesanal</p>
          </div>
          <div className="evento">
            <span className="fecha">2023</span>
            <p>Fundación de VALCA</p>
          </div>
          <div className="evento">
            <span className="fecha">2025</span>
            <p>Lanzamiento digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}