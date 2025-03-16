import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">{t('home.title', { app: 'Culinaria' })}</h1>
      <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl">
        {t('home.description')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Placeholder for ingredient cards */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Tomato</h3>
          <p className="text-gray-400">Pairs well with basil, mozzarella, olive oil</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Basil</h3>
          <p className="text-gray-400">Pairs well with tomato, garlic, olive oil</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Garlic</h3>
          <p className="text-gray-400">Pairs well with onion, tomato, herbs</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;