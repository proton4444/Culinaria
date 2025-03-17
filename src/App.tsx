import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import HomePage from './pages/HomePage'
import IngredientDetailPage from './pages/IngredientDetailPage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingredient/:id" element={<IngredientDetailPage />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
