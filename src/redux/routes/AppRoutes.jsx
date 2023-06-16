import React from 'react'
import { useSelector } from 'react-redux'
import { ROLES } from '../utlis/constants/constnats'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import GuestRoutes from './GuestRoutes'

const roleControl = {
   [ROLES.ADMIN]: <AdminRoutes />,
   [ROLES.USER]: <UserRoutes />,
}
const AppRoutes = () => {
   const { token, role } = useSelector((state) => state.auth)
   if (!token && role === 'GUEST') return <GuestRoutes />
   const selectedRoute = roleControl[role]
   return selectedRoute || null
}

export default AppRoutes
