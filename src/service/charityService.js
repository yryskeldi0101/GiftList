import { axiosFileInstance } from '../api/axiosFileInstance'
import { axiosInstance } from '../api/axiosInstance'

export const getCharityRequest = () => {
   return axiosInstance.get('/api/charities')
}
export const getOneCharityRequest = (id) => {
   return axiosInstance.get(`/api/charities/profile?id=${id}`)
}
export const addCharityRequest = (data) => {
   return axiosInstance.post('/api/charities', data)
}
export const editCharityRequest = (data) => {
   return axiosInstance.put('/api/charities', data)
}
export const deleteCharityRequest = (id) => {
   return axiosInstance.delete(`/api/charities?id=${id}`)
}
export const reserveCharityRequest = (data) => {
   return axiosInstance.post(
      `/api/reserves/charity?charityId=${data.id}&isAnonymous=${data.anonymous}`
   )
}
export const uploadFileRequest = (data) => {
   return axiosFileInstance.post('/api/file', data)
}
