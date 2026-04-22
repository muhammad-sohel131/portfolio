import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg transition-colors duration-200"
      aria-label="Toggle theme"
      style={{ backgroundColor: 'var(--color-secondary)' }}
    >
      {theme === 'light' ? (
        <i className="fas fa-moon" style={{ color: 'var(--color-muted)' }}></i>
      ) : (
        <i className="fas fa-sun" style={{ color: 'var(--color-muted)' }}></i>
      )}
    </button>
  )
}

export default ThemeToggle
