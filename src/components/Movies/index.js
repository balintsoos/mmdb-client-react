import React from 'react'

class Movies extends React.Component {
  render() {
    return (
      <div className="Movies">{this.props.children}</div>
    )
  }
}

Movies.propTypes = {
  children: React.PropTypes.node
}

export default Movies
