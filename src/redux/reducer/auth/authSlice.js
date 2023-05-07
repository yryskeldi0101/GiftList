import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { signIn, signOut, signUp } from './authThunk'

const initialState = {
   user: [],
   email: '',
   token: '',
   isAuthorized: false,
   isloading: false,
   error: '',
   role: '',
   userID: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(signIn.fulfilled, (state, { payload }) => {
         state.email = payload.email
         state.isAuthorized = true
         state.token = payload.token
         state.isloading = false
         state.error = ''
         state.role = payload.role
         state.userID = payload.userID
      })
      builder.addCase(signIn.pending, (state) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.role = ''
         state.isloading = true
         state.error = ''
      })
      builder.addCase(signIn.rejected, (state, { payload }) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.role = ''
         state.isloading = false
         state.error = payload.error
      })
      builder.addCase(signUp.fulfilled, (state, { payload }) => {
         state.email = payload.email
         state.isAuthorized = true
         state.token = payload.token
         state.isloading = false
         state.error = ''
         state.role = payload.role
         state.userID = payload.userID
      })
      builder.addCase(signUp.pending, (state) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.isloading = true
         state.role = ''
         state.error = ''
      })
      builder.addCase(signUp.rejected, (state, { payload }) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.role = ''
         state.isloading = false
         state.error = payload
      })
      builder.addCase(signOut.fulfilled, (state) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.isloading = false
         state.role = ''
         state.error = ''
      })
   },
})

export const authActions = authSlice.actions
