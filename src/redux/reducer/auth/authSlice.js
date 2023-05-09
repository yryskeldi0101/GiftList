import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5cnlza2VsZGlAZ21haWwuY29tIiwiaWF0IjoxNjgzNjIyMjMzLCJleHAiOjE2ODM3NjYyMzN9.2j3D5aDheK_6ac3atElIwMhUui5tLfW3fuAv_XjgzyQ',
   userId: 11,
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
