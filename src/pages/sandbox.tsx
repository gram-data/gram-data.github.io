import React from "react"
import ReactRough, { Rectangle } from "react-rough"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Heading, Box } from "theme-ui";

import {ShapePath} from "../components/ShapePaths"

const Sandbox = () => (
  <Layout>
    <SEO title="Sandbox" />
    <Heading>Sandbox</Heading>

    <Box>
      <ReactRough>
        <Rectangle x={15} y={15} width={180} height={80} fill="green" />
        <ShapePath x={15} y={15} width={180} height={80}/>
      </ReactRough>
    </Box>

  </Layout>
)

export default Sandbox
