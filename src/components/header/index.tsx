'use client'

import React, { useState, useEffect, useCallback } from 'react'

const THEME_KEY = 'stillscape-theme'

const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'How it works', href: '#how' },
  { label: "Who it's for", href: '#venues' },
  { label: 'Licensing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

/**
 * Stillscape header. The template layout renders <Header /> above the page and
 * ships no theme mechanism of its own, so the theme toggle lives here: it
 * writes data-theme onto <html>, which globals.css reads (an explicit choice
 * overrides prefers-color-scheme in both directions). Choice persists to
 * localStorage. Dark is the signature default.
 */
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  // undefined until mounted so we never assume a theme during SSR/first paint.
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const root = document.documentElement
    let saved: string | null = null
    try {
      saved = localStorage.getItem(THEME_KEY)
    } catch {
      /* localStorage unavailable (private mode) — fall back to system pref */
    }
    if (saved === 'dark' || saved === 'light') {
      root.setAttribute('data-theme', saved)
      setIsDark(saved === 'dark')
    } else {
      const prefersDark =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    const next = isDark ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      /* ignore persistence failure */
    }
    setIsDark(next === 'dark')
  }, [isDark])

  return (
    <header className={`ss-header${scrolled ? ' ss-scrolled' : ''}`} id="header">
      <div className="ss-wrap ss-nav">
        <a className="ss-brand ss-focus" href="#hero" aria-label="Stillscape home">
          <span className="ss-mark" aria-hidden="true" /> Stillscape
        </a>
        <nav className="ss-nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ss-nav-actions">
          <button
            className="ss-theme-toggle ss-focus"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            aria-pressed={isDark === true}
            title="Toggle theme"
          >
            {/* Before mount, isDark is undefined; render the moon as a stable
                default to avoid a hydration mismatch. */}
            {isDark === false ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="ss-btn ss-btn-primary ss-nav-cta-hide ss-focus" href="#pricing">
            License a collection
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
