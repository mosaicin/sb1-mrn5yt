import React from 'react';
import { Code2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <div className="flex items-center gap-2">
        <Code2 className="w-8 h-8 text-blue-400" />
        <span className="text-xl font-bold">КодМастер</span>
      </div>
      <div className="flex gap-6">
        <a href="#features" className="hover:text-blue-400 transition-colors">Возможности</a>
        <a href="#editor" className="hover:text-blue-400 transition-colors">Редактор</a>
        <a href="#start" className="hover:text-blue-400 transition-colors">Начать</a>
      </div>
    </nav>
  );
}