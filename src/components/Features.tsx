import React from 'react';
import { Terminal, BookOpen, Users } from 'lucide-react';

const features = [
  { 
    icon: <Terminal className="w-8 h-8 text-blue-400" />, 
    title: "Интерактивный Редактор", 
    desc: "Пишите и тестируйте код в реальном времени с мгновенной обратной связью" 
  },
  { 
    icon: <BookOpen className="w-8 h-8 text-blue-400" />, 
    title: "Структурированное Обучение", 
    desc: "Следуйте тщательно разработанной программе для оптимального прогресса" 
  },
  { 
    icon: <Users className="w-8 h-8 text-blue-400" />, 
    title: "Поддержка Сообщества", 
    desc: "Учитесь вместе с разработчиками со всего мира" 
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему КодМастер?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}