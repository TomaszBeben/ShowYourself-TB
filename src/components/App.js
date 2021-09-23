import React from 'react'
// import hash from 'hash.js'//console.log(hash.sha256().update('text').digest('hex'));
import { AuthProvider } from '../context/AuthContext'

import Creator from './creator/cvCreator/Creator'
import CvPreview from './creator/cvCreator/CvPreview'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Main from './Main'
import PrivateRoute from './PrivateRoute'
import Signup from './Signup'

import { Route } from 'react-router-dom'

import Test from './Test'

const App = () => {
  return (
    <>
      <AuthProvider>
        <Route exact path='/' component={Main} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/test' component={Test} />
        <PrivateRoute path='/cvcreator' component={Creator} />
        <PrivateRoute path='/cvpreview' component={CvPreview} />
      </AuthProvider>
    </>
  )
}

export default App
