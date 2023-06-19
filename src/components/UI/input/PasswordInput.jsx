import React, { forwardRef, useState } from 'react'
import { IconButton, InputAdornment, TextField, styled } from '@mui/material'
import { ReactComponent as Visibility } from '../../../assets/icons/eye.svg'
import { ReactComponent as VisibilityOff } from '../../../assets/icons/eyeOff.svg'

const PasswordInput = forwardRef((props, ref) => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

   return (
      <div>
         <StyledPasswordInput
            label={props.label}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            onBlur={props.onBlur}
            id={props.id}
            ref={ref}
            name={props.name}
            {...props}
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
      </div>
   )
})

export default PasswordInput

const StyledPasswordInput = styled(TextField)(({ error }) => ({
   '& .MuiOutlinedInput-root': {
      width: '482px',
      height: '32px',
      border: error ? '1px solid red' : '',
      color: error ? 'red' : '',
      '&:hover fieldset': {
         borderColor: error ? 'red' : '#6200EE',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#6200EE',
      },
   },
}))
