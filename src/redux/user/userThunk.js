import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { getOneUserByIdRequest } from '../../service/userService'

export const getOneUserById = createAsyncThunk(
   'users/getOneUser',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await getOneUserByIdRequest(payload)
         return data.data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
