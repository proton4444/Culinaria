# Culinaria

Culinaria is a web application that helps users discover perfect flavor pairings based on scientific analysis of shared aromatic compounds. This tool is designed to enhance culinary creativity and exploration.

## Features

- Scientific flavor pairing recommendations
- Ingredient details and information
- Recipe suggestions based on compatible ingredients
- Multi-language support

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion for animations
- React Router for navigation
- Zustand for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/culinaria.git
   cd culinaria
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── context/       # React context providers
│   ├── pages/         # Application pages
│   │   ├── HomePage
│   │   ├── IngredientDetailPage
│   │   └── RecipePage
│   ├── styles/        # Global styles and Tailwind configuration
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.