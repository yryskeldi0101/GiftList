import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import SideBar from './SideBar'
import Header from './Header'

const LayoutPage = () => {
   return (
      <>
         <HeaderContent>
            <Header />
         </HeaderContent>
         <aside>
            <SideBar />
         </aside>
         <MainContainer>
            <Outlet />
         </MainContainer>
      </>
   )
}

export default LayoutPage

const HeaderContent = styled('header')`
   margin-left: 20vw;
`
const MainContainer = styled('main')`
   margin-left: 21vw;
   margin-right: 1vw;
`
