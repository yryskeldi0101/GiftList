import { createSlice } from '@reduxjs/toolkit'
import { getHolidays, postHoliday } from '../redux/holiday/holydayThunk'

const initialState = {
   holiday: [],
   isLoading: true,
   error: '',
}
export const holidaySlice = createSlice({
   name: 'holiday',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getHolidays.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getHolidays.fulfilled, (state, action) => {
            state.holiday = action.payload
            state.isLoading = false
         })
         .addCase(getHolidays.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
         })
         .addCase(postHoliday.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postHoliday.fulfilled, (state) => {
            state.isLoading = false
         })
         .addCase(postHoliday.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
         })
   },
})
