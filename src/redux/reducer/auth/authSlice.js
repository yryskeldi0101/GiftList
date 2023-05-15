import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5cnlza2VsZGlAZ21haWwuY29tIiwiaWF0IjoxNjg0MTYyNTcxLCJleHAiOjE2ODQxNjQwMTF9.oFlRXA2lo4aOmD8EYMzMfGF04peIZghSlrWr5i0VZVk',
   isAuthorized: false,
   userId: 11,
   isloading: false,
   error: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {},
})

export const authActions = authSlice.actions
