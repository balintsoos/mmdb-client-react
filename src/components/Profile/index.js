/* eslint no-underscore-dangle: ["error", { "allow": ["_year_data"] }] */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { Button } from 'react-toolbox'

import styles from './styles.scss'

class Profile extends Component {
  render() {
    const data = this.props.profile.data
    const encodedTitle = encodeURIComponent(data.title)
    const pbDomain = 'https://thepiratebay.org'
    const pbUrl = `${pbDomain}/search/${encodedTitle}/0/99/200`

    return (
      <div>
        <Helmet title={`${data.title}`} />

        <img src={data.poster} alt="poster" />

        <h3>{data.title}</h3>
        <p>{data._year_data}</p>
        <p>{`${data.rating} (${data.votes} votes)`}</p>
        <p>{data.genres}</p>
        <p>{data.plot}</p>
        <p>{data.actors}</p>

        <div className={styles.group}>
          <Button href={data.imdburl} label="Go to IMDb" icon="movie" raised primary />
          <Button href={pbUrl} label="Arrgh!" icon="movie" primary />
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    data: PropTypes.object
  })
}

export default Profile
