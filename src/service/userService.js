import { axiosInstance } from '../api/axiosInstance'

export const getAllUsersRequest = () => {
   return axiosInstance.get('/api/user')
}
export const getOneUserByIdRequest = (id) => {
   return axiosInstance.get(`/api/user/${id}`)
}
export const blockUserRequest = (id) => {
   console.log(id)
   return axiosInstance.put(`/api/user/${id}/block`, { blocked: true })
}
export const deleteUserRequest = (id) => {
   console.log(id)
   return axiosInstance.delete(`/api/user/${id}`)
}
