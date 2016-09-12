import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

App.propTypes = {
  name: React.PropTypes.string
}

App.defaultProps = {
  name: 'Balint'
}

export default App
