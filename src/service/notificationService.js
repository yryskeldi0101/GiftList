import { axiosInstance } from '../api/axiosInstance'

export const getRequestNotifications = () => {
   return axiosInstance.get('/api/notifications')
}
export const postRequestNotification = () => {
   return axiosInstance.post(`/api/notifications`)
}
