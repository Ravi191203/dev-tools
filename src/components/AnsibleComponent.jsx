import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AnsibleComponent = () => {
  const installCmd = `# On Ubuntu
sudo apt update
sudo apt install ansible -y`;

  const inventoryFile = `[webservers]
192.168.1.10
192.168.1.11`;

  const pingPlaybook = `---
- name: Ping all hosts
  hosts: all
  tasks:
    - name: Ping the hosts
      ping:`;

  const installNginx = `---
- name: Install NGINX
  hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Ansible Tutorial</h1>

      <p className="mb-4">
        Ansible is an open-source automation tool used for configuration management, application deployment, and task automation across systems.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started with Ansible</h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 1: Install Ansible</h3>
          <SyntaxHighlighter language="bash" style={materialDark}>
            {installCmd}
          </SyntaxHighlighter>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 2: Configure Inventory</h3>
          <p>Create a file called <code>hosts</code> and add your server IPs:</p>
          <SyntaxHighlighter language="ini" style={materialDark}>
            {inventoryFile}
          </SyntaxHighlighter>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 3: Ping Servers</h3>
          <p>Use this playbook to check if Ansible can connect to your hosts:</p>
          <SyntaxHighlighter language="yaml" style={materialDark}>
            {pingPlaybook}
          </SyntaxHighlighter>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Step 4: Install a Package (NGINX)</h3>
          <p>Example to install NGINX on all web servers:</p>
          <SyntaxHighlighter language="yaml" style={materialDark}>
            {installNginx}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold mb-2">Tips</h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>Use roles for reusable task structures</li>
          <li>Use <code>--check</code> for dry runs</li>
          <li>Secure credentials using Ansible Vault</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-700 p-4 mt-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-lg font-medium mb-2">Reminder</h3>
        <p>
          Make sure SSH access is set up between your control node and managed nodes.
        </p>
      </div>
    </div>
  );
};

export default AnsibleComponent;
