import { createSlice } from '@reduxjs/toolkit'
import {
   getAllAdminCharities,
   getAllAdminUsers,
   getAllFriends,
   getAllUserCharities,
   searchThunk,
} from './searchThunk'

export const searchSlice = createSlice({
   name: 'search',
   initialState: {
      data: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(searchThunk.fulfilled, (state, { payload }) => {
            state.data = payload
         })
         .addCase(searchThunk.pending, (state) => {
            state.data = []
         })
         .addCase(searchThunk.rejected, (state) => {
            state.data = []
         })
         .addCase(getAllAdminCharities.fulfilled, (state, { payload }) => {
            state.data = payload
         })
         .addCase(getAllAdminCharities.pending, (state) => {
            state.data = []
         })
         .addCase(getAllAdminCharities.rejected, (state) => {
            state.data = []
         })
         .addCase(getAllAdminUsers.fulfilled, (state, { payload }) => {
            state.data = payload
         })
         .addCase(getAllAdminUsers.pending, (state) => {
            state.data = []
         })
         .addCase(getAllAdminUsers.rejected, (state) => {
            state.data = []
         })
         .addCase(getAllFriends.fulfilled, (state, { payload }) => {
            state.data = payload
         })
         .addCase(getAllFriends.pending, (state) => {
            state.data = []
         })
         .addCase(getAllFriends.rejected, (state) => {
            state.data = []
         })
         .addCase(getAllUserCharities.fulfilled, (state, { payload }) => {
            state.data = payload
         })
         .addCase(getAllUserCharities.pending, (state) => {
            state.data = []
         })
         .addCase(getAllUserCharities.rejected, (state) => {
            state.data = []
         })
   },
})
