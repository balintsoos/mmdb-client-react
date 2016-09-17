import React, { Component, PropTypes } from 'react'
import connect from 'utils/apiConnector'

class Fetch extends Component {
  childrenWithProps(props) {
    return React.Children.map(this.props.children,
      child => React.cloneElement(child, props))
  }

  render() {
    if (this.props.fetch.pending) {
      return (
        <div>Loading...</div>
      )
    } else if (this.props.fetch.rejected) {
      return (
        <div>Error</div>
      )
    } else if (this.props.fetch.fulfilled) {
      const children = this.childrenWithProps({
        [this.props.objectKey]: this.props.fetch.value
      })

      return (
        <div>{children}</div>
      )
    }

    return (
      <div>Something is broken...</div>
    )
  }
}

Fetch.propTypes = {
  children: PropTypes.node,
  objectKey: PropTypes.string,
  fetch: PropTypes.shape({
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    fulfilled: PropTypes.bool,
    value: PropTypes.any
  })
}

Fetch.defaultProps = {
  objectKey: 'fetchedData'
}

export default connect(props => ({
  fetch: props.url
}))(Fetch)
