/* eslint-disable import/no-cycle */
import { axiosInstance } from '../api/axiosInstance'

export const getAllBookedReq = () => {
   return axiosInstance.get('/api/reserves')
}
export const getBookedWishesReq = () => {
   return axiosInstance.get('/api/reserves/pagination-wish?page=1')
}
export const getCharitiesReq = () => {
   return axiosInstance.get('/api/reserves/pagination-charity')
}

export const postBookedWishReq = (data) => {
   return axiosInstance.post(
      `/api/reserves?wishId=${data}&holidayId=${data}`,
      {},
      {
         params: {
            wishId: data.id,
            holidayId: data.holidayId,
         },
      }
   )
}
// export const postBookedCharityReq = (data) => {
//    return axiosInstance.post(
//       '/api/reserves/charity',
//       {},
//       { params: { charityId: data.id, isAnonymous: data.anonymous } }
//    )
// }

export const deleteWishReq = (data) => {
   return axiosInstance.delete(`/api/reserves/wish=${data}`, {
      params: {
         wishId: data.id,
      },
   })
}

export const deleteCharityReq = (data) => {
   return axiosInstance.delete(`/api/reserves/charity?charityId=${data.id}`)
}
