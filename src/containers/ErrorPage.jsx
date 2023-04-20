import { styled } from '@mui/material'
import React from 'react'

const ErrorPage = () => {
   return (
      <div>
         <Error>404 ERROR PAGE NOT FOUND!</Error>
      </div>
   )
}

export default ErrorPage
const Error = styled('h1')`
   color: #0f0124;
   font-size: 30px;
   font-family: Inter;
   font-weight: bold;
   margin-left: 20px;
   margin-top: 20px;
`
