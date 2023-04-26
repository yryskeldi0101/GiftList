import * as React from 'react'
import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { IconButton } from '@mui/material'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/errorInput.svg'
import { ReactComponent as InactiveIcon } from '../../../assets/icons/inactive.svg'

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
               errorColor={error}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
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
   margin-right: -15px;
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
