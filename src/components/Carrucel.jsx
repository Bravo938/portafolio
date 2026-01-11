import '../Style/Carrucel.css';

import img from '../img/img.js';

function Carrucel (){
    return(
        <>
        <div id='Staff'>
        <section id="testimonios" className="testimonios seccion-clara">
      <h2 className="seccion-titulo text-black fs-1">STAFF</h2>
      <h3 className="seccion-descripcion">Estos son algunos testimonios de nuestros Coach</h3>
      
      <div id="testimonios-corrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img className="testimonio-imagen rounded-circle" src={img.facundo} alt="cliente 1"/>
              <p className="testimonio-texto">Edad: 23 Años</p>
              <p className="testimonio-texto">Cargo: Coach</p>
              <p className="testimonio-texto">Formacion: Simposio de Entrenamiento para la salud y el rendimiento.
                Taller de weightlifting.</p>
              <p className="testimonio-texto">Periodización del levantamiento de pesas.
                Certificado en Halterofilia aplicada al Deporte.</p>
              <div className="testimonio-info">
                <p className="cliente">Facundo Chico</p>
                <p className="cargo">Coach</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img className="testimonio-imagen rounded-circle" src={img.elias} alt="cliente 1"/>
              <p className="testimonio-texto">Edad: 37 Años</p>
                <p className="testimonio-texto">Cargo: Coach</p>
                <p className="testimonio-texto">Formacion:
                Personal Trainers
                Unidos Program
                High fitness coach level 1 & 2</p>
                <p className="testimonio-texto">Talleres realizados de alto rendimiento</p>
                <p className="testimonio-texto">Lucas Parker: (Atleta de crossfit games)
                  Facundo E.: (Coach y Programador Crossfit Mayhem )</p>
                 <p className="testimonio-texto"> Martin Montequin: Entrenamiento Conciente</p>
              <div className="testimonio-info">
                <p className="cliente">Elias Valdez</p>
                <p className="cargo">Coach</p>
              </div>
            </div>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-corrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonios-corrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
    </div>
        </>
    )
}

export default Carrucel;