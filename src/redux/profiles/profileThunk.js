import { isAxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileRequest } from '../../service/profileService'

export const getUserProfile = createAsyncThunk(
   'profile/getUserProfile',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await getProfileRequest(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
