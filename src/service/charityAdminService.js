import { axiosInstance } from '../api/axiosInstance'

export const getAllAdminCharityRequest = () => {
   return axiosInstance.get('/api/charity-admin')
}
export const getOneAdminCharityRequest = (id) => {
   return axiosInstance.get(`/api/charity-admin/profile?id=${id}`)
}
export const deleteAdminCharityRequest = (id) => {
   return axiosInstance.delete(`/api/charity-admin?id=${id}`)
}
export const saveAdminCharityRequest = (data) => {
   return axiosInstance.put(`/api/charity-admin`, data)
}
