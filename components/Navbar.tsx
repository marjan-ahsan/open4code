import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/explorer', label: 'Courses' },
  { path: '/about', label: 'About' },
  { path: '/changelog', label: 'Changelog' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-4 sm:px-6 bg-bg/80 backdrop-blur-xl border-b border-border animate-fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <button
            className="font-heading text-lg font-black tracking-tight text-text-primary hover:text-primary transition-colors"
            onClick={() => navigate('/')}
          >
            Open4Code
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${isActive(link.path)
                    ? 'text-text-primary bg-muted'
                    : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => navigate('/explorer')}
              className="hidden sm:block px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Explore
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-text-secondary"
              aria-label="Close Menu"
            >
              <FaTimes className="text-xl" />
            </button>
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-2xl font-heading font-bold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-text-primary hover:text-primary'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <a href="mailto:atlanticweb000@gmail.com" className="text-2xl font-heading font-bold text-text-primary hover:text-primary transition-colors">
              Contact
            </a>
            <button
              onClick={() => handleNav('/explorer')}
              className="mt-4 px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors"
            >
              Start Learning
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;