import React, { useEffect, useState } from 'react'
import Routing from './pages/Routing'

import './index.css'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userProfile, setUserProfile] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userProfile = JSON.parse(localStorage.getItem('userProfile'))

    const isAuthenticated = !!token
    setIsAuthenticated(isAuthenticated)
    setUserProfile(userProfile)
  }, [])

  return (
    <div className='root'>
      <Routing
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
    </div>
  )
}

export default App
