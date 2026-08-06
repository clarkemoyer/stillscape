import React from 'react'
import type { SceneVariant } from './scenes'

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
  /** When set, real looping footage plays inside the panel instead of the CSS gradient. */
  videoSrc?: string
  poster?: string
}

/**
 * A luminous CSS-gradient "scene tile" standing in for a 4K nature loop.
 * There are no bitmap images by design — the glow, top-edge light, inner
 * vignette and the single ambient shimmer all come from CSS (see globals.css).
 * The preview control is a non-functional placeholder (no real footage yet).
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
  poster,
}) => {
  return (
    <div className={`ss-scene ${variantClass[variant]} ${className}`} role="img" aria-label={ariaLabel}>
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
      <div className="ss-scene-body" style={videoSrc ? { position: 'relative', zIndex: 1 } : undefined}>
        <div className="ss-top">
          <span className="ss-badge">{collectionLabel}</span>
          <span className="ss-runtime">{runtime}</span>
        </div>
        <div className="ss-bottom">
          <h3>{name}</h3>
          <div className="ss-sub">{sub}</div>
          <button
            className="ss-preview ss-focus"
            type="button"
            aria-label={videoSrc ? `${name} loop, playing` : `Preview ${name} loop (placeholder — no footage yet)`}
          >
            <span className="ss-tri" aria-hidden="true" /> {videoSrc ? 'now playing' : 'loop preview'}
          </button>
        </div>
      </div>
      {!videoSrc && (
        <span className="ss-placeholder-note" aria-hidden="true">
          footage placeholder
        </span>
      )}
    </div>
  )
}

export default ScenePanel
