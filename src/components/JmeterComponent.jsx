import React from 'react';

const JmeterComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Apache JMeter Tutorial</h1>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Apache JMeter is an open-source load testing tool that helps analyze and measure the performance of web applications and various services.
          It's primarily used for testing the strength and performance of applications under different load conditions.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with JMeter: Step-by-Step Guide</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 1: Download and Install JMeter</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Visit the <span className="font-medium">Apache JMeter website</span> (<span className="text-blue-600">https://jmeter.apache.org/download_jmeter.cgi</span>)</li>
              <li>Download the latest stable release (binary version)</li>
              <li>Extract the downloaded zip/tar file to your preferred location</li>
              <li>Ensure you have Java installed (JMeter requires Java 8 or higher)</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 2: Launch JMeter</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Navigate to the bin directory in the JMeter folder</li>
              <li>Run jmeter.bat (Windows) or jmeter.sh (Linux/Mac)</li>
              <li>The JMeter GUI should open, presenting you with a blank test plan</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 3: Create a Test Plan</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Right-click on "Test Plan" and rename it if desired</li>
              <li>Add a Thread Group: Right-click on Test Plan → Add → Threads (Users) → Thread Group</li>
              <li>Configure the Thread Group:
                <ul className="list-disc ml-5 mt-1">
                  <li>Number of Threads: Set the number of virtual users</li>
                  <li>Ramp-up Period: Time to start all threads</li>
                  <li>Loop Count: How many times to execute the test</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 4: Add HTTP Request</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Right-click on Thread Group → Add → Sampler → HTTP Request</li>
              <li>Configure HTTP Request:
                <ul className="list-disc ml-5 mt-1">
                  <li>Server Name or IP: Enter the domain (e.g., example.com)</li>
                  <li>Protocol: HTTP or HTTPS</li>
                  <li>Method: GET, POST, PUT, etc.</li>
                  <li>Path: The URL path after the domain</li>
                  <li>Add parameters, body data, or headers as needed</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 5: Add Listeners</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Right-click on Thread Group → Add → Listener → View Results Tree</li>
              <li>Add additional listeners as needed:
                <ul className="list-disc ml-5 mt-1">
                  <li>Summary Report</li>
                  <li>Aggregate Report</li>
                  <li>Graph Results</li>
                </ul>
              </li>
              <li>These listeners will help visualize and analyze test results</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 6: Run the Test</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Save your test plan: File → Save Test Plan As</li>
              <li>Click the green "Start" button (or press Ctrl+R)</li>
              <li>Monitor the results in your listeners</li>
              <li>Click the red "Stop" button when finished</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Step 7: Analyze Results</h3>
            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              <li>Review response times, throughput, and error rates</li>
              <li>Export results for reporting if needed</li>
              <li>Identify performance bottlenecks or issues</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example: Testing a Login Page</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Let's create a test plan to load test a website's login functionality:
          </p>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">1. Set up Thread Group</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Number of Threads: 100 users</li>
              <li>Ramp-up Period: 30 seconds</li>
              <li>Loop Count: 5 times</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">2. Add HTTP Request for Login Page</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Server Name: mywebsite.com</li>
              <li>Protocol: HTTPS</li>
              <li>Method: POST</li>
              <li>Path: /login</li>
              <li>Parameters:
                <ul className="list-disc ml-5">
                  <li>username: {'${username}'}</li>
                  <li>password: {'${password}'}</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">3. Add CSV Data Set Config</h4>
            <p className="text-gray-700 mb-2">To use different login credentials:</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Right-click Thread Group → Add → Config Element → CSV Data Set Config</li>
              <li>Filename: users.csv (containing username,password pairs)</li>
              <li>Variable Names: username,password</li>
              <li>Delimiter: ,</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">4. Add Response Assertions</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Right-click HTTP Request → Add → Assertions → Response Assertion</li>
              <li>Test Field: Text Response</li>
              <li>Pattern Matching Rules: Contains</li>
              <li>Patterns to Test: Dashboard (or any text indicating successful login)</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">5. Add Listeners</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>View Results Tree</li>
              <li>Aggregate Report</li>
              <li>Response Time Graph</li>
            </ul>
          </div>

          <p className="text-gray-700 italic">
            This test will simulate 100 users logging into the system over 30 seconds, repeating 5 times, using different credentials from a CSV file.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">JMeter Best Practices</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span> 
            <span>Run JMeter in non-GUI mode for actual load tests (using -n flag)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span> 
            <span>Add Think Time with Timers to simulate realistic user behavior</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span> 
            <span>Use CSV files for test data to avoid hardcoding values</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span> 
            <span>Monitor server resources during testing</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span> 
            <span>Start with a small number of threads and gradually increase</span>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Important Note</h3>
        <p className="text-gray-700">
          Always get permission before performing load tests on production systems.
          Unauthorized load testing can be considered a Denial of Service attack.
        </p>
      </div>
    </div>
  );
};

export default JmeterComponent;