import React from 'react';
import { CheckCircle2, AlertTriangle, FileCode, Code2, TestTube, Terminal, FolderGit2 } from 'lucide-react';

// --- Reusable Components ---

const CodeBlock = ({ code, title, language = 'groovy' }) => {
  return (
    <div className="mb-6">
      {title && (
        <div className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
          <FileCode size={16} className="text-slate-500" />
          {title}
        </div>
      )}
      <div className="relative group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <pre className={`p-4 text-sm font-mono text-slate-200 overflow-x-auto language-${language}`}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

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

// --- Main Groovy Component ---

const GroovyComponent = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <header className="text-center mb-20">
          <div className="inline-block p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
            <Code2 size={40} className="text-purple-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Apache Groovy Guide
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover the power and simplicity of Groovy, the dynamic language for the Java Virtual Machine (JVM).
          </p>
        </header>

        <Section number="1" title="What is Apache Groovy?">
            <p className="text-slate-600 mb-4">
                Apache Groovy is a powerful, optionally-typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform. It aims to improve developer productivity with a simple, concise, and easy-to-learn syntax. It integrates seamlessly with any Java program.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Dynamic & Static" icon={Code2} variant="info">Write scripts quickly with dynamic typing, or build robust applications with optional static type checking.</InfoCard>
                <InfoCard title="Seamless Java Integration" icon={FileCode} variant="info">Use Java libraries directly in your Groovy code, or include Groovy code in your Java projects. It's 100% compatible.</InfoCard>
            </div>
        </Section>

        <Section number="2" title="Setup & Installation">
            <p className="text-slate-600 mb-4">The easiest way to install Groovy is with SDKMAN!, a tool for managing parallel versions of multiple Software Development Kits.</p>
            <CodeBlock title="Install with SDKMAN!" code="$ sdk install groovy" language="bash" />
            <ul className="list-disc list-outside space-y-2 text-slate-600 pl-5">
                <li>First, install SDKMAN! from <code className="text-sm font-mono bg-slate-100 p-1 rounded">https://sdkman.io/install</code>.</li>
                <li>Run the command above to install the latest stable version of Groovy.</li>
                <li>Verify the installation with <code className="text-sm font-mono bg-slate-100 p-1 rounded">groovy -version</code>.</li>
                <li>Like Java, Groovy requires a JDK to be installed on your system.</li>
            </ul>
        </Section>

        <Section number="3" title="Your First Groovy Script">
            <p className="text-slate-600 mb-4">Groovy's syntax is clean and requires less boilerplate than Java. Let's create a classic "Hello, World!" script.</p>
            <ol className="list-decimal list-outside space-y-4 text-slate-600 pl-5">
                <li>
                    <strong>Create a file:</strong> Create a new file named `hello.groovy`.
                </li>
                <li>
                    <strong>Add the code:</strong> Open the file and add the following line. Notice there's no need for a class or a main method.
                    <CodeBlock code={`println 'Hello, Groovy!'`} />
                </li>
                <li>
                    <strong>Run the script:</strong> Open your terminal and run the script using the `groovy` command.
                    <CodeBlock title="Run from Terminal" code="$ groovy hello.groovy" language="bash" />
                </li>
                 <li>
                    <strong>Output:</strong> You will see `Hello, Groovy!` printed to your console.
                </li>
            </ol>
        </Section>

        <Section number="4" title="Groovy in Action: Practical Examples">
             <p className="text-slate-600 mb-4">Groovy excels at simplifying common tasks. Here are a few examples.</p>
             <h3 className="text-xl font-semibold text-slate-800 mb-3">Reading a File</h3>
             <p className="text-slate-600 mb-4">Reading a text file line-by-line is incredibly concise in Groovy compared to standard Java.</p>
             <CodeBlock 
                title="read_lines.groovy"
                code={`// Create a new File object and print each line
new File('my-document.txt').eachLine { line, number ->
    println "Line \${number}: \${line}"
}`} 
            />
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Working with Lists</h3>
            <p className="text-slate-600 mb-4">Groovy adds many helpful methods to Java's collections.</p>
            <CodeBlock 
                title="list_operations.groovy"
                code={`def numbers = [1, 2, 3, 4, 5, 6]

// Find all even numbers
def evenNumbers = numbers.findAll { it % 2 == 0 }
println "Even numbers: \${evenNumbers}" // Output: [2, 4, 6]

// Transform the list to square each number
def squares = numbers.collect { it * it }
println "Squares: \${squares}" // Output: [1, 4, 9, 16, 25, 36]

// Sum the list
def total = numbers.sum()
println "Sum: \${total}" // Output: 21`} 
            />
        </Section>

        <Section number="5" title="Groovy for DevOps: Jenkins Pipeline">
            <p className="text-slate-600 mb-4">One of the most popular uses for Groovy is writing build and deployment pipelines in Jenkins. A file named `Jenkinsfile` in your project's root directory defines the entire CI/CD process using a Groovy-based Domain-Specific Language (DSL).</p>
            <CodeBlock 
                title="Jenkinsfile (Declarative Pipeline)"
                code={`pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh './gradlew build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh './gradlew test'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging environment...'
                // sh 'deploy-script.sh staging'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
            // mail to: 'team@example.com', subject: 'Build Succeeded'
        }
        failure {
            echo 'Pipeline failed.'
            // mail to: 'team@example.com', subject: 'Build FAILED'
        }
    }
}`}
            />
        </Section>
        
        <Section number="6" title="Key Features & Use Cases">
            <div className="space-y-6">
                <InfoCard title="Common Use Cases" icon={CheckCircle2} variant="success">
                    <ul className="list-none space-y-2">
                        <li>✓ **Scripting:** Perfect for automating tasks, file manipulation, and system administration scripts.</li>
                        <li>✓ **Testing:** The Spock Framework, a popular testing tool, is built on Groovy.</li>
                        <li>✓ **Build Automation:** Gradle build scripts are written in Groovy.</li>
                        <li>✓ **DevOps:** Jenkins Pipelines are defined using a Groovy-based DSL.</li>
                    </ul>
                </InfoCard>

                 <InfoCard title="Core Language Features" icon={Terminal} variant="info">
                     <ul className="list-disc list-outside space-y-2 pl-5">
                        <li><strong>Closures:</strong> Powerful blocks of code that can be passed as arguments, e.g., <code className="text-sm font-mono bg-slate-100 p-1 rounded">{`[1,2,3].each { println it }`}</code>.</li>
                        <li><strong>Native Syntax for Lists and Maps:</strong> <code className="text-sm font-mono bg-slate-100 p-1 rounded">def list = [1, 2, 3]</code> and <code className="text-sm font-mono bg-slate-100 p-1 rounded">{`def map = [name: 'Groovy', version: 4]`}</code>.</li>
                        <li><strong>Groovy Truth:</strong> Non-empty strings, non-zero numbers, and non-empty collections are automatically treated as `true` in boolean contexts.</li>
                     </ul>
                </InfoCard>
            </div>
        </Section>

        <footer className="text-center border-t border-slate-200 pt-12 mt-20">
            <p className="text-slate-600">You're now ready to start scripting with Groovy!</p>
            <p className="text-sm text-slate-500 mt-2">Explore its rich feature set for scripting, testing, and build automation.</p>
        </footer>
      </div>
    </div>
  );
};

export default GroovyComponent;
