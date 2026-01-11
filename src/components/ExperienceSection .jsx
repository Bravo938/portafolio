import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaDatabase, FaShieldAlt, FaJsSquare,FaLock  } from 'react-icons/fa'; // Importa FaJsSquare
import video from '../videos/videos.js';

const ExperienceSection = () => {
  return (
    <Section>
      <Title>Experiencia</Title>
      <Iframe
        src={video.proyecto}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Experiencia"
      />
      <Description>
        Este proyecto fue realizado para La Empresa Pro Athletic, comparto un video ya que el código es de índole privado. En este proyecto utilice React.js, Axios, Node.js, JavaScript, Express, Sequelize, MySQL, JWT, bcrypt. 
        Este Proyecto es un sistema Web donde permite el control y manejo de ingresos y gastos, también un control de Mensuales. Control de roles administrador, recepción, cada uno con los permisos necesarios.
      </Description>
      <TechIcons>
        <FaReact size={50} title="React.js" color="#61DBFB" /> {/* Color de React */}
        <FaNodeJs size={50} title="Node.js" color="#8CC84B" /> {/* Color de Node.js */}
        <FaDatabase size={50} title="MySQL" color="#00758F" /> {/* Color de MySQL */}
        <FaShieldAlt size={50} title="JWT, bcrypt" color="#FBBF24" /> {/* Color de JWT */}
        <FaLock size={50} title="JWT" color="#FBBF24" /> {/* Ícono de JWT */}
        <FaJsSquare size={50} title="JavaScript" color="#F7DF1E" /> {/* Color de JavaScript */}
      </TechIcons>
    </Section>
  );
};

export default ExperienceSection;

// Estilos
const Section = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #0d11173d;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #00d0ff;
  margin-bottom: 1rem;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 300px;
  max-width: 800px; /* Limita el ancho máximo */
  margin: 0 auto; /* Centra el iframe */

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

const Description = styled.p`
  color: #bfbfbf;
  margin-top: 1rem;
  max-width: 600px; /* Limita el ancho de la descripción */
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem; /* Cambia el tamaño de la letra aquí */
`;

const TechIcons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem; /* Espaciado entre íconos */
  color: #00d0ff; /* Color de los íconos */
`;
