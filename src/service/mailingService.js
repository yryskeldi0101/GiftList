import { axiosFileInstance } from '../api/axiosFileInstance'
import { axiosInstance } from '../api/axiosInstance'

export const getAllMailingRequest = () => {
   return axiosInstance.get('/api/mailing_list')
}
export const getOneMailingByIdRequest = (id) => {
   return axiosInstance.get(`/api/mailing_list/${id}`)
}
export const createMailRequest = (sendData) => {
   return axiosInstance.post('/api/mailing_list', sendData)
}
export const uploadMailingImageRequest = (data) => {
   return axiosFileInstance.post('/api/file', data)
}
