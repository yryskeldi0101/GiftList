import { createSlice } from '@reduxjs/toolkit'
import { postAuthGoogle, signIn, signOut, signUpPost } from './authThunk'
import { STORAGE_KEYS } from '../../../utlis/constants/constnats'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEYS.GIFTLIST_AUTH)
   if (json) {
      const userData = JSON.parse(json)
      return {
         isAuthorized: true,
         token: userData.token,
         email: userData.email,
         role: userData.role,
         userId: userData.id,
         firstName: userData.firstName,
         lastName: userData.lastname,
      }
   }
   return {
      email: '',
      token: '',
      isAuthorized: false,
      isloading: false,
      error: '',
      role: 'GUEST',
      userId: '',
      firstName: '',
      lastName: '',
   }
}
const initialState = getInitialState()

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
         state.userId = payload.id
         state.firstName = payload.firstName
         state.lastName = payload.lastname
      })
      builder.addCase(signIn.pending, (state) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.role = ''
         state.isloading = true
         state.error = ''
         state.userId = ''
      })
      builder.addCase(signIn.rejected, (state, { payload }) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.role = ''
         state.isloading = false
         state.error = payload.error
         state.userId = ''
      })
      builder.addCase(signUpPost.fulfilled, (state, { payload }) => {
         state.email = payload.email
         state.isAuthorized = true
         state.token = payload.token
         state.isloading = false
         state.error = ''
         state.role = payload.role
         state.userId = payload.id
         state.firstName = payload.firstName
         state.lastName = payload.lastname
      })
      builder.addCase(signUpPost.pending, (state) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.isloading = true
         state.role = ''
         state.error = ''
         state.userId = ''
      })
      builder.addCase(signUpPost.rejected, (state, { payload }) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.role = ''
         state.isloading = false
         state.error = payload
         state.userId = ''
      })
      builder
         .addCase(signOut.fulfilled, (state) => {
            state.user = []
            state.email = ''
            state.isAuthorized = false
            state.token = ''
            state.isloading = false
            state.role = 'GUEST'
            state.error = ''
            state.userId = ''
         })
         .addCase(postAuthGoogle.fulfilled, (state, { payload }) => {
            state.email = payload.email
            state.isAuthorized = true
            state.isloading = false
            state.role = payload.role
            state.error = ''
            state.token = payload.idToken
         })
         .addCase(postAuthGoogle.pending, (state) => {
            state.email = ''
            state.isAuthorized = false
            state.token = ''
            state.isloading = true
            state.role = ''
            state.error = ''
            state.userId = ''
         })
      builder.addCase(postAuthGoogle.rejected, (state, { payload }) => {
         state.email = ''
         state.isAuthorized = false
         state.token = ''
         state.isloading = false
         state.role = ''
         state.error = payload
         state.userId = ''
      })
   },
})

export const authActions = authSlice.actions
