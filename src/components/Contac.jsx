import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

// Estilos usando Styled Components
const FooterContainer = styled.footer`
  background-color: #0d11173d;
  color: #fff;
  padding: 20px 0;
  text-align: center;

  h2 {
    margin-bottom: 15px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; /* Espacio entre iconos */
`;

const IconLink = styled.a`
  font-size: 70px; /* Aumenta el tamaño de los iconos */
  color: #fbfbfb; /* Color base de iconos */
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(2) rotate(10deg); /* Efecto 3D y aumento */
    color: ${({ color }) => color}; /* Cambia a color específico */
  }
`;

const CopyrightText = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: #ffffff; /* Color de texto de derechos de autor */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Contáctame</h2>
      <IconsContainer>
        <IconLink color="#d14836" href="fernando85238523@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </IconLink>
        <IconLink color="#0e76a8" href="https://www.linkedin.com/in/fernandoemmanuelbravovelizdesarrollador/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink color="#333" href="https://github.com/Bravo938" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink color="#26ff00" href="https://wa.me/5493863437447?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </IconLink>
      </IconsContainer>
      <CopyrightText>&copy; 2024 Fernando Bravo. Todos los derechos reservados.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
