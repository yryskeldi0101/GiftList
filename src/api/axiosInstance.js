import axios from 'axios'
import { store } from '../redux/store'

const BASE_ULR = 'http://ec2-52-59-195-233.eu-central-1.compute.amazonaws.com'
export const axiosInstance = axios.create({ baseURL: BASE_ULR })
axiosInstance.interceptors.request.use(
   (config) => {
      const configureStore = { ...config }
      const {
         auth: { token },
      } = store.getState()
      if (token) {
         configureStore.headers.Authorization = `Bearer ${token}`
      }
      return configureStore
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   function responsees(response) {
      return response
   },
   function cathError(error) {
      if (error.response.status === 401) {
         throw new Error('Error')
      }
      return Promise.reject(error)
   }
)

export const axiosFileInstance = axios.create({
   baseURL: BASE_ULR,
})

axiosFileInstance.interceptors.request.use(
   (config) => {
      const configureStore = { ...config }
      const {
         auth: { token },
      } = store.getState()
      if (token) {
         configureStore.headers.Authorization = `Bearer ${token}`
      }
      if (config.data && config.data instanceof FormData) {
         configureStore.headers['Content-Type'] = 'multipart/form-data'
      }
      return configureStore
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosFileInstance.interceptors.response.use(
   function responsees(response) {
      return response
   },
   function cathError(error) {
      if (error.response.status === 401) {
         throw new Error('Error')
      }
      return Promise.reject(error)
   }
)
