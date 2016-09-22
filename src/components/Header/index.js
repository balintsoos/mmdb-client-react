import React, { Component, PropTypes } from 'react'
import Link from 'react-router/lib/Link'
import { AppBar, IconButton } from 'react-toolbox'

class Header extends Component {
  render() {
    return (
      <AppBar fixed>
        <IconButton icon="menu" inverse onClick={this.props.toggleDrawer} />

        <Link to="/">MMDb</Link>
      </AppBar>
    )
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func
}

export default Header
