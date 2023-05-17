import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { lentaSlice } from '../lenta/lentaSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [lentaSlice.name]: lentaSlice.reducer,
   },
})
