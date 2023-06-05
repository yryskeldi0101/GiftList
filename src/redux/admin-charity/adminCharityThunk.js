import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { getOneAdminCharityRequest } from '../../service/charityAdminService'

export const getOneAdminCharityById = createAsyncThunk(
   'adminCharity/getOneById',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await getOneAdminCharityRequest(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
