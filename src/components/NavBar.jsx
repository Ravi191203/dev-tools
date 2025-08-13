import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to get the current path

  // Effect to handle scroll-based UI changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'JMeter', href: '/jmeter', icon: '🧪' },
    { name: 'Selenium', href: '/selenium', icon: '🤖' },
    { name: 'SonarQube', href: '/sonarqube', icon: '📊' },
    { name: 'Docker', href: '/docker', icon: '🐳' },
    { name: 'Git & GitHub', href: '/git-github', icon: '🔧' },
    { name: 'Kubernetes', href: '/kubernetes', icon: '☸️' },
    { name: 'Bash', href: '/bash-commands', icon: '💻' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/80 shadow-sm'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              DT
            </div>
            <span className="text-xl font-bold text-slate-800">Dev-Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Get Started Button - Desktop */}
          <Link
            to="/get-started"
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-between items-center">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-[5px]' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-[500px] opacity-100 mt-4 visible'
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="w-full flex items-center gap-3 px-3 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium text-left"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <Link
                to="/get-started"
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;