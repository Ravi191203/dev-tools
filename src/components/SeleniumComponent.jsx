import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your theme
// atomDark
// dracula
// oneDark
// vscDarkPlus
// solarizedlight
// materialDark
const SeleniumComponent = () => {
  const [copiedExample, setCopiedExample] = useState(null);

  const examples = [
    {
      id: "basic",
      title: "Basic Selenium Setup",
      description: "Initialize a browser and navigate to a website",
      code: `from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Initialize the Chrome driver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Navigate to a website
driver.get("https://www.example.com")

# Print the title of the webpage
print(driver.title)

# Close the browser
driver.quit()`,
    },
    {
      id: "locators",
      title: "Locating Elements",
      description: "Find elements using different locator strategies",
      code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.example.com")

# Find element by ID
element_by_id = driver.find_element(By.ID, "elementId")

# Find element by CSS Selector
element_by_css = driver.find_element(By.CSS_SELECTOR, ".className")

# Find element by XPath
element_by_xpath = driver.find_element(By.XPATH, "//button[@type='submit']")

# Find element by link text
element_by_link = driver.find_element(By.LINK_TEXT, "Click here")

# Find multiple elements
elements = driver.find_elements(By.TAG_NAME, "a")
for element in elements:
    print(element.get_attribute("href"))

driver.quit()`,
    },
    {
      id: "actions",
      title: "Performing Actions",
      description: "Click, type, select, and other interactive actions",
      code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.example.com/form")

# Type text into an input field
username_field = driver.find_element(By.ID, "username")
username_field.send_keys("testuser")

# Clear a field
username_field.clear()
username_field.send_keys("newuser")

# Click a button
submit_button = driver.find_element(By.XPATH, "//button[@type='submit']")
submit_button.click()

# Select from dropdown
dropdown = Select(driver.find_element(By.ID, "dropdown"))
dropdown.select_by_visible_text("Option 1")  # by visible text
dropdown.select_by_value("value1")  # by value attribute
dropdown.select_by_index(1)  # by index

# Keyboard actions
search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium Python")
search_box.send_keys(Keys.RETURN)  # Press Enter key

driver.quit()`,
    },
    {
      id: "waits",
      title: "Implementing Waits",
      description: "Handle dynamic elements with explicit and implicit waits",
      code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Implicit wait - waits for all elements
driver.implicitly_wait(10)  # seconds
driver.get("https://www.example.com")

# Explicit wait - waits for specific condition
try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "dynamicElement"))
    )
    print("Element found!")
except TimeoutException:
    print("Timed out waiting for element")

# Explicit wait with multiple conditions
try:
    element = WebDriverWait(driver, 10).until(
        EC.all_of(
            EC.visibility_of_element_located((By.ID, "element")),
            EC.element_to_be_clickable((By.ID, "element"))
        )
    )
    element.click()
except Exception as e:
    print(f"Error: {e}")

driver.quit()`,
    },
    {
      id: "advanced",
      title: "Advanced Test Scenario",
      description: "Complete web form submission with validation",
      code: `import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.example.com/registration")

# Fill out a registration form
driver.find_element(By.ID, "firstName").send_keys("John")
driver.find_element(By.ID, "lastName").send_keys("Doe")
driver.find_element(By.ID, "email").send_keys("johndoe@example.com")
driver.find_element(By.ID, "password").send_keys("SecurePassword123!")
driver.find_element(By.ID, "confirmPassword").send_keys("SecurePassword123!")

# Check a checkbox
driver.find_element(By.ID, "termsAgree").click()

# Submit the form
driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

# Wait for success message
try:
    success_message = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.CLASS_NAME, "success-message"))
    )
    if "Registration successful" in success_message.text:
        print("Test passed: Registration completed successfully")
    else:
        print("Test failed: Success message not found")
except Exception as e:
    print(f"Test failed: {e}")

driver.quit()`,
    },
    {
      id: "framework",
      title: "Page Object Model Example",
      description: "Organize tests using the Page Object Model design pattern",
      code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Page Object class
class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.username_input = (By.ID, "username")
        self.password_input = (By.ID, "password")
        self.login_button = (By.CSS_SELECTOR, "button[type='submit']")
        self.error_message = (By.CLASS_NAME, "error-message")
        
    def navigate_to(self):
        self.driver.get("https://www.example.com/login")
        
    def set_username(self, username):
        WebDriverWait(self.driver, 10).until(
            EC.visibility_of_element_located(self.username_input)
        ).send_keys(username)
        
    def set_password(self, password):
        self.driver.find_element(*self.password_input).send_keys(password)
        
    def click_login(self):
        self.driver.find_element(*self.login_button).click()
        
    def get_error_message(self):
        return WebDriverWait(self.driver, 10).until(
            EC.visibility_of_element_located(self.error_message)
        ).text
        
    def login(self, username, password):
        self.set_username(username)
        self.set_password(password)
        self.click_login()


# Test using the Page Object
def test_login_with_invalid_credentials():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    
    login_page = LoginPage(driver)
    login_page.navigate_to()
    login_page.login("invalid_user", "invalid_password")
    
    error = login_page.get_error_message()
    assert "Invalid username or password" in error
    
    driver.quit()
    print("Test passed: Error message displayed correctly")

# Run the test
test_login_with_invalid_credentials()`,
    },
  ];

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedExample(id);
      setTimeout(() => setCopiedExample(null), 2000);
    });
  };

  return (
    
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Selenium with Python Tutorial
      </h1>

      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Selenium is a powerful tool for automating web browsers. It's commonly
          used for web testing, web scraping, and automating web-based tasks.
          This guide provides examples of using Selenium with Python.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Getting Started with Selenium in Python
        </h2>

        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Installation
          </h3>
          <div className="bg-gray-800 rounded-lg p-4 relative">
            <pre className="text-green-400 overflow-x-auto">
              <code>pip install selenium webdriver-manager</code>
            </pre>
            <button
              onClick={() =>
                copyToClipboard(
                  "pip install selenium webdriver-manager",
                  "installation"
                )
              }
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
            >
              {copiedExample === "installation" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {example.title}
              </h3>
              <p className="text-gray-700 mb-4">{example.description}</p>
              <div className="bg-gray-800 rounded-lg p-4 relative">
                <pre className="text-green-400 overflow-x-auto">
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                      {example.code}
                    </SyntaxHighlighter>
                </pre>
                <button
                  onClick={() => copyToClipboard(example.code, example.id)}
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
                >
                  {copiedExample === example.id ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Selenium Best Practices
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>
              Use WebDriverWait instead of time.sleep() for more reliable tests
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Implement Page Object Model for better test maintenance</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>
              Use unique and stable locators (IDs are preferred over XPath)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Handle exceptions properly to make tests more robust</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>
              Keep tests independent and avoid dependencies between tests
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Important Note
        </h3>
        <p className="text-gray-700">
          Remember to install the appropriate browser drivers or use
          webdriver-manager to handle driver installation. Different versions of
          browsers may require specific versions of drivers. The
          webdriver-manager package helps automate this process.
        </p>
      </div>
    </div>
  );
};

export default SeleniumComponent;
