import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import {
   signUpReq,
   forgotPasswordReq,
   signInReq,
   resetPasswordReq,
} from '../../../service/auth/authService'
import { STORAGE_KEYS } from '../../../utlis/constants/constnats'
import { addDataToStorage } from '../../../utlis/helpers/storageHelpers'
import { firebase, googleProvider } from '../../../firebase/firebase'

export const signUpPost = createAsyncThunk(
   'auth/signUpPost',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await signUpReq(payload)
         addDataToStorage(STORAGE_KEYS.GIFTLIST_AUTH, JSON.stringify(data))
         return data.data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const signIn = createAsyncThunk(
   'auth/signIn',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await signInReq(payload)
         addDataToStorage(STORAGE_KEYS.GIFTLIST_AUTH, JSON.stringify(data))
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const signOut = createAsyncThunk('auth/signOut', async () => {
   window.location.pathname = '/'
   return localStorage.removeItem(STORAGE_KEYS.GIFTLIST_AUTH)
})

export const postForgetPassword = createAsyncThunk(
   'auth/postForgetPassword',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await forgotPasswordReq(
            payload.email,
            payload.baseUrl
         )
         return response
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)
export const postResetPassword = createAsyncThunk(
   'auth/postResetPassword',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await resetPasswordReq(payload)
         return response
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)

export const postAuthGoogle = createAsyncThunk(
   'auth/postAuthGoogle',
   async (_, { rejectWithValue }) => {
      try {
         const res = await firebase.auth().signInWithPopup(googleProvider)

         // const response = await postAuthGoogleReq(res)
         // const usersData = {
         //    id: response.id,
         //    role: response.role,
         //    email: response.email,
         //    firstName: response.firstName,
         //    lastName: response.lastName,
         // }
         // addDataToStorage(STORAGE_KEYS.GIFTLIST_AUTH, JSON.stringify(usersData))

         return res
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)
