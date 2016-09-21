/* eslint no-underscore-dangle: ["error", { "allow": ["_year_data"] }] */
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list'

class Category extends Component {
  selectItem(id) {
    const url = `${this.props.location.pathname}/view/${id}`

    browserHistory.push(url)
  }

  renderListItem(item) {
    return (
      <ListItem
        key={item.id}
        avatar={item.data.poster}
        caption={item.data.title}
        legend={item.data._year_data}
        rightIcon="star"
        onClick={() => this.selectItem(item.id)}
      />
    )
  }

  render() {
    return (
      <div>
        <Helmet title={`${this.props.params.category}`} />

        <List selectable ripple>
          <ListSubHeader caption={this.props.params.category} />
          <ListDivider />
          {this.props.category.map(item => this.renderListItem(item), this)}
        </List>
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
