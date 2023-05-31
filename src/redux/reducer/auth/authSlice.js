import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhLmFzYW5nYXppZXZhQGdtYWlsLmNvbSIsImlhdCI6MTY4NTUyNzM0OCwiZXhwIjoxNjg1NTI4Nzg4fQ.4Uq3Ns0QQq0tUxOSBnXU5QQdeW0XGBocK_c_XgDnQW4',
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
