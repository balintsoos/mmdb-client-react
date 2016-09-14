import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

App.propTypes = {
  name: React.PropTypes.string,
  children: React.PropTypes.node
}

App.defaultProps = {
  name: 'Balint'
}

export default App
