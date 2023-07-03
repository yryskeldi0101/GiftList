import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../api/axiosInstance'

export const searchThunk = createAsyncThunk(
   'search',
   async (payload, { rejectWithValue }) => {
      try {
         const req = axiosInstance.get(payload)
         return (await req).data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
