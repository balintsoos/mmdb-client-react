import React, { Component, PropTypes } from 'react'
import Fetch from 'components/Fetch'
import Profile from 'components/Profile'

class ProfileContainer extends Component {
  render() {
    const url = `${this.props.params.category}/${this.props.params.id}`

    return (
      <Fetch url={url} objectKey="profile">
        <Profile {...this.props} />
      </Fetch>
    )
  }
}

ProfileContainer.propTypes = {
  params: PropTypes.shape({
    category: PropTypes.string,
    id: PropTypes.string
  })
}

export default ProfileContainer
