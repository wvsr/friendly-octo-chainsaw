import Reac, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const HandleLogin = (e) => {
    e.preventDefault()
    let data = { email, password }
    if (email && password) {
      localStorage.setItem('user', JSON.stringify(data))
      window.location.replace('/')
    }
  }
  return (
    <div className='form-center'>
      <div className='form-div'>
        <form action='' onSubmit={HandleLogin}>
          <h2>Login form</h2>
          <section>
            <input
              type='text'
              id='email'
              className='handle-input'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </section>
          <section>
            <input
              type='password'
              id='password'
              className='handle-input'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </section>
          <button className='btn' onClick={HandleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
