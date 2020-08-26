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

import Sidebar from "./sidebar"
import { Box } from "theme-ui"
// require(`katex/dist/katex.min.css`)

const Layout = ({ children }) => {

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Architects+Daughter"
        />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap" 
        />
      </Helmet>
      <Box 
        id="layout"
        sx={{
          minHeight: '100vh',
        }}>
        <Sidebar />
        <Box p={4} sx={{
          maxWidth: 'container',
          mx: 'auto'
        }}>
          {children}
        </Box>
      </Box>
      
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
