import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPencilRuler, 
  FaLaptopCode, 
  FaWrench, 
  FaServer,
  FaMobileAlt,
  FaCode,
  FaPaintBrush,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';
import { MdWeb, MdSecurity, MdSpeed } from 'react-icons/md';
import { SiGooglesearchconsole } from 'react-icons/si';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showContactOptions, setShowContactOptions] = useState(false);

  const serviceCategories = [
    { id: 'all', label: 'Todos', icon: <FaCode />, color: 'from-cyan-500 to-blue-500' },
    { id: 'design', label: 'Diseño', icon: <FaPaintBrush />, color: 'from-purple-500 to-pink-500' },
    { id: 'development', label: 'Desarrollo', icon: <FaCode />, color: 'from-blue-500 to-cyan-500' },
    { id: 'maintenance', label: 'Mantenimiento', icon: <FaCogs />, color: 'from-green-500 to-emerald-500' },
    { id: 'optimization', label: 'Optimización', icon: <MdSpeed />, color: 'from-orange-500 to-yellow-500' },
  ];

  const services = [
    { 
      id: 1,
      icon: <FaPencilRuler />, 
      title: 'Diseño UX/UI', 
      description: 'Diseño de interfaces atractivas para usuarios en web y móvil, maximizando el valor de la marca o producto en el sitio web.',
      category: 'design',
      features: ['Diseño centrado en el usuario', 'Prototipado interactivo', 'Sistemas de diseño', 'Test de usabilidad'],
      color: '#8B5CF6'
    },
    { 
      id: 2,
      icon: <MdWeb />, 
      title: 'Desarrollo Web', 
      description: 'Creación de sitios web estructurados y responsivos, con una paleta de colores atractiva e interacciones satisfactorias.',
      category: 'development',
      features: ['Desarrollo Responsive', 'Optimización SEO', 'Accesibilidad web', 'Performance'],
      color: '#3B82F6'
    },
    { 
      id: 3,
      icon: <FaMobileAlt />, 
      title: 'Aplicaciones Móviles', 
      description: 'Desarrollo de aplicaciones móviles nativas y web progresivas (PWA) con experiencias fluidas y modernas.',
      category: 'development',
      features: ['PWA (Web Progresivas)', 'Apps responsive', 'Push notifications', 'Offline capabilities'],
      color: '#06B6D4'
    },
    { 
      id: 4,
      icon: <FaLaptopCode />, 
      title: 'Sistemas Web Personalizados', 
      description: 'Desarrollo de sistemas robustos y personalizados desde la web, adaptados a tus necesidades específicas.',
      category: 'development',
      features: ['Arquitectura escalable', 'Integraciones API', 'Panel de administración', 'Base de datos'],
      color: '#10B981'
    },
    { 
      id: 5,
      icon: <FaServer />, 
      title: 'Backend y API', 
      description: 'Desarrollo de backend y APIs con Node.js para aplicaciones web modernas y escalables.',
      category: 'development',
      features: ['RESTful APIs', 'Autenticación JWT', 'Base de datos', 'Microservicios'],
      color: '#059669'
    },
    { 
      id: 6,
      icon: <FaWrench />, 
      title: 'Mantenimiento Web', 
      description: 'Mantenimiento completo de sitios web: actualización de contenido, corrección de errores, diseño, nuevas funciones, etc.',
      category: 'maintenance',
      features: ['Updates de seguridad', 'Optimizaciones', 'Soporte técnico', 'Backups'],
      color: '#F59E0B'
    },
    { 
      id: 7,
      icon: <MdSecurity />, 
      title: 'Seguridad Web', 
      description: 'Implementación de medidas de seguridad avanzadas para proteger tus aplicaciones y datos sensibles.',
      category: 'maintenance',
      features: ['SSL/TLS', 'Firewalls', 'Auditorías', 'Protección DDoS'],
      color: '#EF4444'
    },
    { 
      id: 8,
      icon: <SiGooglesearchconsole />, 
      title: 'SEO y Analytics', 
      description: 'Optimización para motores de búsqueda y análisis de datos para mejorar el rendimiento de tu sitio.',
      category: 'optimization',
      features: ['Keyword research', 'Analytics', 'Meta optimización', 'Site speed'],
      color: '#8B5CF6'
    },
    { 
      id: 9,
      icon: <FaRocket />, 
      title: 'Optimización Performance', 
      description: 'Mejora la velocidad y rendimiento de tu aplicación web para mejores experiencias de usuario.',
      category: 'optimization',
      features: ['Lazy loading', 'Caching', 'Image optimization', 'Code splitting'],
      color: '#EC4899'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const shouldShowService = (service) => {
    return activeFilter === 'all' || service.category === activeFilter;
  };

  // Funciones para abrir redes sociales
  const openWhatsApp = () => {
    window.open('https://wa.me/5493863437447', '_blank', 'noopener,noreferrer');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/bravofernando_/', '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    window.location.href = 'mailto:fernando85238523@gmail.com';
  };

  return (
    <section id="servicios" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black z-0" />
      
      {/* Efectos decorativos */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel
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
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'}`}
              >
                {category.icon}
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid de servicios con AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {services.map((service) => (
              shouldShowService(service) && (
                <motion.div
                  key={service.id}
                  layout
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative"
                >
                  {/* Tarjeta de servicio */}
                  <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                    {/* Efecto de fondo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Encabezado con icono */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="flex items-center gap-4">
                        {/* Icono con efecto */}
                        <div 
                          className="relative p-3 sm:p-4 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                          style={{ 
                            backgroundColor: `${service.color}20`,
                            border: `1px solid ${service.color}30`
                          }}
                        >
                          <div 
                            className="text-2xl sm:text-3xl transition-transform duration-500"
                            style={{ color: service.color }}
                          >
                            {service.icon}
                          </div>
                          {/* Efecto de brillo */}
                          <div className="absolute inset-0 bg-current blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-lg sm:text-xl font-bold text-white flex-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features en lista */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-white text-sm font-semibold mb-2 sm:mb-3">Incluye:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: service.color }}
                            />
                            <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Badge de categoría */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        service.category === 'design' ? 'bg-purple-500/20 text-purple-300' :
                        service.category === 'development' ? 'bg-blue-500/20 text-blue-300' :
                        service.category === 'maintenance' ? 'bg-green-500/20 text-green-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {service.category === 'design' ? 'Diseño' :
                         service.category === 'development' ? 'Desarrollo' :
                         service.category === 'maintenance' ? 'Mantenimiento' : 'Optimización'}
                      </span>
                    </div>

                    {/* Botón de acción (solo en hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <button className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors">
                          Más detalles →
                        </button>
                        <button 
                          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          style={{ 
                            backgroundColor: `${service.color}20`,
                            color: service.color
                          }}
                        >
                          Solicitar
                        </button>
                      </div>
                    </div>

                    {/* Indicador de hover */}
                    {hoveredService === service.id && (
                      <motion.div
                        layoutId="serviceIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                        style={{ backgroundColor: service.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </div>

                  {/* Efecto de sombra en hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ 
                      boxShadow: `0 20px 60px ${service.color}40`,
                      background: service.color 
                    }}
                  />
                </motion.div>
              )
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mensaje cuando no hay servicios en la categoría */}
        {services.filter(service => shouldShowService(service)).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-2xl text-gray-400">No hay servicios en esta categoría</div>
          </motion.div>
        )}

        {/* Contador de servicios visibles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-400">
              Mostrando 
              <span className="text-white font-bold mx-1">
                {services.filter(service => shouldShowService(service)).length}
              </span>
              de {services.length} servicios
            </span>
          </div>
        </motion.div>

        {/* NUEVA SECCIÓN DE CONTACTO MODIFICADA */}
        {/* NUEVA SECCIÓN DE CONTACTO MODIFICADA - RESPONSIVE FIXED */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-12 sm:mt-16"
>
  <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl">
    <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
        ¿Listo para empezar tu proyecto?
      </h3>
      <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center">
        Contáctame para discutir tus ideas y crear algo increíble juntos.
      </p>
      
      <div className="relative">
        {/* Botón principal de Contacto */}
        <button
          onClick={() => setShowContactOptions(!showContactOptions)}
          className="group relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl overflow-hidden w-full mx-auto mb-3 sm:mb-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="relative text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2">
            <FaEnvelope className="text-lg sm:text-xl" />
            Contáctame
          </span>
        </button>

        {/* Opciones de contacto que aparecen al hacer clic */}
        <AnimatePresence>
          {showContactOptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {/* WhatsApp */}
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={openWhatsApp}
                  className="group relative p-3 sm:p-4 rounded-xl overflow-hidden bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-400/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                    <FaWhatsapp className="text-xl sm:text-2xl text-green-400 group-hover:text-white transition-colors" />
                    <span className="text-white font-medium text-xs sm:text-sm">WhatsApp</span>
                    <span className="text-gray-400 text-xs hidden sm:block">Respuesta rápida</span>
                  </div>
                </motion.button>

                {/* Instagram */}
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={openInstagram}
                  className="group relative p-3 sm:p-4 rounded-xl overflow-hidden bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 hover:border-pink-400/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                    <FaInstagram className="text-xl sm:text-2xl text-pink-400 group-hover:text-white transition-colors" />
                    <span className="text-white font-medium text-xs sm:text-sm">Instagram</span>
                    <span className="text-gray-400 text-xs hidden sm:block">Mensaje directo</span>
                  </div>
                </motion.button>

                {/* Email - Ocupa toda la fila en móvil, 2 columnas en desktop */}
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={openEmail}
                  className="group relative p-3 sm:p-4 rounded-xl overflow-hidden bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:border-blue-400/50 transition-all col-span-1 sm:col-span-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                    <FaEnvelope className="text-xl sm:text-2xl text-blue-400 group-hover:text-white transition-colors" />
                    <div className="text-center sm:text-left">
                      <div className="text-white font-medium text-sm sm:text-base">Enviar Email</div>
                      <div className="text-gray-400 text-xs sm:text-sm break-all">fernando85238523@gmail.com</div>
                    </div>
                  </div>
                </motion.button>
              </div>
              
              {/* Indicador de cierre */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setShowContactOptions(false)}
                className="mt-3 sm:mt-4 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm w-full text-center"
              >
                Cerrar opciones
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Métodos de contacto alternativos */}
        {!showContactOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6"
          >
            <button
              onClick={openWhatsApp}
              className="group flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-all text-xs sm:text-sm"
            >
              <FaWhatsapp className="text-green-400 group-hover:text-green-300 text-sm sm:text-base" />
              <span className="text-gray-300">WhatsApp</span>
            </button>
            <button
              onClick={openInstagram}
              className="group flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 transition-all text-xs sm:text-sm"
            >
              <FaInstagram className="text-pink-400 group-hover:text-pink-300 text-sm sm:text-base" />
              <span className="text-gray-300">Instagram</span>
            </button>
            <button
              onClick={openEmail}
              className="group flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all text-xs sm:text-sm"
            >
              <FaEnvelope className="text-blue-400 group-hover:text-blue-300 text-sm sm:text-base" />
              <span className="text-gray-300">Email</span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Horario de disponibilidad */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
        <div className="text-xs sm:text-sm text-gray-400 text-center">
          <span className="text-green-400">●</span> Disponible full time
        </div>
      </div>
    </div>
  </div>
</motion.div>

        
      </div>
    </section>
  );
};

export default ServicesSection;