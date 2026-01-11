import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaShieldAlt,
  FaLock,
  FaPlay,
  FaCode,
  FaServer,
  FaUsers,
  FaChartLine,
  FaVideo,
  FaYoutube
} from 'react-icons/fa';
import { SiExpress, SiSequelize, SiMysql, SiJavascript } from 'react-icons/si';

const ExperienceSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const iframeRef = useRef(null);
  
  const projects = [
    {
      id: 0,
      title: "Pro Athletic - Sistema de Gestión",
      description: "Sistema web completo para control de ingresos, gastos y membresías con roles de usuario.",
      youtubeId: "VFnDFyHz6iM",
      thumbnail: `https://img.youtube.com/vi/VFnDFyHz6iM/maxresdefault.jpg`,
      technologies: [
        { icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { icon: <FaNodeJs />, name: 'Node.js', color: '#8CC84B' },
        { icon: <SiExpress />, name: 'Express', color: '#000000' },
        { icon: <SiMysql />, name: 'MySQL', color: '#00758F' },
        { icon: <SiSequelize />, name: 'Sequelize', color: '#52B0E3' },
        { icon: <FaShieldAlt />, name: 'JWT', color: '#FBBF24' },
        { icon: <FaLock />, name: 'bcrypt', color: '#4A5568' },
        { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
      ],
      features: [
        { icon: <FaUsers />, text: 'Control de roles (Admin, Recepción)' },
        { icon: <FaChartLine />, text: 'Gestión de ingresos y gastos' },
        { icon: <FaServer />, text: 'APIs RESTful seguras' },
        { icon: <FaCode />, text: 'Código modular y escalable' },
      ],
      challenges: [
        'Implementación de autenticación JWT segura',
        'Optimización de consultas a base de datos',
        'Control de permisos por roles',
        'Dashboard con métricas en tiempo real'
      ]
    },
  ];

  const currentProject = projects[activeProject];

  const handlePlayVideo = () => {
    setShowVideo(true);
    // Forzar recarga del iframe para iniciar video
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const src = iframe.src;
      iframe.src = src; // Recargar el iframe
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="experiencia" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black z-0" />
      
      {/* Efectos decorativos */}
      <div className="absolute top-1/4 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Experiencia y Proyectos
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Proyectos reales donde aplico mis habilidades como desarrollador Full Stack
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Columna izquierda - Video y detalles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Tarjeta del video */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl shadow-green-500/10 overflow-hidden"
            >
              {/* Encabezado del video */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20">
                  <FaVideo className="text-xl text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Demo del Proyecto</h3>
              </div>
              
              {/* Contenedor del video */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                {!showVideo ? (
                  // Thumbnail con botón de play
                  <div className="relative w-full h-full">
                    <img
                      src={currentProject.thumbnail}
                      alt={`Thumbnail de ${currentProject.title}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${currentProject.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <button
                        onClick={handlePlayVideo}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                          <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-cyan-600 flex items-center justify-center group-hover:from-green-500 group-hover:to-cyan-500 transition-all duration-300 group-hover:scale-110">
                            <FaPlay className="text-white text-2xl ml-1" />
                          </div>
                        </div>
                        <div className="mt-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Ver Demo
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  // Iframe del video de YouTube
                  <iframe
                    ref={iframeRef}
                    src={`https://www.youtube-nocookie.com/embed/${currentProject.youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&playsinline=1`}
                    title={`Demo de ${currentProject.title}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    frameBorder="0"
                    loading="lazy"
                  />
                )}
              </div>
              
              {/* Controles del video */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {showVideo ? (
                    <span className="text-green-400 text-sm flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Reproduciendo
                    </span>
                  ) : (
                    <button
                      onClick={handlePlayVideo}
                      className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <FaPlay className="text-sm" />
                      Reproducir video demo
                    </button>
                  )}
                </div>
                <a
                  href={`https://youtube.com/watch?v=${currentProject.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
                >
                  <FaYoutube className="text-base" />
                  Ver en YouTube
                </a>
              </div>
            </motion.div>

            {/* Descripción detallada */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl shadow-green-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <FaCode className="text-xl text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Sobre este proyecto</h3>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Sistema web desarrollado para <span className="text-green-400 font-semibold">Pro Athletic</span>, 
                diseñado para el control integral de operaciones comerciales. Incluye gestión de 
                <span className="text-cyan-300"> ingresos y gastos</span>, administración de 
                <span className="text-purple-300"> membresías mensuales</span>, y un sofisticado 
                <span className="text-yellow-300"> sistema de roles</span> con permisos específicos para administrador y recepción.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Características principales:</h4>
                  <ul className="space-y-2">
                    {currentProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="p-1 rounded bg-green-500/20 mt-1">
                          {feature.icon}
                        </div>
                        <span className="text-gray-300">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Desafíos superados:</h4>
                  <ul className="space-y-2">
                    {currentProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Tecnologías y más información */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Tarjeta de tecnologías */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl shadow-green-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <FaCode className="text-xl text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Stack Tecnológico</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {currentProject.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group relative"
                  >
                    <div 
                      className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      style={{ border: `1px solid ${tech.color}30` }}
                    >
                      <div 
                        className="text-2xl sm:text-3xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                    
                    {/* Efecto de brillo en hover */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                      style={{ 
                        backgroundColor: tech.color,
                        filter: 'blur(10px)'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Resumen técnico */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-3">Arquitectura Full Stack:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Frontend</span>
                    <span className="text-green-400 font-medium">React.js + Tailwind</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Backend</span>
                    <span className="text-blue-400 font-medium">Node.js + Express</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Base de datos</span>
                    <span className="text-cyan-400 font-medium">MySQL + Sequelize</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Autenticación</span>
                    <span className="text-yellow-400 font-medium">JWT + bcrypt</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta de características del proyecto */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl shadow-green-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
                  <FaServer className="text-xl text-orange-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Características Técnicas</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-green-400 font-semibold mb-1">✓ Seguridad avanzada</div>
                  <div className="text-sm text-gray-400">
                    Autenticación JWT, encriptación bcrypt, protección contra ataques comunes
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-blue-400 font-semibold mb-1">✓ API RESTful</div>
                  <div className="text-sm text-gray-400">
                    Endpoints bien estructurados, documentación completa, manejo de errores
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-purple-400 font-semibold mb-1">✓ Base de datos optimizada</div>
                  <div className="text-sm text-gray-400">
                    Consultas eficientes, relaciones complejas, migraciones, seeds
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-cyan-400 font-semibold mb-1">✓ UI/UX moderna</div>
                  <div className="text-sm text-gray-400">
                    Diseño responsive, interacciones fluidas, paleta de colores profesional
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Nota sobre privacidad */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl shadow-green-500/10"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20">
                  <FaLock className="text-xl text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Nota sobre el código</h4>
                  <p className="text-gray-400 text-sm">
                    Debido a acuerdos de confidencialidad con el cliente, el código fuente de este proyecto es privado. 
                    El video demostrativo muestra las funcionalidades principales y la experiencia de usuario.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Botón para más proyectos */}
            {projects.length > 1 && (
              <motion.div 
                variants={itemVariants}
                className="flex gap-3"
              >
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${activeProject === index
                      ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    Proyecto {index + 1}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  );
};

export default ExperienceSection;