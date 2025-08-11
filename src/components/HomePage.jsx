// HomePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const tools = [
  {
    title: "JMeter",
    description:
      "Learn how to perform performance testing using Apache JMeter with examples and step-by-step guides.",
    link: "/jmeter",
    icon: "🧪",
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-600",
    shadowColor: "shadow-purple-500/25",
  },
  {
    title: "Selenium",
    description:
      "Explore Selenium for automation testing with practical tutorials, code snippets, and tips.",
    link: "/selenium",
    icon: "🤖",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-600",
    shadowColor: "shadow-emerald-500/25",
  },
  {
    title: "SonarQube",
    description:
      "Understand code quality analysis with SonarQube, including setup, integration, and CI/CD.",
    link: "/sonarqube",
    icon: "📊",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-600",
    shadowColor: "shadow-red-500/25",
  },
  {
    title: "Docker",
    description:
      "Learn containerization with Docker, including image creation, Dockerfiles, and running containers.",
    link: "/docker",
    icon: "🐳",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-600",
    shadowColor: "shadow-blue-500/25",
  },
  {
    title: "Git & GitHub",
    description:
      "Master version control with Git and collaboration through GitHub, including branching, PRs, and workflow.",
    link: "/git-github",
    icon: "🔧",
    gradientFrom: "from-gray-500",
    gradientTo: "to-slate-600",
    shadowColor: "shadow-gray-500/25",
  },
  {
    title: "Kubernetes",
    description:
      "Orchestrate containers at scale using Kubernetes with deployment, scaling, and management tips.",
    link: "/kubernetes",
    icon: "☸️",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-600",
    shadowColor: "shadow-pink-500/25",
  },
  {
    title: "Bash Commands",
    description:
      "Essential Bash commands cheat sheet with syntax highlighting and practical usage examples.",
    link: "/bash-commands",
    icon: "💻",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-600",
    shadowColor: "shadow-yellow-500/25",
  },
  {
    title: "vi / Vim",
    description:
      "Master the vi text editor in Linux with modes, navigation, editing commands, and quick reference guides.",
    link: s",
    icon: "⌨️",
    gradientFrom: "from-green-500",
    gon: "⌨️",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600",
    shadowColor: "shadow-green-500/25",
  },
];

const FloatingElement = ({ className, children, delay = 0 }) => {
  return (
    <div
      className={`absolute opacity-30 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "4s",
      }}
    >
      <div className="backdrop-blur-sm bg-white/5 rounded-full p-4 border border-white/10">
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleToolClick = (link) => {
    navigate(link);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #581c87 25%, #7c3aed 50%, #581c87 75%, #0f172a 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="top-20 left-10 text-4xl" delay={0}>
          ⚡
        </FloatingElement>
        <FloatingElement className="top-40 right-20 text-5xl" delay={1}>
          🚀
        </FloatingElement>
        <FloatingElement className="bottom-32 left-1/4 text-4xl" delay={2}>
          ✨
        </FloatingElement>
        <FloatingElement className="top-1/3 left-1/2 text-3xl" delay={3}>
          ⭐
        </FloatingElement>
        <FloatingElement className="bottom-20 right-10 text-4xl" delay={4}>
          🌟
        </FloatingElement>
      </div>

      {/* Background blur circles */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 70%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 70%, transparent 100%)",
        }}
      ></div>

      <div className="relative z-10 min-h-screen py-16 px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border text-white text-sm font-medium mb-6 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Developer Tools & Tutorials
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dev-Tools
              </span>
              <span
                className="block text-5xl md:text-6xl"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mastery Hub
              </span>
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm">
              Master modern development tools with interactive tutorials,
              real-world examples, and expert insights.
              <span className="text-purple-300 font-semibold">
                {" "}
                Elevate your DevOps game.
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div
              className="text-center px-6 py-4 rounded-2xl border shadow-xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="text-3xl font-bold text-white mb-1">
                {tools.length}
              </div>
              <div className="text-sm text-white/70">Tools Covered</div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="group relative transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative h-full backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:border-white/30 ${tool.shadowColor} hover:shadow-2xl cursor-pointer`}
                onClick={() => handleToolClick(tool.link)}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tool.gradientFrom} ${tool.gradientTo} rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-all duration-500 shadow-2xl backdrop-blur-sm border border-white/20`}
                  >
                    {tool.icon}
                  </div>
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${tool.gradientFrom} ${tool.gradientTo} rounded-full opacity-60`}
                  ></div>
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {tool.title}
                  </h2>
                  <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {tool.description}
                  </p>
                  <button
                    className={`w-full bg-gradient-to-r ${tool.gradientFrom} ${tool.gradientTo} text-white font-semibold py-3 px-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/20`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore {tool.title}
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </div>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tool.gradientFrom} ${tool.gradientTo} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of developers mastering these essential tools
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl active:scale-95 backdrop-blur-sm border border-white/20">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
