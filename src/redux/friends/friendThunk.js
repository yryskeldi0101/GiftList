import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { getOneFriendByIdRequest } from '../../service/friendsService'

export const getOneFriendRequest = createAsyncThunk(
   'friends/getOne',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await getOneFriendByIdRequest(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
