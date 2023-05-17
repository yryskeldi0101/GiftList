import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { signInWithPopup } from 'firebase/auth'
// eslint-disable-next-line import/no-cycle
import {
   signUpReq,
   signInReq,
   forgotPasswordReq,
   postAuthGoogleReq,
   resetPasswordReq,
} from '../../../service/auth/authService'
import { STORAGE_KEYS } from '../../../utlis/constants/constnats'
import { addDataToStorage } from '../../../utlis/helpers/storageHelpers'
import { auth, provider } from '../../../firebase/firebase'

export const signUpPost = createAsyncThunk(
   'auth/signUpPost',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await signUpReq(payload)
         addDataToStorage(STORAGE_KEYS.AUTH, JSON.stringify(data))
         return data
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

         addDataToStorage(STORAGE_KEYS.AUTH, JSON.stringify(data))
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
   return localStorage.removeItem(STORAGE_KEYS.AUTH)
})

export const postForgetPassword = createAsyncThunk(
   'auth/postForgetPassword',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await forgotPasswordReq(
            payload.email,
            payload.baseUrl,
            payload.token
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
         console.log(payload, 'payload')
         const response = await resetPasswordReq(payload)
         console.log('postResetPassword', response)
         return response
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)

export const signInWithGoogle = async () => {
   const { user } = await signInWithPopup(auth, provider)
   return user
}

export const postAuthGoogle = createAsyncThunk(
   'auth/postAuthGoogle',
   async (_, { rejectWithValue }) => {
      try {
         const user = await signInWithGoogle()
         const response = await postAuthGoogleReq(user)
         const usersData = {
            id: response.id,
            role: response.role,
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
         }
         return usersData
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)
