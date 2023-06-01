/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { charitySlice } from '../charities/charitySlice'
import { complainsSlice } from '../complains/complainsSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [complainsSlice.name]: complainsSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export default store
