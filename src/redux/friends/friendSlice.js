import { createSlice } from '@reduxjs/toolkit'
import { getOneFriendRequest } from './friendThunk'

const initialState = {
   friendProfile: {},
}
export const friendSlice = createSlice({
   name: 'friends',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getOneFriendRequest.fulfilled, (state, action) => {
         state.friendProfile = action.payload
      })
   },
})
