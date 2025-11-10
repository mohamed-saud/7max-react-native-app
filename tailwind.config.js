/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  darkMode: 'class', // Enables dark mode using a class like <View className="dark:bg-background-dark" />
  theme: {
    extend: {
      colors: {
        // 🌞 Light Theme
        background: {
          light: '#F9FAFB',
          dark: '#0E0E0E',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1C1C1E',
        },
        primary: {
          light: '#2563EB',
          dark: '#4C8BF5',
        },
        success: {
          light: '#16A34A',
          dark: '#2ECC71',
        },
        danger: {
          light: '#DC2626',
          dark: '#E74C3C',
        },
        warning: {
          light: '#FACC15',
          dark: '#F1C40F',
        },
        text: {
          light: '#111827',
          dark: '#FFFFFF',
        },
        textSecondary: {
          light: '#6B7280',
          dark: '#B0B0B0',
        },
        border: {
          light: '#E5E7EB',
          dark: '#2C2C2E',
        },
        tabIconActive: {
          light: '#2563EB',
          dark: '#4C8BF5',
        },
        tabIconInactive: {
          light: '#9CA3AF',
          dark: '#777777',
        },
      },
    },
  },
  plugins: [],
};
