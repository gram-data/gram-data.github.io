import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Text, Box, Button } from "theme-ui"

const Navigation = () => (
  <Fragment>
    <Link to="/"><Button>Home</Button></Link>
    <Link to="/math/"><Button>Path Math</Button></Link> 
    <Link to="/references/"><Button>References</Button></Link> 
  </Fragment>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
