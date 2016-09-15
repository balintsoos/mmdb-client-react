import React from 'react'

class TvShow extends React.Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}

TvShow.propTypes = {
  params: React.PropTypes.object
}

export default TvShow
