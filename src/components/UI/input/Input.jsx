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
               value={value}
               name={name}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
               onBlur={onBlur}
               classes={{ focused: 'focused' }}
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
               autoComplete="off"
               autoFocus={false}
               fullWidth
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
   paddingTop: '2px',

   '&.MuiOutlinedInput-root': {
      height: '32px',
      border: '1px solid grey',
      '&:hover ': {
         border: '1px solid #6200EE',
      },
      '&.focused': {
         border: '1px solid #6200EE',
      },
   },
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
   '&:hover': {
      webkitBoxShadow: '0 0 0 30px white inset !important',
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
