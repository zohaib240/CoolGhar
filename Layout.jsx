import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/Footer.jsx'
import Navbar from './src/components/Navbar.jsx'

const Layout = () => {
  return (
   <><Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout