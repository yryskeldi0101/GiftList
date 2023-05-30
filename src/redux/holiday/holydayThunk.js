import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteService,
   getService,
   postService,
   putService,
} from '../../service/holidayServis'

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

export const updateHoliday = createAsyncThunk(
   'holiday/updateHoliday',
   async (holidayData, { rejectWithValue }) => {
      console.log(holidayData)
      try {
         const response = await putService(
            '/api/holidays',
            holidayData.data,
            holidayData.ubdateId
         )
         console.log(response)
         return response.data
      } catch (error) {
         console.log(error)
         return rejectWithValue(error.response.data)
      }
   }
)

export const deleteHoliday = createAsyncThunk(
   'holiday/deleteHoliday',
   async (holidayId, { rejectWithValue, dispatch }) => {
      try {
         await deleteService(`/api/holidays?holidayId=${holidayId}`)
         return dispatch(getHolidays())
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)
