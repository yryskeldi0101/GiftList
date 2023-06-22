import { axiosInstance } from '../api/axiosInstance'
import { axiosFileInstance } from '../api/axiosFileInstance'

export const getProfileRequest = () => {
   return axiosInstance.get(`/api/profiles/detail`)
}
export const editProfileRequest = (data) => {
   return axiosInstance.put('/api/profiles', data)
}
export const uploadFileRequest = (data) => {
   return axiosFileInstance.post('/api/file', data)
}
export const addProfileResetPasswordRequest = (data) => {
   return axiosFileInstance.post('/api/profiles/password', data)
}
