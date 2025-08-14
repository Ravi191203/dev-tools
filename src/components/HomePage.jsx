import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Search, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

// --- AI Assistant Modal Component ---
const AiAssistantModal = ({ isOpen, onClose, tools }) => {
    const [activeTab, setActiveTab] = useState('suggest');
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [selectedTool, setSelectedTool] = useState(tools[0]?.title || '');
    const [aiResponse, setAiResponse] = useState('');

    // Gemini API call helper function
    const callGeminiApi = async (prompt) => {
        setIsLoading(true);
        setAiResponse('');
        const apiKey = ""; // API key is handled by the environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response. Please try again.";
            setAiResponse(text.replace(/\*/g, '')); // Basic formatting
        } catch (error) {
            console.error("Gemini API call error:", error);
            setAiResponse("An error occurred while fetching the response. Please check the console for details.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestTool = () => {
        const toolList = tools.map(t => t.title).join(', ');
        const prompt = `Based on the following user request: "${userInput}", which of these tools would be most appropriate: ${toolList}? Please provide the name of the tool and a brief, one-sentence explanation of why it's a good fit.`;
        callGeminiApi(prompt);
    };

    const handleGeneratePlan = () => {
        const prompt = `Create a simple, 4-step learning plan for a beginner to learn ${selectedTool}. Each step should be a single, concise sentence. Format the output as a numbered list.`;
        callGeminiApi(prompt);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl text-white relative"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
                    <X size={24} />
                </button>
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="text-purple-400" size={28} />
                        <h2 className="text-2xl font-bold">AI Assistant</h2>
                    </div>

                    <div className="flex border-b border-slate-700 mb-6">
                        <button onClick={() => setActiveTab('suggest')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'suggest' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-400 hover:text-white'}`}>Suggest a Tool</button>
                        <button onClick={() => setActiveTab('plan')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'plan' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-400 hover:text-white'}`}>Generate Learning Plan</button>
                    </div>

                    {activeTab === 'suggest' && (
                        <div>
                            <p className="text-slate-400 text-sm mb-3">Describe a task, and I'll suggest the best tool for the job.</p>
                            <textarea
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="e.g., 'I need to automate testing for my website'"
                                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                                rows="3"
                            />
                            <button onClick={handleSuggestTool} disabled={isLoading || !userInput} className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                {isLoading ? 'Thinking...' : '✨ Suggest Tool'}
                            </button>
                        </div>
                    )}

                    {activeTab === 'plan' && (
                        <div>
                            <p className="text-slate-400 text-sm mb-3">Select a tool to generate a quick learning plan.</p>
                            <select value={selectedTool} onChange={(e) => setSelectedTool(e.target.value)} className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition">
                                {tools.map(tool => <option key={tool.title} value={tool.title}>{tool.title}</option>)}
                            </select>
                            <button onClick={handleGeneratePlan} disabled={isLoading} className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                {isLoading ? 'Generating...' : '✨ Generate Plan'}
                            </button>
                        </div>
                    )}
                    
                    { (isLoading || aiResponse) && (
                        <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg min-h-[100px]">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full">
                                    <Bot size={24} className="animate-spin text-slate-500" />
                                </div>
                            ) : (
                                <p className="text-slate-300 whitespace-pre-wrap">{aiResponse}</p>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};


// --- Main HomePage Component ---
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-900/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNSwwLjA1KSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <AiAssistantModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tools={tools} />

      <header className="relative pt-28 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Dev-Tools Mastery Hub
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Master modern development tools with interactive tutorials, real-world examples, and expert insights.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"> <SearchIcon /> </div>
              <input type="text" placeholder="Search for a tool..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-slate-500" />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="flex-shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                <Sparkles size={20} />
                AI Assistant
            </button>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <motion.div key={tool.title} variants={itemVariants} layout>
                <a href={tool.link} className="group block h-full bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-md transform transition-all duration-300 relative overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-1 -left-1 w-1/2 h-1/2 bg-gradient-to-br from-blue-500 to-transparent rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mr-5 transition-colors duration-300 border border-slate-700 group-hover:border-blue-600 group-hover:bg-slate-700">
                        {tool.icon}
                      </div>
                      <h2 className="text-xl font-bold text-white">{tool.title}</h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{tool.description}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-slate-300">No tools found for "{searchQuery}"</p>
            <p className="text-slate-400 mt-2">Try searching for something else!</p>
          </div>
        )}

        <div className="mt-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl text-white p-10 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA4Ij48cGF0aCBkPSJNLTAgMEg1MFY1MEgtMHoiLz48cGF0aCBkPSJNNTAgMEgxMDBWNTBINDB6Ii8+PHBhdGggZD0iTS0wIDUwSDEwMFYxMDBILTB6Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-3">Ready to Enhance Your Skills?</h2>
            <p className="mb-6 opacity-90 max-w-xl mx-auto">Access comprehensive tutorials and guides for essential development tools and accelerate your career.</p>
            <a href="/" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Now
            </a>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 mt-12 border-t border-slate-800">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} Dev-Tools. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
