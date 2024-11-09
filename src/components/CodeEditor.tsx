import React from 'react';

export function CodeEditor() {
  return (
    <section id="editor" className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="font-mono text-sm">
            <code className="text-blue-400">function</code>{" "}
            <code className="text-yellow-400">приветствие</code>
            <code className="text-white">(имя) {"{"}</code>
            <br />
            <code className="text-white ml-4">return </code>
            <code className="text-green-400">`Привет, ${"{"}имя{"}"}!`</code>
            <code className="text-white">;</code>
            <br />
            <code className="text-white">{"}"}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}