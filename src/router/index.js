import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'components/App'
import Main from 'components/Main'
import Movies from 'components/Movies'
import TvShows from 'components/TvShows'
import Movie from 'components/Movie'
import TvShow from 'components/TvShow'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Main} />

      <Route path="movies" component={Movies}>
        <Route path="view/:id" component={Movie} />
      </Route>

      <Route path="tvshows" component={TvShows}>
        <Route path="view/:id" component={TvShow} />
      </Route>

    </Route>
  </Router>
)

export default routes
