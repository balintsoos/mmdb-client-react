import React from 'react'

class TvShows extends React.Component {
  render() {
    return (
      <div className="TvShows">{this.props.children}</div>
    )
  }
}

TvShows.propTypes = {
  children: React.PropTypes.node
}

export default TvShows
