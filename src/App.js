import React, { useState } from 'react'
import Routing from './pages/Routing'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      <Routing
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default App
