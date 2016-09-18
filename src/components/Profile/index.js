import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

class Profile extends Component {
  render() {
    return (
      <div>
        <Helmet title={`${this.props.profile.data.title}`} />

        <h3>{this.props.profile.data.title}</h3>
        <span>{this.props.profile.id}</span>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    data: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default Profile
