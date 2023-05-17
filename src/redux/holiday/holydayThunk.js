import { createAsyncThunk } from '@reduxjs/toolkit'
import { getService, postService } from '../../service/holidayServis'

export const getHolidays = createAsyncThunk(
   'holiday/getHoliday',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getService()
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async (holidayData, { rejectWithValue }) => {
      try {
         const response = await postService('/api/holidays', holidayData)
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)
