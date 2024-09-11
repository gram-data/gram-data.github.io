import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Text, Box, Button } from "theme-ui"

const Footer = () => (

  <Box p={3} m={2} color="text" bg="muted" sx={{
    border: "2px solid black",
    borderRadius: "sketchy1",
    minWidth: "100px"
  }}>
  <Text>
    © {new Date().getFullYear()} <a href="https://neo4j.com">Neo4j, Inc.</a>
  </Text>
  </Box>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
