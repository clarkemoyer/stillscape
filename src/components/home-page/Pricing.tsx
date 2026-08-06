import React from 'react'

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

interface Tier {
  name: string
  price: string
  per?: string
  featured?: boolean
  flag?: string
  desc: string
  features: string[]
  cta: string
  primary?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Single Scene',
    price: '$149',
    per: 'one-time',
    desc: 'One forest loop, licensed for a single venue.',
    features: [
      'One 4K forest-bathing loop',
      'Single-venue commercial display license',
      'Unlimited in-venue plays, forever',
      'Ships silent — add your own audio',
    ],
    cta: 'License a scene',
  },
  {
    name: 'A Collection',
    price: '$399',
    per: 'one-time',
    featured: true,
    flag: 'Best value',
    primary: true,
    desc: 'A full themed collection of forest scenes.',
    features: [
      'A whole collection of loops (e.g. Ancient Grove)',
      'Single-venue commercial display license',
      'Free updates to those scenes',
      'Ships silent — add your own audio',
    ],
    cta: 'License a collection',
  },
  {
    name: 'Full Forest Library',
    price: '$899',
    per: 'one-time',
    desc: 'Every loop across all four forest collections.',
    features: [
      'All 12 loops, all four collections',
      'Single-venue commercial display license',
      'New forest scenes as they’re added',
      'Priority email support',
    ],
    cta: 'License the library',
  },
]

const Pricing: React.FC = () => {
  return (
    <section className="ss-section" id="pricing">
      <div className="ss-wrap">
        <div className="ss-section-head" style={{ maxWidth: '680px' }}>
          <span className="ss-eyebrow">Licensing</span>
          <h2>One-time pricing. Yours to play, forever.</h2>
          <p>
            Buy once and keep it — no subscription, no per-screen fee. Every purchase includes a
            written commercial display license and unlimited in-venue plays.
          </p>
        </div>

        <div className="ss-pricing">
          {tiers.map((t) => (
            <div className={`ss-tier${t.featured ? ' ss-featured' : ''}`} key={t.name}>
              {t.flag && <span className="ss-flag">{t.flag}</span>}
              <span className="ss-tname">{t.name}</span>
              <div className="ss-price">
                <span>{t.price}</span>
                {t.per && <span className="ss-per">{t.per}</span>}
              </div>
              <p className="ss-tdesc">{t.desc}</p>
              <ul>
                {t.features.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <a
                className={`ss-btn ss-btn-block ss-focus ${t.primary ? 'ss-btn-primary' : 'ss-btn-ghost'}`}
                href="#reel"
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="ss-tdesc" style={{ textAlign: 'center', margin: '18px auto 0', maxWidth: '620px' }}>
          More than one location? Multi-venue and franchise licensing starts at $399, and an
          optional matched forest soundscape can be added to any scene.
        </p>

        <div className="ss-badge-row">
          <span className="ss-mini-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            Commercial license included
          </span>
          <span className="ss-mini-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3v12M8 11l4 4 4-4M4 19h16" />
            </svg>
            Instant 4K download
          </span>
          <span className="ss-mini-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 5h16v11H4zM8 20h8" />
            </svg>
            Plays on any screen
          </span>
        </div>
      </div>
    </section>
  )
}

export default Pricing
