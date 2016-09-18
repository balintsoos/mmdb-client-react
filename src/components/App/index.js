import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Helmet titleTemplate="%s | MMDb" />

        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
