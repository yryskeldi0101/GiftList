import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getHolidayDetailService,
   postHolidayDetailService,
   putHolidayDetailService,
} from '../../service/holidayDetailServis'

export const getHolidayDetails = createAsyncThunk(
   'holidayDetail/getHolidayDetail',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await getHolidayDetailService(id)
         console.log(data, 'data')
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postHolidayDetail = createAsyncThunk(
   'holidaydetail/postHoliday',
   async (holidayDetailData, { rejectWithValue, dispatch }) => {
      try {
         const response = await postHolidayDetailService(
            '/api/wishes',
            holidayDetailData
         )
         dispatch(getHolidayDetails())
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

export const ubdateHolidayDetailThunk = createAsyncThunk(
   'holiday/updateHolidayDetail',
   async (holidayDetailData, { rejectWithValue, dispatch }) => {
      try {
         const response = await putHolidayDetailService(
            '/api/wishes',
            holidayDetailData.data,
            holidayDetailData.ubdateId
         )
         dispatch(getHolidayDetails(holidayDetailData.detailId))
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)
