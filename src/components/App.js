import React from 'react'
import Signup from './Signup'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Dashboard from './Dashboard'
import Test from './Test'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <PrivateRoute path='/test' component={Test}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App

