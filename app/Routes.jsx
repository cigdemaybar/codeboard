'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import App from './components/App'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Whiteboard from './components/Whiteboard'

// Dispathers
import {whoami} from './reducers/auth'
import {fetchQuestions} from './reducers/questions'

const Routes = ({onAppEnter}) => (
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRoute component={Home}/>
      </Route>
      <Route path="/whiteboard" component={Whiteboard} />
      <Route path='*' component={NotFound} />
    </Router>
)

/* ------------- CONTAINER ---------------- */

const mapStateToProps = null
const mapDispatch = dispatch => ({
  onAppEnter: () => {
    dispatch(whoami())
    dispatch(fetchQuestions())
  }
})

export default connect(mapStateToProps, mapDispatch)(Routes)
