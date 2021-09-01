import React, { useState } from 'react'

import Creator from './creator/cvCreator/Creator'
import CvPreview from './creator/cvCreator/CvPreview'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Main from './Main'
import PrivateRoute from './PrivateRoute'
import Signup from './Signup'

import { Route } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import { initialState } from './creator/cvCreator/variables'

const App = () => {
  const { currentUser } = useAuth()
  const [postData, setPostData] = useState(initialState(currentUser))
  return (
    <>
      <Route exact path='/' component={Main} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <PrivateRoute path='/cvcreator'>
        <Creator postData={postData} setPostData={setPostData} currentUser={currentUser} />
      </PrivateRoute>
      <PrivateRoute path='/cvpreview'>
        <CvPreview postData={postData} />
      </PrivateRoute>
    </>
  )
}

export default App
