/* eslint no-underscore-dangle: ["error", { "allow": ["_year_data"] }] */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class Category extends Component {
  renderListItem(item) {
    const url = `${this.props.location.pathname}/view/${item.id}`

    return (
      <Link to={url} key={item.id}>
        <div className="list-item">
          <span>{`${item.data.title} (${item.data._year_data})`}</span>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <Helmet title={`${this.props.params.category}`} />

        <div className="category-item-list-wrapper">
          {this.props.category.map(item => this.renderListItem(item), this)}
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  params: PropTypes.shape({
    category: PropTypes.string
  })
}

export default Category
