import React from 'react'
import Header from './Header'
import { Outlet, Link } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
        rel='stylesheet'
      />
      <Header />
      <Outlet />
    </div>
  )
}
