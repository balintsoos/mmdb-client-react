import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/movies" activeStyle={{ color: 'red' }}>Movies</Link></li>
      <li><Link to="/tvshows" activeStyle={{ color: 'red' }}>Tv Shows</Link></li>
    </ul>
  </nav>
)

export default Nav
