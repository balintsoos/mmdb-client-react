import React, { Component, PropTypes } from 'react'

class Movie extends Component {
  render() {
    return (
      <div>{this.state.title}</div>
    )
  }
}

Movie.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
}

export default Movie
