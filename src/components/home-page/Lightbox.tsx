'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

/**
 * Full-screen video lightbox with a shared, page-wide state.
 *
 * Wrap the page in <LightboxProvider>; any client component can then call
 * useLightbox().openLightbox(src, { title, trigger }) to play a video full
 * screen WITH sound and native controls. A single <Lightbox> modal instance
 * lives in the provider, so scene tiles and the hero share one player.
 *
 * Accessibility: role="dialog" + aria-modal, focus moves to the close button
 * on open, Tab is trapped inside the dialog, Escape and backdrop clicks close
 * it, body scroll is locked while open, and focus returns to the trigger on
 * close. The open animation is disabled under prefers-reduced-motion (see the
 * .ss-lightbox rules in globals.css).
 */

interface OpenOptions {
  title?: string
  /** The element that opened the lightbox; focus returns here on close. */
  trigger?: HTMLElement | null
}

interface LightboxContextValue {
  openLightbox: (src: string, opts?: OpenOptions) => void
}

// No-op fallback so a tile rendered outside a provider (e.g. an isolated unit
// test) degrades gracefully instead of throwing.
const LightboxContext = createContext<LightboxContextValue>({ openLightbox: () => {} })

export function useLightbox(): LightboxContextValue {
  return useContext(LightboxContext)
}

interface LightboxState {
  src: string
  title?: string
  trigger?: HTMLElement | null
}

const FOCUSABLE =
  'button, [href], video, input, select, textarea, [tabindex]:not([tabindex="-1"])'

interface LightboxProps extends LightboxState {
  onClose: () => void
}

const Lightbox: React.FC<LightboxProps> = ({ src, title, trigger, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Capture the element to restore focus to (prefer the explicit trigger).
    const restoreTo =
      trigger ?? (document.activeElement as HTMLElement | null)

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.hasAttribute('disabled'))
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement
      if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      // Return focus to whatever opened the lightbox.
      restoreTo?.focus?.()
    }
  }, [onClose, trigger])

  return (
    <div
      className="ss-lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="ss-lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title ? `${title} — full-screen video` : 'Video player'}
        ref={dialogRef}
      >
        <button
          type="button"
          className="ss-lightbox-close ss-focus"
          onClick={onClose}
          aria-label="Close video"
          ref={closeRef}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {/* key forces a fresh element (and playback) when the src changes. */}
        <video
          key={src}
          className="ss-lightbox-video"
          src={src}
          controls
          autoPlay
          playsInline
          preload="auto"
        />
        {title && <p className="ss-lightbox-title">{title}</p>}
      </div>
    </div>
  )
}

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<LightboxState | null>(null)

  const openLightbox = useCallback((src: string, opts?: OpenOptions) => {
    setState({
      src,
      title: opts?.title,
      trigger:
        opts?.trigger ??
        (typeof document !== 'undefined'
          ? (document.activeElement as HTMLElement | null)
          : null),
    })
  }, [])

  const close = useCallback(() => setState(null), [])

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      {state && (
        <Lightbox src={state.src} title={state.title} trigger={state.trigger} onClose={close} />
      )}
    </LightboxContext.Provider>
  )
}

/**
 * A button that opens the lightbox with a given src. Handy for the hero's
 * "Watch the reel" CTA, which lives inside a server component and so can't
 * hold its own click handler.
 */
export const LightboxTrigger: React.FC<{
  src: string
  title?: string
  className?: string
  children: React.ReactNode
}> = ({ src, title, className, children }) => {
  const { openLightbox } = useLightbox()
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => openLightbox(src, { title, trigger: e.currentTarget })}
    >
      {children}
    </button>
  )
}

export default Lightbox
