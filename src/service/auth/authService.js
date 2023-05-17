// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../../api/axiosInstance'

export const signInReq = (data) => {
   return axiosInstance.post('/api/auth/sign-in', data)
}
export const signUpReq = (data) => {
   return axiosInstance.post('/api/auth/sign-up', data)
}
export const forgotPasswordReq = (email, baseUrl, token) => {
   return axiosInstance.post(
      `/api/auth/forgot-password?email=${email}&link=${baseUrl}/user?open=reset-password?${token}`
   )
}
export const resetPasswordReq = ({ token, data }) => {
   return axiosInstance.post(`/api/auth/reset-password?token=${token}`, data)
}
export const postAuthGoogleReq = (data) => {
   console.log(data, 'DATA')
   return axiosInstance.post(
      `/api/auth/auth-google?tokenId=${data.currentUser.accessToken}`
   )
}
