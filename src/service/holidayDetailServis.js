import { axiosInstance } from '../api/axiosInstance'

export const getHolidayDetailService = (id) => {
   return axiosInstance.get(`/api/holidays/details?id=${id}`)
}

export const postHolidayDetailService = (url, postData) => {
   return axiosInstance.post(url, postData)
}

export const putHolidayDetailService = (url, data, params) => {
   return axiosInstance.put(url, data, {
      params: {
         id: params,
      },
   })
}

export const deleteHolidayDetailService = (url, params) => {
   return axiosInstance.delete(url, { params })
}
