import React from 'react'

const catalog = [
  { label: 'Ancient Grove', href: '#collections' },
  { label: 'Mist & Moss', href: '#collections' },
  { label: 'Forest Water', href: '#collections' },
  { label: 'Forest Light', href: '#collections' },
]

const company = [
  { label: 'Why Stillscape', href: '#why' },
  { label: 'How it works', href: '#how' },
  { label: "Who it's for", href: '#venues' },
  { label: 'Licensing', href: '#pricing' },
]

const support = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Watch the reel', href: '#reel' },
  { label: 'Contact sales', href: '#pricing' },
  { label: 'License terms', href: '#faq' },
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="ss-footer">
      <div className="ss-wrap ss-foot-grid">
        <div className="ss-foot-brand">
          <a className="ss-brand ss-focus" href="#hero" aria-label="Stillscape home">
            <span className="ss-mark" aria-hidden="true" /> Stillscape
          </a>
          <p>
            Seamless 4K ambient nature loops, curated into collections and licensed for commercial
            spaces.
          </p>
        </div>
        <div className="ss-foot-col">
          <h4>Catalog</h4>
          {catalog.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="ss-foot-col">
          <h4>Company</h4>
          {company.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="ss-foot-col">
          <h4>Support</h4>
          {support.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="ss-wrap ss-foot-bottom">
        <span>© {year} Stillscape. All rights reserved.</span>
        <span>Living scenery for calm commercial spaces.</span>
      </div>
    </footer>
  )
}

export default Footer
