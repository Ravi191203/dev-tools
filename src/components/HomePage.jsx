import React, { useState, useEffect } from 'react';

const tools = [
  {
    title: 'JMeter',
    description: 'Learn how to perform performance testing using Apache JMeter with examples and step-by-step guides.',
    link: '/jmeter',
    icon: '🧪',
    gradient: 'from-purple-500 via-purple-600 to-indigo-700',
    color: 'purple'
  },
  {
    title: 'Selenium',
    description: 'Explore Selenium for automation testing with practical tutorials, code snippets, and tips.',
    link: '/selenium',
    icon: '🤖',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    color: 'emerald'
  },
  {
    title: 'SonarQube',
    description: 'Understand code quality analysis with SonarQube, including setup, integration, and CI/CD.',
    link: '/sonarqube',
    icon: '📊',
    gradient: 'from-orange-500 via-red-600 to-pink-700',
    color: 'orange'
  },
  {
    title: 'Docker',
    description: 'Learn containerization with Docker, including image creation, Dockerfiles, and running containers.',
    link: '/docker',
    icon: '🐳',
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    color: 'blue'
  },
  {
    title: 'Git & GitHub',
    description: 'Master version control with Git and collaboration through GitHub, including branching, PRs, and workflow.',
    link: '/git-github',
    icon: '🔧',
    gradient: 'from-gray-600 via-gray-700 to-gray-900',
    color: 'gray'
  },
  {
    title: 'Kubernetes',
    description: 'Orchestrate containers at scale using Kubernetes with deployment, scaling, and management tips.',
    link: '/kubernetes',
    icon: '☸️',
    gradient: 'from-violet-500 via-purple-600 to-purple-700',
    color: 'violet'
  },
  {
    title: 'Bash Commands',
    description: 'Essential Bash commands cheat sheet with syntax highlighting and practical usage examples.',
    link: '/bash-commands',
    icon: '💻',
    gradient: 'from-green-500 via-emerald-600 to-teal-700',
    color: 'green'
  },
];

const FloatingElement = ({ className, children, delay = 0 }) => {
  return (
    <div 
      className={`absolute opacity-10 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '4s'
      }}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="top-20 left-10 text-6xl" delay={0}>⚡</FloatingElement>
        <FloatingElement className="top-40 right-20 text-8xl" delay={1}>🚀</FloatingElement>
        <FloatingElement className="bottom-32 left-1/4 text-7xl" delay={2}>✨</FloatingElement>
        <FloatingElement className="top-1/3 left-1/2 text-5xl" delay={3}>⭐</FloatingElement>
        <FloatingElement className="bottom-20 right-10 text-6xl" delay={4}>🌟</FloatingElement>
      </div>

      {/* Dynamic cursor effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="relative z-10 min-h-screen py-16 px-4">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Developer Tools & Tutorials
            </div>
            
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-6 leading-tight">
              Dev-Tools
              <span className="block text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text">
                Mastery Hub
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master modern development tools with interactive tutorials, real-world examples, and expert insights. 
              <span className="text-purple-300 font-semibold"> Elevate your DevOps game.</span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { number: '7', label: 'Tools Covered' },
              { number: '50+', label: 'Tutorials' },
              { number: '1000+', label: 'Code Examples' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <div className={`w-16 h-1 bg-gradient-to-r ${tool.gradient} rounded-full opacity-60`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {tool.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tool.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`w-full relative overflow-hidden bg-gradient-to-r ${tool.gradient} text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 group-hover:shadow-${tool.color}-500/25`}>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Explore {tool.title}
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers mastering these essential tools
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;