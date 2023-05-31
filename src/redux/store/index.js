import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { lentaSlice } from '../lenta/lentaSlice'
import { charitySlice } from '../charities/charitySlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [lentaSlice.name]: lentaSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})
