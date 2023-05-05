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
   const token = useSelector((state) => state.auth.token)
   const role = 'USER'
   if (!token) return <GuestRoutes />
   return roleControl[role]
}

export default AppRoutes
