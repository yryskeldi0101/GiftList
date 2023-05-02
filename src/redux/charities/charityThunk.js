import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
// eslint-disable-next-line import/no-cycle
import {
   addCharityRequest,
   getCharityRequest,
} from '../../service/charityService'

export const getCharities = createAsyncThunk(
   'charity/getCharities',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getCharityRequest()
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const addCharities = createAsyncThunk(
   'charity/addCharities',
   async (values, { rejectWithValue }) => {
      try {
         const data = await addCharityRequest(values)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)
