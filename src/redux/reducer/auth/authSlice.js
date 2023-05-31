import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhLmFzYW5nYXppZXZhQGdtYWlsLmNvbSIsImlhdCI6MTY4NTUxNTA4OCwiZXhwIjoxNjg1NTE2NTI4fQ.2Yu_j93uHa9PawtB7XABm1b8UqtqfI0EBSpWfu7-qsQ',
   isAuthorized: false,
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
