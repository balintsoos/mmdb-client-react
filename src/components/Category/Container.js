import React, { Component, PropTypes } from 'react'
import Fetch from 'components/Fetch'
import Category from 'components/Category'

class CategoryContainer extends Component {
  render() {
    return (
      <Fetch url={this.props.params.category} objectKey="category">
        <Category {...this.props} />
      </Fetch>
    )
  }
}

CategoryContainer.propTypes = {
  params: PropTypes.shape({
    category: PropTypes.string
  })
}

export default CategoryContainer
