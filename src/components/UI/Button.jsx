import { Button, styled } from '@mui/material'
import React from 'react'

const MyButton = ({
   variant,
   hoverbackgroundcolor,
   disabled,
   activebackgroundcolor,
   defaultcolor,
   disabledcolor,
   background,
   border,
   children,
   type,
   ...rest
}) => {
   return (
      <StyleButton
         variant={variant}
         background={background}
         disabled={disabled}
         border={border}
         hoverbackgroundcolor={hoverbackgroundcolor}
         activebackgroundcolor={activebackgroundcolor}
         defaultcolor={defaultcolor}
         disabledcolor={disabledcolor}
         type={type}
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
      border,
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
               padding: '10px 2px',
               backgroundColor: 'none',
               border,
               borderColor: `${outlinedbordercolor}`,
               color: `${defaultcolor}`,
               '&:hover': {
                  background: `${hoverbackgroundcolor}`,
                  borderColor: `${outlinedbordercolor}`,
                  border,
               },
               '&:active': {
                  background: `${activebackgroundcolor}`,
                  borderColor: `${outlinedbordercolor}`,
                  border,
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
