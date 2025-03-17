import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const RecipePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-6">{t('recipes.title')}</h1>
      <p className="text-xl text-gray-300 mb-8">
        {t('recipes.description')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recipe cards */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Caprese Salad</h3>
          <p className="text-gray-400 mb-4">A simple Italian salad with tomatoes, mozzarella, and basil</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-700 px-2 py-1 rounded text-sm">Tomato</span>
            <span className="bg-slate-700 px-2 py-1 rounded text-sm">Mozzarella</span>
            <span className="bg-slate-700 px-2 py-1 rounded text-sm">Basil</span>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Garlic Bread</h3>
          <p className="text-gray-400 mb-4">Crusty bread with garlic butter and herbs</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-700 px-2 py-1 rounded text-sm">Bread</span>
            <span className="bg-slate-700 px-2 py-1 rounded text-sm">Garlic</span>
            <span className="bg-slate-700 px-2 py-1 rounded text-sm">Butter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;