import React, { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white px-4 py-3 shadow-md">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-yellow-400">Dev-Tools</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li><a href="/jmeter" className="hover:text-yellow-400">Jmeter</a></li>
                    <li><a href="/selenium" className="hover:text-yellow-400">Selenium</a></li>
                    <li><a href="/SonarQube" className="hover:text-yellow-400">SonarQube</a></li>
                </ul>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <ul className="md:hidden mt-4 space-y-2 text-lg">
                    <li><a href="/jmeter" className="block hover:text-yellow-400">Jmeter</a></li>
                    <li><a href="/selenium" className="block hover:text-yellow-400">Selenium</a></li>
                    <li><a href="/SonarQube" className="block hover:text-yellow-400">SonarQube</a></li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
