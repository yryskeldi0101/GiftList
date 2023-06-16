import { axiosInstance } from '../api/axiosInstance'

export const getAllComplainsReq = () => {
   return axiosInstance.get('/api/complaint/complaints')
}
export const getDetailsWishReq = (id) => {
   return axiosInstance.get(`/api/complaint/read-more-wish?id=${id}`)
}
export const getDetailsCharityReq = (id) => {
   return axiosInstance.get(`/api/complaint/read-more-charity?id=${id}`)
}
export const blockWishReq = (id) => {
   return axiosInstance.get(`/api/complaint/block-wish?id=${id}`)
}
export const blockCharityReq = (id) => {
   return axiosInstance.get(`/api/complaint/block-charity?id=${id}`)
}
export const deleteWishReq = (id) => {
   return axiosInstance.delete(`/api/complaint/delete-wish?id=${id}`)
}
export const deleteCharityReq = (id) => {
   return axiosInstance.delete(`/api/complaint/delete-charity?id=${id}`)
}
