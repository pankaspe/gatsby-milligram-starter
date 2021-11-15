import * as React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>404 not found</h1>
      <p>the requested page was not found, pleas go <Link to="/">back</Link></p>
    </Layout>
  )
}

export default NotFoundPage
