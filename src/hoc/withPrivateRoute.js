import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
   const { role } = useSelector((state) => state.auth)
   if (!role || (roles && !roles.includes(role))) {
      return <Navigate to="/" replace={true} />
   }
   return <Component {...rest} />
}

export default PrivateRoute
