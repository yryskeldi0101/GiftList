import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
// eslint-disable-next-line import/no-cycle
import {
   signUpReq,
   signInReq,
   forgotPasswordReq,
   postAuthGoogleReq,
   resetPasswordReq,
   getGoogleApisReq,
} from '../../../service/auth/authService'

export const signUp = createAsyncThunk(
   'auth/signUp',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await signUpReq(payload)

         localStorage.setItem('AUTH', data)
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
         localStorage.setItem('AUTH', JSON.stringify(data))
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
   return localStorage.removeItem('AUTH')
})

export const postForgetPassword = createAsyncThunk(
   'auth/postForgetPassword',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await forgotPasswordReq(payload)
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
         const response = resetPasswordReq(payload)
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
   async (payload, { rejectWithValue }) => {
      try {
         const response = await postAuthGoogleReq(payload)
         return response
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)
export const getGoogleApis = createAsyncThunk(
   'auth/getGoogleApis',
   async (response, { rejectWithValue }) => {
      try {
         const { data } = await getGoogleApisReq(response)
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)
