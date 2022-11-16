import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Singup from './components/Singup'
import Layout from './components/Layout'
import ProductView from './components/ProductView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/product/:id' element={<ProductView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
