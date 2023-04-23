import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/side-bar/SideBar'
import Header from '../containers/Header'

const LayoutPage = () => {
   return (
      <>
         <Header />
         <SideBar />
         <Outlet />
      </>
   )
}

export default LayoutPage
