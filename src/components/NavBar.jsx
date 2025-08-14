import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// A simple, modern SVG logo component
const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
    <path d="M11 11L16 21L21 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6"/>
        <stop offset="1" stopColor="#6366f1"/>
      </linearGradient>
    </defs>
  </svg>
);


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to get the current URL path

  // Effect to handle navbar style changes on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close the mobile menu automatically on route change
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
    { name: 'Bash', href: '/bash-commands', icon: '💻' },
    { name: 'vi', href: '/vi', icon: '🦟' },
    { name: 'Apache NiFi', href: '/nifi', icon: '⚡️' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-slate-300/10 shadow-lg'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Logo />
            <span className="dark text-xl font-bold text-dark group-hover:text-slate-300 transition-colors duration-300">
              Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:ml-10 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-slate-700/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  {/* Animated underline for active link */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 transition-all duration-300 rounded-full ${
                      isActive ? 'w-1/2' : 'w-0'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right side: CTA and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Desktop CTA */}
            <Link
              to="/"
              className="hidden lg:block ml-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-px"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="lg:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-between items-center">
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span
                    className={`block w-full h-0.5 bg-current transition duration-150 ease-in-out ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-slate-900/95 mx-2 rounded-lg border border-slate-300/10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 w-full px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
          {/* Mobile CTA */}
          <div className="pt-4 mt-2 border-t border-slate-700">
             <Link
              to="/get-started"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;