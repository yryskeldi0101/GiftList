import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import SideBar from './SideBar'
import Header from './Header'

const LayoutPage = () => {
   return (
      <main>
         <Header />
         <SideBar />
         <Container>
            <Outlet />
         </Container>
      </main>
   )
}

export default LayoutPage

const Container = styled('div')`
   margin-left: 332px;
`
