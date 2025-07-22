import React, { useState, useEffect } from 'react';

const tools = [
  {
    title: 'JMeter',
    description: 'Learn how to perform performance testing using Apache JMeter with examples and step-by-step guides.',
    link: '/jmeter',
    icon: '🧪',
    bgColor: 'bg-indigo-600',
    hoverColor: 'hover:bg-indigo-700',
    borderColor: 'border-indigo-500'
  },
  {
    title: 'Selenium',
    description: 'Explore Selenium for automation testing with practical tutorials, code snippets, and tips.',
    link: '/selenium',
    icon: '🤖',
    bgColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    borderColor: 'border-green-500'
  },
  {
    title: 'SonarQube',
    description: 'Understand code quality analysis with SonarQube, including setup, integration, and CI/CD.',
    link: '/sonarqube',
    icon: '📊',
    bgColor: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
    borderColor: 'border-red-500'
  },
  {
    title: 'Docker',
    description: 'Learn containerization with Docker, including image creation, Dockerfiles, and running containers.',
    link: '/docker',
    icon: '🐳',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    borderColor: 'border-blue-500'
  },
  {
    title: 'Git & GitHub',
    description: 'Master version control with Git and collaboration through GitHub, including branching, PRs, and workflow.',
    link: '/git-github',
    icon: '🔧',
    bgColor: 'bg-gray-600',
    hoverColor: 'hover:bg-gray-700',
    borderColor: 'border-gray-500'
  },
  {
    title: 'Kubernetes',
    description: 'Orchestrate containers at scale using Kubernetes with deployment, scaling, and management tips.',
    link: '/kubernetes',
    icon: '☸️',
    bgColor: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700',
    borderColor: 'border-pink-500'
  },
  {
    title: 'Bash Commands',
    description: 'Essential Bash commands cheat sheet with syntax highlighting and practical usage examples.',
    link: '/bash-commands',
    icon: '💻',
    bgColor: 'bg-yellow-600',
    hoverColor: 'hover:bg-yellow-700',
    borderColor: 'border-yellow-500'
  },
];

const FloatingElement = ({ className, children, delay = 0 }) => {
  return (
    <div 
      className={`absolute opacity-20 animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="top-20 left-10 text-6xl" delay={0}>⚡</FloatingElement>
        <FloatingElement className="top-40 right-20 text-8xl" delay={1}>🚀</FloatingElement>
        <FloatingElement className="bottom-32 left-1/4 text-7xl" delay={2}>✨</FloatingElement>
        <FloatingElement className="top-1/3 left-1/2 text-5xl" delay={3}>⭐</FloatingElement>
        <FloatingElement className="bottom-20 right-10 text-6xl" delay={4}>🌟</FloatingElement>
      </div>

      <div className="relative z-10 min-h-screen py-16 px-4">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full border border-gray-600 text-gray-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Developer Tools & Tutorials
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="block text-indigo-400">Dev-Tools</span>
              <span className="block text-5xl md:text-6xl text-blue-400">
                Mastery Hub
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master modern development tools with interactive tutorials, real-world examples, and expert insights. 
              <span className="text-indigo-400 font-semibold"> Elevate your DevOps game.</span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { number: '7', label: 'Tools Covered' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gray-800 px-6 py-4 rounded-lg border border-gray-700">
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
              className="group relative transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`relative h-full bg-gray-800 rounded-2xl border-2 ${tool.borderColor} p-8 transition-all duration-300 hover:bg-gray-750 hover:shadow-2xl`}>
                
                {/* Icon with colored background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${tool.bgColor} rounded-xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {tool.icon}
                  </div>
                  <div className={`w-16 h-1 ${tool.bgColor} rounded-full opacity-60`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {tool.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tool.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`w-full ${tool.bgColor} ${tool.hoverColor} text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95`}>
                    <span className="flex items-center justify-center gap-2">
                      Explore {tool.title}
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                </div>

                {/* Glowing effect on hover */}
                <div className={`absolute inset-0 rounded-2xl ${tool.bgColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="bg-gray-800 border-2 border-indigo-500 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers mastering these essential tools
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;