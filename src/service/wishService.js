import { axiosFileInstance } from '../api/axiosFileInstance'
import { axiosInstance } from '../api/axiosInstance'

export const postFileReq = (file) => {
   return axiosFileInstance.post('/api/file', file)
}
export const getAllWishesReq = () => {
   return axiosInstance.get('/api/wishes')
}
export const postWishesReq = (data) => {
   return axiosInstance.post('/api/wishes', data)
}
export const getWishByIdReq = (id) => {
   return axiosInstance.get(`/api/wishes/${id}`)
}
export const getHolidaysReq = () => {
   return axiosInstance.get('/api/holidays')
}
export const deleteWishReq = (id) => {
   return axiosInstance.delete(`/api/wishes?id=${id}`)
}
export const editWishReq = (data) => {
   return axiosInstance.put(`/api/wishes?id=${data.id}`, data)
}
