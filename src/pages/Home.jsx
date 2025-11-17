import './Home.css';

export default function Home() {
  return (
    <main className="home">
      {/* Hero principal */}
      <section className="hero">
        <h1 className="slogan">Cada pieza, una historia. Cada historia, única.</h1>
        <button className="cta-button">Explora</button>
      </section>

      {/* 1. Galería Destacada */}
      <section className="galeria">
        <h2 className="section-title">Obras que hablan por sí solas</h2>
        <div className="galeria-grid">
          <img src="/assets/anillo1.jpg" alt="Anillo Aurora" />
          <img src="/assets/collar1.jpg" alt="Collar Eclipse" />
          <img src="/assets/pulsera1.jpg" alt="Pulsera Estelar" />
          <img src="/assets/pulsera2.jpg" alt="Pulera Leon" />
        </div>
        <button className="cta-button">Ver colección completa</button>
      </section>

      {/* 2. El Arte Detrás de Cada Pieza */}
      <section className="arte">
        <div className="arte-contenido">
          <img src="/assets/taller.jpg" alt="Proceso artesanal" />
          <p className="arte-frase">
            “Cada joya nace de una idea, se forja con pasión y se entrega con propósito.”
          </p>
        </div>
      </section>

      {/* 3. Testimonios */}
      <section className="testimonios">
        <h2 className="section-title">Historias de Clientes</h2>
        <div className="testimonio">
          <img src="/assets/mariana.jpg" alt="Mariana G." className="testimonio-foto" />
          <blockquote>
            “Mi anillo VALCA no es solo una joya, es parte de mi historia.” – <strong>Mariana G.</strong>
          </blockquote>
        </div>
      </section>

      {/* 4. Compromiso y Garantía */}
      <section className="garantia">
        <h2 className="section-title">Compromiso y Garantía</h2>
        <div className="garantia-iconos">
          <div className="icono">📦<p>Envío seguro</p></div>
          <div className="icono">💎<p>Materiales certificados</p></div>
          <div className="icono">🧬<p>Piezas únicas</p></div>
          <div className="icono">🤝<p>Atención personalizada</p></div>
        </div>
      </section>

      {/* 5. Experiencia Digital */}
      <section className="digital">
        <p className="digital-frase">
          “Compra desde donde estés. Recibe donde quieras. Vive VALCA a tu manera.”
        </p>
      </section>

      {/* 6. Suscripción */}
      <section className="suscripcion">
        <h2 className="section-title">Sé parte de la historia</h2>
        <p>Suscríbete y recibe acceso anticipado a nuestras nuevas colecciones.</p>
        <form className="formulario">
          <input type="email" placeholder="Tu correo electrónico" />
          <button type="submit">Suscribirse</button>
        </form>
      </section>

      {/* 7. Cierre Inspirador */}
      <section className="cierre">
        <p className="cierre-frase">
          “VALCA no es solo joyería. Es una forma de ver el mundo: con elegancia, intención y alma.”
        </p>
      </section>
    </main>
  );
}