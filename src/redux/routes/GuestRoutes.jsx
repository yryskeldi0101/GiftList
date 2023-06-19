import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../../containers/LandingPage'
import { INITIAL_PATH } from '../../utlis/constants/constnats'

const GuestRoutes = () => {
   return (
      <Routes>
         <Route path={INITIAL_PATH.GUEST.main} element={<LandingPage />} />
         <Route
            path={INITIAL_PATH.GUEST.error}
            element={<Navigate to="/" replace />}
         />
      </Routes>
   )
}

export default GuestRoutes
