import axios from 'axios'
<<<<<<< HEAD
import { store } from '../redux/store'
// eslint-disable-next-line import/no-cycle

export const BASE_ULR = 'http://giftlist.peaksoftprojects.com'

export const axiosInstance = axios.create({ baseURL: BASE_ULR })
=======
// eslint-disable-next-line import/no-cycle
import store from '../redux/store/index'

const BASE_ULR = 'http://ec2-3-120-207-129.eu-central-1.compute.amazonaws.com'
export const axiosInstance = axios.create({
   baseURL: BASE_ULR,
   'Content-Type': 'application/json',
})

>>>>>>> e274ce5e7ba587d28fce103ff43c04334cd764cb
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
