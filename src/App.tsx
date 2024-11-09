import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CodeEditor } from './components/CodeEditor';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <CodeEditor />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;