import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-5 right-5 z-40 w-11 h-11 rounded-full border border-navy-700 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center hover:border-teal-400 transition-colors"
    >
      {theme === 'dark' ? (
        <span className="text-amber-400 text-lg">☀️</span>
      ) : (
        <span className="text-indigo-400 text-lg">🌙</span>
      )}
    </button>
  )
}