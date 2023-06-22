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
         valid,
         borderError,
         ...rest
      },
      ref
   ) => {
      return (
         <>
            <StyledFormHelperText valid={valid} id={inputLabel}>
               {text}
            </StyledFormHelperText>
            <StyledOutlinedInput
               value={value}
               name={name}
               bordercolor={borderError?.toString()}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
               onBlur={onBlur}
               classes={{ focused: 'focused' }}
               id={id}
               ref={ref}
               valid={valid}
               endAdornment={
                  <StyledInputAbornment position="end">
                     <StyledIconButton>{icon}</StyledIconButton>

                     {valid && <StyledErrorIcon valid={valid} />}
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

const StyledFormHelperText = styled(FormHelperText)(({ valid }) => ({
   fontFamily: 'Inter',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '15px',
   display: 'flex',
   alignItems: 'center',
   marginBottom: '6px',
   color: valid ? 'red' : '#464444',
}))

const StyledOutlinedInput = styled(OutlinedInput)(({ valid, bordercolor }) => ({
   width: '100%',
   height: '30px',
   marginBottom: '15px',
   border: valid ? '1px solid red!important' : '',
   borderRadius: '6px',
   color: valid ? 'red' : '',
   paddingTop: '2px',

   '&.MuiOutlinedInput-root': {
      height: '32px',
      border: bordercolor === 'true' ? '1px solid red' : '1px solid grey',
      '&:hover ': {
         border: bordercolor === 'true' ? '1px solid red' : '1px solid #6200EE',
      },
      '&.focused': {
         border: bordercolor === 'true' ? '1px solid red' : '1px solid #6200EE',
      },
   },
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
   '&:hover': {
      webkitBoxShadow: '0 0 0 30px white inset !important',
   },
}))

const StyledErrorIcon = styled(ErrorIcon)(({ valid }) => ({
   color: valid ? 'red' : '',
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
