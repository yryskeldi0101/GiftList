import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../containers/admin/Users'
import AdminCharity from '../containers/admin/Charity'
import Complaints from '../containers/admin/Complaints'
import Newsletter from '../containers/admin/Newsletter'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/user" element={<Users />} />
         <Route path="/charityAdmin" element={<AdminCharity />} />
         <Route path="/complaints" element={<Complaints />} />
         <Route path="/mailing" element={<Newsletter />} />
      </Routes>
   )
}

export default AdminRoutes
