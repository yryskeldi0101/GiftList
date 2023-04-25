import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
   const isAuthenticated = 'lgdlgm'
   if (!isAuthenticated) {
      return <Navigate to="/login" replace />
   }
   return <Component {...rest} />
}

export default PrivateRoute
