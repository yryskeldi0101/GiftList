import axios from 'axios'
import { signOut } from '../redux/reducer/auth/authThunk'
import store from '../redux/store'

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
   function c(response) {
      return response
   },
   function cathError(error) {
      if (error) {
         if (error?.status === 401 || error?.code === 's') {
            store.dispatch(signOut())
            throw new Error('Error')
         }
      }
      return Promise.reject(error)
   }
)
