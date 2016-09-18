import React, { Component, PropTypes } from 'react'

class Profile extends Component {
  render() {
    return (
      <div>
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
