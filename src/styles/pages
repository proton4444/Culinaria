import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const IngredientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // This would normally fetch data based on the ID
  const ingredientName = id?.charAt(0).toUpperCase() + id?.slice(1);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-6">{ingredientName}</h1>
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('ingredient.pairings')}</h2>
        <ul className="space-y-2">
          <li className="text-gray-300">• Ingredient 1</li>
          <li className="text-gray-300">• Ingredient 2</li>
          <li className="text-gray-300">• Ingredient 3</li>
        </ul>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{t('ingredient.compounds')}</h2>
        <p className="text-gray-300 mb-4">
          {t('ingredient.compounds_description')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-3 rounded">
            <span className="font-mono">Compound 1</span>
          </div>
          <div className="bg-slate-700 p-3 rounded">
            <span className="font-mono">Compound 2</span>
          </div>
          <div className="bg-slate-700 p-3 rounded">
            <span className="font-mono">Compound 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetailPage;