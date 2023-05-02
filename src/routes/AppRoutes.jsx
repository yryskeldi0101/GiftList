import React from 'react'
import { ROLES } from '../utlis/constants/constnats'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import GuestRoutes from './GuestRoutes'

const roleControl = {
   [ROLES.ADMIN]: <AdminRoutes />,
   [ROLES.USER]: <UserRoutes />,
}
const AppRoutes = () => {
   const role = 'USER'
   const token = 'dfdfdfdf'
   if (!token) return <GuestRoutes />
   return roleControl[role]
}

export default AppRoutes
