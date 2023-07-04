/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Lenta from '../../containers/user/Lenta'
import WishList from '../../containers/user/wish/WishList'
import MyHolidays from '../../containers/user/holidays/MyHolidays'
import UserCharity from '../../containers/user/charities/Charity'
import UserLayout from '../../layout/user/UserLayout'
import PrivateRoute from '../../hoc/withPrivateRoute'
import { INITIAL_PATH, ROLES } from '../../utlis/constants/constnats'
import ErrorPage from '../../containers/ErrorPage'
import CardPage from '../../containers/CardPage'
import CharityDetails from '../../containers/user/charities/CharityDetails'
import AddCharity from '../../containers/user/charities/AddCharity'
import Friends from '../../containers/user/friends/Friends'
import FriendProfile from '../../containers/user/friends/FriendProfile'
import AllCharities from '../../containers/admin/users/AllCharities'
import AllGifts from '../../containers/admin/users/AllWishes'
import AllHolidays from '../../containers/admin/users/AllHolidays'
import { AddWish } from '../../containers/user/wish/AddWish'
import { AllWishesPage } from '../../containers/user/booked/AllWishesPage'
import { AllCharityPage } from '../../containers/user/booked/AllCharityPage'
import Booked from '../../containers/user/booked/Booked'
import MyHolidaysCard from '../../containers/user/holidays/MyHolidaysCard'
import Profile from '../../containers/user/Profile'
import Logout from '../../containers/user/Logout'
import ProfileEdit from '../../containers/user/ProfileEdit'
import NotificationProfile from '../../components/UI/notification/NotificationProfile'

const UserRoutes = () => {
   return (
      <Routes>
         <Route
            path={INITIAL_PATH.GUEST.main}
            element={<Navigate replace to="/user/lenta" />}
         />

         <Route
            path={INITIAL_PATH.USER.notification_profile}
            element={
               <PrivateRoute
                  component={NotificationProfile}
                  roles={ROLES.USER}
               />
            }
         />
         <Route path={INITIAL_PATH.USER.user} element={<UserLayout />}>
            <Route
               path={INITIAL_PATH.USER.lenta}
               element={<PrivateRoute component={Lenta} roles={ROLES.USER} />}
            />

            <Route
               path={INITIAL_PATH.USER.lenta && INITIAL_PATH.USER.lenta_details}
               element={<PrivateRoute component={CardPage} />}
            />
            <Route
               path={INITIAL_PATH.USER.friends}
               element={<PrivateRoute component={Friends} roles={ROLES.USER} />}
            />
            <Route
               path={INITIAL_PATH.USER.friend_profile}
               element={
                  <PrivateRoute component={FriendProfile} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.friend_charity}
               element={
                  <PrivateRoute component={AllCharities} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.friend_wishes}
               element={
                  <PrivateRoute component={AllGifts} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.friend_holidays}
               element={
                  <PrivateRoute component={AllHolidays} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.holiday_details}
               element={
                  <PrivateRoute component={MyHolidaysCard} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.wishlist}
               element={
                  <PrivateRoute component={WishList} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.edit_wish}
               element={<PrivateRoute component={AddWish} roles={ROLES.USER} />}
            />
            <Route
               path={INITIAL_PATH.USER.add_wish}
               element={<PrivateRoute component={AddWish} roles={ROLES.USER} />}
            />
            <Route
               path={INITIAL_PATH.USER.close_add_wish}
               element={
                  <PrivateRoute component={WishList} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.bookedPage}
               element={<PrivateRoute component={Booked} roles={ROLES.USER} />}
            />
            <Route
               path="/user/bookedPage/booked-wish"
               element={<PrivateRoute component={AllWishesPage} />}
            />

            <Route
               path="/user/bookedPage/booked-charity"
               element={<PrivateRoute component={AllCharityPage} />}
            />
            <Route
               path={INITIAL_PATH.USER.holidays}
               element={
                  <PrivateRoute component={MyHolidays} roles={ROLES.USER} />
               }
            />

            <Route
               path={INITIAL_PATH.USER.charity}
               element={
                  <PrivateRoute component={UserCharity} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.charity && INITIAL_PATH.USER.add_charity}
               element={
                  <PrivateRoute component={AddCharity} roles={ROLES.USER} />
               }
            />
            <Route
               path={
                  INITIAL_PATH.USER.charity && INITIAL_PATH.USER.edit_charity
               }
               element={
                  <PrivateRoute component={AddCharity} roles={ROLES.USER} />
               }
            />
            <Route
               path={
                  INITIAL_PATH.USER.charity && INITIAL_PATH.USER.charity_details
               }
               element={
                  <PrivateRoute component={CharityDetails} roles={ROLES.USER} />
               }
            />
            <Route
               path={INITIAL_PATH.USER.profile}
               element={<PrivateRoute component={Profile} />}
            />
            <Route
               path={
                  INITIAL_PATH.USER.profile && INITIAL_PATH.USER.edit_profile
               }
               element={<PrivateRoute component={ProfileEdit} />}
            />
            <Route
               path={INITIAL_PATH.USER.logout}
               element={<PrivateRoute component={Logout} />}
            />
         </Route>
         <Route path={INITIAL_PATH.USER.not_found} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
