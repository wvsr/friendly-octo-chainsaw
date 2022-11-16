import Reac, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Singup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleSingIn = (e) => {
    e.preventDefault()
    let data = { name, email, password }
    localStorage.setItem('user', JSON.stringify(data))
    window.location.reload()
  }
  return (
    <div className='form-center'>
      <div className='form-div'>
        <form action='' onSubmit={HandleSingIn}>
          <h2>Login form</h2>
          <section>
            <input
              type='text'
              id='email'
              className='handle-input'
              placeholder='email'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>
          <section>
            <input
              type='text'
              id='name'
              className='handle-input'
              placeholder='Full Name'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </section>
          <button className='btn' onClick={HandleSingIn}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
