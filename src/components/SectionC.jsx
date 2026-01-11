import '../Style/SectionC.css';
import vid from '../videos/videos';

function SectionC() {
  return (
    <div id='Inicio'>
      <section id="sobre-mi" className="sobre-mi fondo-SobreMi fs-4">
        {/* Video de fondo */}
        <video autoPlay loop muted className="video-fondo">
          <source src={vid.vid1} type="video/mp4" />
        </video>
        <div className="contenedor">
          <h2 className="seccion-titulo">Hola</h2>
          <h2 className="seccion-titulo text-info">Soy Fernando Bravo</h2>
          <p className="seccion-texto">
            Soy un desarrollador Full Stack apasionado por la
            programación y el desarrollo web.
          </p>
        </div>
        
        <div className="wrapper">
          <a className="button" href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
              <div className="icon">
                  <i className="fab fa-linkedin"></i>
              </div>
              <span>Linkedin</span>
          </a>
          <a className="button" href="https://github.com/Nahuel61920/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
              <div className="icon">
                  <i className="fab fa-github"></i>
              </div>
              <span>Github</span>
          </a>
          <a className="button" href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
              <div className="icon">
                  <i className="fab fa-instagram"></i>
              </div>
              <span>Instagram</span>
          </a>
          <a className="button" href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
              <div className="icon">
                  <i className="fab fa-whatsapp"></i>
              </div>
              <span>Whatsapp</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default SectionC;
