import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import {
   addCharityRequest,
   deleteCharityRequest,
   editCharityRequest,
   getCharityRequest,
   getOneCharityRequest,
   reserveCharityRequest,
} from '../../service/charityService'
import useToastBar from '../../hooks/useToastBar'

export const getCharities = createAsyncThunk(
   'charity/getCharities',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getCharityRequest()
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
export const getOneCharityById = createAsyncThunk(
   'charity/getOneById',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await getOneCharityRequest(payload)
         return data
      } catch (error) {
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)

export const addCharities = createAsyncThunk(
   'charity/addCharities',
   async (values, { rejectWithValue }) => {
      const { showToast } = useToastBar()
      try {
         const data = await addCharityRequest(values)
         showToast(
            'success',
            'Успешно',
            'Ваша благотворительность успешно сохранена!'
         )
         return data
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)

export const editCharity = createAsyncThunk(
   'charity/editCharity',
   async (values, { rejectWithValue }) => {
      const { showToast } = useToastBar()
      try {
         const data = await editCharityRequest(values)
         showToast(
            'success',
            'Успешно',
            'Ваша благотворительность успешно сохранена!'
         )
         return data
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)

export const deleteCharity = createAsyncThunk(
   'charity/deleteCharity',
   async (values, { rejectWithValue }) => {
      const { showToast } = useToastBar()
      try {
         const data = await deleteCharityRequest(values)
         return data
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)

export const reserveCharity = createAsyncThunk(
   'charity/reserve',
   async (values, { rejectWithValue }) => {
      const { showToast } = useToastBar()
      try {
         const data = await reserveCharityRequest(values)
         return data
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
         if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Что-то пошло не так')
      }
   }
)
