// Import React
import * as React from 'react'

import Layout from '../components/layout'
import { Seo } from '../components/seo'
import { useSiteMetadata } from '../components/utils/useSiteMetadata'

// Define component
const IndexPage = () => {

  // declare SEO var
  const {
    site: {
      siteMetadata: { title, description, keywords, url, lang },
      },
  } = useSiteMetadata()

  return (
    <Layout>

      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        lang={lang}
        type="website"
        page="homepage"
        path=""
      />

      <h1>{title}</h1>
      <p>{description}</p>
    </Layout>
  )
}

// Export component
export default IndexPage
