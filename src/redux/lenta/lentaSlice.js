import { createSlice } from '@reduxjs/toolkit'
/* eslint-disable no-param-reassign */
import { getLentaCard, getLentaInfoCard } from './lentaThunk'
// eslint-disable-next-line import/no-cycle

const initialState = {
   isLoading: false,
   error: '',
   getOneLenta: {},
   card: [],
   lenta: [],
   holidays: [],
}
export const lentaSlice = createSlice({
   name: 'lenta',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getLentaCard.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.lenta = payload
         state.card = payload
      })
      builder.addCase(getLentaCard.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.lenta = []
      })
      builder.addCase(getLentaCard.rejected, (state, { payload }) => {
         state.error = payload.error
         state.isLoading = false
         state.lenta = []
      })
      builder.addCase(getLentaInfoCard.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.getOneLenta = payload
      })
      builder.addCase(getLentaInfoCard.pending, (state) => {
         state.error = ''
         state.isLoading = true
      })
      builder.addCase(getLentaInfoCard.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
      })
   },
})
