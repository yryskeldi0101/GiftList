/* eslint-disable import/no-cycle */
import { axiosInstance } from '../api/axiosInstance'

export const getCharityRequest = () => {
   return axiosInstance.get('/api/charities')
}
export const addCharityRequest = (data) => {
   return axiosInstance.post('/api/charities', data)
}
