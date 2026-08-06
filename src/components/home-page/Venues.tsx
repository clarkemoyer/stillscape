import React from 'react'

const venues = [
  {
    icon: '🍸',
    title: 'Craft bars & lounges',
    body: 'Trade the sports feed for slow embers or a moody coastline. Sets the tone without competing with conversation.',
  },
  {
    icon: '🧖',
    title: 'Spas & wellness',
    body: 'Extend the treatment-room calm into the lobby and relaxation areas. Silent by default, so it never clashes with your soundscape.',
  },
  {
    icon: '🧘',
    title: 'Yoga & movement studios',
    body: 'A living backdrop for practice and reset. Project it wall-sized or run it on a screen at the front of the room.',
  },
  {
    icon: '🏨',
    title: 'Hotel & office lobbies',
    body: 'Make a first impression that feels considered. Replace the black video wall with something guests actually pause on.',
  },
  {
    icon: '🦷',
    title: 'Medical & dental waiting rooms',
    body: 'Lower waiting-room anxiety with calm, non-clinical scenery — no news cycle, no ads, no volume required.',
  },
  {
    icon: '🍽️',
    title: 'Upscale restaurants',
    body: 'Warm a bare accent wall or bar-back screen with scenery graded to match your candlelight and finishes.',
  },
]

const Venues: React.FC = () => {
  return (
    <section className="ss-section ss-alt" id="venues">
      <div className="ss-wrap">
        <div className="ss-section-head">
          <span className="ss-eyebrow">Who it&apos;s for</span>
          <h2>Built for rooms where the mood is the product.</h2>
          <p>
            Different spaces, one need: scenery that lowers the temperature of a room without asking
            for attention.
          </p>
        </div>
        <div className="ss-venues">
          {venues.map((v) => (
            <div className="ss-venue" key={v.title}>
              <div className="ss-vic" aria-hidden="true">
                {v.icon}
              </div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Venues
