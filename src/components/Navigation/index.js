import React from 'react'
import { Link } from 'react-router'
import { Navigation as Nav, Button as NavItem } from 'react-toolbox'

import styles from './styles.scss'

const Navigation = () => (
  <Nav type="vertical" className={styles.nav}>

    <Link to="/movies" activeStyle={{ color: 'red' }}>
      <NavItem label="Movies" icon="theaters" flat primary />
    </Link>

    <Link to="/tvshows" activeStyle={{ color: 'red' }}>
      <NavItem label="TV Shows" icon="live_tv" flat primary />
    </Link>

  </Nav>
)

export default Navigation
