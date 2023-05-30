/* eslint-disable import/no-cycle */
import { axiosInstance } from '../api/axiosInstance'

export const getAllBookedReq = () => {
   return axiosInstance.get('/api/reserves')
}
export const getBookedWishesReq = () => {
   return axiosInstance.get('/api/reserves/pagination-wish?page=1&limit=2')
}
export const getCharitiesReq = () => {
   return axiosInstance.get('/api/reserves/pagination-charity')
}

export const postBookedWishReq = (data) => {
   return axiosInstance.post(
      `/api/reserves/wish?wishId=${data}&isAnonymous=false`,
      {},
      {
         params: {
            wishId: data.id,
            isAnonymous: data.anonymous,
            // holidayId: data.holidayId,
         },
      }
   )
}
export const postBookedCharityReq = (data) => {
   return axiosInstance.post(
      '/api/reserves/charity',
      {},
      { params: { charityId: data.id, isAnonymous: data.anonymous } }
   )
}

export const deleteWishReq = (id) => {
   return axiosInstance.delete(
      `/api/reserves/wish=${id}`
      //    {
      //       params: {
      //          wishId: id,
      //       },
      //    }
   )
}
