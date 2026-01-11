import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaCode,
  FaEye,
  FaStar,
  FaServer,
  FaDesktop,
  FaGlobe
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTailwindcss, SiMysql, SiJavascript, SiExpress } from 'react-icons/si';
import img from '../img/img';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { 
      id: 1,
      image: img.diseñoX, 
      title: 'Interfaz De X', 
      description: 'En este Proyecto afianzaba mis conocimientos copiando un diseño de la plataforma X.',
      github: 'https://github.com/Bravo938/interfaz-de-X.git', 
      demo: 'https://bravo938.github.io/interfaz-de-X/',
      technologies: [
        { icon: <SiReact />, name: 'React', color: '#61DAFB' },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
        { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' }
      ],
      category: 'frontend',
      features: ['Diseño responsivo', 'Clone UI moderna', 'Interacciones fluidas'],
      status: 'Completado'
    },
    { 
      id: 2,
      image: img.tateti, 
      title: 'Tateti', 
      description: 'Desarrollo del famoso Juego TATETI, practicas para mejorar y comprender los hook.',
      github: 'https://github.com/Bravo938/tateti.git', 
      demo: 'https://bravo938.github.io/tateti/',
      technologies: [
        { icon: <SiReact />, name: 'React', color: '#61DAFB' },
        { icon: <FaCode />, name: 'Hooks', color: '#8B5CF6' },
        { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' }
      ],
      category: 'games',
      features: ['Modo 2 jugadores', 'Sistema de turnos', 'Contador de victorias'],
      status: 'Completado'
    },
    { 
      id: 3,
      image: img.demoRdv, 
      title: 'Sitio Web Rios De Vida', 
      description: 'Desarrollo de Pagina Real Para una Iglesia Evangelica, Con un sistema para el manejo de roles y grupos pequeños.',
      github: 'https://github.com/Bravo938/RiosDeVida.pages', 
      demo: 'https://bravo938.github.io/RiosDeVida.pages/',
      technologies: [
        { icon: <SiReact />, name: 'React', color: '#61DAFB' },
        { icon: <SiNodedotjs />, name: 'Node.js', color: '#8CC84B' },
        { icon: <SiMysql />, name: 'MySQL', color: '#00758F' },
        { icon: <SiExpress />, name: 'Express', color: '#000000' }
      ],
      category: 'fullstack',
      features: ['Sistema de roles', 'Panel de admin', 'Gestión de grupos'],
      status: 'En desarrollo'
    },
    { 
      id: 4,
      image: img.potenciaTuLuz, 
      title: 'Menu de Bar para Congreso Potencia Tu Luz', 
      description: 'Este proyecto fue realizado para un congreso de jóvenes, donde se desarrollo un menú de bar para el evento.',
      github: 'https://github.com/Bravo938/potencia-tu-luz', 
      demo: 'https://bravo938.github.io/potencia-tu-luz/',
      technologies: [
        { icon: <SiReact />, name: 'React', color: '#61DAFB' },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
        { icon: <FaServer />, name: 'API', color: '#10B981' }
      ],
      category: 'frontend',
      features: ['Menú interactivo', 'Sistema de pedidos', 'Admin en tiempo real'],
      status: 'Completado'
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: <FaGlobe />, color: 'from-cyan-500 to-blue-500', count: projects.length },
    { id: 'frontend', label: 'Frontend', icon: <FaDesktop />, color: 'from-purple-500 to-pink-500', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', icon: <FaServer />, color: 'from-green-500 to-emerald-500', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'games', label: 'Juegos', icon: <FaStar />, color: 'from-orange-500 to-yellow-500', count: projects.filter(p => p.category === 'games').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="proyectos" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black z-0" />
      
      {/* Efectos decorativos */}
      <div className="absolute top-1/4 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Una colección de mis proyectos más recientes y desafiantes
          </p>
        </motion.div>

        {/* Filtro de categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 ${activeFilter === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'}`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">
                  {category.id === 'all' ? 'Todos' : 
                   category.id === 'frontend' ? 'FE' : 
                   category.id === 'fullstack' ? 'FS' : 'Juegos'}
                </span>
                <span className="text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid de proyectos con AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  {/* Tarjeta del proyecto con efecto LED */}
                  <div className="relative p-[2px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden neon-border">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Contenido interno */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden h-full">
                      {/* Imagen del proyecto */}
                      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay de la imagen */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center">
                            <div className="flex items-center gap-1 sm:gap-2">
                              {project.technologies.slice(0, 2).map((tech, index) => (
                                <div
                                  key={index}
                                  className="p-1 sm:p-1.5 rounded-lg bg-black/60 backdrop-blur-sm"
                                  style={{ color: tech.color }}
                                >
                                  <div className="text-xs sm:text-sm">{tech.icon}</div>
                                </div>
                              ))}
                              {project.technologies.length > 2 && (
                                <div className="p-1 sm:p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-gray-300 text-xs">
                                  +{project.technologies.length - 2}
                                </div>
                              )}
                            </div>
                            
                            {/* Badge de estado */}
                            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                              project.status === 'Completado' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Contenido del proyecto */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-1">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Features del proyecto */}
                        <div className="mb-3 sm:mb-4">
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.features.slice(0, 2).map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 sm:px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10 line-clamp-1"
                              >
                                {feature}
                              </span>
                            ))}
                            {project.features.length > 2 && (
                              <span className="px-2 sm:px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10">
                                +{project.features.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Links y acciones - RESPONSIVE MEJORADO */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 pt-3 sm:pt-4 border-t border-white/10">
                          <div className="flex gap-2 w-full sm:w-auto">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 group/link text-sm"
                            >
                              <FaGithub className="text-xs sm:text-sm group-hover/link:text-purple-400 transition-colors" />
                              <span className="font-medium">Código</span>
                            </motion.a>
                            
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white transition-all duration-300 group/link text-sm"
                            >
                              <FaExternalLinkAlt className="text-xs sm:text-sm" />
                              <span className="font-medium">Demo</span>
                            </motion.a>
                          </div>
                          
                          {/* Vista previa en hover - RESPONSIVE FIXED */}
                          {hoveredProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="hidden sm:flex items-center gap-1 text-xs text-cyan-400"
                            >
                              <FaEye className="text-xs" />
                              <span className="whitespace-nowrap">Vista previa</span>
                            </motion.div>
                          )}
                        </div>

                        {/* Vista previa para móvil - Versión simplificada */}
                        {hoveredProject === project.id && (
                          <div className="sm:hidden mt-2 text-center">
                            <div className="text-xs text-cyan-400 flex items-center justify-center gap-1">
                              <FaEye className="text-xs" />
                              <span>Vista previa activa</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Efecto LED adicional en hover */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                  </div>

                  {/* Efecto de sombra en hover */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ 
                      boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                    }}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 text-center py-8 sm:py-12"
              >
                <div className="inline-block p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 max-w-md">
                  <FaDesktop className="text-3xl sm:text-4xl text-gray-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl text-gray-400 mb-2">No hay proyectos en esta categoría</h3>
                  <p className="text-gray-500 text-sm sm:text-base mb-4">Prueba con otra categoría</p>
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="px-5 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 transition-all text-sm sm:text-base"
                  >
                    Ver todos los proyectos
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Contador de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-xs sm:text-sm text-gray-400">
              Mostrando 
              <span className="text-white font-bold mx-1">
                {filteredProjects.length}
              </span>
              de {projects.length} proyectos
            </span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="inline-block p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10 max-w-2xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              ¿Quieres ver más proyectos?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">
              Visita mi perfil de GitHub para explorar todos mis proyectos y contribuciones.
            </p>
            <a
              href="https://github.com/Bravo938"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="relative px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <FaGithub className="text-lg sm:text-xl text-white" />
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg">Ver en GitHub</span>
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Sección de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 neon-border-simple">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{projects.length}</div>
              <div className="text-xs sm:text-sm text-gray-400">Proyectos Totales</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-white/10 neon-border-simple">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{projects.filter(p => p.status === 'Completado').length}</div>
              <div className="text-xs sm:text-sm text-gray-400">Completados</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 neon-border-simple">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">4+</div>
              <div className="text-xs sm:text-sm text-gray-400">Tecnologías</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 neon-border-simple">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Código Abierto</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;