import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, Terminal, User, Briefcase, Layers, Mail } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = ['inicio', 'sobre-mi', 'servicios', 'experiencia', 'proyectos', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Items del menú
  const navItems = [
    { id: 'sobre-mi', label: 'Sobre Mi', icon: <User size={18} /> },
    { id: 'servicios', label: 'Servicios', icon: <Layers size={18} /> },
    { id: 'experiencia', label: 'Experiencia', icon: <Briefcase size={18} /> },
    { id: 'proyectos', label: 'Proyectos', icon: <Code2 size={18} /> },
  ];

  // Función para scroll suave
  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isLoginPage) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo con efecto neón */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 cursor-pointer group relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative px-5 py-2.5 bg-gray-900 rounded-xl border border-white/10">
                <span className="bg-gradient-to-r from-blue-400 via-white to-cyan-300 bg-clip-text text-transparent text-xl font-bold tracking-tighter">
                  {"<FB/>"}
                </span>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-lg tracking-tight">Fernando Bravo</span>
              <div className="flex items-center gap-1 mt-1">
                <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <div className="h-1 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="h-1 w-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>
            
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="text-cyan-400"
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className={`transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </div>
                
                <span className="font-medium tracking-tight">{item.label}</span>
                
                {/* Indicador activo */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  />
                )}
                
                {/* Efecto hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                {/* Efecto brillo */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-blue-500/0 blur opacity-0 group-hover:opacity-100 transition-opacity -z-20"></div>
              </motion.button>
            ))}
            
            {/* Botón Contacto especial */}
            <motion.button
              onClick={() => scrollToSection('contacto')}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 relative px-6 py-2.5 rounded-xl overflow-hidden group"
            >
              {/* Fondo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-cyan-500 transition-all duration-500"></div>
              
              {/* Efecto de luz */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Contenido */}
              <div className="relative flex items-center gap-2">
                <Mail size={18} />
                <span className="font-semibold text-white tracking-tight">Contacto</span>
              </div>
              
              {/* Sombra */}
              <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all -z-10"></div>
            </motion.button>
          </nav>

          {/* Botón Menú Móvil */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-3 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-white/10 text-white hover:bg-gray-700/80 transition-all duration-300 relative group"
            aria-label="Toggle menu"
          >
            {/* Efecto de borde animado */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>
            
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <motion.div 
                className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl shadow-blue-500/20"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative px-4 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <motion.div
                        animate={activeSection === item.id ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30'
                            : 'bg-gray-800'
                        }`}
                      >
                        {item.icon}
                      </motion.div>
                      
                      <span className="font-medium flex-1 text-left">{item.label}</span>
                      
                      {activeSection === item.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      )}
                      
                      {/* Efecto hover móvil */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                    </motion.button>
                  ))}
                  
                  {/* Botón Contacto móvil */}
                  <motion.button
                    onClick={() => scrollToSection('contacto')}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="mt-2 relative px-4 py-4 rounded-xl overflow-hidden group"
                  >
                    {/* Fondo animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
                    
                    {/* Efecto de luz */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    {/* Contenido */}
                    <div className="relative flex items-center justify-center gap-3">
                      <Mail size={20} />
                      <span className="font-semibold text-white">Contacto</span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Efecto de partículas modernas */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 100,
            }}
            animate={{
              y: [null, -Math.random() * 50 - 30],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.header>
  );
}

export default Header;