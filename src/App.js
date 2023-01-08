import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Filtered from './components/Filtered.jsx'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Page404 from './components/Page404'
import ProtectedRoutes from './components/ProtectedRoutes'
import User from './components/User'

const App = () => {

  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/login' element = {<Login/>} />
      <Route path='/' element = {<ProtectedRoutes Component={Home} />} />
      <Route path='/about' element = {<ProtectedRoutes Component={About} />} />
      <Route path='/contact' element = {<Contact/>} />
      
      {/* Page not found or 404 */}
      <Route path='/*' element = {<Page404/>} />


      {/* For Dynamic Params */}
      <Route path='/user/:name' element = {<ProtectedRoutes Component={User} />} />


      {/* For Search Params */}
      <Route path='/filter' element = {<ProtectedRoutes Component={Filtered} />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App