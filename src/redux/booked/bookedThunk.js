import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import {
   deleteWishReq,
   getAllBookedReq,
   getBookedWishesReq,
   getCharitiesReq,
   postBookedWishReq,
} from '../../service/bookedService'
import { axiosInstance } from '../../api/axiosInstance'

export const getAllBooked = createAsyncThunk(
   'booked/getAllBooked',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getAllBookedReq()
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         throw error
      }
   }
)

export const getBookedWishes = createAsyncThunk(
   'booked/getBookedWishes',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getBookedWishesReq()
         const dataAWishes = data.elements[0]
         const twoDataItems = dataAWishes.slice(0, 4)
         return twoDataItems
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something get wrong')
   }
)

export const getBookedCharities = createAsyncThunk(
   'booked/getBookedCharities',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getCharitiesReq()
         const dataCharities = data.elements[0]
         const twoDataItems = dataCharities.slice(0, 4)
         return twoDataItems
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something get wrong')
   }
)

export const postBookedWish = createAsyncThunk(
   'booked/postBookedWish',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         const data = await postBookedWishReq(payload)
         dispatch(getBookedWishes())
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong ')
   }
)

export const deleteBookedWish = createAsyncThunk(
   'booked/deleteBookedWish',
   async (payload, { dispatch }) => {
      try {
         const result = await deleteWishReq(payload.id)
         dispatch(getAllBooked())
         return result
      } catch (error) {
         return error
      }
   }
)

export const takeOffBooked = createAsyncThunk(
   'booked/takeOffBooked',
   async (id, { dispatch }) => {
      try {
         const response = await axiosInstance.delete('/api/reserves/wish', {
            params: {
               wishId: id,
            },
         })
         dispatch(getBookedWishes())
         return response
      } catch (error) {
         return error
      }
   }
)

export const takeOffBookedCharity = createAsyncThunk(
   'booked/takeOffBookedCharity',
   async (id, { dispatch }) => {
      try {
         const response = await axiosInstance.delete('/api/reserves/charity', {
            params: {
               wishId: id,
            },
         })
         dispatch(getBookedCharities())
         return response
      } catch (error) {
         return error
      }
   }
)
