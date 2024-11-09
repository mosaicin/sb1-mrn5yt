import React from 'react';

export function CallToAction() {
  return (
    <section id="start" className="py-20 bg-blue-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Готовы Начать Свой Путь в Программировании?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам разработчиков, которые уже улучшили свои навыки программирования с КодМастером.
        </p>
        <button className="px-8 py-4 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Начать Сейчас
        </button>
      </div>
    </section>
  );
}