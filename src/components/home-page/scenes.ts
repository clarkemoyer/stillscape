// Stillscape catalog — the 12 scenes across 4 collections.
// Source of truth: C:\vscode\stillscape\catalog\scenes.csv (names + moods),
// presented in the index.html visual style. Each scene maps to a CSS-gradient
// "scene variant" (there are no bitmap images by design).

export type CollectionKey = 'water' | 'ember' | 'verdant' | 'coastal'
export type SceneVariant = 'water' | 'ember' | 'verdant' | 'coastal' | 'mist' | 'dusk'

export interface Collection {
  key: CollectionKey
  label: string
}

export interface Scene {
  name: string
  collection: CollectionKey
  collectionLabel: string
  sub: string
  variant: SceneVariant
}

export const collections: Collection[] = [
  { key: 'water', label: 'Water & Stone' },
  { key: 'ember', label: 'Ember & Hearth' },
  { key: 'verdant', label: 'Verdant Sanctuary' },
  { key: 'coastal', label: 'Coastal Calm' },
]

export const scenes: Scene[] = [
  // Water & Stone
  {
    name: 'Mossveil Falls',
    collection: 'water',
    collectionLabel: 'Water & Stone',
    sub: 'A grotto waterfall breathing cool mist',
    variant: 'water',
  },
  {
    name: 'Slatebrook Shallows',
    collection: 'water',
    collectionLabel: 'Water & Stone',
    sub: 'Clear stream over pale river stones',
    variant: 'water',
  },
  {
    name: 'The Onsen Stone',
    collection: 'water',
    collectionLabel: 'Water & Stone',
    sub: 'Steam curling off a warm spring at blue hour',
    variant: 'mist',
  },
  // Ember & Hearth
  {
    name: 'Hearthlight Cabin',
    collection: 'ember',
    collectionLabel: 'Ember & Hearth',
    sub: 'A slow fire throwing warm flicker',
    variant: 'ember',
  },
  {
    name: 'Candle Apothecary',
    collection: 'ember',
    collectionLabel: 'Ember & Hearth',
    sub: 'Pillar candles guttering against amber glass',
    variant: 'ember',
  },
  {
    name: 'Lantern Snowfall',
    collection: 'ember',
    collectionLabel: 'Ember & Hearth',
    sub: 'A warm lantern as fine snow drifts by night',
    variant: 'dusk',
  },
  // Verdant Sanctuary
  {
    name: 'Fern Cathedral',
    collection: 'verdant',
    collectionLabel: 'Verdant Sanctuary',
    sub: 'A shaft of light through a canopy of ferns',
    variant: 'verdant',
  },
  {
    name: 'Monsoon Glass',
    collection: 'verdant',
    collectionLabel: 'Verdant Sanctuary',
    sub: 'Warm rain streaming down a greenhouse pane',
    variant: 'verdant',
  },
  {
    name: 'Koi Reflection',
    collection: 'verdant',
    collectionLabel: 'Verdant Sanctuary',
    sub: 'Slow koi beneath still water at golden hour',
    variant: 'mist',
  },
  // Coastal Calm
  {
    name: 'Tidepool Dawn',
    collection: 'coastal',
    collectionLabel: 'Coastal Calm',
    sub: 'Gentle swells breathing over dark rock',
    variant: 'coastal',
  },
  {
    name: 'Harbor Mist',
    collection: 'coastal',
    collectionLabel: 'Coastal Calm',
    sub: 'Fog drifting over a glassy harbor',
    variant: 'coastal',
  },
  {
    name: 'Seagrass Drift',
    collection: 'coastal',
    collectionLabel: 'Coastal Calm',
    sub: 'Green seagrass swaying in clear shallows',
    variant: 'dusk',
  },
]
