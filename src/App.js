import React, { useState } from 'react'
import Routing from './pages/Routing'

import './index.css';

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className='root'>
      <Routing
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default App
