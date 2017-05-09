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
import Popup from './components/Popup'
import AccountPage from './components/AccountPage'

// Dispatchers
import {whoami} from './reducers/auth'
import {fetchCategories} from './reducers/categories'
import {fetchDifficulties} from './reducers/difficulties'
import {fetchUserQuestions} from './reducers/userQuestions'

const Routes = ({onAppEnter, onAccountEnter}) => (
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRoute component={Home}/>
        <Route path="/whiteboard" component={Popup} />
        <Route path="/myaccount" component={AccountPage} onEnter={onAccountEnter}/>
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
)

/* ------------- CONTAINER ---------------- */

const mapStateToProps = null
const mapDispatch = dispatch => ({
  onAppEnter: () => {
    dispatch(whoami())
    dispatch(fetchCategories())
    dispatch(fetchDifficulties())
  },
  onAccountEnter: () => {
    dispatch(fetchUserQuestions())
  }
})

export default connect(mapStateToProps, mapDispatch)(Routes)
