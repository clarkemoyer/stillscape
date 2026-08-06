import React from 'react'
import ScenePanel from './ScenePanel'

const Hero: React.FC = () => {
  return (
    <section className="ss-hero" id="hero">
      <div className="ss-hero-glow" aria-hidden="true" />
      <div className="ss-wrap ss-hero-grid">
        <div className="ss-hero-copy">
          <span className="ss-eyebrow">Living scenery for calm commercial spaces</span>
          <h1>
            Turn every screen into a window onto <em>somewhere calmer</em>.
          </h1>
          <p className="ss-lead">
            Seamless 4K ambient nature loops, curated into collections and licensed for your bar,
            spa, studio, lobby, or waiting room. No subscription to a streaming box. Just download
            and play.
          </p>
          <div className="ss-hero-cta">
            <a className="ss-btn ss-btn-primary ss-focus" href="#pricing">
              License a collection
            </a>
            <a className="ss-btn ss-btn-ghost ss-focus" href="#reel">
              <span aria-hidden="true">▶</span>&nbsp;Watch the reel
            </a>
          </div>
          <div className="ss-hero-meta">
            <div className="ss-m">
              <span>4K</span>
              <span>UHD, HDR-ready masters</span>
            </div>
            <div className="ss-m">
              <span>12</span>
              <span>seamless loops &amp; growing</span>
            </div>
            <div className="ss-m">
              <span>∞</span>
              <span>royalty-free in-venue plays</span>
            </div>
          </div>
        </div>

        <div className="ss-hero-showcase">
          <ScenePanel
            variant="verdant"
            collectionLabel="Verdant Sanctuary"
            name="Fern Cathedral"
            sub="A shaft of warm light through a slow canopy"
            runtime="Seamless loop"
            ariaLabel="Placeholder for a 4K nature loop: a shaft of warm light through a fern canopy, Verdant Sanctuary collection"
          />
          <div className="ss-float ss-tl" aria-hidden="true">
            <span className="ss-dot" /> Playing on Lobby TV · 4K
          </div>
          <div className="ss-float ss-br" aria-hidden="true">
            🔇 Ships silent · add your own audio
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
