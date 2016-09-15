import React, { Component, PropTypes } from 'react'

class TvShows extends Component {
  render() {
    return (
      <div className="TvShows">{this.props.children}</div>
    )
  }
}

TvShows.propTypes = {
  children: PropTypes.node
}

export default TvShows
