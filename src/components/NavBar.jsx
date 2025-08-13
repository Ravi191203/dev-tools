import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'JMeter', href: '/jmeter', icon: '🧪' },
    { name: 'Selenium', href: '/selenium', icon: '🤖' },
    { name: 'SonarQube', href: '/sonarqube', icon: '📊' },
    { name: 'Docker', href: '/docker', icon: '🐳' },
    { name: 'Git & GitHub', href: '/git-github', icon: '🔧' },
    { name: 'Kubernetes', href: '/kubernetes', icon: '☸️' },
    { name: 'Bash', href: '/bash-commands', icon: '💻' }
  ];

  const handleNavClick = (href) => {
    console.log(`Navigating to: ${href}`);
    // In a real app, you would use router navigation here
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white border-b border-gray-200 shadow-sm' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => handleNavClick('/')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              DT
            </div>
            <span className="text-xl font-bold text-gray-900">
              Dev-Tools
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium"
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Get Started Button - Desktop */}
          <button
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
            onClick={() => handleNavClick('/get-started')}
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
              <span
                className={`block w-4 h-0.5 bg-current transition-all duration-200 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-current transition-all duration-200 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-current transition-all duration-200 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    className="w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium text-left"
                    onClick={() => handleNavClick(item.href)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                onClick={() => handleNavClick('/get-started')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;