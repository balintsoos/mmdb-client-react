import React, { Component, PropTypes } from 'react'
import { Layout, NavDrawer, Panel } from 'react-toolbox'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

import styles from './styles.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { drawerActive: false }
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this)
  }

  toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | MMDb" />

        <NavDrawer
          active={this.state.drawerActive}
          onOverlayClick={this.toggleDrawerActive}
          permanentAt="lg"
        >
          <Navigation />
        </NavDrawer>

        <Panel>
          <Header toggleDrawer={this.toggleDrawerActive} />
          <div className={styles.content}>
            {this.props.children}
          </div>
        </Panel>

      </Layout>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
