import React, { useState } from 'react';
import { Copy, Check, TestTube, Download, CheckCircle2, AlertTriangle, FileCode, Settings } from 'lucide-react';

/**
 * Reusable CodeBlock Component
 * Displays code with a title and a copy-to-clipboard button.
 */
const CodeBlock = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="mb-6">
      {title && (
        <div className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
          <FileCode size={16} className="text-slate-500" />
          {title}
        </div>
      )}
      <div className="relative group bg-slate-100 border border-slate-200 rounded-xl overflow-hidden">
        <button
          onClick={copyToClipboard}
          className="absolute right-3 top-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-white/50 hover:bg-white backdrop-blur-sm border border-slate-300/50 rounded-lg text-slate-700 hover:text-slate-900 transition-all duration-200 text-xs font-medium opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          {copied ? <><Check size={14} className="text-green-600" /> Copied!</> : <><Copy size={14} /> Copy</>}
        </button>
        <pre className="p-4 text-sm font-mono text-slate-800 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

/**
 * Reusable Section Component
 * A wrapper for each major section of the guide.
 */
const Section = ({ number, title, children }) => (
    <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {number}
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        </div>
        <div className="pl-14">{children}</div>
    </section>
);

/**
 * Reusable InfoCard Component
 * A card for displaying important information like tips or warnings.
 */
const InfoCard = ({ title, icon: Icon, variant = 'info', children }) => {
    const variants = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        warning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    };
    const iconVariants = {
        info: 'text-blue-600',
        success: 'text-green-600',
        warning: 'text-yellow-600',
    }

    return (
        <div className={`border rounded-xl p-6 ${variants[variant]}`}>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
                <Icon className={iconVariants[variant]} size={20} />
                {title}
            </h3>
            <div className="text-sm space-y-2">{children}</div>
        </div>
    );
};


const JmeterComponent = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-block p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
            <TestTube size={40} className="text-indigo-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Apache JMeter Guide
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A step-by-step tutorial on how to install, configure, and run powerful load tests using Apache JMeter.
          </p>
        </header>

        {/* Download Section */}
        <Section number="1" title="Download & Install">
            <p className="text-slate-600 mb-4">First, you need to download JMeter and ensure you have Java installed. JMeter is a Java application.</p>
            <CodeBlock title="Official Download URL" code="https://jmeter.apache.org/download_jmeter.cgi" />
            <ul className="list-disc list-outside space-y-2 text-slate-600 pl-5">
                <li>Download the latest binary release (e.g., `apache-jmeter-5.x.zip`).</li>
                <li>Extract the archive to a folder on your computer.</li>
                <li>Make sure you have **Java 8+** installed on your system. You can check by running <code className="text-sm font-mono bg-slate-100 p-1 rounded">java -version</code> in your terminal.</li>
            </ul>
        </Section>

        {/* Launch Section */}
        <Section number="2" title="Launch JMeter">
            <p className="text-slate-600 mb-4">Once downloaded, navigate to the `bin` directory to start the application.</p>
            <ul className="list-disc list-outside space-y-2 text-slate-600 pl-5">
                <li>Open the `bin` directory inside your extracted JMeter folder.</li>
                <li>Run <code className="text-sm font-mono bg-slate-100 p-1 rounded">jmeter.bat</code> for Windows.</li>
                <li>Run <code className="text-sm font-mono bg-slate-100 p-1 rounded">jmeter.sh</code> for Linux or macOS.</li>
                <li>The JMeter GUI will open, presenting you with a blank **Test Plan**.</li>
            </ul>
        </Section>

        {/* Test Plan Section */}
        <Section number="3" title="Create a Basic Test Plan">
            <p className="text-slate-600 mb-4">A Test Plan is the foundation of your test. It starts with a **Thread Group** which defines the virtual users.</p>
            <ol className="list-decimal list-outside space-y-3 text-slate-600 pl-5">
                <li>
                    **Add a Thread Group:** Right-click on `Test Plan` → `Add` → `Threads (Users)` → `Thread Group`.
                </li>
                <li>
                    **Configure the Thread Group:**
                    <ul className="list-disc list-outside space-y-2 pl-6 mt-2">
                        <li>**Number of Threads (users):** The number of virtual users to simulate. (e.g., `100`)</li>
                        <li>**Ramp-up Period (in seconds):** How long it takes to start all users. (e.g., `10` seconds means 10 users start per second).</li>
                        <li>**Loop Count:** How many times each user will execute the test.</li>
                    </ul>
                </li>
                <li>
                    **Add an HTTP Request:** Right-click on your `Thread Group` → `Add` → `Sampler` → `HTTP Request`. This sampler will send a request to your server.
                </li>
                 <li>
                    **Add a Listener:** Right-click on your `Thread Group` → `Add` → `Listener` → `View Results Tree`. This lets you see the results of each request.
                </li>
            </ol>
        </Section>
        
        {/* Run & Analyze Section */}
        <Section number="4" title="Run & Analyze the Test">
            <p className="text-slate-600 mb-4">With the basic plan set up, you can run the test and analyze the initial results.</p>
            <ol className="list-decimal list-outside space-y-3 text-slate-600 pl-5">
                <li>**Save the Test Plan:** Always save your plan before running. Click `File` → `Save Test Plan as`.</li>
                <li>**Start the Test:** Click the green "Start" button in the toolbar (or press `Ctrl+R`).</li>
                <li>**View Results:** Click on the `View Results Tree` listener. You'll see each request. Green icons mean success, red mean failure.</li>
                <li>**Analyze:** Check the `Sampler result`, `Request`, and `Response data` tabs for details on each request.</li>
            </ol>
        </Section>

        {/* Best Practices & Warnings */}
        <div className="mt-20 space-y-6">
            <InfoCard title="JMeter Best Practices" icon={CheckCircle2} variant="success">
                <ul className="list-none space-y-2">
                    <li>✓ **Run in Non-GUI Mode:** For actual load tests, use the command line (`jmeter -n -t test.jmx -l results.csv`). The GUI consumes significant memory.</li>
                    <li>✓ **Add Think Time:** Use Timers (e.g., Constant Timer) to simulate realistic user pauses between actions.</li>
                    <li>✓ **Use CSV Data Set Config:** To test with dynamic data (like different usernames/passwords), use the CSV Data Set Config element.</li>
                    <li>✓ **Monitor Server Resources:** Keep an eye on the CPU, memory, and network usage of your target server during the test.</li>
                </ul>
            </InfoCard>

             <InfoCard title="Important Warning" icon={AlertTriangle} variant="warning">
                <p>
                    Always get explicit permission before running load tests on any application, especially production environments. Unauthorized load testing can be mistaken for a Denial of Service (DoS) attack and may have legal consequences.
                </p>
            </InfoCard>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-slate-200 pt-12 mt-20">
            <p className="text-slate-600">You're now ready to build more complex and powerful load tests.</p>
            <p className="text-sm text-slate-500 mt-2">Explore Assertions, Controllers, and other Listeners to enhance your testing.</p>
        </footer>
      </div>
    </div>
  );
};

export default JmeterComponent;
