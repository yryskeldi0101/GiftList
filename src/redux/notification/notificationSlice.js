import { createSlice } from '@reduxjs/toolkit'
import { getNotifications } from './notificationThunk'

const initialState = {
   notification: [],
}

export const notificationSlice = createSlice({
   name: 'notification',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getNotifications.fulfilled, (state, { payload }) => {
         state.notification = payload
      })
   },
})
