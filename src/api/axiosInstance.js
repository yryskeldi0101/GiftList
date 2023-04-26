import axios from 'axios'

const store = 0
const BASE_ULR = 'http://ec2-3-121-207-55.eu-central-1.compute.amazonaws.com'
export const axiosInstance = axios.create({ baseURL: BASE_ULR })

axiosInstance.interceptors.request.use(
   function (config) {
      config.headers.set('Authorization', store.getState().auth.token)
      return config
   },
   function (error) {
      return Promise.reject(error)
   }
)
axiosInstance.interceptors.response.use(
   function responsees(response) {
      return response
   },
   function cathError(error) {
      if (error.response.status === 401) {
         store.dispatch()
      }
      return Promise.reject(error)
   }
)
