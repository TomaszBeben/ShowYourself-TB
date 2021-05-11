import React from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'

const App = () => {
  return(
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px'}}>
        <Signup />
      </div>
    </Container>
  )
}

export default App

