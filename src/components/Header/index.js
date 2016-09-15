import React from 'react'
import { Link } from 'react-router'

import Nav from 'components/Nav'

const Header = () => (
  <header>
    <h1>
      <Link to="/">MMDb</Link>
    </h1>

    <Nav />
  </header>
)

export default Header
