import { createSlice } from '@reduxjs/toolkit'
import { getOneUserById } from './userThunk'

const initialState = {
   error: '',
   isLoading: false,
   oneUser: {},
}
export const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getOneUserById.fulfilled, (state, { payload }) => {
            state.error = ''
            state.isLoading = false
            state.oneUser = payload
         })
         .addCase(getOneUserById.pending, (state) => {
            state.isLoading = true
            state.error = ''
            state.oneUser = {}
         })
         .addCase(getOneUserById.rejected, (state, { payload }) => {
            state.error = payload
            state.isLoading = false
            state.oneUser = {}
         })
   },
})
