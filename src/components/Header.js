import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [showLogout, setShowLogout] = React.useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'))
    setShowLogout(user)
  }, [])
  console.log(showLogout)
  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <header className='header'>
      <div className='site-identity'>
        <h1>
          <Link to=''>Site Name</Link>
        </h1>
      </div>
      <nav className='site-navigation'>
        <ul className='nav'>
          <li>
            <Link to=''>Home</Link>
          </li>

          <li>
            {showLogout?.email ? 
              <button to='singup' className='btn' onClick={logout}>
                Log Out
              </button>
              :
              <>
                <li>
                  <Link to='login'>Login</Link>
                </li>
                <li>
                  <Link to='singup'>SingUP</Link>
                </li>
              </>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}
