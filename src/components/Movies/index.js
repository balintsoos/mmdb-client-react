import React, { Component, PropTypes } from 'react'

class Movies extends Component {
  render() {
    return (
      <div className="Movies">{this.props.children}</div>
    )
  }
}

Movies.propTypes = {
  children: PropTypes.node
}

export default Movies
