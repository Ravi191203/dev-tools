import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const KubernetesComponent = () => {
  const kubectlInstall = `# On Ubuntu
sudo apt-get update
sudo apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl`;

  const createDeployment = `kubectl create deployment nginx-deployment --image=nginx`;

  const exposeService = `kubectl expose deployment nginx-deployment --port=80 --type=NodePort`;

  const checkResources = `kubectl get pods
kubectl get deployments
kubectl get services`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Kubernetes Tutorial</h1>

      <p className="mb-4">
        Kubernetes (K8s) is an open-source container orchestration system for automating deployment, scaling, and management of containerized applications.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Setup</h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 1: Install kubectl</h3>
          <p className="mb-2">Use the following commands to install <code>kubectl</code> on Ubuntu:</p>
          <SyntaxHighlighter language="bash" style={materialDark}>
            {kubectlInstall}
          </SyntaxHighlighter>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 2: Install Minikube (for local cluster)</h3>
          <ul className="list-disc ml-5 mb-2">
            <li>Download the Minikube binary from the official site</li>
            <li>Install virtualization software (like VirtualBox or Docker)</li>
            <li>Start Minikube with: <code>minikube start</code></li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 3: Create a Deployment</h3>
          <p>Create a deployment using:</p>
          <SyntaxHighlighter language="bash" style={materialDark}>
            {createDeployment}
          </SyntaxHighlighter>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 4: Expose the Deployment</h3>
          <SyntaxHighlighter language="bash" style={materialDark}>
            {exposeService}
          </SyntaxHighlighter>
          <p>This will create a service accessible via a NodePort.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 5: Check Resources</h3>
          <SyntaxHighlighter language="bash" style={materialDark}>
            {checkResources}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold mb-2">Useful Tips</h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>Use <code>kubectl describe</code> to get detailed resource info</li>
          <li>Use <code>kubectl logs &lt;pod-name&gt;</code> to debug issues</li>
          <li>Minikube dashboard: <code>minikube dashboard</code></li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-700 p-4 mt-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-lg font-medium mb-2">Reminder</h3>
        <p>
          Don’t deploy to production clusters without resource limits, readiness checks, and secure configurations!
        </p>
      </div>
    </div>
  );
};

export default KubernetesComponent;
