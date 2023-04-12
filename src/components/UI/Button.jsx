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
      defaultColor,
      hoverbackgroundcolor,
      activebackgroundcolor,
      disabledcolor,
      background,
      outlinedBorderColor,
      propsWidth,
   }) => {
      switch (variant) {
         case 'contained':
            return {
               width: `${propsWidth}`,
               backgroundColor: `${background}`,
               color: `${defaultColor}`,
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
               width: `${propsWidth}`,
               gap: '10px',
               padding: '10px 26px',
               backgroundColor: 'none',
               borderColor: `${outlinedBorderColor}`,
               color: `${defaultColor}`,
               '&:hover': {
                  background: `${hoverbackgroundcolor}`,
                  borderColor: `${outlinedBorderColor}`,
               },
               '&:active': {
                  background: `${activebackgroundcolor}`,
                  borderColor: `${outlinedBorderColor}`,
               },
               '&:disabled': {
                  color: `${disabledcolor}`,
                  background: 'none',
               },
            }
         default:
            return {
               width: `${propsWidth}`,
               backgroundColor: 'none',
            }
      }
   }
)
