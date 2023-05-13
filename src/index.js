import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NewKey from './views/new-key'
import Upload from './views/upload'
import CookieConfirm from './views/cookie-confirm'
import Favorite from './views/favorite'
import CookieExplication from './views/cookie-explication'
import CookieMore from './views/cookie-more'
import Cookie from './views/cookie'
import UserDetails from './views/user-details'
import Login from './views/login'
import Complete from './views/complete'
import UploadStatus from './views/upload-status'
import Invite from './views/invite'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NewKey} exact path="/new-key" />
        <Route component={Upload} exact path="/upload" />
        <Route component={CookieConfirm} exact path="/cookie-confirm" />
        <Route component={Favorite} exact path="/favorite" />
        <Route component={CookieExplication} exact path="/cookie-explication" />
        <Route component={CookieMore} exact path="/cookie-more" />
        <Route component={Cookie} exact path="/cookie" />
        <Route component={UserDetails} exact path="/user-details" />
        <Route component={Login} exact path="/" />
        <Route component={Complete} exact path="/complete" />
        <Route component={UploadStatus} exact path="/upload-status" />
        <Route component={Invite} exact path="/invite" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
