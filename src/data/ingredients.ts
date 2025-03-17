// Ingredient data with detailed information including compounds
import { Ingredient } from '../types/Ingredient';

interface IngredientDetail extends Ingredient {
  compounds: Array<{
    name: string;
    description: string;
  }>;
}

const ingredientsData: Record<string, IngredientDetail> = {
  tomato: {
    id: 'tomato',
    name: 'Tomato',
    group: 'vegetables',
    pairings: ['basil', 'garlic', 'olive-oil', 'mozzarella', 'pepper'],
    compounds: [
      { name: 'Lycopene', description: 'Red carotenoid pigment, antioxidant properties' },
      { name: '2-Isobutylthiazole', description: 'Characteristic tomato vine aroma' },
      { name: 'Citric acid', description: 'Contributes to tangy flavor' }
    ]
  },
  basil: {
    id: 'basil',
    name: 'Basil',
    group: 'herbs',
    pairings: ['tomato', 'garlic', 'olive-oil', 'mozzarella'],
    compounds: [
      { name: 'Linalool', description: 'Floral, spicy aroma' },
      { name: 'Eugenol', description: 'Clove-like, warm spicy note' },
      { name: 'Estragole', description: 'Sweet, anise-like aroma' }
    ]
  },
  garlic: {
    id: 'garlic',
    name: 'Garlic',
    group: 'vegetables',
    pairings: ['onion', 'tomato', 'basil', 'olive-oil'],
    compounds: [
      { name: 'Allicin', description: 'Pungent compound formed when garlic is crushed' },
      { name: 'Diallyl disulfide', description: 'Contributes to characteristic aroma' },
      { name: 'S-Allyl cysteine', description: 'Organosulfur compound with health benefits' }
    ]
  },
  mozzarella: {
    id: 'mozzarella',
    name: 'Mozzarella',
    group: 'dairy',
    pairings: ['tomato', 'basil', 'olive-oil'],
    compounds: [
      { name: 'Lactic acid', description: 'Contributes mild tangy flavor' },
      { name: 'Diacetyl', description: 'Buttery aroma compound' },
      { name: 'Fatty acids', description: 'Creamy mouthfeel and flavor' }
    ]
  },
  'olive-oil': {
    id: 'olive-oil',
    name: 'Olive Oil',
    group: 'proteins',
    pairings: ['tomato', 'basil', 'garlic'],
    compounds: [
      { name: 'Oleocanthal', description: 'Peppery sensation, anti-inflammatory properties' },
      { name: 'Squalene', description: 'Hydrocarbon with antioxidant properties' },
      { name: 'Oleic acid', description: 'Monounsaturated fatty acid, main component' }
    ]
  },
  pepper: {
    id: 'pepper',
    name: 'Black Pepper',
    group: 'spices',
    pairings: ['tomato', 'garlic', 'olive-oil'],
    compounds: [
      { name: 'Piperine', description: 'Alkaloid responsible for pungency' },
      { name: 'Limonene', description: 'Citrus-like aroma' },
      { name: 'Pinene', description: 'Pine-like, woody aroma' }
    ]
  }
};

export default ingredientsData;