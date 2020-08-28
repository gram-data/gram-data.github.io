/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import { Flex, Box } from "theme-ui"
// require(`katex/dist/katex.min.css`)

const Sidebar = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Flex 
      sx={{position:'fixed', top:0, left: 0, width:'10em', height:'100vh', flexDirection:'column'}}>
      <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description}/>
      <Box 
        sx={{flex:'1 1 auto'}} >
        <Navigation />
      </Box>
      <Footer />
    </Flex>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
