import * as React from 'react'
import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

import { ReactComponent as ErrorIcon } from '../../../assets/icons/errorInput.svg'

const ReusableInput = React.forwardRef(
   (
      {
         id,
         inputLabel,
         placeholder,
         text,
         value,
         error,
         onChange,
         icon,
         name,
         onBlur,
         ...rest
      },
      ref
   ) => {
      return (
         <>
            <StyledFormHelperText error={error} id={inputLabel}>
               {text}
            </StyledFormHelperText>
            <StyledOutlinedInput
               errorcolor={error}
               // value={value}
               name={name}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
               onBlur={onBlur}
               id={id}
               ref={ref}
               error={error}
               endAdornment={
                  <StyledInputAbornment position="end">
                     <StyledIconButton>{icon}</StyledIconButton>

                     {error && <StyledErrorIcon error={error} />}
                  </StyledInputAbornment>
               }
               {...rest}
            />
         </>
      )
   }
)

export default ReusableInput

const StyledFormHelperText = styled(FormHelperText)(({ error }) => ({
   fontSize: '14px',
   color: error ? 'red' : '#8D949E',
}))

const StyledOutlinedInput = styled(OutlinedInput)(({ error }) => ({
   height: '30px',
   marginBottom: '15px',
   border: error ? '1px solid red' : '',
   borderRadius: '6px',
   color: error ? 'red' : '',

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
   '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6200EE',
   },
}))

const StyledErrorIcon = styled(ErrorIcon)(({ error }) => ({
   color: error ? 'red' : '',
}))
const StyledIconButton = styled(IconButton)`
   margin-right: -18px;
   padding: 0;
   svg: {
      margin-right: -35px;
      circle: {
         fill: #6200ee;
         fill-opacity: 100%;
      }
   }
`
const StyledInputAbornment = styled(InputAdornment)`
   padding: 0;
`
