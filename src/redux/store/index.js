import { configureStore } from '@reduxjs/toolkit'
// import { userSlice } from '../reducers/user/userSlice'
import { authSlice } from '../reducer/auth/authSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
   },
})
