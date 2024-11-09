import React from 'react';
import { Code2, Github, Rocket, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="font-bold">КодМастер</span>
          </div>
          <div className="flex gap-4">
            <Github className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
            <Rocket className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
            <Zap className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 КодМастер. Все права защищены.
        </div>
      </div>
    </footer>
  );
}