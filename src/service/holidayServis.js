import { axiosInstance } from '../api/axiosInstance'

export const getService = () => {
   return axiosInstance.get('api/holidays')
}

export const postService = (url, postData) => {
   return axiosInstance.post(url, postData)
}

export const putService = (url, putData) => {
   return axiosInstance.put(url, putData)
}

export const deleteService = (url, params) => {
   return axiosInstance.delete(url, { params })
}
