import React from 'react'

const PickIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7h18M3 12h18M3 17h10" />
    <circle cx="18" cy="17" r="3" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v12M8 11l4 4 4-4" />
    <path d="M4 19h16" />
  </svg>
)

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 18v3" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
  </svg>
)

const steps = [
  {
    num: 'STEP 01',
    icon: <PickIcon />,
    title: 'Pick your scenery',
    body: "Browse curated collections and choose the loops that fit your room's mood, light, and palette. Preview before you license.",
  },
  {
    num: 'STEP 02',
    icon: <DownloadIcon />,
    title: 'Download the masters',
    body: 'Get 4K MP4 files instantly — no streaming box, no buffering. Drop them on a USB stick, media player, or your signage CMS.',
  },
  {
    num: 'STEP 03',
    icon: <PlayIcon />,
    title: 'Play on any screen',
    body: 'Set it to loop and walk away. Works on any TV, projector, or video wall. It runs all day, silently, and never shows an ad.',
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section className="ss-section ss-alt" id="how">
      <div className="ss-wrap">
        <div className="ss-section-head">
          <span className="ss-eyebrow">How it works</span>
          <h2>Three steps from checkout to ambience.</h2>
          <p>
            No hardware to buy, no app to install, no monthly streaming fee. If your screen can open
            a video file or a USB stick, you&apos;re ready.
          </p>
        </div>
        <div className="ss-steps">
          {steps.map((s) => (
            <div className="ss-step" key={s.num}>
              <span className="ss-num">{s.num}</span>
              <div className="ss-ic" aria-hidden="true">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
