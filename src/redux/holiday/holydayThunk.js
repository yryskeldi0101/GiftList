import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getService,
   postService,
   putService,
} from '../../service/holidayService'

export const getHolidays = createAsyncThunk(
   'holiday/getHoliday',
   async (showToast) => {
      try {
         const { data } = await getService()
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
)

export const postHoliday = createAsyncThunk(
   'holiday/postHoliday',
   async (holidayData, { rejectWithValue, dispatch }) => {
      try {
         const response = await postService('/api/holidays', holidayData)
         dispatch(getHolidays())
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

export const updateHolidayThunk = createAsyncThunk(
   'holiday/updateHoliday',
   async (holidayData, { rejectWithValue, dispatch }) => {
      try {
         const response = await putService(
            '/api/holidays',
            holidayData.data,
            holidayData.ubdateId
         )
         dispatch(getHolidays())
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)
