import Footer from "../components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header.jsx";
import Contact from "../components/Contac.jsx";
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
        <Contact/>
        
        
        </>
    )
};