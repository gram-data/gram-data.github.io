import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Text, Box, Heading } from "theme-ui"

const Header = ({ siteTitle }) => (

  <Box p={3} m={2} 
    color="text" bg="primary" 
    sx={{
      border: "2px solid black",
      borderRadius: "sketchy3",
      minWidth: "100px"
    }}
  >
        <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Heading>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Text sx={{fontSize:1}}>The Path is the Way</Text>
      </Heading>
    </div>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
