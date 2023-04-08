import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Vector.svg'

const ReusableInput = ({
   id,
   inputLabel,
   placeholder,
   text,
   value,
   onChange,
   ref,
}) => {
   return (
      <StyledBox>
         <div>
            <StyledFormHelperText id={inputLabel}>{text}</StyledFormHelperText>
            <StyledOutlinedInput
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               aria-describedby={inputLabel}
               id={id}
               ref={ref}
            />

            <StyledFormHelperText id={inputLabel} style={{ color: 'red' }}>
               {text}
            </StyledFormHelperText>
            <StyledOutlinedInputError
               error={true}
               endAdornment={
                  <InputAdornment position="end">
                     <ErrorIcon style={{ color: 'red' }} />
                  </InputAdornment>
               }
               aria-describedby={inputLabel}
            />
         </div>
      </StyledBox>
   )
}

export default ReusableInput

const StyledFormHelperText = styled(FormHelperText)({
   fontSize: '14px',
})

const StyledBox = styled(Box)({
   width: '300px',
   display: 'flex',
   flexWrap: 'wrap',
   border: '1px dashed black',
   borderRadius: '10px',
   padding: '10px 10px 30px 10px',
})

const StyledOutlinedInput = styled(OutlinedInput)({
   width: '300px',
   height: '30px',
   borderRadius: '7px',
   marginBottom: '15px',
   ':hover': {
      border: '1px solid#6200EE',
      borderRadius: '3px',
   },
})

const StyledOutlinedInputError = styled(OutlinedInput)({
   color: 'red',
   width: '300px',
   height: '30px',
   borderRadius: '7px',
})
