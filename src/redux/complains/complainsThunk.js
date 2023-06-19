import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   blockCharityReq,
   blockWishReq,
   deleteCharityReq,
   deleteWishReq,
} from '../../service/complainService'

export const blockWish = createAsyncThunk(
   'complains/blockWish',
   async (id, { rejectWithValue }) => {
      try {
         const response = await blockWishReq(id)
         return response
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
export const blockCharity = createAsyncThunk(
   'complain/blockCharity',
   async (id, { rejectWithValue }) => {
      try {
         const response = blockCharityReq(id)
         return response
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
export const deleteWish = createAsyncThunk(
   'complain/deleteWish',
   async (id, { rejectWithValue }) => {
      try {
         const response = deleteWishReq(id)
         return response
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
export const deleteCharity = createAsyncThunk(
   'complain/deleteWish',
   async (id, { rejectWithValue }) => {
      try {
         const response = deleteCharityReq(id)
         return response
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
