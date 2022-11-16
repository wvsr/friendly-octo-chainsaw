import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [showLogout, setShowLogout] = React.useState(false)

  useEffect(() => {
    let user = localStorage.getItem('user')
    setShowLogout(user)
  }, [])

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <header class='header'>
      <div class='site-identity'>
        <h1>
          <Link to=''>Site Name</Link>
        </h1>
      </div>
      <nav class='site-navigation'>
        <ul class='nav'>
          <li>
            <Link to=''>Home</Link>
          </li>
          {!showLogout && (
            <>
              <li>
                <Link to='login'>Login</Link>
              </li>
              <li>
                <Link to='singup'>SingUP</Link>
              </li>
            </>
          )}
          <li>
            {showLogout && (
              <button to='singup' className='btn' onClick={logout}>
                Log Out
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}