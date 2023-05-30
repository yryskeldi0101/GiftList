import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { charitySlice } from '../charities/charitySlice'
import bookedSlice from '../booked/bookedSlice'
import { userSlice } from '../user/userSlice'
import { mailingSlice } from '../newsLetter/mailingSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [bookedSlice.name]: bookedSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [mailingSlice.name]: mailingSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export default store
