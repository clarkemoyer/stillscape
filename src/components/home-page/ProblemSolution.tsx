import React from 'react'

const problems = [
  'Screens sit black, or worse — stuck on a news feed and ad breaks.',
  "Random YouTube loops buffer, autoplay ads, and aren't licensed for business use.",
  "Blank walls feel unfinished; guests sense it even if they can't name it.",
  'Generic "relaxation" clips look dated and pixelated on a big 4K panel.',
]

const solutions = [
  'Cinematic 4K nature that loops seamlessly — no visible cut, ever.',
  "A full commercial license included, so you're covered for public display.",
  'Ships silent by design — layer it under your own music, or keep it hushed.',
  'Curated collections that match your palette and your crowd, not a stock-site grab bag.',
]

const ProblemSolution: React.FC = () => {
  return (
    <section className="ss-section" id="why">
      <div className="ss-wrap">
        <div className="ss-section-head">
          <span className="ss-eyebrow">The atmosphere gap</span>
          <h2>Dead TVs and blank walls quietly cheapen a beautiful room.</h2>
          <p>
            You spent months on the lighting, the finishes, the playlist. Then a black screen, a
            cable-news chyron, or a bare accent wall undoes the mood in a glance.
          </p>
        </div>
        <div className="ss-ps">
          <div className="ss-ps-card ss-problem">
            <h3>
              <span aria-hidden="true">😕</span> Without living scenery
            </h3>
            <ul className="ss-ps-list">
              {problems.map((p) => (
                <li key={p}>
                  <span className="ss-ps-icon" aria-hidden="true">
                    ✕
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="ss-ps-card ss-solution">
            <h3>
              <span aria-hidden="true">🌿</span> With Stillscape
            </h3>
            <ul className="ss-ps-list">
              {solutions.map((s) => (
                <li key={s}>
                  <span className="ss-ps-icon" aria-hidden="true">
                    ✓
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
