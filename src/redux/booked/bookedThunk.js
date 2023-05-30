// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { isAxiosError } from 'axios'
// import {
//    deleteWishReq,
//    getAllBookedReq,
//    getBookedWishesReq,
//    getCharitiesReq,
//    postBookedCharityReq,
//    postBookedWishReq,
// } from '../../service/bookedService'

// export const getAllBooked = createAsyncThunk(
//    'booked/getAllBooked',
//    async (_, { rejectWithValue }) => {
//       try {
//          const { data } = await getAllBookedReq()
//          console.log(data, 'DATAAA')
//          return data
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//          throw error
//       }
//    }
// )

// export const getBookedWishes = createAsyncThunk(
//    'booked/getBookedWishes',
//    async (_, { rejectWithValue }) => {
//       try {
//          const { data } = await getBookedWishesReq()
//          const dataAWishes = data.elements[0]
//          const twoDataItems = dataAWishes.slice(0, 4)
//          return twoDataItems
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//       }
//       return rejectWithValue('Something get wrong')
//    }
// )

// export const getBookedCharities = createAsyncThunk(
//    'booked/getBookedCharities',
//    async (_, { rejectWithValue }) => {
//       try {
//          const { data } = await getCharitiesReq()
//          const dataCharities = data.elements[0]
//          const twoDataItems = dataCharities.slice(0, 4)
//          return twoDataItems
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//       }
//       return rejectWithValue('Something get wrong')
//    }
// )

// export const postBookedWish = createAsyncThunk(
//    'booked/postBookedWish',
//    async (payload, { rejectWithValue }) => {
//       try {
//          const data = await postBookedWishReq(payload)
//          return data
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//       }
//       return rejectWithValue('Something went wrong ')
//    }
// )

// export const postBookedCharities = createAsyncThunk(
//    'booked/postBookedCharities',
//    async (payload, { rejectWithValue }) => {
//       try {
//          const data = await postBookedCharityReq(payload)
//          return data
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//       }
//       return rejectWithValue('Something went wrong')
//    }
// )

// export const deleteIdWish = createAsyncThunk(
//    'booked/deleteIdWish',
//    async (payload, { rejectWithValue }) => {
//       try {
//          await deleteWishReq(payload.id)
//          return payload.idS
//       } catch (error) {
//          if (isAxiosError(error)) {
//             return rejectWithValue(error.response?.data.message)
//          }
//          throw error
//       }
//    }
// )

import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import {
   deleteWishReq,
   getAllBookedReq,
   getBookedWishesReq,
   getCharitiesReq,
   postBookedCharityReq,
   postBookedWishReq,
} from '../../service/bookedService'

export const getAllBooked = createAsyncThunk(
   'booked/getAllBooked',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getAllBookedReq()
         console.log(data, 'DATAAA')
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
   async (payload, { rejectWithValue }) => {
      try {
         const data = await postBookedWishReq(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong ')
   }
)

export const postBookedCharities = createAsyncThunk(
   'booked/postBookedCharities',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await postBookedCharityReq(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
      }
      return rejectWithValue('Something went wrong')
   }
)

export const deleteIdWish = createAsyncThunk(
   'booked/deleteIdWish',
   async (payload, { rejectWithValue }) => {
      try {
         await deleteWishReq(payload.id)
         return payload.idS
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         throw error
      }
   }
)
