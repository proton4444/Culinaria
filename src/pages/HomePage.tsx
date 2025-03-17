import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import FlavorMatrix from '../components/FlavorMatrix';

const sampleIngredients = [
  { id: 'tomato', name: 'Tomato', group: 'vegetables', pairings: ['basil', 'garlic', 'olive-oil'] },
  { id: 'basil', name: 'Basil', group: 'herbs', pairings: ['tomato', 'garlic', 'olive-oil'] },
  { id: 'garlic', name: 'Garlic', group: 'vegetables', pairings: ['onion', 'tomato', 'herbs'] },
  { id: 'mozzarella', name: 'Mozzarella', group: 'dairy', pairings: ['tomato', 'basil', 'olive-oil'] },
  { id: 'olive-oil', name: 'Olive Oil', group: 'proteins', pairings: ['tomato', 'basil', 'garlic'] },
  { id: 'pepper', name: 'Black Pepper', group: 'spices', pairings: ['tomato', 'garlic', 'olive-oil'] },
];

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleIngredientClick = (id: string) => {
    navigate(`/ingredient/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">{t('home.title', { app: 'Culinaria' })}</h1>
      <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl">
        {t('home.description')}
      </p>
      <FlavorMatrix ingredients={sampleIngredients} onIngredientClick={handleIngredientClick} />
    </div>
  );
};

export default HomePage;