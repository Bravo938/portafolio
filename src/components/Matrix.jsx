import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaPython, FaGitAlt, FaDocker, FaAws,
  FaHtml5, FaCss3Alt, FaFigma
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiMongodb, 
  SiPostgresql, SiTypescript, SiGraphql,
  SiRedis, SiKubernetes, SiJest
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

// Animaciones mejoradas
const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.3;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
`;

const GradientBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e293b 25%,
    #334155 50%,
    #475569 75%,
    #64748b 100%
  );
  overflow: hidden;
`;

const GridOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  animation: ${float} 20s ease-in-out infinite;
  opacity: 0.1;
  transition: opacity 0.3s ease;
  will-change: transform;
  
  &:hover {
    opacity: 0.5;
  }
`;

const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 8s ease-in-out infinite;
  will-change: transform;
`;

const TechBackground = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);

  const techIcons = [
    // Frontend
    { icon: FaReact, color: '#61DAFB', size: 32, category: 'frontend' },
    { icon: SiNextdotjs, color: '#FFFFFF', size: 32, category: 'frontend' },
    { icon: FaJs, color: '#F7DF1E', size: 32, category: 'frontend' },
    { icon: SiTypescript, color: '#3178C6', size: 32, category: 'frontend' },
    { icon: FaHtml5, color: '#E34F26', size: 32, category: 'frontend' },
    { icon: FaCss3Alt, color: '#1572B6', size: 32, category: 'frontend' },
    { icon: SiTailwindcss, color: '#06B6D4', size: 32, category: 'frontend' },
    
    // Backend
    { icon: FaNodeJs, color: '#8CC84B', size: 32, category: 'backend' },
    { icon: FaPython, color: '#3776AB', size: 32, category: 'backend' },
    { icon: SiGraphql, color: '#E10098', size: 32, category: 'backend' },
    
    // Database
    { icon: FaDatabase, color: '#00758F', size: 32, category: 'database' },
    { icon: DiMysql, color: '#00758F', size: 32, category: 'database' },
    { icon: SiMongodb, color: '#47A248', size: 32, category: 'database' },
    { icon: SiPostgresql, color: '#4169E1', size: 32, category: 'database' },
    { icon: SiRedis, color: '#DC382D', size: 32, category: 'database' },
    
    // DevOps & Tools
    { icon: FaGitAlt, color: '#F05032', size: 32, category: 'devops' },
    { icon: FaDocker, color: '#2496ED', size: 32, category: 'devops' },
    { icon: FaAws, color: '#FF9900', size: 32, category: 'devops' },
    { icon: SiKubernetes, color: '#326CE5', size: 32, category: 'devops' },
    { icon: FaFigma, color: '#F24E1E', size: 32, category: 'tools' },
    { icon: SiJest, color: '#C21325', size: 32, category: 'tools' },
  ];

  useEffect(() => {
    // Posicionar íconos aleatoriamente
    iconsRef.current.forEach((iconRef, index) => {
      if (iconRef) {
        // Posición aleatoria pero evitando el centro
        const x = Math.random() * 80 + 10; // 10% a 90%
        const y = Math.random() * 80 + 10;
        
        // Tamaño aleatorio
        const scale = Math.random() * 0.5 + 0.5;
        
        // Rotación inicial aleatoria
        const rotate = Math.random() * 360;
        
        // Duración de animación aleatoria
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        // Aplicar estilos
        iconRef.style.left = `${x}%`;
        iconRef.style.top = `${y}%`;
        iconRef.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
        iconRef.style.animationDuration = `${duration}s`;
        iconRef.style.animationDelay = `${delay}s`;
      }
    });
  }, []);

  return (
    <GradientBackground ref={containerRef}>
      {/* Grid sutil */}
      <GridOverlay />
      
      {/* Orbes de gradiente */}
      <GlowOrb style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        animationDelay: '0s'
      }} />
      
      <GlowOrb style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        bottom: '20%',
        right: '15%',
        animationDelay: '2s'
      }} />
      
      <GlowOrb style={{
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        top: '60%',
        left: '70%',
        animationDelay: '4s'
      }} />
      
      {/* Íconos flotantes */}
      {techIcons.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <FloatingIcon
            key={index}
            ref={el => iconsRef.current[index] = el}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.3,
              opacity: 0.8,
              transition: { duration: 0.3 }
            }}
          >
            <IconComponent 
              size={tech.size} 
              color={tech.color}
              style={{
                filter: `drop-shadow(0 0 8px ${tech.color}40)`
              }}
            />
          </FloatingIcon>
        );
      })}
      
      {/* Líneas de conexión (opcional) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${Math.random() * 100}%,${Math.random() * 100}% C ${Math.random() * 100}%,${Math.random() * 100}% ${Math.random() * 100}%,${Math.random() * 100}% ${Math.random() * 100}%,${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </GradientBackground>
  );
};

export default TechBackground;