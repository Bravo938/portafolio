import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLinkedin, FaGithub, FaInstagram, FaWhatsapp,
  FaArrowDown, FaCode, FaServer, FaPalette,
  FaDatabase, FaUserTie
} from 'react-icons/fa';
import { 
  SiJavascript, SiReact, SiNodedotjs, 
  SiTailwindcss, SiExpress, SiMysql,
  SiSequelize
} from 'react-icons/si';

import miFoto from '../assets/foto-perfil.jpeg';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const roles = [
    'Desarrollador Full Stack',
    'Especialista en React',
    'Apasionado por Node.js',
    'Solucionador de Problemas',
    'Innovador Tecnológico'
  ];

  // Efecto para el typing animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(wordInterval);
    };
  }, []);

  // Función para abrir enlaces sin usar etiqueta <a>
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/fernandoemmanuelbravovelizdesarrollador/", 
      label: "LinkedIn",
      color: "#0A66C2",
      hoverColor: "#004182"
    },
    { 
      icon: <FaGithub />, 
      url: "https://github.com/Bravo938", 
      label: "GitHub",
      color: "#333",
      hoverColor: "#000"
    },
    { 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/bravofernando_/", 
      label: "Instagram",
      color: "#E4405F",
      hoverColor: "#C13584"
    },
    { 
      icon: <FaWhatsapp />, 
      url: "https://wa.me/5493863437447", 
      label: "WhatsApp",
      color: "#25D366",
      hoverColor: "#128C7E"
    },
  ];

  const techStack = [
    { icon: <SiReact />, name: 'React', color: 'text-cyan-400' },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-500' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <SiExpress />, name: 'Express', color: 'text-gray-300' },
    { icon: <SiMysql />, name: 'MySQL', color: 'text-blue-500' },
    { icon: <SiSequelize />, name: 'Sequelize', color: 'text-blue-400' },
  ];

  const services = [
    { icon: <FaCode />, title: 'Frontend', desc: 'Interfaces modernas' },
    { icon: <FaServer />, title: 'Backend', desc: 'APIs robustas' },
    { icon: <FaDatabase />, title: 'Database', desc: 'MySQL' },
  ];

  const scrollToNext = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        {/* Efecto de partículas */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
              animate={{
                y: [0, -100],
                x: [0, Math.random() * 50 - 25],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Gradientes animados */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna izquierda - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Saludo animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-cyan-400 text-lg font-mono">Hola, me llamo</span>
            </motion.div>

            {/* Nombre con efecto */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Fernando Bravo
              </span>
            </motion.h1>

            {/* Rol animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="h-12 mb-6 flex items-center justify-center lg:justify-start"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
                  >
                    {roles[currentWord]}
                  </motion.span>
                </AnimatePresence>
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  |
                </span>
              </div>
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl"
            >
              Desarrollo soluciones web completas con <span className="text-cyan-300">React</span>,{' '}
              <span className="text-green-400">Node.js</span> y{' '}
              <span className="text-blue-400">MySQL</span>. Especializado en crear
              aplicaciones escalables con arquitecturas robustas y diseño moderno.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group cursor-default hover:bg-white/10 transition-colors"
                  title={tech.name}
                >
                  <div className={`text-lg sm:text-xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Botones de Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.label}
                  onClick={() => openLink(social.url)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative border-none outline-none focus:outline-none focus:ring-0 cursor-pointer"
                  aria-label={`Abrir ${social.label}`}
                >
                  {/* Botón principal */}
                  <div 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl transition-all duration-300 overflow-hidden relative z-10"
                    style={{ backgroundColor: social.color }}
                  >
                    <div className="text-base sm:text-xl text-white">
                      {social.icon}
                    </div>
                    <span className="font-semibold text-white whitespace-nowrap text-sm sm:text-base">
                      {social.label}
                    </span>
                  </div>
                  
                  {/* Efecto hover */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{ backgroundColor: social.hoverColor }}
                  />
                  
                  {/* Sombra */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                    style={{ 
                      boxShadow: `0 10px 30px ${social.color}80`,
                      backgroundColor: social.color 
                    }}
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Botón para ver proyectos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-6 sm:mt-8 flex justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('proyectos');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl overflow-hidden border-none outline-none focus:outline-none focus:ring-0 cursor-pointer"
              >
                {/* Fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500" />
                
                {/* Efecto de luz */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Contenido */}
                <div className="relative flex items-center gap-2 sm:gap-3">
                  <FaCode className="text-lg sm:text-xl text-white" />
                  <span className="font-bold text-white text-base sm:text-lg">Ver Proyectos</span>
                </div>
                
                {/* Sombra */}
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 -z-10" />
              </button>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Foto y tarjeta */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Contenedor de la foto */}
            <div className="relative mb-6 sm:mb-8">
              {/* Anillos decorativos */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 border-2 border-blue-500/30 rounded-full animate-spin-slow" />
                <div className="absolute w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 border-2 border-cyan-500/30 rounded-full animate-spin-slow-reverse" />
                <div className="absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 border-2 border-purple-500/30 rounded-full animate-spin-slow" />
              </div>

              {/* Contenedor de la foto con efecto LED NEON */}
              <div className="relative mx-auto w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64">
                {/* Efecto de gradiente detrás */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse" />
                
                {/* Marco de la foto con efecto LED NEON */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl neon-border">
                  {/* Borde LED Neón animado */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent neon-glow animate-glow" />
                  
                  {/* Placeholder mientras carga o si no hay foto */}
                  {!imageLoaded && (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                      <FaUserTie className="text-4xl sm:text-5xl md:text-6xl text-cyan-400 mb-2" />
                      <span className="text-xs sm:text-sm text-gray-400">Foto de perfil</span>
                    </div>
                  )}
                  
                  {/* Tu foto */}
                  <img
                    src={miFoto}
                    alt="Fernando Bravo - Desarrollador Full Stack"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                  />
                  
                  {/* Efecto de superposición */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                </div>
                
                {/* Badge de "Disponible" */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-white">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de información - Responsive mejorado */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl shadow-blue-500/10">
              {/* Servicios en columnas para móvil */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group cursor-default hover:bg-white/10 transition-colors"
                  >
                    <div className="text-lg sm:text-xl text-cyan-400 mb-1">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">{service.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{service.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Stack específico */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2 sm:mb-3 text-center text-sm">Stack Principal</h3>
                <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                  <div className="text-center min-w-[60px]">
                    <SiReact className="text-xl sm:text-2xl text-cyan-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">React</span>
                  </div>
                  <div className="text-center min-w-[60px]">
                    <SiNodedotjs className="text-xl sm:text-2xl text-green-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">Node.js</span>
                  </div>
                  <div className="text-center min-w-[60px]">
                    <SiMysql className="text-xl sm:text-2xl text-blue-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">MySQL</span>
                  </div>
                  <div className="text-center min-w-[60px]">
                    <SiSequelize className="text-xl sm:text-2xl text-blue-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">Sequelize</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-around pt-3 sm:pt-4 border-t border-white/10">
                <div className="text-center px-1">
                  <div className="text-lg sm:text-xl font-bold text-white">10+</div>
                  <div className="text-xs text-gray-400">Proyectos</div>
                </div>
                <div className="text-center px-1">
                  <div className="text-lg sm:text-xl font-bold text-white">2+</div>
                  <div className="text-xs text-gray-400">Años Exp</div>
                </div>
                <div className="text-center px-1">
                  <div className="text-lg sm:text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-400">Dedicación</div>
                </div>
              </div>
            </div>

            {/* Elementos flotantes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 opacity-20 blur-sm"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl -rotate-12 opacity-20 blur-sm"
            />
          </motion.div>
        </div>

        {/* Flecha scroll */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          onClick={scrollToNext}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 border-none outline-none focus:outline-none focus:ring-0 cursor-pointer"
          aria-label="Ir a siguiente sección"
        >
          <div className="p-3 sm:p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <FaArrowDown className="text-xl sm:text-2xl text-cyan-400" />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;