import React from 'react';

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Осваивайте <span className="text-blue-400">Программирование</span> с Интерактивными Уроками
        </h1>
        <p className="text-xl text-gray-300">
          Изучайте программирование через практику с нашим редактором кода в реальном времени и экспертным руководством.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
            Начать Обучение
          </button>
          <button className="px-6 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors">
            Попробовать Демо
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
          alt="Рабочее пространство разработчика"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}