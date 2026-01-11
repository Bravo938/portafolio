import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      image: 'url-de-la-imagen-del-proyecto-1',
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1.',
      github: 'https://github.com/usuario/proyecto1',
      demo: 'https://demo-proyecto1.com',
    },
    {
      image: 'url-de-la-imagen-del-proyecto-2',
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto 2.',
      github: 'https://github.com/usuario/proyecto2',
      demo: 'https://demo-proyecto2.com',
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <Section>
      <Title>Proyectos</Title>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <Image src={project.image} alt={project.title} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <Links>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Código
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              </Links>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectList>
    </Section>
  );
};

export default ProjectsSection;

// Estilos
const Section = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #0d1117;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #00d0ff;
  margin-bottom: 2rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  width: 300px;
  background: #161b22;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
`;

const Description = styled.p`
  color: #bfbfbf;
  margin: 0.5rem 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #00d0ff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;
