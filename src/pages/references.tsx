import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled, Link } from "theme-ui"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const IndexPage = () => (
  <Layout>
    <SEO title="References" />
    <Styled.h1>References</Styled.h1>

    <Styled.ul>
      <Styled.li><OutboundLink href="https://neo4j.com/developer/graph-database/">Property Graph Model</OutboundLink></Styled.li>
      <Styled.li><OutboundLink href="https://neo4j.com/developer/cypher/">Cypher Query Language</OutboundLink></Styled.li>
      <Styled.li><OutboundLink href="https://www.purescript.org">Purescript</OutboundLink></Styled.li>
      <Styled.li><OutboundLink href="https://en.wikipedia.org/wiki/Entity_component_system">Entity-component-system</OutboundLink></Styled.li>
    </Styled.ul>

  </Layout>
)

export default IndexPage
