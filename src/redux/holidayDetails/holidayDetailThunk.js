import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getHolidayDetailService,
   putHolidayDetailService,
} from '../../service/holidayDetailServis'

export const getHolidayDetails = createAsyncThunk(
   'holidayDetail/getHolidayDetail',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await getHolidayDetailService(id)
         return data
      } catch (error) {
         return rejectWithValue(error)
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
