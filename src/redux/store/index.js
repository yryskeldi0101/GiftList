/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
// import { userSlice } from '../reducers/user/userSlice'
import { authSlice } from '../reducer/auth/authSlice'
import { holidaySlice } from '../holiday/holidaySlice'
import { charitySlice } from '../charities/charitySlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export default store
