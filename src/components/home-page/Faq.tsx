import React from 'react'

// Native <details>/<summary> accordion: fully accessible and works without JS
// (important for a static export). The +/× marker animates via CSS on [open]
// (see .ss-faq in globals.css). The first item is open by default.
interface FaqItem {
  q: string
  a: React.ReactNode
  open?: boolean
}

const items: FaqItem[] = [
  {
    q: 'Is there audio?',
    open: true,
    a: (
      <>
        <strong>No — every loop ships silent by design.</strong> That&apos;s deliberate. Commercial
        spaces almost always run their own music or need quiet, so the scenery is purely visual. Add
        your own audio underneath it, or let it play hushed. You&apos;ll never fight competing
        soundtracks.
      </>
    ),
  },
  {
    q: 'Is a commercial license included?',
    a: (
      <>
        <strong>Yes. A commercial public-display license is included with every tier.</strong>{' '}
        You&apos;re cleared to play the loops on any screen inside your licensed venue(s), during
        business hours, for as long as your license is active. No separate performance fee, no
        royalties per play. Enterprise adds a formal master-services agreement.
      </>
    ),
  },
  {
    q: 'What format and quality do I get?',
    a: (
      <>
        4K UHD (3840×2160) MP4 masters, HDR-ready, graded for large-panel display. Each loop is
        engineered to repeat seamlessly for 10–20 minutes with no visible cut. Need a different
        resolution or codec for your signage CMS? Enterprise delivery covers custom formats.
      </>
    ),
  },
  {
    q: 'What hardware do I need?',
    a: (
      <>
        Almost anything. If your screen can play a video file — a smart TV, a media player, a USB
        stick, a mini-PC, or a digital-signage box — you&apos;re set. There&apos;s no app to install
        and no monthly streaming subscription. Download once, set it to loop, and walk away.
      </>
    ),
  },
  {
    q: 'How is this different from a free YouTube loop?',
    a: (
      <>
        Free clips autoplay ads, buffer on weak Wi-Fi, drop to low resolution, and — critically —
        usually aren&apos;t licensed for commercial or public display. Stillscape masters are
        ad-free, play offline in true 4K, loop without a visible seam, and come with the license you
        actually need for a business.
      </>
    ),
  },
  {
    q: 'Can I license just one collection?',
    a: (
      <>
        Yes. The Single-Venue tier lets you license one collection for one location. If you&apos;d
        like the full catalog or coverage across multiple addresses, Multi-Venue and Enterprise
        scale up from there.
      </>
    ),
  },
  {
    q: 'Do you add new scenes?',
    a: (
      <>
        Regularly. New loops are added each season across the collections. Multi-Venue and
        Enterprise licenses include access to new scenes as they&apos;re released during your active
        term.
      </>
    ),
  },
]

const Faq: React.FC = () => {
  return (
    <section className="ss-section" id="faq">
      <div className="ss-wrap">
        <div className="ss-section-head ss-center" style={{ maxWidth: '640px' }}>
          <span className="ss-eyebrow ss-center">FAQ</span>
          <h2>The details, answered.</h2>
        </div>
        <div className="ss-faq">
          {items.map((item) => (
            <details className="ss-faq-item" key={item.q} open={item.open}>
              <summary className="ss-focus">
                {item.q}
                <span className="ss-plus" aria-hidden="true" />
              </summary>
              <div className="ss-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
