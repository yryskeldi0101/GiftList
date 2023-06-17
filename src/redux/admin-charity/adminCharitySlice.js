import { createSlice } from '@reduxjs/toolkit'
import { getOneAdminCharityById } from './adminCharityThunk'

const initialState = {
   oneCharity: {},
}
export const adminCharitySlice = createSlice({
   name: 'adminCharity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getOneAdminCharityById.fulfilled, (state, action) => {
         state.oneCharity = action.payload
      })
   },
})
