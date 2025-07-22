import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'JMeter', href: '/jmeter', icon: '🧪', gradient: 'from-purple-500 to-indigo-600' },
    { name: 'Selenium', href: '/selenium', icon: '🤖', gradient: 'from-emerald-500 to-green-600' },
    { name: 'SonarQube', href: '/sonarqube', icon: '📊', gradient: 'from-red-500 to-pink-600' },
    { name: 'Docker', href: '/docker', icon: '🐳', gradient: 'from-blue-500 to-cyan-600' },
    { name: 'Git & GitHub', href: '/git-github', icon: '🔧', gradient: 'from-gray-500 to-slate-600' },
    { name: 'Kubernetes', href: '/kubernetes', icon: '☸️', gradient: 'from-pink-500 to-rose-600' },
    { name: 'Bash', href: '/bash-commands', icon: '💻', gradient: 'from-yellow-500 to-orange-600' }
  ];

  const handleNavClick = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(255, 255, 255, 0.10)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="group cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                🚀
              </div>
              <span
                className="text-2xl font-black text-white group-hover:opacity-80 transition-all duration-300"
                style={{
                  background: scrolled
                    ? 'linear-gradient(135deg, #a855f7, #ec4899)'
                    : 'white',
                  WebkitBackgroundClip: scrolled ? 'text' : 'initial',
                  WebkitTextFillColor: scrolled ? 'transparent' : 'white',
                  backgroundClip: scrolled ? 'text' : 'initial'
                }}
              >
                Dev-Tools
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <div
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:text-white transition-all duration-300 relative overflow-hidden cursor-pointer border border-transparent hover:border-white/20"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.backdropFilter = 'blur(20px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.backdropFilter = 'none';
                  }}
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {item.name}
                  </span>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
                  ></div>
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div
            className="rounded-2xl border p-4 shadow-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:text-white transition-all duration-300 group cursor-pointer border border-transparent"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : ''
                    }}
                    onClick={() => handleNavClick(item.href)}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.borderColor = 'transparent';
                    }}
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
              <button
                className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  backdropFilter: 'blur(10px)'
                }}
                onClick={() => handleNavClick('/get-started')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
