/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
   },
})

export default store
