import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Category extends Component {
  render() {
    return (
      <ul>
        {
          this.props.category.map((item) => {
            const url = `${this.props.location.pathname}/view/${item.id}`

            return (
              <li key={item.id}>
                <Link to={url}>{item.title}</Link>
              </li>
            )
          }, this)
        }
      </ul>
    )
  }
}

Category.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

export default Category
