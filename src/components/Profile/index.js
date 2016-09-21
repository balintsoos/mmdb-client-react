/* eslint no-underscore-dangle: ["error", { "allow": ["_year_data"] }] */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { Button } from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'

import styles from './styles.scss'

class Profile extends Component {
  render() {
    const data = this.props.profile.data
    const encodedTitle = encodeURIComponent(data.title)
    const pbDomain = 'https://thepiratebay.org'
    const pbUrl = `${pbDomain}/search/${encodedTitle}/0/99/200`

    return (
      <Card className={styles.wrapper}>
        <Helmet title={`${data.title}`} />

        <img src={data.poster} alt="poster" />

        <div>
          <CardTitle
            title={data.title}
            subtitle={data._year_data}
          />
          <CardText>{`${data.rating} (${data.votes} votes)`}</CardText>
          <CardText>{data.genres}</CardText>
          <CardText>{data.plot}</CardText>
          <CardText>{data.actors}</CardText>

          <CardText>
            <CardActions>
              <Button href={data.imdburl} label="Go to IMDb" icon="movie" raised primary />
              <Button href={pbUrl} label="Arrgh!" icon="movie" primary />
            </CardActions>
          </CardText>
        </div>
      </Card>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    data: PropTypes.object
  })
}

export default Profile
