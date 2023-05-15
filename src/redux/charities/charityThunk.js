import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { getOneCharityRequest } from '../../service/charityService'

export const getOneCharityById = createAsyncThunk(
   'charity/getOneById',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await getOneCharityRequest(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
