import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/page-metadata'

const PAGE_NAME = 'Privacy Policy'
const CANONICAL_PATH = '/privacy-policy'

export const metadata: Metadata = pageMetadata({
  title: PAGE_NAME,
  description: 'How Stillscape handles the limited information collected through this website.',
  canonical: CANONICAL_PATH,
})

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto w-[90%] max-w-2xl pt-32 pb-24 leading-relaxed">
      <BreadcrumbSchema name={PAGE_NAME} path={CANONICAL_PATH} />
      <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">Effective date: 2026</p>
      <h1 className="mb-6 text-4xl font-light tracking-tight">Privacy Policy</h1>
      <p className="mb-8 opacity-80">
        Stillscape is a small catalog site for licensing ambient video loops. We keep data
        collection to a minimum and never sell personal information.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">Information we collect</h2>
      <p className="mb-6 opacity-80">
        If you contact us or place an order, we receive the details you provide — such as your name,
        email, and business name — solely to fulfill and support that request. Basic, aggregated
        analytics may be used to understand which pages are visited; these do not identify you
        individually.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">How we use it</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 opacity-80">
        <li>To deliver purchased files and license documents.</li>
        <li>To respond to questions and provide support.</li>
        <li>To improve the catalog and this website.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-medium">Payment processing</h2>
      <p className="mb-6 opacity-80">
        Purchases are handled by third-party marketplaces or payment processors that maintain their
        own privacy practices. We do not store your full payment details.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">Your choices</h2>
      <p className="mb-6 opacity-80">
        You may request access to, correction of, or deletion of the information you have shared with
        us at any time by getting in touch.
      </p>

      <p className="mt-10 text-sm opacity-60">
        Questions about this policy? Use the contact options on the site and we will respond.
      </p>
    </div>
  )
}
