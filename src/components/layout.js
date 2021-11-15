// Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import 'milligram'
import { useSiteMetadata } from '../components/utils/useSiteMetadata'
import { headContent } from './layout.module.css'

// Define component layout
const Layout = ({ children }) => {

  // declare SEO var
  const {
    site: {
      siteMetadata: { title, description },
      },
  } = useSiteMetadata()

  return (
    <>
      <header className={headContent}>
        <StaticImage
          alt="logo"
          src="../images/logo.png"
          height={80}
          width={50}
        />
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <main className="container">
        {children}
      </main>
    </>
  )
}

// Export component
export default Layout
