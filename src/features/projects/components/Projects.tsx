import { EyeIcon } from '../../../common/components/icons/EyeIcon';
import { GithubIcon } from '../../../common/components/icons/GithubIcon';
import './projects.css';

export const Projects = () => {
  return (
    <section id='projects' className='projects'>
        <h2 className='projects__title'>Proyectos</h2>

      <div className='grid-cards-project'>
      
        <div className='card-project'>

          <div className='img-project'>
            <div className='img-project__header'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-project__content img-project__content--pcp'>

            </div>
          </div>

          <div className='nav-project'>
            <div className='nav-project__left-items'>
              <h3>Paseso con Peques</h3>
              <p>Guia de actividades familiares</p>
            </div>
            <div className='nav-project__right-items'>
              <a href="https://paseosconpequesmdp.web.app" target="_blank" rel="noopener noreferrer"><EyeIcon size={30} /></a>
              <a href="https://github.com/jsemalvarez/paseos-con-peques" target="_blank" rel="noopener noreferrer"><GithubIcon size={30} /></a>              
            </div>
          </div>

          <div className='prject__description'>
            <p>Facilita a las familias la búsqueda de lugares gastronómicos y actividades para disfrutar con niños, además de salones infantiles para celebrar cumpleaños. La aplicación web es interactiva y muestra estos lugares en un mapa, proporcionando una experiencia de usuario intuitiva</p>
          </div>

        </div>

        <div className='card-project'>

          <div className='img-project'>
            <div className='img-project__header'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-project__content img-project__content--pokemon-chat'>

            </div>
          </div>

          <div className='nav-project'>
            <div className='nav-project__left-items'>
              <h3>POGO CHAT MDP</h3>
              <p>Chat para jugadores de Pokemon GO</p>
            </div>
            <div className='nav-project__right-items'>
            <a href="https://pogo-mdp-chat.web.app" target="_blank" rel="noopener noreferrer"><EyeIcon size={30} /></a>
            <a href="https://github.com/jsemalvarez/pokechat-react-firebase" target="_blank" rel="noopener noreferrer"><GithubIcon size={30} /></a>              
            </div>
          </div>

          <div className='prject__description'>
            <p>Aplicación de chat en React y Firebase dirigida a jugadores de Pokémon Go. Los usuarios se registran en la plataforma y pueden conectarse utilizando su apodo del juego. La aplicación incluye funcionalidades de autenticación, búsqueda por apodo, y permite una comunicación en tiempo real gracias a la integración de Firebase.</p>
          </div>

        </div>

        <div className='card-project'>

          <div className='img-project'>
            <div className='img-project__header'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-project__content img-project__content--hackaton-apptacc'>

            </div>
          </div>

          <div className='nav-project'>
            <div className='nav-project__left-items'>
              <h3>Hackaton - MGP</h3>
              <p>APPTACC</p>
            </div>
            <div className='nav-project__right-items'>
            <a href="https://www.lacapitalmdp.com/tres-aplicaciones-fueron-las-grandes-ganadoras-del-hackathon-mgp/" target="_blank" rel="noopener noreferrer"><EyeIcon size={30} /></a>
            <a href="https://github.com/jsemalvarez" target="_blank" rel="noopener noreferrer"><GithubIcon size={30} /></a>              
            </div>
          </div>

          <div className='prject__description'>
            <p>AppTacc es una guía colaborativa de establecimientos gastronómicos con oferta sin gluten en la ciudad de Mar del Plata, pensada por y para la comunidad celíaca. Su uso es totalmente gratuito, permitiendo acceder a información actualizada sobre cafés, restaurantes y emprendimientos de comida apta para este tipo de dieta. </p>
          </div>

        </div>

        <div className='card-project'>

          <div className='img-project'>
            <div className='img-project__header'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-project__content img-project__content--descubri-mdp'>

            </div>
          </div>

          <div className='nav-project'>
            <div className='nav-project__left-items'>
              <h3>Descubri MdP</h3>
              <p>Auto guia de la ciudad</p>
            </div>
            <div className='nav-project__right-items'>
            <a href="https://descubrimdp.web.app/" target="_blank" rel="noopener noreferrer"><EyeIcon size={30} /></a>
            <a href="https://github.com/jsemalvarez/descubri-mdp" target="_blank" rel="noopener noreferrer"><GithubIcon size={30} /></a>              
            </div>
          </div>

          <div className='prject__description'>
            <p>El proyecto busca promocionar el patrimonio histórico de Mar del Plata. Las personas de "Mar del Plata Histórica y Misteriosa" aportan información de edificios y lugares que dejaron su huella en la historia. Por mi parte, utilizando herramientas de Firebase, ReactJS, OpenStreetMap y Leaflet generando una PWA, mediante la cual podemos ver un mapa con iconos de lugares históricos, permitiendo a los usuarios recorrer la ciudad con otra mirada</p>
          </div>

        </div>

        <div className='card-project'>

          <div className='img-project'>
            <div className='img-project__header'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-project__content img-project__content--gestion-atlantis'>

            </div>
          </div>

          <div className='nav-project'>
            <div className='nav-project__left-items'>
              <h3>Gestion Atlantis</h3>
              <p>Sistema de gestion para Grupos Scouts</p>
            </div>
            <div className='nav-project__right-items'>
            <a href="https://github.com/jsemalvarez" target="_blank" rel="noopener noreferrer"><EyeIcon size={30} /></a>
            <a href="https://github.com/jsemalvarez" target="_blank" rel="noopener noreferrer"><GithubIcon size={30} /></a>               
            </div>
          </div>

          <div className='prject__description'>
            <p>Sistema web diseñado para colaborar con grupos scouts en sus tareas administrativas, educativas y de planeación de objetivos según el marco que establece la Organización Scout Interamericana (OSI).</p>
          </div>

        </div>

        <div className='card-project'>

          <div className='img-project'>
            <div className='img-project__header'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-project__content img-project__content--hackaton-mdp-data-fest'>

            </div>
          </div>

          <div className='nav-project'>
            <div className='nav-project__left-items'>
              <h3>Hackaton - ATICMA</h3>
              <p>MdP Data Fest</p>
            </div>
            <div className='nav-project__right-items'>
            <a href="https://www.aticma.org.ar/hackaton-mdp-data-fest" target="_blank" rel="noopener noreferrer"><EyeIcon size={30} /></a>
            <a href="https://github.com/jsemalvarez/hackaton-mdp-data-fest" target="_blank" rel="noopener noreferrer"><GithubIcon size={30} /></a>               
            </div>
          </div>

          <div className='prject__description'>
            <p>Hackaton organizado por ATICMA  Y Mar del Plata Entre Todos. Forme parte del equipo ganador que realizó herramientas basadas en encuestas de percepción ciudadana, mediante dichas herramientas se liberaron los datos, permitiendo conocer y entender lo que sucede en Mar del Plata.</p>
          </div>

        </div>

      </div>

    </section>
  )
}
