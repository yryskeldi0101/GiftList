import { createSlice } from '@reduxjs/toolkit'

import { getOneCharityById } from './charityThunk'

const initialState = {
   isLoading: false,
   error: '',
   getOneCharity: {},
}
export const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getOneCharityById.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.getOneCharity = payload
      })
      builder.addCase(getOneCharityById.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.getOneCharity = {}
      })
      builder.addCase(getOneCharityById.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.getOneCharity = {}
      })
   },
})
