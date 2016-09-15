import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}

Movie.propTypes = {
  params: React.PropTypes.object
}

export default Movie
