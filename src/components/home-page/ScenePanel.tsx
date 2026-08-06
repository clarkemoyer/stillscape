'use client'

import React from 'react'
import type { SceneVariant } from './scenes'
import { useLightbox } from './Lightbox'

const variantClass: Record<SceneVariant, string> = {
  water: 's-water',
  ember: 's-ember',
  verdant: 's-verdant',
  coastal: 's-coastal',
  mist: 's-mist',
  dusk: 's-dusk',
}

interface ScenePanelProps {
  variant: SceneVariant
  collectionLabel: string
  name: string
  sub: string
  runtime?: string
  className?: string
  ariaLabel: string
  /** Light inline preview loop (the `-tile.mp4`) that autoplays muted in the tile. */
  videoSrc?: string
  /** Higher-res master played full-screen with sound in the lightbox. Falls back to videoSrc. */
  fullSrc?: string
  poster?: string
}

/**
 * A luminous scene tile. When it has footage (videoSrc), a muted inline loop
 * autoplays as a preview and the whole tile becomes a "▶ Watch" control that
 * opens the shared lightbox to play the master full screen, with sound. When
 * there's no footage yet, it falls back to the CSS-gradient placeholder.
 */
const ScenePanel: React.FC<ScenePanelProps> = ({
  variant,
  collectionLabel,
  name,
  sub,
  runtime = 'Seamless loop',
  className = '',
  ariaLabel,
  videoSrc,
  fullSrc,
  poster,
}) => {
  const { openLightbox } = useLightbox()
  const watchSrc = fullSrc ?? videoSrc
  const watchable = Boolean(watchSrc)

  return (
    <div
      className={`ss-scene ${variantClass[variant]} ${watchable ? 'ss-watchable' : ''} ${className}`}
      role={watchable ? undefined : 'img'}
      aria-label={watchable ? undefined : ariaLabel}
    >
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'inherit',
            zIndex: 0,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div
        className="ss-scene-body"
        style={videoSrc ? { position: 'relative', zIndex: 1 } : undefined}
      >
        <div className="ss-top">
          <span className="ss-badge">{collectionLabel}</span>
          <span className="ss-runtime">{runtime}</span>
        </div>
        <div className="ss-bottom">
          <h3>{name}</h3>
          <div className="ss-sub">{sub}</div>
          {watchable ? (
            // Visual affordance only — the whole-tile overlay button below is
            // the real, focusable control (avoids nesting interactive elements).
            <span className="ss-watch-pill" aria-hidden="true">
              <span className="ss-tri" /> Watch
            </span>
          ) : (
            <button
              className="ss-preview ss-focus"
              type="button"
              aria-label={`Preview ${name} loop (placeholder — no footage yet)`}
            >
              <span className="ss-tri" aria-hidden="true" /> loop preview
            </button>
          )}
        </div>
      </div>

      {watchable && (
        <button
          type="button"
          className="ss-scene-watch ss-focus"
          aria-label={`Watch ${name} — full screen, with sound`}
          onClick={(e) => openLightbox(watchSrc as string, { title: name, trigger: e.currentTarget })}
        />
      )}

      {!videoSrc && (
        <span className="ss-placeholder-note" aria-hidden="true">
          footage placeholder
        </span>
      )}
    </div>
  )
}

export default ScenePanel
