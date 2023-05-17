import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyYmVrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDMyMDE3MiwiZXhwIjoxNjg0MzIxNjEyfQ.b7aD-H2g_ke1T57d_eiSts_ieFsSFV-vIavgWq0HfsA',
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
