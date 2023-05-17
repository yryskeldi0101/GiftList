import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   isloading: false,
   error: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyYmVrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDMwODgyMiwiZXhwIjoxNjg0MzEwMjYyfQ.sltv6tzEFsgcY29yhqTlEySD95IVupmcfdr6KiRCgCk',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {},
})

export const authActions = authSlice.actions
