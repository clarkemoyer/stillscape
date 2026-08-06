import React from 'react'
import { assetPath } from '@/lib/assetPath'

// "In the room" band — a real venue mockup showing a forest loop on a screen.
const InSitu: React.FC = () => {
  return (
    <section className="ss-section" id="in-situ">
      <div className="ss-wrap">
        <div className="ss-section-head" style={{ maxWidth: '680px' }}>
          <span className="ss-eyebrow">In the room</span>
          <h2>What it looks like on your wall.</h2>
          <p>
            One screen, one forest. Guests feel the calm before they can name it — the whole reason
            they linger a little longer.
          </p>
        </div>
        <img
          src={assetPath('/mockup-venue.png')}
          alt="A Stillscape misty-pine forest loop playing on a large backlit screen in a warm, calm spa lounge"
          loading="lazy"
          decoding="async"
          width={1080}
          height={1350}
          style={{
            width: '100%',
            maxWidth: '640px',
            height: 'auto',
            margin: '0 auto',
            display: 'block',
            borderRadius: '18px',
          }}
        />
      </div>
    </section>
  )
}

export default InSitu
