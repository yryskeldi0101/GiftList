import React from 'react'
import { useSelector } from 'react-redux'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import GuestRoutes from './GuestRoutes'
import { ROLES } from '../../utlis/constants/constnats'

const roleControl = {
   [ROLES.ADMIN]: <AdminRoutes />,
   [ROLES.USER]: <UserRoutes />,
}
const AppRoutes = () => {
   const { token, role } = useSelector((state) => state.auth)
   if (!token) return <GuestRoutes />
   return roleControl[role] || null
}

export default AppRoutes
