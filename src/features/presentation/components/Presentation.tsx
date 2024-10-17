import './presentation.css';

export const Presentation = () => {
  return (
    <section id="presentation" className='presentation'>

      <div></div>

      <section className="presentation__main-content">
        <p>full stack developer</p>
        <h1>jose maria alvarez</h1>
        <p>Me considero un apasionado de lo que hago. Capacitandome constantemente en nuevas tecnologías, con excelente predisposición. Teniendo como único deseo, el seguir aprendiendo con los mismos ánimos de un principiante.</p>
      </section>

      <section className="presentation__side-content">
        <div className="wrapper__nickname">
          <p className='side-content__nickname'>josema</p>
        </div>
        <div className='wrapper__img'>
          <img src="./assets/foto-perfil.jpg" alt="developer" />
        </div>
        <div></div>
      </section>

      <section className="presentation__footer">
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
