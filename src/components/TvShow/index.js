import React, { Component, PropTypes } from 'react'

class TvShow extends Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}

TvShow.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
}

export default TvShow
