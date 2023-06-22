import { axiosInstance } from '../api/axiosInstance'

export const getAllFriendsRequest = () => {
   return axiosInstance.get('/api/friends')
}
export const getAllRequestsToFriend = () => {
   return axiosInstance.get(`/api/friends?type=requests`)
}
export const getOneFriendByIdRequest = (id) => {
   return axiosInstance.get(`/api/user/${id}`)
}
export const acceptApplicationRequest = (id) => {
   return axiosInstance.post(`/api/friends/accept/${id}`)
}
export const rejectApplicationRequest = (id) => {
   return axiosInstance.post(`/api/friends/reject/${id}`)
}
export const deleteOrAddToFriendRequest = (id) => {
   return axiosInstance.post(`/api/friends/${id}`)
}
