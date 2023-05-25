import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
   const isAuthorized = useSelector((state) => state.auth.isAuthorized)
   if (!isAuthorized) {
      return <Navigate to="/" replace />
   }
   return <Component {...rest} />
}

export default PrivateRoute
