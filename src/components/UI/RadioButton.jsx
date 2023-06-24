import * as React from 'react'
import { styled } from '@mui/material/styles'
import Radio from '@mui/material/Radio'

const BpIcon = styled('span')(() => ({
   borderRadius: '50%',
   padding: '12px',
   border: '1px solid grey',
}))

const BpCheckedIcon = styled(BpIcon)({
   backgroundColor: '#8639B5',

   '&:before': {
      display: 'block',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundImage: 'radial-gradient(#fff,#fff 60%,transparent 100%)',
      content: '""',
      margin: '-3px',
   },
})

const RadioButton = ({ checked, onChange, value, ...props }) => {
   return (
      <Radio
         checked={checked}
         onChange={onChange}
         disableRipple
         checkedIcon={<BpCheckedIcon />}
         icon={<BpIcon />}
         {...props}
      />
   )
}

export default RadioButton
