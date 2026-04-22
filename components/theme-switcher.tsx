'use client'

import { useEffect, useState } from 'react'
import { Palette } from 'lucide-react'

type Theme = 'blue' | 'orange' | 'teal'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('blue')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'blue'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    setIsOpen(false)
  }

  const themes: { name: Theme; label: string; color: string }[] = [
    { name: 'blue', label: 'Blue', color: '#2563EB' },
    { name: 'orange', label: 'Orange', color: '#F59E0B' },
    { name: 'teal', label: 'Teal', color: '#0EA5A4' },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-muted transition-colors"
        title="Switch theme"
        aria-label="Switch theme"
      >
        <Palette size={20} className="text-foreground" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg p-2 z-50">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => handleThemeChange(t.name)}
              className={`w-full px-4 py-2 text-left rounded-md transition-colors flex items-center gap-2 ${
                theme === t.name
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: t.color }}
              />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
