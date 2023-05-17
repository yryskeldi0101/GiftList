import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const StyledCheckbox = styled(Checkbox)(({ borderChange }) => ({
   color: borderChange ? '#87898E' : '#8639B5',
   '&.Mui-checked': {
      color: '#8639B5;',
   },
}))

export default function Checkboxes({
   checked,
   handleChange,
   inputProps,
   borderChange,
   ...rest
}) {
   return (
      <StyledCheckbox
         borderChange={borderChange}
         checked={checked}
         onChange={handleChange}
         inputProps={{ 'aria-label': 'controlled' }}
         {...rest}
      />
   )
}
