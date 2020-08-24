import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Styled, Link } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="References" />
    <Styled.h1>References</Styled.h1>

    <Styled.ul>
      <Styled.li><Link href="https://neo4j.com/developer/graph-database/">Property Graph Model</Link></Styled.li>
      <Styled.li><Link href="https://neo4j.com/developer/cypher/">Cypher Query Language</Link></Styled.li>
      <Styled.li><Link href="https://www.purescript.org">Purescript</Link></Styled.li>
      <Styled.li><Link href="https://en.wikipedia.org/wiki/Entity_component_system">Entity-component-system</Link></Styled.li>
    </Styled.ul>

  </Layout>
)

export default IndexPage
