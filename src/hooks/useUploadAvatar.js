import { useState } from 'react'

export const useUploadAvatar = () => {
   const [avatarUrl, setAvatarUrl] = useState()
   const handleAvatarChange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
         setAvatarUrl(reader.result)
      }
   }
   return { avatarUrl, handleAvatarChange }
}

// const ToastifyStyled = styled(ToastContainer)(() => ({
//    textAlign: 'start',
//    '& .Toastify__toast--success': {
//       position: 'absolute',
//       fontFamily: 'Inter',
//       background: '#EAFBE7',
//       border: '1px solid #8CDB95',
//       width: '500px',
//       right: '20px',
//       '& .Toastify__toast-icon': {
//          paddingBottom: '25px',
//          alignItems: 'flex-start',
//          svg: {
//             fill: '#00AB1B',
//          },
//       },
//       '& .Toastify__close-button': {
//          path: {
//             fill: '#4A4A6A',
//          },
//       },
//    },
//    '& .Toastify__toast--warning': {
//       position: 'absolute',
//       fontFamily: 'Inter',
//       color: '#FF8800',
//       width: '500px',
//       right: '20px',
//       background: '#FFF3D8',
//       border: '1px solid #ED9E44',
//       '& .Toastify__toast-icon': {
//          paddingBottom: '25px',
//          alignItems: 'flex-start',
//          svg: {
//             fill: '#FFC55C',
//          },
//       },
//       '& .Toastify__close-button': {
//          path: {
//             fill: '#4A4A6A',
//          },
//       },
//    },
//    '& .Toastify__toast--info': {
//       position: 'absolute',
//       fontFamily: 'Inter',
//       width: '500px',
//       right: '20px',
//       background: '#EBEFF7',
//       '& .Toastify__toast-icon': {
//          background: '#EBEFF7',
//          paddingBottom: '25px',
//          svg: {
//             fill: '#3772FF',
//          },
//       },
//       '& .Toastify__close-button': {
//          path: {
//             fill: '#4A4A6A',
//          },
//       },
//    },
//    '& .Toastify__toast--error': {
//       position: 'absolute',
//       background: '#FFEBEB',
//       border: '1px solid #fb9998',
//       width: '500px',
//       right: '20px',
//       padding: '8px 16px',
//       '& .Toastify__toast-icon': {
//          paddingBottom: '25px',
//          alignItems: 'flex-start',
//          svg: {
//             fill: '#E53535',
//          },
//       },
//       '& .Toastify__close-button': {
//          path: {
//             fill: '#4A4A6A',
//          },
//       },
//    },

//    '& .Toastify__toast--body': {
//       alignItems: 'flex-start',
//       color: 'black',
//    },

//    '& .Toastify__close-button': {
//       path: {
//          fill: '4A4A6A',
//       },
//    },
// }))
