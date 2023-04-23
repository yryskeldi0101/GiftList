import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Lenta from '../containers/user/Lenta'
import Friends from '../containers/user/Friends'
import WishList from '../containers/user/WishList'
import Booked from '../containers/user/Booked'
import MyHolidays from '../containers/user/MyHolidays'
import UserCharity from '../containers/user/Charity'

const UserRoutes = () => {
   return (
      <Routes>
         <Route path="/lenta" element={<Lenta />} />
         <Route path="/friends" element={<Friends />} />
         <Route path="/wishlist" element={<WishList />} />
         <Route path="/bookedPage" element={<Booked />} />
         <Route path="/holidays" element={<MyHolidays />} />
         <Route path="/charity" element={<UserCharity />} />
      </Routes>
   )
}

export default UserRoutes
