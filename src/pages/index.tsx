import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The Path is the Way</h1>
    
    <Link to="/math/">Path Math</Link> 
    
  </Layout>
)

export default IndexPage
