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

      <section>
        <div className="row">
          <div className="column">
            <h3>What libraries are included?</h3>
            <ul>
              <li>gatsby-plugin-react-helmet</li>
              <li>gatsby-plugin-image</li>
              <li>gatsby-plugin-mdx</li>
            </ul>
          </div>
          <div className="column">
            <h3>How is it structured?</h3>
            <ul>
              <li>layout.js as main wrapper</li>
              <li>useSiteMetadata.js for query site options</li>
              <li>use of js module.css</li>
            </ul>
          </div>
          <div className="column">
            <h3>To do</h3>
            <ul>
              <li>integrate scroll-reveal</li>
              <li>writing some base components like navbar</li>
              <li>include manifest and sitemap</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// Export component
export default IndexPage
