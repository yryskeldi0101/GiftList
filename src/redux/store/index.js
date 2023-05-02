/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { charitySlice } from '../charities/charitySlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
   },
})
