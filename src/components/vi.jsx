import React, { useState } from "react";

// Simple icon components to replace Lucide icons
const CopyIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const TerminalIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4,17 10,11 4,5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const EyeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EditIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const SearchIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const CodeBlock = ({ language, code, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="relative mb-6 group">
      {title && (
        <div className="text-sm font-medium text-purple-300 mb-2 flex items-center gap-2">
          <TerminalIcon size={16} />
          {title}
        </div>
      )}
      <div className="relative backdrop-blur-lg bg-black/60 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
        <button
          onClick={copyToClipboard}
          className="absolute right-3 top-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg text-white/70 hover:text-white transition-all duration-200 text-xs font-medium opacity-0 group-hover:opacity-100"
        >
          {copied ? (
            <>
              <CheckIcon size={12} />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon size={12} />
              Copy
            </>
          )}
        </button>
        <pre className="relative z-0 p-4 text-sm font-mono text-green-400 overflow-x-auto bg-black/20">
          <code className="language-bash">{code}</code>
        </pre>
      </div>
    </div>
  );
};

const CommandCard = ({ title, icon: Icon, commands, description }) => (
  <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-blue-500/3 rounded-2xl"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <div className="space-y-2">
        {commands.map((cmd, idx) => (
          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-black/20">
            <code className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded font-mono text-sm">
              {cmd.key}
            </code>
            <span className="text-gray-300 text-sm">{cmd.description}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Vi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl backdrop-blur-lg border border-white/20">
              <TerminalIcon size={32} />
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Vi Editor Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master the legendary vi text editor with this comprehensive guide. From basic navigation to advanced commands,
            unlock the full power of this ubiquitous Linux tool.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">1</span>
            </div>
            Getting Started
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <CodeBlock 
                title="Open an existing file"
                code="vi filename.txt" 
              />
              <CodeBlock 
                title="Create a new file"
                code="vi newfile.txt" 
              />
              <CodeBlock 
                title="Open file at specific line"
                code="vi +25 filename.txt" 
              />
            </div>
            <div>
              <CodeBlock 
                title="Open in read-only mode"
                code={`vi -R filename.txt
# or
view filename.txt`}
              />
              <CodeBlock 
                title="Open multiple files"
                code="vi file1.txt file2.txt file3.txt" 
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">2</span>
            </div>
            Understanding Vi Modes
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-lg bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Normal Mode</h3>
                <p className="text-gray-300 text-sm">Default mode for navigation and commands</p>
              </div>
            </div>
            <div className="backdrop-blur-lg bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EditIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Insert Mode</h3>
                <p className="text-gray-300 text-sm">Type and edit text content</p>
              </div>
            </div>
            <div className="backdrop-blur-lg bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TerminalIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Command Mode</h3>
                <p className="text-gray-300 text-sm">Execute commands like save and quit</p>
              </div>
            </div>
          </div>

          <CodeBlock 
            title="Mode Switching Commands"
            code={`# Entering Insert Mode
i          # Insert before cursor
I          # Insert at beginning of line
a          # Append after cursor
A          # Append at end of line
o          # Open new line below
O          # Open new line above

# Returning to Normal Mode
Esc        # From any mode to Normal mode

# Entering Command Mode
:          # From Normal mode`}
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">3</span>
            </div>
            Essential Commands
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CommandCard
              title="Navigation"
              icon={EyeIcon}
              description="Move around your file efficiently"
              commands={[
                { key: "h j k l", description: "Left, down, up, right" },
                { key: "w", description: "Next word" },
                { key: "b", description: "Previous word" },
                { key: "0", description: "Start of line" },
                { key: "$", description: "End of line" },
                { key: "gg", description: "First line" },
                { key: "G", description: "Last line" },
                { key: "5G", description: "Go to line 5" }
              ]}
            />

            <CommandCard
              title="Editing"
              icon={EditIcon}
              description="Modify and manipulate text"
              commands={[
                { key: "x", description: "Delete character" },
                { key: "dd", description: "Delete line" },
                { key: "5dd", description: "Delete 5 lines" },
                { key: "yy", description: "Copy line" },
                { key: "p", description: "Paste" },
                { key: "u", description: "Undo" },
                { key: "Ctrl+r", description: "Redo" },
                { key: ".", description: "Repeat last command" }
              ]}
            />

            <CommandCard
              title="Search & Replace"
              icon={SearchIcon}
              description="Find and replace text"
              commands={[
                { key: "/text", description: "Search forward" },
                { key: "?text", description: "Search backward" },
                { key: "n", description: "Next occurrence" },
                { key: "N", description: "Previous occurrence" },
                { key: ":s/old/new", description: "Replace first in line" },
                { key: ":%s/old/new/g", description: "Replace all" }
              ]}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">4</span>
            </div>
            Advanced Operations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <CodeBlock 
                title="File Operations"
                code={`:w                # Save file
:w filename       # Save as filename
:q                # Quit
:q!               # Quit without saving
:wq               # Save and quit
:x                # Save and quit (same as :wq)
ZZ                # Save and quit (Normal mode)`}
              />
              
              <CodeBlock 
                title="Working with Multiple Files"
                code={`:e filename       # Edit another file
:bn               # Next buffer
:bp               # Previous buffer
:ls               # List all buffers
:b2               # Switch to buffer 2
:split filename   # Horizontal split
:vsplit filename  # Vertical split`}
              />
            </div>
            
            <div>
              <CodeBlock 
                title="Text Manipulation"
                code={`dw                # Delete word
d$                # Delete to end of line
d0                # Delete to start of line
cw                # Change word
C                 # Change to end of line
r                 # Replace character
R                 # Replace mode
~                 # Toggle case`}
              />
              
              <CodeBlock 
                title="Visual Mode"
                code={`v                 # Visual mode
V                 # Visual line mode
Ctrl+v            # Visual block mode
y                 # Yank (copy) selection
d                 # Delete selection
>                 # Indent selection
<                 # Unindent selection`}
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">5</span>
            </div>
            Practical Examples
          </h2>

          <div className="space-y-6">
            <CodeBlock 
              title="Complete Editing Workflow"
              code={`# Open file
vi document.txt

# Navigate to line 10
10G

# Enter insert mode and add text
i
This is new content
[Press Esc]

# Search for 'error'
/error

# Replace all 'error' with 'warning'
:%s/error/warning/g

# Save and exit
:wq`}
            />

            <CodeBlock 
              title="Working with Configuration Files"
              code={`# Edit system config (with sudo)
sudo vi /etc/nginx/nginx.conf

# Make a backup first
:w /tmp/nginx.conf.backup

# Search for specific setting
/server_name

# Comment out a line (add # at beginning)
I#[Press Esc]

# Uncomment a line (remove # from beginning)
0x

# Save changes
:w`}
            />

            <CodeBlock 
              title="Programming with Vi"
              code={`# Open Python file
vi script.py

# Go to function definition
/def main

# Indent multiple lines
5>>

# Copy function and paste elsewhere
V}y
G
p

# Set line numbers
:set number

# Enable syntax highlighting
:syntax on`}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">6</span>
            </div>
            Pro Tips & Configuration
          </h2>

          <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Create a .vimrc file for customization:</h3>
            <CodeBlock 
              code={`# Create/edit your vim configuration
vi ~/.vimrc

# Add these useful settings:
set number          " Show line numbers
set syntax=on       " Enable syntax highlighting
set tabstop=4       " Tab width
set shiftwidth=4    " Indent width
set expandtab       " Use spaces instead of tabs
set hlsearch        " Highlight search results
set incsearch       " Incremental search
set ignorecase      " Case insensitive search
set smartcase       " Smart case sensitivity
set autoindent      " Auto indent new lines
set ruler           " Show cursor position`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Efficiency Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Use <code className="text-purple-300">.</code> to repeat your last command</li>
                <li>• Combine numbers with commands: <code className="text-purple-300">5dd</code> deletes 5 lines</li>
                <li>• Use <code className="text-purple-300">*</code> to search for word under cursor</li>
                <li>• <code className="text-purple-300">Ctrl+g</code> shows current file info</li>
                <li>• <code className="text-purple-300">m</code> + letter to set bookmarks</li>
              </ul>
            </div>
            
            <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Emergency Commands</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <code className="text-purple-300">:q!</code> - Force quit without saving</li>
                <li>• <code className="text-purple-300">:e!</code> - Reload file, discard changes</li>
                <li>• <code className="text-purple-300">u</code> - Undo last change</li>
                <li>• <code className="text-purple-300">:earlier 1m</code> - Go back 1 minute</li>
                <li>• <code className="text-purple-300">Ctrl+z</code> - Suspend vi (resume with <code className="text-purple-300">fg</code>)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl p-8">
          <div className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-lg font-semibold mb-2">
            Master Vi, Master Linux
          </div>
          <p className="text-gray-400">
            With these commands and techniques, you're well on your way to becoming a vi power user. 
            Practice makes perfect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vi;