import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField, styled } from '@mui/material'
import Visibility from '../../../assets/icons/eye.svg'
import VisibilityOff from '../../../assets/icons/eyeOff.svg'

const PasswordInput = (props) => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }
   const handleSubmit = (event) => {
      event.preventDefault()
   }

   return (
      <form onSubmit={handleSubmit}>
         <StyledPasswordInput
            label={props.label}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
               endAdornment: (
                  <InputAdornment position="start">
                     <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                     </IconButton>
                  </InputAdornment>
               ),
            }}
            {...props}
         />
      </form>
   )
}

export default PasswordInput

const StyledPasswordInput = styled(TextField)(() => ({
   '& .MuiOutlinedInput-root': {
      width: '482px',
      height: '32px',
      '&:hover fieldset': {
         borderColor: '#6200EE',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#6200EE',
      },
   },
}))
