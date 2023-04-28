import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../containers/LandingPage'
import ErrorPage from '../containers/ErrorPage'
import { INITIAL_PATH } from '../utlis/constants/constnats'

const GuestRoutes = () => {
   return (
      <Routes>
         <Route path={INITIAL_PATH.GUEST.main} element={<LandingPage />} />
         <Route path={INITIAL_PATH.GUEST.error} element={<ErrorPage />} />
      </Routes>
   )
}

export default GuestRoutes
