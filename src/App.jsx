import './App.css'
import NavBar from './components/NavBar.jsx'
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import JmeterComponent from './components/JmeterComponent.jsx';
import SeleniumComponent from './components/SeleniumComponent.jsx';
import SonarqubeComponent from './components/SonarqubeComponent.jsx';
import HomePage from './components/HomePage.jsx';



function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jmeter" element={<JmeterComponent />} />
        <Route path="/selenium" element={<SeleniumComponent />} />
        <Route path="/sonarqube" element={<SonarqubeComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
