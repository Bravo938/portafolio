import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';

const fall = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const MatrixContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: black;
  overflow: hidden;
`;

const MatrixSpan = styled.span`
  position: absolute;
  font-size: 40px;
  animation: ${fall} linear infinite;
  will-change: transform;
`;

const icons = [
  { component: FaJs, color: '#F7DF1E' }, // JavaScript
  { component: FaReact, color: '#61DAFB' }, // React
  { component: FaNodeJs, color: '#8CC84B' }, // Node.js
  { component: FaDatabase, color: '#00758F' }, // Database
  { component: DiMysql, color: '#00758F' }, // MySQL
];

const MatrixBackground = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.matrix-icon');
    spans.forEach(span => {
      span.style.left = `${Math.random() * 100}vw`;
      span.style.animationDuration = `${Math.random() * 5 + 5}s`;
      span.style.animationDelay = `${Math.random() * 5}s`;
    });
  }, []);

  return (
    <MatrixContainer>
      {Array.from({ length: 50 }).map((_, index) => {
        const { component: IconComponent, color } = icons[Math.floor(Math.random() * icons.length)];
        return (
          <MatrixSpan key={index} className="matrix-icon" style={{ color }}>
            <IconComponent />
          </MatrixSpan>
        );
      })}
    </MatrixContainer>
  );
};

export default MatrixBackground;
