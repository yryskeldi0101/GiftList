import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQ0NzEyOTMsImV4cCI6MTY4NDQ3MjczM30.QOpyXyM-naVqxNDK5HP3h9wWu6LH2BoPnVu1TYoPV_4',
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
