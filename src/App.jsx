import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import JmeterComponent from './components/JmeterComponent.jsx';
import SeleniumComponent from './components/SeleniumComponent.jsx';
import SonarqubeComponent from './components/SonarqubeComponent.jsx';
import DockerComponent from './components/DockerComponent.jsx';
import GitGithubComponent from './components/GitGithubComponent.jsx';
import KubernetesComponent from './components/KubernetesComponent.jsx';
import AnsibleComponent from './components/AnsibleComponent.jsx';
import BashComponent from './components/BashComponent.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Navigation bar visible on all pages */}
      <NavBar />

      {/* ✅ App routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jmeter" element={<JmeterComponent />} />
        <Route path="/selenium" element={<SeleniumComponent />} />
        <Route path="/sonarqube" element={<SonarqubeComponent />} />
        <Route path="/docker" element={<DockerComponent />} />
        <Route path="/git-github" element={<GitGithubComponent />} />
        <Route path="/kubernetes" element={<KubernetesComponent />} /> {/* ✅ Fixed spelling */}
        <Route path="/ansible" element={<AnsibleComponent />} />
        <Route path="/bash-commands" element={<BashComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
