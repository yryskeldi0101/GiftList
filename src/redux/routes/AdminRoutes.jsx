import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Users from '../../containers/admin/users/Users'
import Complains from '../../containers/admin/complains/Complains'
import Newsletter from '../../containers/admin/Newsletter'
import AdminLayout from '../../layout/admin/AdminLayout'
import PrivateRoute from '../../hoc/withPrivateRoute'
import { INITIAL_PATH, ROLES } from '../../utlis/constants/constnats'
import ErrorPage from '../../containers/ErrorPage'
import { ComplainsDetail } from '../../containers/admin/complains/ComplainsDetail'
import ProfileDetails from '../../containers/admin/users/ProfileDetails'
import NewsletterDetails from '../../containers/admin/NewsLetterDetail'
import AllGifts from '../../containers/admin/users/AllWishes'
import AllHolidays from '../../containers/admin/users/AllHolidays'
import AllCharities from '../../containers/admin/users/AllCharities'
import AdminCharity from '../../containers/admin/admin-charity/Charity'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path={INITIAL_PATH.GUEST.main}
            element={<Navigate replace to="/admin/users" />}
         />
         <Route path={INITIAL_PATH.ADMIN.admin} element={<AdminLayout />}>
            <Route
               path={INITIAL_PATH.ADMIN.users}
               element={<PrivateRoute component={Users} roles={ROLES.ADMIN} />}
            />
            <Route
               path={INITIAL_PATH.ADMIN.profile}
               element={
                  <PrivateRoute
                     component={ProfileDetails}
                     roles={ROLES.ADMIN}
                  />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.allWishes}
               element={
                  <PrivateRoute component={AllGifts} roles={ROLES.ADMIN} />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.allHolidays}
               element={
                  <PrivateRoute component={AllHolidays} roles={ROLES.ADMIN} />
               }
            />
            <Route
               path={
                  INITIAL_PATH.ADMIN.profile && INITIAL_PATH.ADMIN.allCharities
               }
               element={
                  <PrivateRoute component={AllCharities} roles={ROLES.ADMIN} />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.charityAdmin}
               element={
                  <PrivateRoute component={AdminCharity} roles={ROLES.ADMIN} />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.complaints}
               element={
                  <PrivateRoute component={Complains} roles={ROLES.ADMIN} />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.complains_wish_details}
               element={
                  <PrivateRoute
                     component={ComplainsDetail}
                     roles={ROLES.ADMIN}
                  />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.complains_charity_details}
               element={
                  <PrivateRoute
                     component={ComplainsDetail}
                     roles={ROLES.ADMIN}
                  />
               }
            />
            <Route
               path={INITIAL_PATH.ADMIN.mailing}
               element={
                  <PrivateRoute component={Newsletter} roles={ROLES.ADMIN} />
               }
            />
            <Route
               path={
                  INITIAL_PATH.ADMIN.mailing &&
                  INITIAL_PATH.ADMIN.mailing_detail
               }
               element={
                  <PrivateRoute
                     component={NewsletterDetails}
                     roles={ROLES.ADMIN}
                  />
               }
            />
         </Route>
         <Route path={INITIAL_PATH.ADMIN.not_found} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
