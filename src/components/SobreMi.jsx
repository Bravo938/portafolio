import React from 'react';
import styled from 'styled-components';
import {  FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDownload } from 'react-icons/fa';
import Cv from '../CvCursos/Fernando Bravo Full Stackk.pdf';
import { SiVisualstudiocode, SiGit, SiFigma, SiMysql, SiDotnet, SiCsharp, SiSequelize, SiExpress } from 'react-icons/si';

const SobreMi = () => {
  return (
    <Container>
      <Content>
        <TextSection>
          <Title>Sobre Mí</Title>
          <Paragraph>Soy un desarrollador Full Stack apasionado por la programación y el desarrollo web. Tengo experiencia en el Desarrollo y Mantenimiento de sitios web y sistemas, utilizando tecnologías como .NET, JavaScript, C#, node.js, CSS, React.js y Bootstrap. Actualmente estoy trabajando de manera autónomo desarrollando. También me recibí de la carrera <strong>Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional - Facultad Regional de Tucumán.</strong></Paragraph>
          <Paragraph>Me encanta trabajar con tecnologías como React, Node.js, y muchas más. También estoy en constantemente aprendiendo realizando cursos de otros lenguajes para poder implementar en ciertos proyectos.</Paragraph>

          <Subtitle>
            <p>Edad: 27.</p>
            <p>Correo electrónico: fernando85238523@gmail.com</p>
            <p>De: Tucumán, Argentina.</p>
          </Subtitle>
          <DownloadButton href={Cv} download>
            <FaDownload /> Descargar CV
          </DownloadButton>
        </TextSection>
        <SkillsSection>
          <Subtitle>Herramientas</Subtitle>
          <IconList>
            <SkillIcon href="https://www.linkedin.com" target="_blank" iconType="vscode"><SiVisualstudiocode /></SkillIcon>
            <SkillIcon href="https://github.com" target="_blank" iconType="git"><SiGit /></SkillIcon>
            <SkillIcon href="https://www.instagram.com" target="_blank" iconType="figma"><SiFigma /></SkillIcon>
            <SkillIcon href="https://github.com" target="_blank"><FaGithub /></SkillIcon>
          </IconList>
          <Subtitle>Skill</Subtitle>
          <IconList>
            <SkillIcon iconType="html"><FaHtml5 /></SkillIcon>
            <SkillIcon iconType="css"><FaCss3Alt /></SkillIcon>
            <SkillIcon iconType="js"><FaJsSquare /></SkillIcon>
            <SkillIcon iconType="react"><FaReact /></SkillIcon>
            <SkillIcon iconType="node"><FaNodeJs /></SkillIcon>
            <SkillIcon iconType="mysql"><SiMysql /></SkillIcon>
            <SkillIcon iconType="dotnet"><SiDotnet /></SkillIcon>
            <SkillIcon iconType="csharp"><SiCsharp /></SkillIcon>
            <SkillIcon iconType="sequelize"><SiSequelize /></SkillIcon>
            <SkillIcon iconType="express"><SiExpress /></SkillIcon>
          </IconList>
        </SkillsSection>
      </Content>
    </Container>
  );
};

export default SobreMi;

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #00030d5e;
  color: #fffbfb;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #00d0ff;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SkillsSection = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00d0ff;
`;

const IconList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  justify-content: center; /* Centrar iconos en la sección */
`;

const SkillIcon = styled.a`
  font-size: 4rem;
  transition: color 0.3s;
  color: ${({ iconType }) => {
    switch (iconType) {
        case 'express':
        return '#333333'; 
      case 'html':
        return '#E34F26'; // HTML color
      case 'css':
        return '#1572B6'; // CSS color
      case 'js':
        return '#F7DF1E'; // JavaScript color
      case 'react':
        return '#61DAFB'; // React color
      case 'node':
        return '#8CC84B'; // Node.js color
      case 'mysql':
        return '#00758F'; // MySQL color
      case 'dotnet':
        return '#512BD4'; // .NET color
      case 'csharp':
        return '#68217A'; // C# color
      case 'sequelize':
        return '#52B0E3'; // Sequelize color
      case 'vscode':
        return '#007ACC'; // Visual Studio Code color
      case 'git':
        return '#F05032'; // Git color
      case 'figma':
        return '#F24E1E'; // Figma color
      default:
        return '#ffffff'; // Default color
    }
  }};
  &:hover {
    color: #0072b1;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #005ca8;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-top: 1rem; /* Margen para separar del texto anterior */
  
  &:hover {
    background-color: #a6ff53;
  }
`;
