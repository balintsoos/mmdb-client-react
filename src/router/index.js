import React from 'react'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import hashHistory from 'react-router/lib/hashHistory'

import App from 'components/App'
import Main from 'components/Main'
import CategoryContainer from 'components/Category/Container'
import ProfileContainer from 'components/Profile/Container'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />

      <Route path=":category">
        <IndexRoute component={CategoryContainer} />

        <Route path="view/:id" component={ProfileContainer} />
      </Route>

    </Route>
  </Router>
)

export default routes
