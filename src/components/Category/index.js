import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class Category extends Component {
  render() {
    return (
      <div>
        <Helmet title={`${this.props.params.category}`} />

        <ul>
          {
            this.props.category.map((item) => {
              const url = `${this.props.location.pathname}/view/${item.id}`

              return (
                <li key={item.id}>
                  <Link to={url}>{item.data.title}</Link>
                </li>
              )
            }, this)
          }
        </ul>
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
