import { createSlice } from '@reduxjs/toolkit'
import {
   deleteBookedWish,
   getAllBooked,
   getBookedCharities,
   getBookedWishes,
} from './bookedThunk'

const initialState = {
   isLoading: false,
   error: '',
   getOneBooked: {},
   wishes: [],
   getWishesData: [],
   getChraititesData: [],
   postAllBooked: [],
}

const bookedSlice = createSlice({
   name: 'booked',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getBookedWishes.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.getWishesData = payload
         })
         .addCase(getBookedWishes.rejected, (state, { payload }) => {
            state.error = payload
            state.isLoading = false
            state.getBookedWishes = {}
         })
         .addCase(getBookedCharities.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.getChraititesData = payload
         })
         .addCase(getAllBooked.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.postAllBooked = payload
         })
         .addCase(deleteBookedWish.pending, (state) => {
            state.isLoading = true
            state.error = ''
         })
         .addCase(deleteBookedWish.fulfilled, (state, action) => {
            state.isLoading = false
            state.wishes = state.wishes.filter(
               (wish) => wish.id !== action.payload
            )
         })
         .addCase(deleteBookedWish.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})
export const bookedActions = bookedSlice.actions
export default bookedSlice
