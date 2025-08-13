import React from "react";

const tools = [
  {
    title: "JMeter",
    description:
      "Learn how to perform performance testing using Apache JMeter with examples and step-by-step guides.",
    link: "/jmeter",
    icon: "🧪",
  },
  {
    title: "Selenium",
    description:
      "Explore Selenium for automation testing with practical tutorials, code snippets, and tips.",
    link: "/selenium",
    icon: "🤖",
  },
  {
    title: "SonarQube",
    description:
      "Understand code quality analysis with SonarQube, including setup, integration, and CI/CD.",
    link: "/sonarqube",
    icon: "📊",
  },
  {
    title: "Docker",
    description:
      "Learn containerization with Docker, including image creation, Dockerfiles, and running containers.",
    link: "/docker",
    icon: "🐳",
  },
  {
    title: "Git & GitHub",
    description:
      "Master version control with Git and collaboration through GitHub, including branching, PRs, and workflow.",
    link: "/git-github",
    icon: "🔧",
  },
  {
    title: "Kubernetes",
    description:
      "Orchestrate containers at scale using Kubernetes with deployment, scaling, and management tips.",
    link: "/kubernetes",
    icon: "☸️",
  },
  {
    title: "Bash Commands",
    description:
      "Essential Bash commands cheat sheet with syntax highlighting and practical usage examples.",
    link: "/bash-commands",
    icon: "💻",
  },
  {
    title: "vi / Vim",
    description:
      "Master the vi text editor in Linux with modes, navigation, editing commands, and quick reference guides.",
    link: "/vi-editor",
    icon: "⌨️",
  },
];

const HomePage = () => {
  const handleToolClick = (link) => {
    console.log(`Navigating to: ${link}`);
    // In a real app, you would use router navigation here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dev-Tools Mastery Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master modern development tools with interactive tutorials, real-world examples, and expert insights.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-lg shadow-sm border px-6 py-3">
            <span className="text-2xl font-semibold text-gray-900 mr-2">
              {tools.length}
            </span>
            <span className="text-gray-600">Tools Available</span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => handleToolClick(tool.link)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mr-3">
                    {tool.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {tool.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                  Learn {tool.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ready to Enhance Your Development Skills?
          </h2>
          <p className="text-gray-600 mb-6">
            Access comprehensive tutorials and guides for essential development tools
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;