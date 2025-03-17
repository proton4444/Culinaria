import React from 'react';
import { motion } from 'framer-motion';

interface Ingredient {
  id: string;
  name: string;
  group: string;
  pairings: string[];
}

interface FlavorMatrixProps {
  ingredients: Ingredient[];
  onIngredientClick: (id: string) => void;
}

const groupColors = {
  herbs: '#4CAF50',
  vegetables: '#FF5722',
  proteins: '#2196F3',
  dairy: '#FFFACD',
  spices: '#FF7F50',
  seafood: '#4682B4',
  cocoa: '#8B4513',
  beef: '#CD5C5C',
  berry: '#D15E78',
  capsicum: '#FF6347',
  citrus: '#FFA500',
  brassica: '#90EE90',
  'stone-fruit': '#FFDAB9',
  allium: '#DDA0DD',
  'tropical-fruit': '#FFC0CB',
};

const ingredientPositions = {
  seafood: { x: 420, y: 155 },
  cocoa: { x: 350, y: 210 },
  beef: { x: 320, y: 330 },
  dairy: { x: 320, y: 280 },
  spice: { x: 580, y: 235 },
  spices: { x: 580, y: 235 }, // Added to match groupColors.spices
  'tropical-fruit': { x: 525, y: 170 },
  berry: { x: 580, y: 430 },
  capsicum: { x: 525, y: 470 },
  citrus: { x: 440, y: 560 },
  brassica: { x: 350, y: 470 },
  'stone-fruit': { x: 280, y: 450 },
  allium: { x: 620, y: 360 },
  herbs: { x: 480, y: 300 },
  vegetables: { x: 400, y: 400 },
  proteins: { x: 250, y: 250 }
};

const FlavorMatrix: React.FC<FlavorMatrixProps> = ({ ingredients, onIngredientClick }) => {
  return (
    <div className="relative w-full h-[600px] bg-slate-900 rounded-xl p-4">
      <div className="absolute-center text-gray-400 text-xl">
        <div>Explore Ingredient Groups</div>
        <div className="text-sm mt-2 text-center">Tap a sphere to discover flavor pairings</div>
      </div>
      
      {/* Static ingredient spheres based on the image */}
      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.seafood,
          width: '60px',
          height: '60px',
          left: ingredientPositions.seafood.x,
          top: ingredientPositions.seafood.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('seafood')}
      >
        <span className="text-white text-sm font-medium">Seafood</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.cocoa,
          width: '60px',
          height: '60px',
          left: ingredientPositions.cocoa.x,
          top: ingredientPositions.cocoa.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('cocoa')}
      >
        <span className="text-white text-sm font-medium">Cocoa</span>
      </motion.div>

          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('cocoa')}
      >
        <span className="text-white text-sm font-medium">Cocoa</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.beef,
          width: '60px',
          height: '60px',
          left: ingredientPositions.beef.x,
          top: ingredientPositions.beef.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('beef')}
      >
        <span className="text-white text-sm font-medium">Beef</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('beef')}
      >
        <span className="text-white text-sm font-medium">Beef</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.dairy,
          width: '60px',
          height: '60px',
          left: ingredientPositions.dairy.x,
          top: ingredientPositions.dairy.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('dairy')}
      >
        <span className="text-white text-sm font-medium">Dairy</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('dairy')}
      >
        <span className="text-white text-sm font-medium">Dairy</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.spices,
          width: '60px',
          height: '60px',
          left: ingredientPositions.spice.x,
          top: ingredientPositions.spice.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('spice')}
      >
        <span className="text-white text-sm font-medium">Spice</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('spice')}
      >
        <span className="text-white text-sm font-medium">Spice</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors['tropical-fruit'],
          width: '60px',
          height: '60px',
          left: ingredientPositions['tropical-fruit'].x,
          top: ingredientPositions['tropical-fruit'].y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('tropical-fruit')}
      >
        <span className="text-white text-sm font-medium">Tropical Fruit</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('tropical-fruit')}
      >
        <span className="text-white text-sm font-medium">Tropical Fruit</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.berry,
          width: '60px',
          height: '60px',
          left: ingredientPositions.berry.x,
          top: ingredientPositions.berry.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('berry')}
      >
        <span className="text-white text-sm font-medium">Berry</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('berry')}
      >
        <span className="text-white text-sm font-medium">Berry</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.capsicum,
          width: '60px',
          height: '60px',
          left: ingredientPositions.capsicum.x,
          top: ingredientPositions.capsicum.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('capsicum')}
      >
        <span className="text-white text-sm font-medium">Capsicum</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('capsicum')}
      >
        <span className="text-white text-sm font-medium">Capsicum</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.citrus,
          width: '60px',
          height: '60px',
          left: ingredientPositions.citrus.x,
          top: ingredientPositions.citrus.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('citrus')}
      >
        <span className="text-white text-sm font-medium">Citrus</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('citrus')}
      >
        <span className="text-white text-sm font-medium">Citrus</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.brassica,
          width: '60px',
          height: '60px',
          left: ingredientPositions.brassica.x,
          top: ingredientPositions.brassica.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.0,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('brassica')}
      >
        <span className="text-white text-sm font-medium">Brassica</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.0,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('brassica')}
      >
        <span className="text-white text-sm font-medium">Brassica</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors['stone-fruit'],
          width: '60px',
          height: '60px',
          left: ingredientPositions['stone-fruit'].x,
          top: ingredientPositions['stone-fruit'].y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.1,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('stone-fruit')}
      >
        <span className="text-white text-sm font-medium">Stone Fruit</span>
      </motion.div>

      <motion.div
        className="sphere absolute"
        style={{
          backgroundColor: groupColors.allium,
          width: '60px',
          height: '60px',
          left: ingredientPositions.allium.x,
          top: ingredientPositions.allium.y,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: {
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse',
          },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => onIngredientClick('allium')}
      >
        <span className="text-white text-sm font-medium">Allium</span>
      </motion.div>

export default FlavorMatrix;