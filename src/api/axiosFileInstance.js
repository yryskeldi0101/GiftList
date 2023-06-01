import axios from 'axios'

// import { BASE_ULR } from './axiosInstance'
import store from '../redux/store'
import { BASE_URL } from './axiosInstance'

export const axiosFileInstance = axios.create({
   baseURL: BASE_URL,
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
