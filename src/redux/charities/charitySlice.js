/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import { addCharities, getCharities } from './charityThunk'

const initialState = {
   unloading: false,
   error: '',
   charities: [],
}
export const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCharities.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.charities = payload
      })
      builder.addCase(getCharities.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
      })
      builder.addCase(getCharities.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(addCharities.fulfilled, (state) => {
         state.error = ''
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(addCharities.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
      })
      builder.addCase(addCharities.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.charities = []
      })
   },
})
