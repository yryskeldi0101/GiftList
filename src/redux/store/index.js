import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducer/auth/authSlice'
import { lentaSlice } from '../lenta/lentaSlice'
import { holidaySlice } from '../../hoc/holidaySlice'
import { charitySlice } from '../charities/charitySlice'
import { complainsSlice } from '../complains/complainsSlice'
import { userSlice } from '../user/userSlice'
import { mailingSlice } from '../newsLetter/mailingSlice'
import { modalSlice } from '../holiday/modalSlice'
import { friendSlice } from '../friends/friendSlice'
import { holidayDetailSlice } from '../holidayDetails/holidayDetailSlice'
import bookedSlice from '../booked/bookedSlice'
import { adminCharitySlice } from '../admin-charity/adminCharitySlice'
import { searchSlice } from '../search/searchSlice'
import { notificationSlice } from '../notification/notificationSlice'

const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [lentaSlice.name]: lentaSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [holidayDetailSlice.name]: holidayDetailSlice.reducer,
      [complainsSlice.name]: complainsSlice.reducer,
      [bookedSlice.name]: bookedSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [mailingSlice.name]: mailingSlice.reducer,
      [friendSlice.name]: friendSlice.reducer,
      [adminCharitySlice.name]: adminCharitySlice.reducer,
      [searchSlice.name]: searchSlice.reducer,
      [notificationSlice.name]: notificationSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})
export default store
