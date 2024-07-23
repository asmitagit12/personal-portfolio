import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
 
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="h-14">
          <Header />
        </div>
        <main className="flex-grow w-full">
          <Outlet />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
