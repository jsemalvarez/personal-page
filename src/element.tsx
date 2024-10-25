import './presentation.css';

export const Presentation = () => {
  return (
    <section id="presentation">

      <div></div>

      {/* rol - nombre - descripcion */}
      <section>
        <p>full stack developer</p>
        <h1>jose maria alvarez</h1>
        <p>Me considero un apasionado de lo que hago. Capacitandome constantemente en nuevas tecnologías, con excelente predisposición. Teniendo como único deseo, el seguir aprendiendo con los mismos ánimos de un principiante.</p>
      </section>

      {/* foto y apodo */}
      <section>
        <div>
          <p>josema</p>
        </div>
        <div>
          <img src="./assets/foto-perfil.jpg" alt="developer" />
        </div>
        <div></div>
      </section>

      {/* iconos de contacto */}
      <section>
        <div>
          <a href="https://www.linkedin.com/in/jsemalvarez/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/LinkedIn.png" alt="LinkedIn" />
          </a>
          <div></div>
        </div>
        <div>
          <a href="https://github.com/jsemalvarez" target="_blank" rel="noopener noreferrer">
            <img src="./assets/GitHub.png" alt="GitHub" />
          </a>
          <div></div>
        </div>
        <div>
          <a href="mailto:jsemalvarez@gmail.com">
            <img src="./assets/gmail.png" alt="gmail" />
          </a>
          <div></div>
        </div>
      </section>
    </section>
  )
}
