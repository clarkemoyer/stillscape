/**
 * Central site configuration.
 *
 * EDIT THIS FILE to customize the site. Most values that vary between
 * deployments flow from here so pages, metadata, sitemap, robots, and
 * security headers stay in sync.
 *
 * (Adapted from the Free For Charity single-page template for Stillscape,
 * a commercial product site — nonprofit-specific fields are intentionally
 * left empty so their schema/UI output is omitted.)
 */

export type SiteSocialLink = {
  /** Display label, also used for aria-label. */
  label: string
  /** Absolute https URL. Empty string disables the link. */
  href: string
}

export type SiteAddress = {
  /** Heading shown above the address (e.g. "Main Address"). */
  label: string
  /** Address text, one entry per visual line. */
  lines: readonly string[]
  /** Google Maps (or other) link opened when the address is clicked. */
  mapUrl: string
}

export type SiteConfig = {
  /** Display name (used in titles, OG/Twitter cards). */
  name: string
  /** Short tagline used in the default title template. */
  tagline: string
  /** Plain-language description used for the <meta description> tag. */
  description: string
  /** Shorter description tuned for OG/Twitter social card previews. */
  shortDescription: string
  /** Canonical production URL with no trailing slash. */
  url: string
  /** Twitter / X handle including the leading @. Empty string omits it. */
  twitterHandle: string
  /** Primary contact email. Empty string omits it. */
  contactEmail: string
  /** SEO keywords used in the root layout metadata. */
  keywords: readonly string[]
  /** Default theme color (used by manifest and meta tag). */
  themeColor: string
  /** Where the vulnerability disclosure policy lives on this site. */
  vulnerabilityDisclosurePath: string
  /** Social links displayed in the footer. */
  social: readonly SiteSocialLink[]
  /** Tax ID / EIN. Empty string omits it. */
  ein: string
  /** Founding year, emitted as schema.org foundingDate. Omit to skip. */
  foundingDate?: string
  /** schema.org nonprofit status URL. Omit for commercial sites. */
  nonprofitStatus?: string
  /** Other names the org is known by. Omit to skip. */
  alternateNames?: readonly string[]
  /** Primary phone number. Empty values omit it. */
  phone: { display: string; tel: string }
  /** Physical addresses shown in the footer contact column. */
  addresses: readonly SiteAddress[]
  /** Transparency profile links. Empty values omit them. */
  guidestar: { profileUrl: string; directProfileUrl: string }
  /** Attribution to a supporting organization. */
  supportedBy: { name: string; url: string; hubUrl: string }
  /** Parent / umbrella organization when "a project of" another org. Omit if standalone. */
  parentOrg?: { name: string; url: string; hubUrl: string }
  /** Label appended after the name in the footer copyright line. Empty renders just the name. */
  taxStatusLabel: string
  /** Visibility flags for template home-page sections not used by this site. */
  sections: {
    showEndowment: boolean
    showPrograms: boolean
    showEvents: boolean
  }
  /** Third-party integration endpoints (unused here; left empty). */
  integrations: {
    zeffyDonationUrl: string
    idealistUrl: string
    sociableKitEventsWidgetUrl: string
    microsoftFormUrl: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Stillscape',
  tagline: 'Living Scenery for Calm Commercial Spaces',
  description:
    'Stillscape licenses seamless 4K ambient nature video loops — living scenery for bars, spas, studios, lobbies, and waiting rooms. Turn dead TVs and blank walls into calm, moving atmosphere.',
  shortDescription:
    'Seamless 4K ambient nature video loops, licensed for commercial spaces. Living scenery for calm rooms.',
  url: 'https://clarkemoyer.github.io/stillscape',
  twitterHandle: '',
  contactEmail: '',
  keywords: [
    'ambient video',
    'nature video loops',
    'digital signage',
    'looping background video',
    'relaxing video for business',
    'spa ambiance',
    '4K nature loop',
    'commercial display license',
  ],
  themeColor: '#08110e',
  vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy',
  social: [],
  ein: '',
  phone: { display: '', tel: '' },
  addresses: [],
  guidestar: { profileUrl: '', directProfileUrl: '' },
  supportedBy: {
    name: 'Stillscape',
    url: 'https://clarkemoyer.github.io/stillscape',
    hubUrl: 'https://clarkemoyer.github.io/stillscape',
  },
  taxStatusLabel: '',
  sections: {
    showEndowment: false,
    showPrograms: false,
    showEvents: false,
  },
  integrations: {
    zeffyDonationUrl: '',
    idealistUrl: '',
    sociableKitEventsWidgetUrl: '',
    microsoftFormUrl: '',
  },
}

/**
 * Compose a fully-qualified URL on this site.
 *
 * The path is required to be a same-origin absolute path (starting with `/`).
 * This rules out protocol-relative inputs like `//evil.com` that could leak
 * into a future redirect or canonical link.
 */
export function siteUrl(path = '/'): string {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) {
    throw new TypeError(
      `siteUrl: path must be a same-origin absolute path starting with a single "/" (got: ${JSON.stringify(path)})`
    )
  }
  const base = siteConfig.url.replace(/\/$/, '')
  return `${base}${path}`
}

/**
 * Returns the Twitter handle with a guaranteed leading `@`.
 * Returns `undefined` (so the meta tag is omitted) if the handle is empty.
 */
export function twitterSite(): string | undefined {
  const raw = siteConfig.twitterHandle.trim().replace(/^@+/, '')
  if (!raw) return undefined
  return `@${raw}`
}

/** Returns the OG/Twitter card description, falling back to the longer page description. */
export function cardDescription(): string {
  return siteConfig.shortDescription.trim() || siteConfig.description
}
