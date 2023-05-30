import { createSlice } from '@reduxjs/toolkit'
import { getOneMailById } from './mailingThunk'

const initialState = {
   oneMail: {},
   error: '',
   isLoading: false,
}
export const mailingSlice = createSlice({
   name: 'mailing',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getOneMailById.fulfilled, (state, { payload }) => {
            state.error = ''
            state.isLoading = false
            state.mailing = []
            state.oneMail = payload
         })
         .addCase(getOneMailById.pending, (state) => {
            state.error = ''
            state.isLoading = true
            state.mailing = []
            state.oneMail = {}
         })
         .addCase(getOneMailById.rejected, (state, { payload }) => {
            state.error = payload.error
            state.isLoading = false
            state.mailing = []
            state.oneMail = {}
         })
   },
})
