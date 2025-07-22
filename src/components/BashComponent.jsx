import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const bashCommands = [
  {
    category: "Navigation & File System",
    commands: [
      ["pwd", "Print current directory"],
      ["ls", "List files"],
      ["ls -al", "List all files with permissions/details"],
      ["cd", "Change directory"],
      ["cd -", "Switch to previous directory"],
      ["mkdir mydir", "Make new directory"],
      ["rmdir mydir", "Remove empty directory"],
      ["rm -r mydir", "Remove directory and contents"],
      ["touch file.txt", "Create empty file"],
      ["cp file1 file2", "Copy file"],
      ["mv file1 file2", "Rename or move file"],
      ["rm file.txt", "Delete file"],
    ],
  },
  {
    category: "Viewing & Searching",
    commands: [
      ["cat file.txt", "Show file contents"],
      ["less file.txt", "Page through file"],
      ["head file.txt", "First 10 lines"],
      ["tail file.txt", "Last 10 lines"],
      ["tail -f log.txt", "Follow log output"],
      ['grep "text" file', "Search text in file"],
      ['find . -name "*.txt"', "Find files by name"],
      ["wc -l file.txt", "Count lines"],
    ],
  },
  {
    category: "Process & System",
    commands: [
      ["ps aux", "Show all processes"],
      ["top", "Monitor system"],
      ["htop", "Better `top` (if installed)"],
      ["kill PID", "Kill process"],
      ["pkill name", "Kill by name"],
      ["df -h", "Disk usage"],
      ["du -sh *", "Folder sizes"],
      ["free -h", "Memory usage"],
      ["uname -a", "System info"],
    ],
  },
  {
    category: "Permissions & Ownership",
    commands: [
      ["chmod +x script.sh", "Make script executable"],
      ["chown user:group file", "Change owner"],
    ],
  },
  {
    category: "Networking",
    commands: [
      ["ping google.com", "Check connectivity"],
      ["curl http://example.com", "Fetch URL"],
      ["wget http://example.com", "Download file"],
      ["ssh user@host", "Connect to remote"],
      ["scp file user@host:/path", "Copy file to remote"],
    ],
  },
  {
    category: "Other Handy Stuff",
    commands: [
      ["history", "Show command history"],
      ["!!", "Run last command"],
      ["!n", "Run nth history command"],
      ['echo "Hello"', "Print to screen"],
      ["date", "Show date/time"],
      ["whoami", "Show current user"],
      ["clear", "Clear terminal"],
    ],
  },
  {
    category: "Scripting Basics",
    commands: [
      ["#!/bin/bash", "Shebang for scripts"],
      ["for i in {1..5}; do echo $i; done", "Loop"],
      ['if [ -f file ]; then echo "exists"; fi', "If condition"],
      ["VAR=value", "Set variable"],
      ["echo $VAR", "Use variable"],
    ],
  },
  {
    category: "Combine & Chain",
    commands: [
      ["&&", "Run next if previous succeeded"],
      ["||", "Run next if previous failed"],
      ["|", "Pipe output to next command"],
    ],
  },
];

export default function BashCommands() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const handleCopy = (cmd) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopiedCmd(cmd);
      setTimeout(() => {
        setCopiedCmd(null);
      }, 1500);
    }).catch((err) => {
      console.error("Failed to copy!", err);
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">📜 Bash Commands Cheat Sheet</h1>

      {bashCommands.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.commands.map(([cmd, desc], i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between border border-gray-200 hover:shadow-lg transition"
              >
                <SyntaxHighlighter
                  language="bash"
                  style={oneDark}
                  customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.9rem' }}
                >
                  {cmd}
                </SyntaxHighlighter>
                <p className="mt-2 text-gray-700">{desc}</p>
                <button
                  onClick={() => handleCopy(cmd)}
                  className={`mt-4 self-start px-3 py-1 rounded-full text-sm font-medium transition ${
                    copiedCmd === cmd
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {copiedCmd === cmd ? "✅ Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
