// Stillscape catalog — 12 forest-bathing (shinrin-yoku) scenes across 4
// all-forest collections. Every scene takes place inside a forest.
// Source of truth: C:\vscode\stillscape\catalog\scenes.csv.
// Each scene maps to a CSS-gradient "scene variant" (no bitmap images by design).

export type CollectionKey = 'grove' | 'mossfog' | 'brook' | 'light'
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
  { key: 'grove', label: 'Ancient Grove' },
  { key: 'mossfog', label: 'Mist & Moss' },
  { key: 'brook', label: 'Forest Water' },
  { key: 'light', label: 'Forest Light' },
]

export const scenes: Scene[] = [
  // Ancient Grove — old-growth cathedral forest
  {
    name: 'Fern Cathedral',
    collection: 'grove',
    collectionLabel: 'Ancient Grove',
    sub: 'Light shafts through a towering fern canopy',
    variant: 'verdant',
  },
  {
    name: 'Redwood Hush',
    collection: 'grove',
    collectionLabel: 'Ancient Grove',
    sub: 'Dust motes drifting between colossal trunks',
    variant: 'mist',
  },
  {
    name: 'The Elder Oak',
    collection: 'grove',
    collectionLabel: 'Ancient Grove',
    sub: 'One ancient oak, leaves turning in slow air',
    variant: 'verdant',
  },
  // Mist & Moss — foggy, wet, mossy forest
  {
    name: 'Mossveil Hollow',
    collection: 'mossfog',
    collectionLabel: 'Mist & Moss',
    sub: 'Fog threading over moss-draped boulders',
    variant: 'mist',
  },
  {
    name: 'Cloud Forest Drift',
    collection: 'mossfog',
    collectionLabel: 'Mist & Moss',
    sub: 'Low cloud weaving between dark trunks',
    variant: 'mist',
  },
  {
    name: 'Rainlace Canopy',
    collection: 'mossfog',
    collectionLabel: 'Mist & Moss',
    sub: 'Soft rain beading and falling from broad leaves',
    variant: 'verdant',
  },
  // Forest Water — streams & falls within the forest
  {
    name: 'Emerald Falls',
    collection: 'brook',
    collectionLabel: 'Forest Water',
    sub: 'A small fall into a mossy forest pool',
    variant: 'water',
  },
  {
    name: 'Brookstone Bend',
    collection: 'brook',
    collectionLabel: 'Forest Water',
    sub: 'A clear stream folding over pale stones',
    variant: 'water',
  },
  {
    name: 'Birch Creek Shallows',
    collection: 'brook',
    collectionLabel: 'Forest Water',
    sub: 'Sun-dappled shallows among white birch',
    variant: 'water',
  },
  // Forest Light — the forest at different times & weather
  {
    name: 'Goldhour Pines',
    collection: 'light',
    collectionLabel: 'Forest Light',
    sub: 'Warm low sun raking through a pine stand',
    variant: 'ember',
  },
  {
    name: 'Fireflies at Dusk',
    collection: 'light',
    collectionLabel: 'Forest Light',
    sub: 'A forest clearing lit by drifting fireflies',
    variant: 'dusk',
  },
  {
    name: 'Snowfall Cedars',
    collection: 'light',
    collectionLabel: 'Forest Light',
    sub: 'Fine snow settling through still cedars',
    variant: 'dusk',
  },
]
