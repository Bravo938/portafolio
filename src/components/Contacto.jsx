import '../Style/Contacto.css';

function Contacto (){
    return(
    <>
        <section id="contacto" className="contacto fondo">
      <div className="container">
        <div className="container rectangulo text-center d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">
              Hablemos
            </div>
            <div className="col-12 col-md-4 descripcion">
              Contactanos tu consulta no molesta
            </div>
            <div className="col-12 col-md-4">
              <a href="https://wa.me/3815882341" target="_blank">
                <button type="button">
                  
                  <i className="bi bi-whatsapp"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
     </section>
    </>
    )
};

export default Contacto;