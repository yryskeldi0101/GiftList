import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   isloading: false,
   error: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YWt5cG92YXNhbHRhbmF0OUBnbWFpbC5jb20iLCJpYXQiOjE2ODQ4NDg1MzgsImV4cCI6MTY4NDg0OTk3OH0.3JxyTEk6xkQfSlilh3reiWD6nOeJDimQ00bu-o4fbX8',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {},
})

export const authActions = authSlice.actions
