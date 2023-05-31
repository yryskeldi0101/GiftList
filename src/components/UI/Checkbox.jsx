import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const StyledCheckbox = styled(Checkbox)(({ borderChange }) => ({
   color: borderChange ? '#87898E' : '#8639B5',
   '&.Mui-checked': {
      color: '#8639B5;',
   },
}))

const Checkboxes = React.forwardRef(
   ({ checked, handleChange, inputProps, ...rest }, ref) => {
      return (
         <StyledCheckbox
            checked={checked}
            onChange={handleChange}
            ref={ref}
            inputProps={{ 'aria-label': 'controlled' }}
            {...rest}
         />
      )
   }
)
export default Checkboxes
