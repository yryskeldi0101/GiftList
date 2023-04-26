import * as React from 'react'
import { styled } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { IconButton } from '@mui/material'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Vector.svg'
import { ReactComponent as InactiveIcon } from '../../../assets/icons/inactive.svg'

const ReusableInput = React.forwardRef(
   (
      { id, inputLabel, placeholder, text, value, error, onChange, ...rest },
      ref
   ) => {
      return (
         <>
            <StyledFormHelperText error={error} id={inputLabel}>
               {text}
            </StyledFormHelperText>
            <StyledOutlinedInput
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
               id={id}
               ref={ref}
               error={error}
               endAdornment={
                  <StyledInputAbornment position="end">
                     <StyledIconButton>
                        <InactiveIcon />
                     </StyledIconButton>
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
   width: '322px',
   height: '39px',
   marginBottom: '15px',
   paddingRight: '0px',
   border: error ? '1px solid red' : '1px solid #BDBDBD',
   borderRadius: '6px',
   color: error ? 'red' : '',
   '&:hover': {
      border: error ? 'red' : '1px solid #6200EE',
      borderRadius: '5px',
   },
}))

const StyledErrorIcon = styled(ErrorIcon)(({ error }) => ({
   color: error ? 'red' : '',
}))
const StyledIconButton = styled(IconButton)`
   padding: 0;
   margin-right: -10px;
   svg: {
      circle: {
         fill: #6200ee;
         fill-opacity: 100%;
      }
   }
`
const StyledInputAbornment = styled(InputAdornment)`
   padding: 0;
`
