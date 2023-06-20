import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
   initialState: {
      data: {
         name: '',
         date: '',
         image: '',
      },
   },
   name: 'ModalSlice',
   reducers: {
      getEditCardData: (state, action) => {
         state.data = action.payload
      },
   },
})

export const actionModalSlice = modalSlice.actions
