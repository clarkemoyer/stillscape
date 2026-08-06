import React from 'react'

const quotes = [
  {
    text: 'We swapped the sports channel behind the bar for the Ember & Hearth loop. Guests linger longer and the room finally feels like ours.',
    name: 'Placeholder Name',
    role: 'Owner, Craft Lounge',
  },
  {
    text: 'Our relaxation lounge needed something calming but silent. Stillscape runs all day under our own music and never buffers or shows an ad.',
    name: 'Placeholder Name',
    role: 'Director, Day Spa',
  },
  {
    text: "The waiting-room TV used to blare cable news. Now it's a quiet forest. Patient complaints about the wait dropped noticeably.",
    name: 'Placeholder Name',
    role: 'Office Manager, Dental Practice',
  },
]

const Proof: React.FC = () => {
  return (
    <section className="ss-section ss-alt" id="proof">
      <div className="ss-wrap">
        <div className="ss-section-head">
          <span className="ss-eyebrow">
            Social proof <span className="ss-ph-tag">placeholder</span>
          </span>
          <h2>Quietly loved by the rooms that use it.</h2>
          <p>
            Sample testimonials shown as placeholders — replace with your real venue quotes and
            names.
          </p>
        </div>
        <div className="ss-quotes">
          {quotes.map((q) => (
            <div className="ss-quote" key={q.text}>
              <div className="ss-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
              <div className="ss-who">
                <span className="ss-av" aria-hidden="true" />
                <div>
                  <div className="ss-n">{q.name}</div>
                  <div className="ss-r">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proof
