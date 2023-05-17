import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQzNDg3MTksImV4cCI6MTY4NDM1MDE1OX0.tI8aHdbdTdDlfedb2uZDmr91vdX_JuLuDl4OjOIflPU',
   isloading: false,
   userId: 10,
   error: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {},
})

export const authActions = authSlice.actions
