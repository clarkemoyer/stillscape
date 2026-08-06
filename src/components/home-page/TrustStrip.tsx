import React from 'react'

const venues = [
  'Craft Bars & Lounges',
  'Day Spas',
  'Yoga & Wellness',
  'Hotel Lobbies',
  'Dental & Medical',
  'Fine Dining',
]

const TrustStrip: React.FC = () => {
  return (
    <div className="ss-trust">
      <div className="ss-wrap">
        <span className="ss-label">Curated for spaces like</span>
        {venues.map((v) => (
          <span className="ss-logo" key={v}>
            <span className="ss-g" aria-hidden="true" /> {v}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrustStrip
