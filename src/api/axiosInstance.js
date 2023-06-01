import axios from 'axios'
// eslint-disable-next-line import/no-cycle
import store from '../redux/store/index'

export const BASE_URL = 'http://giftlist.peaksoftprojects.com'
export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   'Content-Type': 'application/json',
})

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
