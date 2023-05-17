import { axiosInstance } from '../api/axiosInstance'

export const getRequestLentaCard = () => {
   return axiosInstance.get('/api/feeds')
}
export const getRequestLentaInfoCard = (userId) => {
   return axiosInstance.get(`/api/feeds/${userId}`)
}

export const postRequestLentaPresent = (id) => {
   return axiosInstance.post(`/api/reserves?wishId=${id}`)
}

export const postRequestLentaBooking = (id, isAnonymous) => {
   return axiosInstance.post(
      `/api/reserves/wish?wishId=${id}&isAnonymous=${isAnonymous}`
   )
}

// export const postRequestLentaСomplain = () => {
//    return axiosInstance.get('/api/lentaComplain')
// }
