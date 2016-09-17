import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'components/App'
import Main from 'components/Main'
import CategoryContainer from 'components/Category/Container'
import ProfileContainer from 'components/Profile/Container'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Main} />

      <Route path=":category" component={CategoryContainer} />
      <Route path=":category/view/:id" component={ProfileContainer} />

    </Route>
  </Router>
)

export default routes
