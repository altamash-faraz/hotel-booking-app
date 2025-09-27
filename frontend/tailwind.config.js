/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Hotel Booking Theme
        'hotel': {
          50: '#fdf8f0',   // Very light cream
          100: '#faebd1',  // Light cream
          200: '#f5d5a3',  // Soft gold
          300: '#e6b86b',  // Gold
          400: '#d4a144',  // Rich gold
          500: '#c4912f',  // Deep gold
          600: '#a67c2a',  // Darker gold
          700: '#896524',  // Bronze
          800: '#6b4f1c',  // Dark bronze
          900: '#4a3615',  // Deep bronze
        },
        'ocean': {
          50: '#f0f9ff',   // Very light blue
          100: '#e0f2fe',  // Light sky blue
          200: '#bae6fd',  // Sky blue
          300: '#7dd3fc',  // Light blue
          400: '#38bdf8',  // Blue
          500: '#0ea5e9',  // Ocean blue
          600: '#0284c7',  // Deep ocean
          700: '#0369a1',  // Navy blue
          800: '#075985',  // Dark navy
          900: '#0c4a6e',  // Very dark navy
        },
        'sunset': {
          50: '#fff7ed',   // Light peach
          100: '#ffedd5',  // Peach
          200: '#fed7aa',  // Light orange
          300: '#fdba74',  // Orange
          400: '#fb923c',  // Deep orange
          500: '#f97316',  // Sunset orange
          600: '#ea580c',  // Dark orange
          700: '#c2410c',  // Burnt orange
          800: '#9a3412',  // Deep burnt orange
          900: '#7c2d12',  // Very dark orange
        },
        'forest': {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Mint green
          300: '#86efac',  // Green
          400: '#4ade80',  // Bright green
          500: '#22c55e',  // Forest green
          600: '#16a34a',  // Deep forest
          700: '#15803d',  // Dark forest
          800: '#166534',  // Very dark forest
          900: '#14532d',  // Deepest forest
        },
        'luxury': {
          50: '#fafaf9',   // Off white
          100: '#f5f5f4',  // Light gray
          200: '#e7e5e4',  // Light warm gray
          300: '#d6d3d1',  // Warm gray
          400: '#a8a29e',  // Medium gray
          500: '#78716c',  // Taupe
          600: '#57534e',  // Dark taupe
          700: '#44403c',  // Charcoal
          800: '#292524',  // Dark charcoal
          900: '#1c1917',  // Near black
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #c4912f 0%, #0ea5e9 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #f97316 0%, #c4912f 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #075985 100%)',
      },
      boxShadow: {
        'hotel': '0 4px 6px -1px rgba(196, 145, 47, 0.1), 0 2px 4px -1px rgba(196, 145, 47, 0.06)',
        'ocean': '0 4px 6px -1px rgba(14, 165, 233, 0.1), 0 2px 4px -1px rgba(14, 165, 233, 0.06)',
        'luxury': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};
