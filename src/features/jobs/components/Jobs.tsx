import { ConexaIcon } from '../../../common';
import './jobs.css';

export const Jobs = () => {
  return (
    <section id='jobs' className='jobs'>

        <h2 className='jobs__title'>+ de 4 años de experiencia</h2>

        <div className='job-card'>
          <div className='job-card__description-bg'></div>
          <div className='job-card__description-info'>
            <h3>Conexa</h3>
            <p><span className='job-card__title'>Node Developer</span> - jornada completa</p>
            <p>12/2021 - 12/2023</p>
            <p>Siendo parte del equipo de Integraciones, mi función principal como <strong>desarrollador Node</strong> es conectar la plataforma ecommerce <strong>Shopify</strong> con diversos medios de envío y pago, permitiendo que estén disponibles como opciones en el proceso de pago o de envío. He tenido la oportunidad de integrar a clientes como <strong>MODO</strong>, <strong>PedidosYa</strong>, <strong>Cabify</strong>, entre otros. Además de estas integraciones, me encargue de crear, mantener y mejorar un boilerplate para agilizar la integración de los medios de envío, así como mantener y mejorar otro boilerplate para los medios de pago. También hemos implementado el uso de TypeScript en nuestros proyectos más recientes, mejorando la calidad y mantenibilidad del código.</p>
          </div>
          <div className='job-card__img job-card__img--conexa'>
            <ConexaIcon />
          </div>
        </div>

        <div className='job-card'>
          <div className='job-card__description-bg'></div>
          <div className='job-card__description-info'>
            <h3>Digital House</h3>
            <p><span className='job-card__title'>Profesor</span> - jornada parcial</p>
            <p>11/2021 - 12/2022</p>
            <p>Como profesor de la carrera de <strong>Programación Web Full Stack JS</strong> tuve la oportunidad de fomentar la participación de los estudiantes y promover el aprendizaje colaborativo, brindado retroalimentación para garantizar que los estudiantes comprendan y apliquen los conceptos de programación. A través de la metodología de "<strong>aula invertida</strong>", los alumnos fortalecen sus habilidades mediante la práctica intensiva y trabajando en un proyecto integrador grupal. Esta experiencia le permite mejorar su capacidad para resolver problemas y aplicar sus conocimientos en el desarrollo.</p>
          </div>
          <div className='job-card__img job-card__img--dh'>
            <span className='dh-log__D'>D</span>
            <div className='dh-log__H'></div>
          </div>
        </div>

        <div className='job-card'>
          <div className='job-card__description-bg'></div>
          <div className='job-card__description-info'>
            <h3>Maker</h3>
            <p><span className='job-card__title'>Full Stack Developer</span> - jornada completa</p>
            <p>10/2019 - 12/2021</p>
            <p>Mis tareas principales como Full Stack Developer, incluían la actualización y desarrollo de nuevas funcionalidades de un Dashboard Web para la gestión de viajes, operadores, choferes y control vehicular
            con seguimiento en tiempo real. También tuve la oportunidad de diseñar y desarrollar un Sistema web para la gestión autónoma e integral de viajes corporativos, también con seguimiento en tiempo real.</p>
          </div>
          <div className='job-card__img job-card__img--maker'></div>
        </div>

    </section>
  )
}
