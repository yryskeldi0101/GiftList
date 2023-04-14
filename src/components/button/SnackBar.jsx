import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MySnackbar({ message, title, type }) {
   const toastConfig = {
      position: 'top-left',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
   }

   const messageStyle = {
      color: 'green',
      position: 'relative',
      top: '10px',
      left: '10px',
   }
   const titleStyle = {
      color: 'black',
      position: 'relative',
      top: '19px',
      left: '10px',
   }

   toast[type](
      <>
         <h4 style={titleStyle}>{title}</h4>
         <p style={messageStyle}>{message}</p>
      </>,
      toastConfig
   )

   return <ToastContainer />
}

export default MySnackbar
