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
      background,
      outlinedbordercolor,
      propswidth,
   }) => {
      switch (variant) {
         case 'contained':
            return {
               width: `${propswidth}`,
               backgroundColor: `${background}`,
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
               width: `${propswidth}`,
               gap: '10px',
               padding: '10px 26px',
               backgroundColor: 'none',
               borderColor: `${outlinedbordercolor}`,
               color: `${defaultcolor}`,
               '&:hover': {
                  background: `${hoverbackgroundcolor}`,
                  borderColor: `${outlinedbordercolor}`,
               },
               '&:active': {
                  background: `${activebackgroundcolor}`,
                  borderColor: `${outlinedbordercolor}`,
               },
               '&:disabled': {
                  color: `${disabledcolor}`,
                  background: 'none',
               },
            }
         default:
            return {
               width: `${propswidth}`,
               backgroundColor: 'none',
            }
      }
   }
)
