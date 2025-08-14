import React, { useState } from 'react';
import { Copy, Check, Terminal, Eye, Edit, Search, FileCode, BookOpen, Lightbulb, ShieldAlert, Settings } from 'lucide-react';

/**
 * CodeBlock Component
 * Displays a block of code with a title and a copy-to-clipboard button.
 * Uses a fallback for copying to clipboard to ensure it works in all environments.
 */
const CodeBlock = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Create a temporary textarea element to hold the code
    const textArea = document.createElement('textarea');
    textArea.value = code;
    
    // Style it to be invisible
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    
    // Select and copy the content
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    // Clean up the temporary element
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
          {copied ? (
            <>
              <Check size={14} className="text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
        <pre className="p-4 text-sm font-mono text-slate-800 overflow-x-auto">
          {/* Using a simple approach for syntax-like coloring */}
          <code
            dangerouslySetInnerHTML={{
              __html: code
                .replace(/#.*/g, '<span class="text-slate-500">$&</span>') // Comments
                .replace(/:[a-zA-Z%]+/g, '<span class="text-indigo-600">$&</span>') // Commands
            }}
          />
        </pre>
      </div>
    </div>
  );
};

/**
 * CommandCard Component
 * Displays a card with a list of commands and their descriptions.
 */
const CommandCard = ({ title, icon: Icon, commands, description }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-slate-100 rounded-lg">
        <Icon size={20} className="text-slate-700" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="text-slate-600 mb-5 text-sm">{description}</p>
    <div className="space-y-3">
      {commands.map((cmd, idx) => (
        <div key={idx} className="flex items-center justify-between gap-3 p-2 rounded-lg bg-slate-50">
          <span className="text-slate-600 text-sm flex-grow">{cmd.description}</span>
          <kbd className="bg-slate-200 text-slate-800 px-2 py-1 rounded border-b-2 border-slate-300 font-sans text-xs font-semibold">
            {cmd.key}
          </kbd>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Section Component
 * A wrapper for each major section of the guide.
 */
const Section = ({ number, title, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {number}
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        </div>
        {children}
    </section>
);


const Vi = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-24">
          <div className="inline-block p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
            <Terminal size={40} className="text-slate-800" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Vi Editor Mastery
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive and modern guide to the powerful vi text editor. Unlock efficiency in the terminal, from basic navigation to advanced configuration.
          </p>
        </header>

        {/* Getting Started Section */}
        <Section number="1" title="Getting Started">
          <div className="grid md:grid-cols-2 gap-x-8">
            <CodeBlock title="Open or create a file" code="vi filename.txt" />
            <CodeBlock title="Open file at a specific line" code="vi +25 filename.txt" />
            <CodeBlock title="Open in read-only mode" code={`vi -R filename.txt\n# or\nview filename.txt`} />
            <CodeBlock title="Open multiple files" code="vi file1.txt file2.txt" />
          </div>
        </Section>

        {/* Vi Modes Section */}
        <Section number="2" title="Understanding Vi Modes">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
                    <Eye size={28} className="mx-auto mb-3 text-blue-600" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Normal Mode</h3>
                    <p className="text-slate-600 text-sm">Default mode for navigation and commands.</p>
                </div>
                <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
                    <Edit size={28} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Insert Mode</h3>
                    <p className="text-slate-600 text-sm">For typing and editing text content.</p>
                </div>
                <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
                    <Terminal size={28} className="mx-auto mb-3 text-purple-600" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Command Mode</h3>
                    <p className="text-slate-600 text-sm">Execute commands like save and quit.</p>
                </div>
            </div>
            <CodeBlock
                title="Mode Switching Commands"
                code={`# Press 'Esc' to return to Normal Mode from any other mode.

# --- Entering Insert Mode ---
i   # Insert before cursor
a   # Append after cursor
o   # Open a new line below
O   # Open a new line above

# --- Entering Command Mode ---
:   # From Normal mode`}
            />
        </Section>

        {/* Essential Commands Section */}
        <Section number="3" title="Essential Commands">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommandCard
              title="Navigation"
              icon={Eye}
              description="Move around your file efficiently."
              commands={[
                { key: "h j k l", description: "Left, down, up, right" },
                { key: "w / b", description: "Forward / backward by word" },
                { key: "0 / $", description: "Start / end of line" },
                { key: "gg / G", description: "Start / end of file" },
                { key: "5G", description: "Go to line 5" },
              ]}
            />
            <CommandCard
              title="Editing"
              icon={Edit}
              description="Modify and manipulate text."
              commands={[
                { key: "x", description: "Delete character" },
                { key: "dd", description: "Delete current line" },
                { key: "yy", description: "Yank (copy) current line" },
                { key: "p", description: "Paste after cursor" },
                { key: "u / Ctrl+r", description: "Undo / Redo" },
              ]}
            />
            <CommandCard
              title="Search & Replace"
              icon={Search}
              description="Find and substitute text patterns."
              commands={[
                { key: "/text", description: "Search forward for 'text'" },
                { key: "n / N", description: "Next / previous occurrence" },
                { key: ":s/old/new", description: "Replace first in line" },
                { key: ":%s/old/new/g", description: "Replace all in file" },
                { key: ":%s/old/new/gc", description: "Replace with confirmation" },
              ]}
            />
          </div>
        </Section>
        
        {/* Advanced Operations Section */}
        <Section number="4" title="Advanced Operations">
            <div className="grid md:grid-cols-2 gap-x-8">
                <CodeBlock
                    title="File Operations"
                    code={`:w              # Save (write) the file
:q              # Quit
:q!             # Quit without saving
:wq             # Write and quit
ZZ              # Save and quit (Normal mode shortcut)`}
                />
                <CodeBlock
                    title="Working with Buffers (Files)"
                    code={`:e filename    # Edit another file
:ls             # List open buffers
:bn             # Go to next buffer
:bp             # Go to previous buffer
:b2             # Go to buffer 2`}
                />
                <CodeBlock
                    title="Visual Mode"
                    code={`v               # Visual mode (character-wise)
V               # Visual line mode
Ctrl+v          # Visual block mode
y               # Yank (copy) selection
d               # Delete selection
> / <           # Indent / Unindent selection`}
                />
                <CodeBlock
                    title="Running Shell Commands"
                    code={`:!ls -l         # Run 'ls -l' and show output
:r !date        # Read output of 'date' into file
:w !sudo tee %  # Write file with sudo`}
                />
            </div>
        </Section>
        
        {/* Pro Tips & Configuration Section */}
        <Section number="5" title="Pro Tips & Configuration">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                    <Settings className="text-slate-600"/>
                    Customizing with .vimrc
                </h3>
                <p className="text-slate-600 mb-4 text-sm">Create a <code className="text-sm font-mono bg-slate-100 p-1 rounded">~/.vimrc</code> file to permanently save your settings. This is key to making Vi your own.</p>
                <CodeBlock
                    code={`" Show line numbers
set number

" Enable syntax highlighting
syntax on

" Use spaces instead of tabs
set expandtab
set tabstop=4
set shiftwidth=4

" Better search
set incsearch
set hlsearch
set ignorecase
set smartcase`}
                />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-3"><Lightbulb className="text-yellow-500"/>Efficiency Tips</h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li>• Use <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">.</kbd> to repeat your last command.</li>
                        <li>• Combine numbers with commands: <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">5dd</kbd> deletes 5 lines.</li>
                        <li>• Use <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">*</kbd> to search for the word under the cursor.</li>
                        <li>• Use `m` + a letter (e.g., <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">ma</kbd>) to set a mark. Jump back with ` + the letter.</li>
                    </ul>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-3"><ShieldAlert className="text-red-500"/>Emergency Exits</h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li>• <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">:q!</kbd> - Force quit without saving any changes.</li>
                        <li>• <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">:e!</kbd> - Reload the file from disk, discarding all your changes.</li>
                        <li>• If you get stuck, your first step is always to press <kbd className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded border-b-2 border-slate-300 font-sans text-xs">Esc</kbd> multiple times to ensure you are in Normal Mode.</li>
                    </ul>
                </div>
            </div>
        </Section>

        {/* Footer */}
        <footer className="text-center border-t border-slate-200 pt-12 mt-12">
            <p className="text-slate-600">Master Vi, Master the Terminal.</p>
            <p className="text-sm text-slate-500 mt-2">Practice is the key to unlocking the full potential of Vi.</p>
        </footer>
      </div>
    </div>
  );
};

export default Vi;
