// Import React
import * as React from 'react'
import 'milligram'

// Define component layout
const Layout = ({ children }) => {
  return (
    <main className="container" style={{ marginTop: 30 }}>
      {children}
    </main>
  )
}

// Export component
export default Layout
