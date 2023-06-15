import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { holidaySlice } from '../holiday/holidaySlice'
import { charitySlice } from '../charities/charitySlice'
import { modalSlice } from '../holiday/modalSlice'
import { userSlice } from '../user/userSlice'
import { mailingSlice } from '../newsLetter/mailingSlice'
import { friendSlice } from '../friends/friendSlice'
import { holidayDetailSlice } from '../holidayDetails/holidayDetailSlice'
import bookedSlice from '../booked/bookedSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [holidayDetailSlice.name]: holidayDetailSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [mailingSlice.name]: mailingSlice.reducer,
      [friendSlice.name]: friendSlice.reducer,
      [bookedSlice.name]: bookedSlice.reducer,
      [friendSlice.name]: friendSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export default store
