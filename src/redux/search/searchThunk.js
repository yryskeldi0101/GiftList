import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../api/axiosInstance'
import { getAllAdminCharityRequest } from '../../service/charityAdminService'
import { getAllUsersRequest } from '../../service/userService'
import { getAllFriendsRequest } from '../../service/friendsService'
import { getCharityRequest } from '../../service/charityService'

export const searchThunk = createAsyncThunk(
   'search/global',
   async (payload, { rejectWithValue }) => {
      try {
         const req = axiosInstance.get(payload)
         return (await req).data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getAllAdminCharities = createAsyncThunk(
   'charity',
   async (_, { rejectWithValue }) => {
      try {
         const data = await getAllAdminCharityRequest()
         const charityData = data.data
         return charityData
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getAllAdminUsers = createAsyncThunk(
   'admin',
   async (page, { rejectWithValue }) => {
      try {
         const data = await getAllUsersRequest(page)
         const users = data.data.elements
         return users
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAllFriends = createAsyncThunk(
   'friends',
   async (_, { rejectWithValue }) => {
      try {
         const data = await getAllFriendsRequest()
         const users = data.data
         return users
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAllUserCharities = createAsyncThunk(
   'charity-users',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getCharityRequest()
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
