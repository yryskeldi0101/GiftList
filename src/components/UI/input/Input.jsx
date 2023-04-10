import * as React from 'react'
import { styled } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Vector.svg'

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
               errorColor={error}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
               id={id}
               ref={ref}
               error={error}
               endAdornment={
                  <InputAdornment position="end">
                     {error && <StyledErrorIcon error={error} />}
                  </InputAdornment>
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

// const StyledBox = styled(Box)({
//    display: 'flex',
//    flexWrap: 'wrap',
//    borderRadius: '10px',
//    border: '1px dashed black',
//    padding: '10px 10px 30px 10px',
// })

const StyledOutlinedInput = styled(OutlinedInput)(({ error }) => ({
   width: '120%',
   height: '30px',
   marginBottom: '15px',
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
