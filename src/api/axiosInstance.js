import axios from 'axios'
// eslint-disable-next-line import/no-cycle
import store from '../redux/store/index'

const BASE_ULR = 'http://ec2-3-120-31-83.eu-central-1.compute.amazonaws.com'
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
