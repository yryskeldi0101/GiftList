import * as React from 'react'
import { styled } from '@mui/material/styles'
import Radio from '@mui/material/Radio'

const BpIcon = styled('span')(() => ({
   borderRadius: '50%',
   width: 16,
   height: 16,
}))

const BpCheckedIcon = styled(BpIcon)({
   backgroundColor: 'violet',

   '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
   },
   'input:hover ~ &': {
      backgroundColor: '#106ba3',
   },
})

const RadioButton = ({ checked, onChange, value, ...props }) => {
   return (
      <Radio
         disableRipple
         checkedIcon={<BpCheckedIcon />}
         icon={<BpIcon />}
         {...props}
      />
   )
}

export default RadioButton
