import { Link } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Text, Box, Heading } from "theme-ui"

export type HeaderProps = {
  siteTitle: string,
  siteDescription: string
}

const Header:React.FC<HeaderProps> = ({ siteTitle, siteDescription }) => (

  <Box p={3} m={2} 
    color="text" bg="primaryLight" 
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
          sx={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        {/* <Text sx={{fontSize:1}}>{siteDescription}</Text> */}
      </Heading>
    </div>
  </Box>
)


export default Header
