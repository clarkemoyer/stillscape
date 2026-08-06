import React from 'react'
import HomePage from '@/app/home-page'
import WebsiteSchema from '@/components/seo/WebsiteSchema'

const page = () => {
  return (
    <div>
      <WebsiteSchema />
      <HomePage />
    </div>
  )
}

export default page
