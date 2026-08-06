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
    name: 'Single-Venue',
    price: '$149',
    per: '/ year',
    desc: 'For one location that wants a signature look.',
    features: [
      'One collection of your choice',
      '4K masters, licensed for one address',
      'Unlimited in-venue plays',
      'Commercial public-display license',
    ],
    cta: 'License Single-Venue',
  },
  {
    name: 'Multi-Venue',
    price: '$499',
    per: '/ year',
    featured: true,
    flag: 'Most popular',
    primary: true,
    desc: 'For small groups and franchises, up to 5 locations.',
    features: [
      'Every collection in the catalog',
      'Licensed for up to 5 addresses',
      'New scenes added each season',
      'Priority email support',
    ],
    cta: 'License Multi-Venue',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For chains, signage networks, and brand rollouts.',
    features: [
      'Unlimited locations & CMS delivery',
      'Custom & branded scene commissions',
      'Master-services agreement & invoicing',
      'Dedicated account manager',
    ],
    cta: 'Talk to us',
  },
]

const Pricing: React.FC = () => {
  return (
    <section className="ss-section" id="pricing">
      <div className="ss-wrap">
        <div className="ss-section-head" style={{ maxWidth: '680px' }}>
          <span className="ss-eyebrow">Licensing</span>
          <h2>Straightforward commercial licensing.</h2>
          <p>
            Every tier includes a commercial public-display license and unlimited in-venue plays.
            Prices below are placeholders — swap for your live rates.
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
              <div className="ss-ph">placeholder price</div>
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
