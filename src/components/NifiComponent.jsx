import React from 'react';
import { CheckCircle2, AlertTriangle, FileCode, GitBranchPlus, Workflow } from 'lucide-react';

// --- Reusable Components (from previous guides) ---

/**
 * Reusable CodeBlock Component
 * Note: For a real app, this would be in its own file and imported.
 */
const CodeBlock = ({ code, title }) => {
  // A simple copy-to-clipboard function would go here.
  // For brevity, the full implementation is omitted in this example.
  return (
    <div className="mb-6">
      {title && (
        <div className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
          <FileCode size={16} className="text-slate-500" />
          {title}
        </div>
      )}
      <div className="relative group bg-slate-100 border border-slate-200 rounded-xl overflow-hidden">
        <pre className="p-4 text-sm font-mono text-slate-800 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

/**
 * Reusable Section Component
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

// --- Main NiFi Component ---

const NifiComponent = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-block p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
            <GitBranchPlus size={40} className="text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Apache NiFi Guide
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Learn to automate and manage data flows between systems with this step-by-step guide to Apache NiFi.
          </p>
        </header>

        {/* What is NiFi Section */}
        <Section number="1" title="What is Apache NiFi?">
            <p className="text-slate-600 mb-4">
                Apache NiFi is a powerful and reliable system to process and distribute data. It provides a web-based user interface for designing, controlling, and monitoring data flows. Think of it as a visual tool for connecting different systems and routing data between them.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
                <InfoCard title="FlowFile" icon={FileCode} variant="info">The core unit of data moving through the system. It's made of content (the data itself) and attributes (metadata about the data).</InfoCard>
                <InfoCard title="Processor" icon={Workflow} variant="info">The "worker" that performs an action, such as fetching data, transforming it, or sending it somewhere.</InfoCard>
                <InfoCard title="Connection" icon={GitBranchPlus} variant="info">The "pipe" that links Processors together, creating a path for FlowFiles to travel.</InfoCard>
            </div>
        </Section>

        {/* Download Section */}
        <Section number="2" title="Download & Install">
            <p className="text-slate-600 mb-4">NiFi is a Java application, so you'll need Java installed first. Then, download the latest binary from the official website.</p>
            <CodeBlock title="Official Download URL" code="https://nifi.apache.org/download.html" />
            <ul className="list-disc list-outside space-y-2 text-slate-600 pl-5">
                <li>Download the latest binary release (e.g., `nifi-1.x.x-bin.zip`).</li>
                <li>Extract the archive to a folder on your computer.</li>
                <li>Ensure you have **Java 8 or 11** installed. Check with <code className="text-sm font-mono bg-slate-100 p-1 rounded">java -version</code>.</li>
                <li>Start NiFi by running the `run-nifi.bat` (Windows) or `run-nifi.sh` (Mac/Linux) script in the `bin` directory.</li>
                <li>Access the UI in your browser, typically at <code className="text-sm font-mono bg-slate-100 p-1 rounded">http://localhost:8080/nifi</code>.</li>
            </ul>
        </Section>

        {/* Building a Simple Data Flow Section */}
        <Section number="3" title="Building a Simple Data Flow">
            <p className="text-slate-600 mb-4">Let's create a "Hello, World!" flow that generates a piece of data and logs its attributes.</p>
            <ol className="list-decimal list-outside space-y-4 text-slate-600 pl-5">
                <li>
                    <strong>Add a Processor:</strong> Drag the Processor icon from the top toolbar onto the canvas. Search for `GenerateFlowFile` and click "Add".
                </li>
                <li>
                    <strong>Configure the Processor:</strong> Right-click the `GenerateFlowFile` processor and select "Configure". You can leave the default settings for now. These settings control how often it generates a new FlowFile. Click "Apply".
                </li>
                <li>
                    <strong>Add a Second Processor:</strong> Drag another Processor onto the canvas. This time, search for `LogAttribute` and add it. This processor will log the details of any FlowFile it receives.
                </li>
                 <li>
                    <strong>Create a Connection:</strong> Hover over the `GenerateFlowFile` processor until a connection icon appears. Drag it to the `LogAttribute` processor. A "Create Connection" dialog will appear. Check the box for the `success` relationship and click "Add".
                </li>
                <li>
                    <strong>Start the Flow:</strong> Click on an empty part of the canvas to de-select everything. Then, click the "Start" button in the top toolbar to start all processors. You should see the counters on the processors start to change, indicating data is flowing.
                </li>
            </ol>
        </Section>
        
        {/* Best Practices & Warnings */}
        <div className="mt-20 space-y-6">
            <InfoCard title="NiFi Best Practices" icon={CheckCircle2} variant="success">
                <ul className="list-none space-y-2">
                    <li>✓ **Plan Your Flow:** Before building, sketch out what you want to achieve.</li>
                    <li>✓ **Use Process Groups:** For complex flows, group related processors into a Process Group to keep your canvas clean.</li>
                    <li>✓ **Leverage Templates:** Save and reuse parts of your data flows by creating templates.</li>
                    <li>✓ **Monitor Back Pressure:** Keep an eye on the queues in your connections. High numbers can indicate a bottleneck.</li>
                    <li>✓ **Use Descriptive Names:** Name your processors and process groups clearly to explain their purpose.</li>
                </ul>
            </InfoCard>

             <InfoCard title="Important Security Note" icon={AlertTriangle} variant="warning">
                <p>
                    A default NiFi installation is not secure. For any real-world use case, you must configure user authentication (e.g., with username/password) and authorization to control who can access and modify your data flows.
                </p>
            </InfoCard>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-slate-200 pt-12 mt-20">
            <p className="text-slate-600">You've just built your first data flow in NiFi!</p>
            <p className="text-sm text-slate-500 mt-2">Explore the vast library of processors to connect to databases, APIs, and file systems.</p>
        </footer>
      </div>
    </div>
  );
};

export default NifiComponent;
