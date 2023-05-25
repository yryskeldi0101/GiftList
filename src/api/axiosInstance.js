import axios from 'axios'
import store from '../redux/store/index'
// import { signOut } from '../redux/reducer/auth/authThunk'

export const BASE_ULR = 'http://giftlist.peaksoftprojects.com'
export const axiosInstance = axios.create({
   baseURL: BASE_ULR,
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
   function c(response) {
      return response
   },
   function cathError(error) {
      if (error) {
         throw new Error('Error')
      }
      return Promise.reject(error)
   }
)

export const axiosFileInstance = axios.create({
   baseURL: BASE_ULR,
})
