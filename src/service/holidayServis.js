import { axiosInstance } from '../api/axiosInstance'

export const getService = () => {
   return axiosInstance.get('api/holidays')
}

export const postService = (url, postData) => {
   return axiosInstance.post(url, postData)
}
