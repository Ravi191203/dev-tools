import './App.css'
import NavBar from './components/NavBar.jsx'
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import JmeterComponent from './components/JmeterComponent.jsx';
import SeleniumComponent from './components/SeleniumComponent.jsx';
import SonarqubeComponent from './components/SonarqubeComponent.jsx';
import HomePage from './components/HomePage.jsx';
import DockerComponent from './components/DockerComponent.jsx';
import GitGithubComponent from './components/GitGithubComponent.jsx';
import KubernetesComponent from './components/KubernetesComponent.jsx';
import AnsibleComponent from './components/AnsibleComponent.jsx';



function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jmeter" element={<JmeterComponent />} />
        <Route path="/selenium" element={<SeleniumComponent />} />
        <Route path="/sonarqube" element={<SonarqubeComponent />} />
        <Route path="/docker" element={<DockerComponent />} />
        <Route path="/git-github" element={<GitGithubComponent />} />
        <Route path="/kubernets" element={<KubernetesComponent />} />
        <Route path="/ansible" element={<AnsibleComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
