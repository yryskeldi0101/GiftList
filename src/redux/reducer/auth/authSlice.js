import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhaWJhQGdtYWlsLmNvbSIsImlhdCI6MTY4MzAwNzU1NSwiZXhwIjoxNjgzMDA4OTk1fQ.VoqXd9tuxfAMoOLZ3faoKLZ6i8DFbNgp0rKK8WomsHc',
   password: '',
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
