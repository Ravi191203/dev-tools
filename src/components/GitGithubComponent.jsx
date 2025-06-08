import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GitGithubComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Git & GitHub Tutorial</h1>

      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          Git is a distributed version control system used to track changes in source code. GitHub is a cloud-based hosting service that lets you manage Git repositories with collaboration features.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">💻 Git Setup</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Install Git: <code className="bg-gray-100 px-2 py-1 rounded">https://git-scm.com</code></li>
          <li>Configure Git for the first time:</li>
        </ul>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
{`git config --global user.name "Your Name"
git config --global user.email "your@email.com"`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🗂️ Create a New Repository</h2>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
{`mkdir my-project
cd my-project
git init`}
        </SyntaxHighlighter>
        <p className="text-gray-700 mt-2">This creates a local Git repository.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📄 Add and Commit Files</h2>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
{`git add .
git commit -m "Initial commit"`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌐 Connect to GitHub</h2>
        <ul className="text-gray-700 mb-2">
          <li>Create a new repo on GitHub (without README)</li>
          <li>Link your local repo to GitHub:</li>
        </ul>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
{`git remote add origin https://github.com/yourusername/my-project.git
git branch -M main
git push -u origin main`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔄 Common Git Commands</h2>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
{`git status        # Check status
git log           # View commit history
git pull          # Get latest changes
git push          # Push changes
git checkout -b feature-branch  # Create new branch
git merge feature-branch       # Merge changes into current branch`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🤝 Collaboration via GitHub</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Create a new branch: <code>git checkout -b feature-name</code></li>
          <li>Push branch: <code>git push origin feature-name</code></li>
          <li>Create a Pull Request (PR) on GitHub</li>
          <li>Review, approve, and merge the PR into main</li>
        </ul>
      </section>

      <section className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-lg font-medium text-gray-800 mb-2">⚠️ Note</h3>
        <p className="text-gray-700">
          Always pull latest changes before pushing your code to avoid conflicts.
        </p>
      </section>
    </div>
  );
};

export default GitGithubComponent;
