import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DockerComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Docker Tutorial</h1>

      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Docker is an open platform for developing, shipping, and running applications using containerization. Containers allow you to package an application with all its dependencies and run it consistently across environments.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with Docker: Step-by-Step Guide</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 1: Install Docker</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Go to the official Docker website: <span className="text-blue-600">https://www.docker.com/get-started</span></li>
              <li>Download and install Docker Desktop for your OS (Windows/macOS/Linux)</li>
              <li>Start Docker and ensure it's running</li>
              <li>Verify installation:</li>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {`docker --version`}
              </SyntaxHighlighter>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 2: Pull an Image and Run a Container</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Pull an image from Docker Hub:</li>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {`docker pull nginx`}
              </SyntaxHighlighter>
              <li>Run the image as a container:</li>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {`docker run -d -p 8080:80 nginx`}
              </SyntaxHighlighter>
              <li>Open <span className="text-blue-600">http://localhost:8080</span> to see the running nginx server</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 3: Common Docker Commands</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>List running containers:
                <SyntaxHighlighter language="bash" style={materialDark}>
                  {`docker ps`}
                </SyntaxHighlighter>
              </li>
              <li>List all containers (including stopped):
                <SyntaxHighlighter language="bash" style={materialDark}>
                  {`docker ps -a`}
                </SyntaxHighlighter>
              </li>
              <li>Stop a container:
                <SyntaxHighlighter language="bash" style={materialDark}>
                  {`docker stop <container_id>`}
                </SyntaxHighlighter>
              </li>
              <li>Remove a container:
                <SyntaxHighlighter language="bash" style={materialDark}>
                  {`docker rm <container_id>`}
                </SyntaxHighlighter>
              </li>
              <li>Remove an image:
                <SyntaxHighlighter language="bash" style={materialDark}>
                  {`docker rmi <image_id>`}
                </SyntaxHighlighter>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 4: Create a Dockerfile</h3>
            <p className="text-gray-700 mb-2">
              A Dockerfile is used to create your own custom images:
            </p>
            <SyntaxHighlighter language="docker" style={materialDark}>
              {`# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}
            </SyntaxHighlighter>
            <p className="text-gray-700">Build and run the image:</p>
            <SyntaxHighlighter language="bash" style={materialDark}>
              {`docker build -t my-app .\ndocker run -p 3000:3000 my-app`}
            </SyntaxHighlighter>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 5: Use Docker Compose</h3>
            <p className="text-gray-700 mb-2">Define multi-container apps using a `docker-compose.yml` file:</p>
            <SyntaxHighlighter language="yaml" style={materialDark}>
              {`version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"`}
            </SyntaxHighlighter>
            <p className="text-gray-700">Run with:</p>
            <SyntaxHighlighter language="bash" style={materialDark}>
              {`docker-compose up`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Docker Best Practices</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Use `.dockerignore` to exclude files from builds</li>
          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Keep images small and build in layers</li>
          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Use official images as base when possible</li>
          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Tag images with meaningful versions</li>
          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Clean up unused containers/images/volumes regularly</li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Important Note</h3>
        <p className="text-gray-700">
          Be cautious when running third-party images. Always review Dockerfiles or use trusted sources to avoid security risks.
        </p>
      </div>
    </div>
  );
};

export default DockerComponent;
