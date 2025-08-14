import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Search, X } from 'lucide-react';
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
  {
    title:"Apache NIFI",
    description:"Learn to automate and manage data flows between systems with this step-by-step guide to Apache NiFi.",
    link:"/nifi",
    icon:"⚡️"    
  },
  {
    title:"Groovy",
    description:"A guide to Groovy, a dynamic language for the JVM, including syntax, scripting, and integration.",
    link:"/groovy",
    icon:"🐦‍🔥"
  }
];

// --- Helper Icons ---
const SearchIcon = () => (
  <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 font-sans overflow-x-hidden transition-colors">
      {/* Search & Title */}
      <header className="relative pt-28 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Dev-Tools Mastery Hub
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Master modern development tools with interactive tutorials, real-world examples, and expert insights.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"> <SearchIcon /> </div>
              <input type="text" placeholder="Search for a tool..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-slate-500" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Tool Cards */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <motion.div key={tool.title} variants={itemVariants} layout>
                <Link to={tool.link} className="group block h-full bg-slate-100 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-300 dark:border-slate-800 p-6 shadow-md transform transition-all duration-300 relative overflow-hidden hover:-translate-y-1">
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl mr-5 transition-colors duration-300 border border-slate-300 dark:border-slate-700 group-hover:border-blue-600 group-hover:bg-slate-700">
                        {tool.icon}
                      </div>
                      <h2 className="text-xl font-bold">{tool.title}</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{tool.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-semibold">No tools found for "{searchQuery}"</p>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Try searching for something else!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t border-slate-300 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} Dev-Tools. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
