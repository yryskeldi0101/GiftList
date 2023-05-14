import { createSlice } from '@reduxjs/toolkit'
import {
   addCharities,
   deleteCharity,
   editCharity,
   getCharities,
   getOneCharityById,
   reserveCharity,
} from './charityThunk'

const initialState = {
   isLoading: false,
   error: '',
   charities: [],
   getOneCharity: {},
}
export const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCharities.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.charities = payload
      })
      builder.addCase(getCharities.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
      })
      builder.addCase(getCharities.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(getOneCharityById.fulfilled, (state, { payload }) => {
         state.error = ''
         state.isLoading = false
         state.getOneCharity = payload
      })
      builder.addCase(getOneCharityById.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.getOneCharity = {}
      })
      builder.addCase(getOneCharityById.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.getOneCharity = {}
      })
      builder.addCase(addCharities.fulfilled, (state) => {
         state.error = ''
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(addCharities.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
      })
      builder.addCase(addCharities.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(editCharity.fulfilled, (state) => {
         state.error = ''
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(editCharity.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
      })
      builder.addCase(editCharity.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
         state.charities = []
      })
      builder.addCase(deleteCharity.fulfilled, (state) => {
         state.error = ''
         state.isLoading = false
         state.charities = []
         state.getOneCharity = {}
      })
      builder.addCase(deleteCharity.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
         state.getOneCharity = {}
      })
      builder.addCase(deleteCharity.rejected, (state, { payload }) => {
         state.error = payload.error
         state.isLoading = false
         state.charities = []
         state.getOneCharity = {}
      })
      builder.addCase(reserveCharity.fulfilled, (state) => {
         state.isLoading = false
         state.error = ''
         state.isLoading = false
         state.charities = []
         state.getOneCharity = {}
      })
      builder.addCase(reserveCharity.pending, (state) => {
         state.error = ''
         state.isLoading = true
         state.charities = []
         state.getOneCharity = {}
      })
      builder.addCase(reserveCharity.rejected, (state, { payload }) => {
         state.error = payload.error
         state.isLoading = false
         state.charities = []
         state.getOneCharity = {}
      })
   },
})
