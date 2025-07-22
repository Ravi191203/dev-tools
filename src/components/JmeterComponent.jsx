import React, { useState } from 'react';

const JmeterComponent = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-20 px-4">
      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-white">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-4xl shadow-lg mb-4">
            🧪
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Apache JMeter Tutorial
          </h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Learn how to install, configure, and run powerful load tests using Apache JMeter step-by-step.
          </p>
        </div>

        {/* Download Callout */}
        <div className="mb-12 p-6 rounded-xl border border-white/20 bg-white/5 flex flex-col md:flex-row md:items-center md:justify-between">
          <span className="text-sm md:text-base text-white/80">
            Download JMeter: <code className="font-mono text-purple-200">https://jmeter.apache.org/download_jmeter.cgi</code>
          </span>
          <button
            onClick={() => handleCopy('https://jmeter.apache.org/download_jmeter.cgi')}
            className="mt-4 md:mt-0 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
          >
            {copied ? 'Copied!' : 'Copy URL'}
          </button>
        </div>

        {/* Steps */}
        <div className="space-y-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-inner"
            >
              <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
              <ul className="list-decimal ml-6 space-y-2 text-white/90">
                {step.instructions.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              {step.extra && (
                <div className="mt-4 p-4 bg-yellow-300/20 border-l-4 border-yellow-400 rounded">
                  <p className="text-yellow-200 font-medium">{step.extra}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Example */}
        <div className="my-12 p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-3">💡 Example: Load Test a Login Page</h3>
          <p className="text-white/80 mb-2">
            Simulate 100 users logging in with CSV credentials.
          </p>
          <div className="bg-black/20 p-4 rounded-lg overflow-x-auto font-mono text-white/90">
            Thread Group: 100 Users | Ramp-up: 30s | Loop Count: 5{'\n'}
            HTTP Request: POST /login | Server: mywebsite.com | HTTPS{'\n'}
            CSV Data: users.csv (username,password)
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl mb-8">
          <h3 className="text-2xl font-bold mb-4">✅ JMeter Best Practices</h3>
          <ul className="space-y-2 text-white/90">
            <li><span className="text-green-400 mr-2">✓</span> Run in non-GUI mode for real tests</li>
            <li><span className="text-green-400 mr-2">✓</span> Add Think Time for realistic behavior</li>
            <li><span className="text-green-400 mr-2">✓</span> Monitor server resources</li>
            <li><span className="text-green-400 mr-2">✓</span> Use CSVs for dynamic data</li>
          </ul>
        </div>

        {/* Warning */}
        <div className="bg-yellow-400/10 p-4 rounded-xl border-l-4 border-yellow-400">
          <h4 className="text-lg font-bold mb-2">⚠️ Important</h4>
          <p className="text-white/80">
            Always get permission before running load tests on production — unauthorized load tests can be considered a Denial of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

// Steps data
const steps = [
  {
    title: 'Step 1: Download & Install',
    instructions: [
      'Go to the official Apache JMeter site.',
      'Download the latest binary release.',
      'Extract the archive to a folder.',
      'Ensure Java 8+ is installed.'
    ]
  },
  {
    title: 'Step 2: Launch JMeter',
    instructions: [
      'Open the bin directory.',
      'Run jmeter.bat (Windows) or jmeter.sh (Linux/Mac).',
      'The GUI will open with a blank Test Plan.'
    ]
  },
  {
    title: 'Step 3: Create a Test Plan',
    instructions: [
      'Right-click Test Plan and rename if needed.',
      'Add a Thread Group: Test Plan → Add → Threads → Thread Group.',
      'Set Number of Threads, Ramp-up Period, and Loop Count.'
    ]
  },
  {
    title: 'Step 4: Add HTTP Request',
    instructions: [
      'Right-click Thread Group → Add → Sampler → HTTP Request.',
      'Set Server Name, Protocol, Method, and Path.',
      'Add parameters, headers, or body data as needed.'
    ]
  },
  {
    title: 'Step 5: Add Listeners',
    instructions: [
      'Add View Results Tree.',
      'Add Summary Report or Graph Results to visualize output.'
    ]
  },
  {
    title: 'Step 6: Run the Test',
    instructions: [
      'Save the Test Plan.',
      'Click the green Start button or press Ctrl+R.',
      'Monitor results, then Stop when done.'
    ]
  },
  {
    title: 'Step 7: Analyze Results',
    instructions: [
      'Check response times and throughput.',
      'Export reports if needed.',
      'Find performance issues.'
    ]
  }
];

export default JmeterComponent;
