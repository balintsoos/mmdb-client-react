import React, { Component, PropTypes } from 'react'

import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
