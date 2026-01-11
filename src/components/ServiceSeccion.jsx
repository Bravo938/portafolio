import React from 'react';
import styled from 'styled-components';
import { FaPencilRuler, FaLaptopCode, FaWrench, FaServer } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

const ServicesSection = () => {
  const services = [
    { icon: <FaPencilRuler />, title: 'Diseño UX/UI', description: 'Diseño de interfaces atractivas para usuarios en web y móvil, maximizando el valor de la marca o producto en el sitio web.' },
    { icon: <MdWeb />, title: 'Desarrollo WEB', description: 'Creación de sitios web estructurados y responsivos, con una paleta de colores atractiva e interacciones satisfactorias.' },
    { icon: <FaWrench />, title: 'Mantenimiento web', description: 'Mantenimiento completo de sitios web: actualización de contenido, corrección de errores, diseño, nuevas funciones, etc.' },
    { icon: <FaLaptopCode />, title: 'Desarrollo de Sistemas Web', description: 'Desarrollo de sistemas robustos y personalizados desde la web, adaptados a tus necesidades.' },
    { icon: <FaServer />, title: 'Backend y API', description: 'Desarrollo de backend y APIs con Node.js para aplicaciones web.' },
  ];

  return (
    <Section>
      <Title>Servicios</Title>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServiceList>
    </Section>
  );
};

export default ServicesSection;

const Section = styled.div`
  padding: 4rem 2rem;
  background-color: #00030d5e;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ServiceItem = styled.div`
  flex: 1 1 200px;
  margin: 1rem;
  padding: 2rem;
  background: #1c1a1a;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #00d0ff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;


const ServiceTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #00d0ff;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
`;
