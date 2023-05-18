import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQ0Mzk5MzQsImV4cCI6MTY4NDQ0MTM3NH0.SlhHsr6gFpqDnqZ8dhrzIVKW8sTv9Z97Zc4btZUcn_4',
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
