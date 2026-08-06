import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/page-metadata'

const PAGE_NAME = 'Cookie Policy'
const CANONICAL_PATH = '/cookie-policy'

export const metadata: Metadata = pageMetadata({
  title: PAGE_NAME,
  description: 'How Stillscape uses cookies and similar technologies on this website.',
  canonical: CANONICAL_PATH,
})

export default function CookiePolicy() {
  return (
    <div className="mx-auto w-[90%] max-w-2xl pt-32 pb-24 leading-relaxed">
      <BreadcrumbSchema name={PAGE_NAME} path={CANONICAL_PATH} />
      <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">Effective date: 2026</p>
      <h1 className="mb-6 text-4xl font-light tracking-tight">Cookie Policy</h1>
      <p className="mb-8 opacity-80">
        This site uses a small number of cookies and similar technologies to function and to
        understand, in aggregate, how the catalog is used.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">Essential</h2>
      <p className="mb-6 opacity-80">
        Required for the site to work — for example, remembering your light or dark theme
        preference. These cannot be turned off through the site.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">Analytics</h2>
      <p className="mb-6 opacity-80">
        Optional, aggregated measurement that helps us see which scenes and pages draw interest. It
        does not identify you personally.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">Managing cookies</h2>
      <p className="mb-6 opacity-80">
        You can clear or block cookies in your browser settings at any time. Doing so may affect
        small conveniences like remembering your theme choice.
      </p>
    </div>
  )
}
