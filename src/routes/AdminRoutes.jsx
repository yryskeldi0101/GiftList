import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Users from '../containers/admin/users/Users'
import AdminCharity from '../containers/admin/Charity'
import Complaints from '../containers/admin/Complaints'
import Newsletter from '../containers/admin/Newsletter'
import AdminLayout from '../layout/admin/AdminLayout'
import PrivateRoute from '../hoc/withPrivateRoute'
import { INITIAL_PATH } from '../utlis/constants/constnats'
import ErrorPage from '../containers/ErrorPage'
import ProfileDetails from '../containers/admin/users/ProfileDetails'
import NewsletterDetails from '../containers/admin/NewsLetterDetail'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path={INITIAL_PATH.GUEST.main}
            element={<Navigate replace to="/admin" />}
         />
         <Route
            path={INITIAL_PATH.ADMIN.admin}
            element={<PrivateRoute component={AdminLayout} />}
         >
            <Route
               path={INITIAL_PATH.ADMIN.users}
               element={<PrivateRoute component={Users} />}
            />
            <Route
               path={INITIAL_PATH.ADMIN.users && INITIAL_PATH.ADMIN.profile}
               element={<PrivateRoute component={ProfileDetails} />}
            />
            <Route
               path={INITIAL_PATH.ADMIN.charityAdmin}
               element={<PrivateRoute component={AdminCharity} />}
            />
            <Route
               path={INITIAL_PATH.ADMIN.complaints}
               element={<PrivateRoute component={Complaints} />}
            />
            <Route
               path={INITIAL_PATH.ADMIN.mailing}
               element={<PrivateRoute component={Newsletter} />}
            />
            <Route
               path={
                  INITIAL_PATH.ADMIN.mailing &&
                  INITIAL_PATH.ADMIN.mailing_detail
               }
               element={<PrivateRoute component={NewsletterDetails} />}
            />
         </Route>
         <Route path={INITIAL_PATH.ADMIN.not_found} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
