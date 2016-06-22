import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <nav>
      <div className="nav-wrapper #9575cd deep-purple lighten-2">
        <Link to="/" className="brand-logo" >Users</Link>
      </div>
    </nav>
    {children}
  </div>
)

export default App