import { configureStore } from '@reduxjs/toolkit'
// import { userSlice } from '../reducers/user/userSlice'
import { authSlice } from '../reducer/auth/authSlice'
import { holidaySlice } from '../holiday/holidaySlice'
import { charitySlice } from '../charities/charitySlice'
import { modalSlice } from '../holiday/modalSlice'
import { userSlice } from '../user/userSlice'
import { mailingSlice } from '../newsLetter/mailingSlice'
import { friendSlice } from '../friends/friendSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [mailingSlice.name]: mailingSlice.reducer,
      [friendSlice.name]: friendSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export default store
