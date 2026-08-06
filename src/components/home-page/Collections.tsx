'use client'

import React, { useState } from 'react'
import ScenePanel from './ScenePanel'
import { scenes, collections, type CollectionKey } from './scenes'
import { assetPath } from '@/lib/assetPath'

type Filter = CollectionKey | 'all'

const Collections: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All scenes' },
    ...collections.map((c) => ({ key: c.key as Filter, label: c.label })),
  ]

  return (
    <section className="ss-section" id="collections">
      <div className="ss-wrap">
        <div className="ss-section-head">
          <span className="ss-eyebrow">The catalog</span>
          <h2>Curated collections, not a stock-footage firehose.</h2>
          <p>
            Every loop is graded for large-panel display and cut to run seamlessly for 10–20 minutes
            before it repeats. Filter by mood below.
          </p>
        </div>

        <div className="ss-coll-filters" role="group" aria-label="Filter scenes by collection">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className="ss-chip ss-focus"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="ss-grid-scenes">
          {scenes
            .filter((s) => filter === 'all' || s.collection === filter)
            .map((s) => (
              <ScenePanel
                key={s.name}
                variant={s.variant}
                collectionLabel={s.collectionLabel}
                name={s.name}
                sub={s.sub}
                runtime="Seamless"
                videoSrc={s.video ? assetPath(`/videos/${s.video}-tile.mp4`) : undefined}
                poster={s.video ? assetPath(`/posters/${s.video}.jpg`) : undefined}
                ariaLabel={
                  s.video
                    ? `4K forest loop: ${s.sub}, ${s.collectionLabel} collection`
                    : `Placeholder 4K loop: ${s.sub}, ${s.collectionLabel} collection`
                }
              />
            ))}
        </div>
        <p style={{ marginTop: '1.4rem', color: 'var(--ss-ink-faint)', fontSize: '0.85rem' }}>
          Tiles marked “now playing” are real mastered loops; the rest are styled previews while
          their footage is in production.
        </p>
      </div>
    </section>
  )
}

export default Collections
