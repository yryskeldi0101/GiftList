import React, { useState } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'

function PasswordInput(props) {
   const [showPassword, setShowPassword] = useState(false)
   const [value, setValue] = useState('')

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }
   const changeHandler = (e) => {
      setValue(e.target.value)
   }
   return (
      <TextField
         label={props.label}
         type={showPassword ? 'text' : 'password'}
         variant="outlined"
         value={value}
         onChange={changeHandler}
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
   )
}

export default PasswordInput
