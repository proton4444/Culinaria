import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ingredientsData from '../data/ingredients';

const IngredientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  // Get ingredient data based on the id from URL
  const ingredientData = id ? ingredientsData[id] : null;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-6">{ingredientData?.name || id}</h1>
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('ingredient.pairings')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ingredientData?.pairings.map((pairingId) => {
            const pairingData = ingredientsData[pairingId];
            return (
              <div key={pairingId} className="bg-slate-700 p-4 rounded-lg text-center">
                <p className="font-medium">{pairingData?.name || pairingId}</p>
              </div>
            );
          }) || (
            <div className="text-gray-400">No pairings found</div>
          )}
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{t('ingredient.compounds')}</h2>
        <p className="text-gray-400 mb-4">{t('ingredient.compounds_description')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ingredientData?.compounds.map((compound) => (
            <div key={compound.name} className="bg-slate-700 p-4 rounded-lg">
              <p className="font-medium">{compound.name}</p>
              <p className="text-sm text-gray-400">{compound.description}</p>
            </div>
          )) || (
            <div className="text-gray-400">No compound information available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientDetailPage;