import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import {
   getRequestLentaCard,
   postRequestLentaPresent,
   getRequestLentaInfoCard,
   // deleteRequestLentaBooking,
} from '../../service/lentaService'

// eslint-disable-next-line import/no-cycle

export const getLentaCard = createAsyncThunk(
   'lenta/getLentaCard',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getRequestLentaCard()
         return data.elements
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const getLentaInfoCard = createAsyncThunk(
   'lenta/getLentaInfoCard',
   async (userId, { rejectWithValue }) => {
      try {
         const { data } = await getRequestLentaInfoCard(userId)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const postLentaReserve = createAsyncThunk(
   'lenta/postLentaReserve',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await postRequestLentaPresent(id)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

// export const deleteReserve = createAsyncThunk(
//    'lenta/delete',
//    async (values, { rejectWithValue }) => {
//       try {
//          const data = await deleteRequestLentaBooking(values)
//          return data
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//          return rejectWithValue('Something went wrong')
//       }
//    }
// )
