import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/img.js';
import '../Style/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className='contenido'>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="container">
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleMenu}
              aria-controls="navbar-toggler" 
              aria-expanded={menuOpen} 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbar-toggler">
              {!isLoginPage && (
                <a className="navbar-brand nav-link active text-white fw-bold fs-4" href="#Inicio">
                  Frnando Bravo
                </a>
              )}
              <ul className="navbar-nav d-flex justify-content-center align-items-center ">
                {!isLoginPage && (
                  <>
                    <li className="nav-item ">
                      <a className="nav-link active text-white  fw-bold fs-4" href="#Programas" onClick={closeMenu}>Programas</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white  fw-bold fs-4" href="#Staff" onClick={closeMenu}>Staff</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white  fw-bold fs-4" href="#contacto" onClick={closeMenu}>Contacto</a>
                    </li>
                  </>
                )}
                {isLoginPage ? (
                  <li className="nav-item">
                    <Link className="nav-link text-white  fw-bold fs-4" to="/" onClick={closeMenu}>Inicio</Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link text-white  fw-bold fs-4" to="/login" onClick={closeMenu}>Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
