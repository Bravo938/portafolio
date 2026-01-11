import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import vid from '../videos/videos.js';

// Componente principal de fondo de video
const SeccionPrin = () => {
  return (
    <Section>
      {/* Video de fondo */}
      <Video autoPlay loop muted>
        <source src={vid.vid1} type="video/mp4" />
      </Video>

      {/* Contenido centrado */}
      <Content>
        <Title>Hola</Title>
        <Subtitle>Soy Fernando Bravo</Subtitle>
        <Paragraph>
          Soy un desarrollador Full Stack apasionado por la programación y el desarrollo web.
        </Paragraph>
        <SocialWrapper>
          <SocialButton href="https://www.linkedin.com/in/fernandoemmanuelbravovelizdesarrollador/" target="_blank" color="#4267B2">
            <Icon>
              <FaLinkedin />
            </Icon>
            <span>LinkedIn</span>
          </SocialButton>
          <SocialButton href="https://github.com/Bravo938" target="_blank" color="#333">
            <Icon>
              <FaGithub />
            </Icon>
            <span>GitHub</span>
          </SocialButton>
          <SocialButton href="https://www.instagram.com/bravofernando_/profilecard/?igsh=aDZzdWxrdTJxYmNr" target="_blank" color="#E1306C">
            <Icon>
              <FaInstagram />
            </Icon>
            <span>Instagram</span>
          </SocialButton>
          <SocialButton href="https://wa.me/5493863437447?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios
" target="_blank" color="#4fc35b">
            <Icon>
              <FaWhatsapp />
            </Icon>
            <span>WhatsApp</span>
          </SocialButton>
        </SocialWrapper>
      </Content>
    </Section>
  );
};

export default SeccionPrin;

// Estilos con styled-components
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: white;
  text-align: center;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  z-index: 1;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Filtro oscuro */
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Subtitle = styled.h2`
  font-size: 3rem;
  margin: 10px 0;
  color: #00d0ff;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

// Estilos para los botones de redes sociales
const SocialWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1.5rem;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 60px;
  overflow: hidden;

  &:hover {
    width: 150px;
  }

  span {
    margin-left: 10px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover span {
    opacity: 1;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
`;
