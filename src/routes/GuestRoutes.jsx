import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../containers/LandingPage'
import ErrorPage from '../containers/ErrorPage'

const GuestRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   )
}

export default GuestRoutes
