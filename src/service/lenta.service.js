import { axiosInstance } from '../api/axiosInstance'

export const getRequestLentaCard = () => {
   return axiosInstance.get('/api/feeds?page=1&size=6')
}
export const getRequestLentaInfoCard = (userId) => {
   return axiosInstance.get(`/api/feeds/${userId}`)
}

export const postRequestLentaPresent = ({ wishId, holidayId }) => {
   return axiosInstance.post(
      `/api/reserves?wishId=${wishId}&holidayId=${holidayId}`
   )
}
export const postRequestLentaBooking = (id, isAnonymous) => {
   return axiosInstance.post(
      `/api/reserves/wish?wishId=${id}&isAnonymous=${isAnonymous}`
   )
}
export const deleteRequestLentaBooking = (id) => {
   return axiosInstance.delete(`/api/reserves/wish?wishId=${id}`)
}

export const postRequestLentaComplain = ({ id, complaintDescription }) => {
   return axiosInstance.post(`api/complaint/wish`, { id, complaintDescription })
}

export const getRequestHoliday = () => {
   return axiosInstance.get('/api/holidays')
}
