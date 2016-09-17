import React, { Component, PropTypes } from 'react'

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.profile.title}</h3>
        <span>{this.props.profile.id}</span>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })
}

export default Profile
