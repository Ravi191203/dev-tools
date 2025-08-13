import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Data for the tools ---
const tools = [
  {
    title: "JMeter",
    description: "Perform performance testing using Apache JMeter with examples and step-by-step guides.",
    link: "/jmeter",
    icon: "🧪",
  },
  {
    title: "Selenium",
    description: "Explore Selenium for automation testing with practical tutorials, code snippets, and tips.",
    link: "/selenium",
    icon: "🤖",
  },
  {
    title: "SonarQube",
    description: "Understand code quality analysis with SonarQube, including setup, integration, and CI/CD.",
    link: "/sonarqube",
    icon: "📊",
  },
  {
    title: "Docker",
    description: "Learn containerization with Docker, including image creation, Dockerfiles, and running containers.",
    link: "/docker",
    icon: "🐳",
  },
  {
    title: "Git & GitHub",
    description: "Master version control with Git and collaboration through GitHub, including branching and PRs.",
    link: "/git-github",
    icon: "🔧",
  },
  {
    title: "Kubernetes",
    description: "Orchestrate containers at scale using Kubernetes with deployment, scaling, and management tips.",
    link: "/kubernetes",
    icon: "☸️",
  },
  {
    title: "Bash Commands",
    description: "Essential Bash commands cheat sheet with syntax highlighting and practical usage examples.",
    link: "/bash-commands",
    icon: "💻",
  },
  {
    title: "vi / Vim",
    description: "Master the vi text editor in Linux with modes, navigation, editing commands, and quick reference guides.",
    link: "/vi",
    icon: "⌨️",
  },
];

// --- Helper Icons ---
const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-800"><path d="M12 1v2"/><path d="M12 21v2"/><path d="m4.22 4.22 1.42 1.42"/><path d="m18.36 18.36 1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="m4.22 19.78 1.42-1.42"/><path d="m18.36 5.64 1.42-1.42"/><circle cx="12" cy="12" r="5"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-200"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);

// --- Main HomePage Component ---
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900"></div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Dev-Tools Mastery Hub
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Master modern development tools with interactive tutorials, real-world examples, and expert insights.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search for a tool (e.g., Docker)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all dark:placeholder-slate-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <Link
              to={tool.link}
              key={tool.title}
              className="group block bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 p-6 shadow-sm hover:shadow-lg dark:hover:shadow-blue-900/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 rounded-lg flex items-center justify-center text-3xl mr-4 transition-colors duration-300">
                  {tool.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
                  {tool.title}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">No tools found for "{searchQuery}"</p>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Try searching for something else!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl text-white p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Enhance Your Skills?
          </h2>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">
            Access comprehensive tutorials and guides for essential development tools and accelerate your career.
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-md"
          >
            Get Started Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} Dev-Tools. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
