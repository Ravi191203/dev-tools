import './App.css';
import NavBar from './components/NavBar.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter as BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import JmeterComponent from './components/JmeterComponent.jsx';
import SeleniumComponent from './components/SeleniumComponent.jsx';
import SonarqubeComponent from './components/SonarqubeComponent.jsx';
import HomePage from './components/HomePage.jsx';
import DockerComponent from './components/DockerComponent.jsx';
import GitGithubComponent from './components/GitGithubComponent.jsx';
import KubernetesComponent from './components/KubernetesComponent.jsx';
import AnsibleComponent from './components/AnsibleComponent.jsx';
import BashComponent from './components/BashComponent.jsx';
import Vi from './components/vi.jsx';
import NifiComponent from './components/NifiComponent.jsx';
import GroovyComponent from './components/GroovyComponent.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jmeter" element={<JmeterComponent />} />
          <Route path="/selenium" element={<SeleniumComponent />} />
          <Route path="/sonarqube" element={<SonarqubeComponent />} />
          <Route path="/docker" element={<DockerComponent />} />
          <Route path="/git-github" element={<GitGithubComponent />} />
          <Route path="/kubernetes" element={<KubernetesComponent />} />
          <Route path="/ansible" element={<AnsibleComponent />} />
          <Route path="/bash-commands" element={<BashComponent />} />
          <Route path="/vi" element={<Vi />} />
          <Route path="/nifi" element={<NifiComponent />} />
          <Route path="/groovy" element={<GroovyComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
