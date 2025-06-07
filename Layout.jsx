import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/navbar.jsx'
import Footer from './src/components/Footer.jsx'


const Layout = () => {
  return (
   <> <Navbar />,
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout