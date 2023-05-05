// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../../api/axiosInstance'

export const signInReq = (data) => {
   return axiosInstance.post('/api/auth/sign-in', data)
}
export const signUpReq = (data) => {
   return axiosInstance.post('/api/auth/sign-up', data)
}
export const forgotPasswordReq = (email) => {
   return axiosInstance.post(`/api/user/forgot_password?email=${email}`)
}
export const resetPasswordReq = (token) => {
   return axiosInstance.post(`/api/user/reset_password?token=${token}`)
}
export const postAuthGoogleReq = (data) => {
   return axiosInstance.post('/api/auth/auth-google', data)
}
export const getGoogleApisReq = (response) => {
   return axiosInstance.get('https://www.googleapis.com/oauth2/v3userInfo', {
      headers: {
         Authorization: `Bearer ${response.access_token}}`,
      },
   })
}
