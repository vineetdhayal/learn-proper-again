import React from 'react'
import ProtectedRoute from './ProtectedRoute'

const MainPage = () => {
  return (
    <div>
      <ProtectedRoute path='/dashboard' component={}/>
    </div>
  )
}

export default MainPage
