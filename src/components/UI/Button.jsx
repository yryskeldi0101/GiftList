import { Button, styled } from '@mui/material'
import React from 'react'

const MyButton = ({
   variant,
   hoverbackgroundcolor,
   disabled,
   activebackgroundcolor,
   defaultcolor,
   disabledcolor,
   children,
   ...rest
}) => {
   return (
      <StyleButton
         variant={variant}
         disabled={disabled}
         hoverbackgroundcolor={hoverbackgroundcolor}
         activebackgroundcolor={activebackgroundcolor}
         defaultcolor={defaultcolor}
         disabledcolor={disabledcolor}
         {...rest}
      >
         {children}
      </StyleButton>
   )
}

export default MyButton

const StyleButton = styled(Button)(
   ({
      variant,
      defaultcolor,
      hoverbackgroundcolor,
      activebackgroundcolor,
      disabledcolor,
   }) => {
      switch (variant) {
         case 'contained':
            return {
               backgroundColor: '#8639B5',
               color: `${defaultcolor}`,
               gap: '10px',
               padding: '10px 26px',
               '&:hover': {
                  background: `${hoverbackgroundcolor}`,
               },
               '&:active': {
                  background: `${activebackgroundcolor}`,
               },
               '&:disabled': {
                  color: `${disabledcolor}`,
               },
            }
         case 'outlined':
            return {
               gap: '10px',
               padding: '10px 26px',
               backgroundColor: 'none',
               color: '#8D949E',
               '&:disabled': {
                  color: `${disabledcolor}`,
                  background: 'none',
               },
            }
         default:
            return {
               backgroundColor: 'green',
            }
      }
   }
)
