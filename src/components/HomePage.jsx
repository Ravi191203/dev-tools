import React from 'react';
import { Link } from 'react-router-dom';

const tools = [
  {
    title: 'JMeter',
    description: 'Learn how to perform performance testing using Apache JMeter with examples and step-by-step guides.',
    link: '/jmeter',
    icon: '🧪',
  },
  {
    title: 'Selenium',
    description: 'Explore Selenium for automation testing with practical tutorials, code snippets, and tips.',
    link: '/selenium',
    icon: '🤖',
  },
  {
    title: 'SonarQube',
    description: 'Understand code quality analysis with SonarQube, including setup, integration, and CI/CD.',
    link: '/sonarqube',
    icon: '📊',
  },
  {
    title: 'Docker',
    description: 'Learn containerization with Docker, including image creation, Dockerfiles, and running containers.',
    link: '/docker',
    icon: '🐳',
  },
  {
    title: 'Git & GitHub',
    description: 'Master version control with Git and collaboration through GitHub, including branching, PRs, and workflow.',
    link: '/git-github',
    icon: '🔧',
  },
  {
    title: 'Kubernetes',
    // description: 'Master version control with Git and collaboration through GitHub, including branching, PRs, and workflow.',
    link: '/kubernets',
    icon: '',
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Welcome to Dev-Tools Guide 🚀</h1>
        <p className="text-gray-600 mt-4 text-lg">Explore modern testing and quality assurance tools with step-by-step tutorials and code examples.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <div key={tool.title} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-4">{tool.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{tool.title}</h2>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <Link to={tool.link}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Explore {tool.title}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
