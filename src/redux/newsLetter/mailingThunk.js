import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import {
   createMailRequest,
   getOneMailingByIdRequest,
} from '../../service/mailingService'

export const getOneMailById = createAsyncThunk(
   'mailing/getById',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await getOneMailingByIdRequest(payload)
         return data.data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
export const createMailing = createAsyncThunk(
   'mailing/create',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await createMailRequest(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
