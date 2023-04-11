import React, { useState } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'

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
         <TextField
            label={props.label}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={props.value}
            onChange={props.changeHandler}
            InputProps={{
               endAdornment: (
                  <InputAdornment position="end">
                     <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {showPassword ? 'off' : 'on'}
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
