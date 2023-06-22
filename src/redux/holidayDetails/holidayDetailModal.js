import { createSlice } from '@reduxjs/toolkit'

export const holidayDeatilModal = createSlice({
   initialState: {
      data: {
         name: '',
         date: '',
         image: '',
      },
   },
   name: 'HolidayDetailModalSlice',
   reducers: {
      getEditCardData: (state, action) => {
         state.data = action.payload
      },
   },
})

export const actionDetailModalSlice = holidayDeatilModal.actions
