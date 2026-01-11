import '../Style/Footer.css';

import img from '../img/img.js'

function Footer (){
    return (
        <>
            <footer className="fondo-oscura d-flex flex-column align-items-center justify-content-center">
      <img className="footer-logo" src={img.img1} alt="Logo"/>
      <p className="footer-texto text-center">Nos enfocamos en que logres <br/>tus objetivos</p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        
        <a href="https://www.instagram.com/proathletic01/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.facebook.com/proathletic01" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://wa.me/3815882341" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
        </a>
       
      </div>
      <div className="autor">© 2024 Pro Athletic Todos Los Derechos Reservados.</div>
    </footer>
        </>
    )
};

export default Footer;