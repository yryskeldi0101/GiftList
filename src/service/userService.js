import { axiosInstance } from '../api/axiosInstance'

export const getAllUsersRequest = () => {
   return axiosInstance.get(`/api/user?page=${20}&size=1`)
}
export const getOneUserByIdRequest = (id) => {
   return axiosInstance.get(`/api/user/${id}`)
}
export const blockUserRequest = (id, isBlocked) => {
   return axiosInstance.put(`/api/user`, { userId: id, blocked: isBlocked })
}
export const deleteUserRequest = (id) => {
   return axiosInstance.delete(`/api/user/${id}`)
}
