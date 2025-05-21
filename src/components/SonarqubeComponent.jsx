import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const sonarProjectProperties = `
sonar.projectKey=my-app
sonar.projectName=My Application
sonar.projectVersion=1.0
sonar.sources=src
sonar.tests=tests
sonar.language=js
sonar.sourceEncoding=UTF-8

# Coverage and test execution
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.testExecutionReportPaths=reports/test-report.xml

# Exclude and include rules
sonar.exclusions=**/node_modules/**, **/*.test.js
sonar.test.inclusions=**/*.test.js

# Optional debug
sonar.verbose=true

# SonarQube server
sonar.host.url=http://localhost:9000
sonar.login=your_generated_token

`;

const sonarDockerCompose = `
version: '3'
services:
  sonarqube:
    image: sonarqube:lts
    ports:
      - "9000:9000"
    environment:
      - SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
`;

const githubActionYaml = `
name: SonarQube Analysis

on:
  push:
    branches:
      - main

jobs:
  sonarQube:
    name: Run SonarQube Scanner
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Java
        uses: actions/setup-java@v3
        with:
          distribution: 'temurin'
          java-version: '17'

      - name: SonarQube Scan
        uses: sonarsource/sonarqube-scan-action@v1.2
        with:
          args: >
            -Dsonar.projectKey=my-app
            -Dsonar.sources=.
        env:
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: https://sonarcloud.io
`;

const SonaqubeComponent = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">SonarQube Learning Guide</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🔍 What is SonarQube?</h2>
        <p className="text-gray-600">
          SonarQube is an open-source platform that continuously inspects code quality and provides detailed feedback through static analysis.
        </p>
      </section>

      {/* Steps */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📌 Steps to Set Up SonarQube:</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Install SonarQube locally or using Docker.</li>
          <li>Start the SonarQube server on <code>http://localhost:9000</code>.</li>
          <li>Create a project and generate a token on the UI.</li>
          <li>Install <code>sonar-scanner</code> CLI on your machine.</li>
          <li>Create a <code>sonar-project.properties</code> file in your root project directory.</li>
          <li>Run the scanner using <code>sonar-scanner</code>.</li>
        </ol>
      </section>

      {/* sonar-project.properties example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🧾 sonar-project.properties</h2>
        <SyntaxHighlighter language="ini" style={materialDark}>
          {sonarProjectProperties}
        </SyntaxHighlighter>
      </section>

      {/* Docker setup */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🐳 Docker Setup (docker-compose.yml)</h2>
        <SyntaxHighlighter language="yaml" style={materialDark}>
          {sonarDockerCompose}
        </SyntaxHighlighter>
        <p className="text-gray-600 mt-2">Use <code>docker-compose up</code> to run SonarQube on port 9000.</p>
      </section>

      {/* GitHub Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🔗 GitHub Example</h2>
        <p className="text-gray-600">
          Here’s a sample GitHub repository with SonarQube configured:
          <br />
          <a
            href="https://github.com/SonarSource/sonar-scanning-examples"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/SonarSource/sonar-scanning-examples
          </a>
        </p>
      </section>

      {/* GitHub Actions CI/CD */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">⚙️ GitHub Actions CI/CD</h2>
        <SyntaxHighlighter language="yaml" style={materialDark}>
          {githubActionYaml}
        </SyntaxHighlighter>
        <p className="text-gray-600 mt-2">
          Add this to <code>.github/workflows/sonar.yml</code> in your repo. Add <strong>SONAR_TOKEN</strong> in your GitHub repository secrets.
        </p>
      </section>

      <p className="text-gray-600 text-sm mt-4">✅ Now you're ready to analyze your project using SonarQube locally and via CI/CD!</p>
    </div>
  );
};

export default SonaqubeComponent;
