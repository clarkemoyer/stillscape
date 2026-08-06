import React from 'react'

const Reel: React.FC = () => {
  return (
    <section className="ss-section" id="reel">
      <div className="ss-wrap">
        <div className="ss-cta-band">
          <span className="ss-eyebrow">Watch the reel</span>
          <h2>See how a room changes when the screens come alive.</h2>
          <p>
            Preview the full catalog reel, or license a collection today and have living scenery on
            your screens by this evening.
          </p>
          <div className="ss-hero-cta" style={{ justifyContent: 'center' }}>
            <a className="ss-btn ss-btn-primary ss-focus" href="#pricing">
              License a collection
            </a>
            <a className="ss-btn ss-btn-ghost ss-focus" href="#collections">
              <span aria-hidden="true">▶</span>&nbsp;Watch the reel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reel
