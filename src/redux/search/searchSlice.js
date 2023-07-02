import { createSlice } from '@reduxjs/toolkit'
import { searchThunk } from './searchThunk'

export const searchSlice = createSlice({
   name: 'search',
   initialState: {
      data: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(searchThunk.fulfilled, (state, { payload }) => {
            state.data = payload
         })
         .addCase(searchThunk.pending, (state) => {
            state.data = []
         })
         .addCase(searchThunk.rejected, (state) => {
            state.data = []
         })
   },
})
