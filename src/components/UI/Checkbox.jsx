import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const StyledCheckbox = styled(Checkbox)(() => ({
   color: '#8639B5;',
   '&.Mui-checked': {
      color: '#8639B5;',
   },
}))

export default function Checkboxes({
   checked,
   handleChange,
   inputProps,
   ...rest
}) {
   return (
      <StyledCheckbox
         checked={checked}
         onChange={handleChange}
         inputProps={{ 'aria-label': 'controlled' }}
         {...rest}
      />
   )
}
