import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaReact, FaNodeJs, FaDownload, FaUserGraduate,
  FaMapMarkerAlt, FaEnvelope, FaBirthdayCake,
  FaServer, FaDatabase, FaTools
} from 'react-icons/fa';
import Cv from '../CvCursos/Fernando Bravo Full Stackk.pdf';
import { 
  SiVisualstudiocode, SiGit, SiFigma, SiMysql, 
  SiDotnet, SiCsharp, SiSequelize, SiExpress,
  SiTailwindcss, SiBootstrap
} from 'react-icons/si';
import { GiGraduateCap } from 'react-icons/gi';

const SobreMi = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const personalInfo = [
    { 
      icon: <FaBirthdayCake />, 
      label: 'Edad', 
      value: '27',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      value: 'fernando85238523@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      label: 'Ubicación', 
      value: 'Tucumán, Argentina',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <FaUserGraduate />, 
      label: 'Título', 
      value: 'Tec. Universitario en Programación',
      color: 'from-orange-500 to-yellow-500'
    },
  ];

  const skillsByCategory = {
    frontend: [
      { icon: <FaHtml5 />, name: 'HTML5', category: 'frontend', color: '#E34F26', experience: 'Avanzado' },
      { icon: <FaCss3Alt />, name: 'CSS3', category: 'frontend', color: '#1572B6', experience: 'Avanzado' },
      { icon: <FaJsSquare />, name: 'JavaScript', category: 'frontend', color: '#F7DF1E', experience: 'Intermedio-Avanzado' },
      { icon: <FaReact />, name: 'React', category: 'frontend', color: '#61DAFB', experience: 'Intermedio-Avanzado' },
      { icon: <SiTailwindcss />, name: 'Tailwind', category: 'frontend', color: '#06B6D4', experience: 'Avanzado' },
      { icon: <SiBootstrap />, name: 'Bootstrap', category: 'frontend', color: '#7952B3', experience: 'Intermedio' },
    ],
    backend: [
      { icon: <FaNodeJs />, name: 'Node.js', category: 'backend', color: '#8CC84B', experience: 'Intermedio' },
      { icon: <SiExpress />, name: 'Express', category: 'backend', color: '#000000', experience: 'Intermedio' },
      { icon: <SiDotnet />, name: '.NET', category: 'backend', color: '#512BD4', experience: 'Intermedio' },
      { icon: <SiCsharp />, name: 'C#', category: 'backend', color: '#68217A', experience: 'Intermedio' },
    ],
    database: [
      { icon: <SiMysql />, name: 'MySQL', category: 'database', color: '#00758F', experience: 'Intermedio-Avanzado' },
      { icon: <SiSequelize />, name: 'Sequelize', category: 'database', color: '#52B0E3', experience: 'Intermedio' },
    ],
    tools: [
      { icon: <SiGit />, name: 'Git', category: 'tools', color: '#F05032', experience: 'Avanzado' },
      { icon: <FaGithub />, name: 'GitHub', category: 'tools', color: '#333', experience: 'Avanzado' },
      { icon: <SiVisualstudiocode />, name: 'VS Code', category: 'tools', color: '#007ACC', experience: 'Avanzado' },
      { icon: <SiFigma />, name: 'Figma', category: 'tools', color: '#F24E1E', experience: 'Básico-Intermedio' },
    ]
  };

  const allSkills = [...skillsByCategory.frontend, ...skillsByCategory.backend, ...skillsByCategory.database, ...skillsByCategory.tools];
  
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : skillsByCategory[activeCategory];

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
    <section id="sobre-mi" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black z-0" />
      
      {/* Efectos decorativos */}
      <div className="absolute top-1/4 right-4 sm:right-10 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-4 sm:left-10 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Columna izquierda - Información personal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Tarjeta de presentación */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl sm:shadow-2xl shadow-blue-500/10"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex-shrink-0">
                  <GiGraduateCap className="text-2xl sm:text-3xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Desarrollador Full Stack</h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Apasionado por crear soluciones web innovadoras y escalables
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Soy un desarrollador Full Stack especializado en tecnologías modernas como{' '}
                  <span className="text-cyan-300 font-semibold">React</span>,{' '}
                  <span className="text-green-400 font-semibold">Node.js</span>, y{' '}
                  <span className="text-blue-400 font-semibold">.NET</span>. 
                  Me gradué como <span className="font-semibold text-white">Técnico Universitario en Programación</span> 
                  en la Universidad Tecnológica Nacional de Tucumán.
                </p>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Me encanta trabajar en proyectos desafiantes, desde el diseño de interfaces 
                  hasta la implementación de APIs robustas. Siempre estoy aprendiendo nuevas 
                  tecnologías para mejorar mis habilidades y ofrecer soluciones de calidad.
                </p>
              </div>
            </motion.div>

            {/* Info personal en grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <div className="text-white text-lg sm:text-xl">{info.icon}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-gray-400 truncate">{info.label}</div>
                    <div className="text-white font-medium text-sm sm:text-base truncate">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Botón Descargar CV */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => window.open(Cv, '_blank')}
                className="group relative w-full overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-8 sm:py-4">
                  <FaDownload className="text-lg sm:text-xl text-white" />
                  <span className="text-white font-bold text-base sm:text-lg">Descargar CV</span>
                </div>
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-xl group-hover:shadow-cyan-500/40 -z-10" />
              </button>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Filtro de categorías */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 shadow-xl sm:shadow-2xl shadow-blue-500/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Mis Tecnologías</h3>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${activeCategory === 'all' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  Todas
                </button>
                <button
                  onClick={() => setActiveCategory('frontend')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${activeCategory === 'frontend' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-2">
                    <FaReact className="text-sm" />
                    <span>Frontend</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveCategory('backend')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${activeCategory === 'backend' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-2">
                    <FaServer className="text-sm" />
                    <span>Backend</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveCategory('database')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${activeCategory === 'database' 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-2">
                    <FaDatabase className="text-sm" />
                    <span>Database</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveCategory('tools')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${activeCategory === 'tools' 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-2">
                    <FaTools className="text-sm" />
                    <span>Herramientas</span>
                  </div>
                </button>
              </div>

              {/* Grid de Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
                      {/* Icono con efecto brillo */}
                      <div className="relative mb-2 sm:mb-3">
                        <div 
                          className="text-3xl sm:text-4xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        {/* Efecto de brillo en hover */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 bg-current blur-xl opacity-30"
                          />
                        )}
                      </div>
                      
                      {/* Nombre */}
                      <span className="text-xs sm:text-sm font-medium text-gray-300 text-center mb-1 group-hover:text-white transition-colors line-clamp-1">
                        {skill.name}
                      </span>
                      
                      {/* Categoría tag */}
                      <div className={`text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium ${
                        skill.category === 'frontend' ? 'bg-purple-500/20 text-purple-300' :
                        skill.category === 'backend' ? 'bg-green-500/20 text-green-300' :
                        skill.category === 'database' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {skill.category === 'frontend' ? 'Frontend' :
                         skill.category === 'backend' ? 'Backend' :
                         skill.category === 'database' ? 'Database' : 'Herramienta'}
                      </div>
                      
                      {/* Experiencia aparece en hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap"
                        >
                          <div className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2 shadow-xl">
                            <div className="text-xs font-bold text-white">{skill.experience}</div>
                            <div className="w-full h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
                              <div 
                                className="h-full rounded-full"
                                style={{ 
                                  backgroundColor: skill.color,
                                  width: skill.experience.includes('Avanzado') ? '90%' :
                                         skill.experience.includes('Intermedio-Avanzado') ? '80%' :
                                         skill.experience.includes('Intermedio') ? '70%' : '60%'
                                }}
                              />
                            </div>
                          </div>
                          {/* Triángulo */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 border-r border-b border-white/10 rotate-45" />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Efecto de borde en hover */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-30 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
              
              {/* Contador */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {filteredSkills.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {activeCategory === 'all' ? 'Tecnologías totales' : 
                     activeCategory === 'frontend' ? 'Tecnologías Frontend' :
                     activeCategory === 'backend' ? 'Tecnologías Backend' :
                     activeCategory === 'database' ? 'Tecnologías Database' : 'Herramientas'}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Frase inspiradora */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 shadow-xl sm:shadow-2xl shadow-blue-500/10"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl text-gray-300 italic mb-2 sm:mb-3">
                  "Si lo puedes imaginar, lo puedes programar"
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  - Alejandro Taboada - Programación ATS
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Sección de educación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl sm:shadow-2xl shadow-blue-500/10">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                <GiGraduateCap className="text-2xl sm:text-3xl text-green-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Formación Académica</h3>
                <p className="text-gray-400 text-base sm:text-lg">Universidad Tecnológica Nacional - Facultad Regional de Tucumán</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-lg font-semibold text-white mb-2">Tecnicatura Universitaria en Programación</div>
                <div className="text-sm text-gray-400">2021 - 2023</div>
                <div className="text-sm text-gray-300 mt-2">Formación completa en desarrollo de software y algoritmos</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-lg font-semibold text-white mb-2">Especialización Full Stack</div>
                <div className="text-sm text-gray-400">Cursos continuos</div>
                <div className="text-sm text-gray-300 mt-2">Actualización constante en las últimas tecnologías web</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreMi;