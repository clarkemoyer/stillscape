import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/page-metadata'

const PAGE_NAME = 'Terms & Commercial License'
const CANONICAL_PATH = '/terms-of-service'

export const metadata: Metadata = pageMetadata({
  title: PAGE_NAME,
  description:
    'Terms of use and the commercial display license that governs Stillscape ambient video loops.',
  canonical: CANONICAL_PATH,
})

export default function TermsOfService() {
  return (
    <div className="mx-auto w-[90%] max-w-2xl pt-32 pb-24 leading-relaxed">
      <BreadcrumbSchema name={PAGE_NAME} path={CANONICAL_PATH} />
      <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">Effective date: 2026</p>
      <h1 className="mb-6 text-4xl font-light tracking-tight">Terms &amp; Commercial License</h1>
      <p className="mb-8 opacity-80">
        These terms govern the purchase and use of Stillscape ambient video loops (the{' '}
        <strong className="font-medium">Licensed Content</strong>). They are a plain-language
        summary of the full End-User Commercial Display License delivered with each order. This page
        is provided for transparency and is not legal advice.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">1. What you may do</h2>
      <p className="mb-6 opacity-80">
        A purchase grants a non-exclusive, non-transferable license to publicly display the Licensed
        Content on any screens within your own licensed premises — the physical business
        location(s) covered by your tier (Single-Venue, Multi-Venue, or Enterprise). Play it on
        projectors, TVs, and digital-signage players as ambient atmosphere.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">2. What you may not do</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6 opacity-80">
        <li>Resell, redistribute, sublicense, or share the files.</li>
        <li>Re-upload the loops as stock footage, NFTs, or to public video platforms.</li>
        <li>Use them in film, broadcast, or paid advertising productions.</li>
        <li>Use the Licensed Content to train machine-learning models.</li>
        <li>Display them at locations or events you do not own or operate.</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-medium">3. Audio is not included</h2>
      <p className="mb-6 opacity-80">
        Loops ship <strong className="font-medium">silent by default</strong>. They contain no
        licensed music. Any audio you add is your responsibility, including any public-performance
        rights (e.g. ASCAP, BMI, SESAC) that may apply when music is played in a venue. An optional
        Soundscape Add-On, when purchased, is separately licensed and warranted.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">4. About the imagery</h2>
      <p className="mb-6 opacity-80">
        The Licensed Content is produced with AI-assisted tools. You are licensed to display the
        finished, edited work; the license does not grant copyright ownership or exclusivity, and
        does not promise that similar imagery will not exist elsewhere.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">5. Refunds</h2>
      <p className="mb-6 opacity-80">
        Because the Licensed Content is delivered as digital downloads, all sales are final once
        files are accessed, except where required by law or in the case of a defective file we
        cannot replace.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-medium">6. Warranty &amp; liability</h2>
      <p className="mb-6 opacity-80">
        The Licensed Content is provided &ldquo;as is.&rdquo; To the maximum extent permitted by
        law, Stillscape&rsquo;s total liability is limited to the fees you paid for the order in
        question.
      </p>

      <p className="mt-10 text-sm opacity-60">
        The complete license agreement governs in the event of any conflict with this summary.
      </p>
    </div>
  )
}
