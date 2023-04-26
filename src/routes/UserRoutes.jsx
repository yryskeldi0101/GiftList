import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Lenta from '../containers/user/Lenta'
import Friends from '../containers/user/Friends'
import WishList from '../containers/user/WishList'
import Booked from '../containers/user/Booked'
import MyHolidays from '../containers/user/MyHolidays'
import UserCharity from '../containers/user/Charity'
import UserLayout from '../layout/user/UserLayout'
import PrivateRoute from '../hoc/withPrivateRoute'
import { INITIAL_PATH } from '../utlis/constants/constnats'
import ErrorPage from '../containers/ErrorPage'

const UserRoutes = () => {
   return (
      <Routes>
         <Route
            path={INITIAL_PATH.USER.user}
            element={<PrivateRoute component={UserLayout} />}
         >
            <Route
               path={INITIAL_PATH.USER.lenta}
               element={<PrivateRoute component={Lenta} />}
            />
            <Route
               path={INITIAL_PATH.USER.friends}
               element={<PrivateRoute component={Friends} />}
            />
            <Route
               path={INITIAL_PATH.USER.wishlist}
               element={<PrivateRoute component={WishList} />}
            />
            <Route
               path={INITIAL_PATH.USER.bookedPage}
               element={<PrivateRoute component={Booked} />}
            />
            <Route
               path={INITIAL_PATH.USER.holidays}
               element={<PrivateRoute component={MyHolidays} />}
            />
            <Route
               path={INITIAL_PATH.USER.charity}
               element={<PrivateRoute component={UserCharity} />}
            />
         </Route>
         <Route path={INITIAL_PATH.USER.not_found} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
