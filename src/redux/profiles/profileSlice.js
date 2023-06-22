import { createSlice } from '@reduxjs/toolkit'
import { getUserProfile } from './profileThunk'

const initialState = {
   isLoading: false,
   error: '',
   getOneUserProfile: {},
}
export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.getOneUserProfile = payload
      })
      builder.addCase(getUserProfile.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.getOneUserProfile = {}
      })
      builder.addCase(getUserProfile.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.getOneUserProfile = {}
      })
   },
})
