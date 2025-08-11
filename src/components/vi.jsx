// Vi.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard!");
  };

  return (
    <div style={{ position: "relative", marginBottom: "1.5rem" }}>
      <button
        onClick={copyToClipboard}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "#444",
          color: "white",
          border: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.8rem",
        }}
      >
        Copy
      </button>
      <SyntaxHighlighter language={language} style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const Vi = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "1rem" }}>
      <h1>vi Editor Quick Guide</h1>
      <p>
        <code>vi</code> is a text editor in Linux that’s powerful but different
        from Notepad. It has multiple modes and is very efficient once learned.
      </p>

      <h2>1. Opening vi</h2>
      <CodeBlock language="bash" code={`vi filename.txt`} />
      <p>
        If <code>filename.txt</code> doesn’t exist, it will be created when you
        save.
      </p>

      <h2>2. Modes in vi</h2>
      <ul>
        <li>
          <b>Normal mode</b> – move around, delete, copy.
        </li>
        <li>
          <b>Insert mode</b> – typing text.
        </li>
        <li>
          <b>Command mode</b> – save, quit, search.
        </li>
      </ul>
      <p>Mode switching:</p>
      <ul>
        <li>Normal → Insert: press <code>i</code>, <code>a</code>, or <code>o</code></li>
        <li>Insert → Normal: press <code>Esc</code></li>
        <li>Normal → Command: press <code>:</code></li>
      </ul>

      <h2>3. Navigation in Normal Mode</h2>
      <ul>
        <li><code>h</code> → left</li>
        <li><code>l</code> → right</li>
        <li><code>j</code> → down</li>
        <li><code>k</code> → up</li>
        <li><code>0</code> → start of line</li>
        <li><code>$</code> → end of line</li>
        <li><code>G</code> → end of file</li>
        <li><code>gg</code> → start of file</li>
      </ul>

      <h2>4. Editing</h2>
      <ul>
        <li><code>i</code> → insert before cursor</li>
        <li><code>a</code> → append after cursor</li>
        <li><code>o</code> → new line below</li>
        <li><code>dd</code> → delete line</li>
        <li><code>x</code> → delete character</li>
        <li><code>u</code> → undo</li>
        <li><code>Ctrl + r</code> → redo</li>
      </ul>

      <h2>5. Saving and Quitting</h2>
      <p>From Command Mode (press Esc, then type one of these):</p>
      <ul>
        <li><code>:w</code> → save</li>
        <li><code>:q</code> → quit</li>
        <li><code>:wq</code> → save and quit</li>
        <li><code>:q!</code> → quit without saving</li>
      </ul>

      <h2>6. Searching</h2>
      <ul>
        <li><code>/word</code> → search forward</li>
        <li><code>?word</code> → search backward</li>
        <li><code>n</code> → next occurrence</li>
        <li><code>N</code> → previous occurrence</li>
      </ul>

      <h2>Example Workflow</h2>
      <CodeBlock
        language="bash"
        code={`vi notes.txt
# Press i to insert
# Type your text
# Press Esc, then type :wq to save and exit`}
      />
    </div>
  );
};

export default Vi;
