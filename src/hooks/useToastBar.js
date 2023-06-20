import React from 'react'
import { styled } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

const getColor = (type) => {
   const colors = {
      success: '',
      error: '',
      warning: '',
      info: '#007AFF',
      default: '#4C4859',
   }

   return colors[type] || colors.default
}
const Title = styled('h4')(({ type }) => ({
   fontFamily: 'Inter',
   margin: '10px 0 0 0',
   fontSize: '16px',
   lineHeight: '18.75px',
   color: getColor(type),
}))

const Message = styled('p')(() => ({
   margin: '8px 0 10px 0',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#000000',
}))

function useToastBar() {
   const showToast = (type, title, message) => {
      toast[type](
         <>
            <Title type={type}>{title}</Title>
            <Message>{message}</Message>
         </>,
         {
            position: 'top-right',
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
         }
      )
   }
   return { showToast }
}

export default useToastBar
