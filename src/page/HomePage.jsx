import Footer from "../components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header.jsx";
import SectionC from "../components/SectionC.jsx";
import SectionE from "../components/SectionE.jsx";
import Carrucel from "../components/Carrucel.jsx";
import Contacto from "../components/Contacto.jsx";
import SeccionPrin from "../components/SeccionPrin.jsx";
import SobreMi from "../components/SobreMi.jsx";
import MatrixBackground from '../components/Matrix.jsx';
import ServicesSection from "../components/ServiceSeccion.jsx";
import ProjectsSection from "../components/ProjectsSection .jsx";
import ExperienceSection from "../components/ExperienceSection .jsx";

export default function HomePage(){
    return(
        <>
        <MatrixBackground/>
        <Header></Header>
        <SeccionPrin/>
        <SobreMi/>
        <ServicesSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        
        
        <Footer></Footer>
        </>
    )
};