import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { getRequestNotifications } from '../../service/notificationService'

export const getNotifications = createAsyncThunk(
   'notification/getNotifications',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getRequestNotifications()
         return data
      } catch (error) {
         if (AxiosError) {
            return rejectWithValue('Something get wrong')
         }
         return rejectWithValue('Something get wrong')
      }
   }
)
