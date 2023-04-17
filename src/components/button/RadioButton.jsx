import { Radio, styled } from '@mui/material'
import React from 'react'

const StyledLabel = styled('label')({
   display: 'flex',
   alignItems: 'center',
})

const RadioButton = ({ label, name, value, checked, onChange }) => {
   const [selectedValue, setSelectedValue] = React.useState('a')

   const handleChange = (event) => {
      setSelectedValue(event.target.value)
   }

   return (
      <StyledLabel>
         <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            style={{ display: 'none' }}
         />

         <StyledRadio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            inputProps={{ 'aria-label': 'A' }}
            selected={selectedValue === 'a'}
         />
         <StyledRadio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            inputProps={{ 'aria-label': 'B' }}
            selected={selectedValue === 'b'}
            sx={{ marginRight: '1px' }}
         />
         {label}
      </StyledLabel>
   )
}

export default RadioButton

const StyledRadio = styled(Radio)(({ selected }) => ({
   '& .MuiSvgIcon-root': {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: `2px solid ${selected ? 'blue' : 'default'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '0px',
      background: `${selected ? 'blue' : 'white'}`,
   },
   '&.Mui-checked .MuiSvgIcon-root': {
      background: 'blue',
   },
}))

// const StyledRadio = styled(Radio)(({ theme }) => ({
//    borderRadius: '50%',
//    width: 16,
//    height: 16,
//    boxShadow:
//       theme.palette.mode === 'blue'
//          ? '0 0 0 1px rgb(16 22 26 / 40%)'
//          : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
//    backgroundImage:
//       theme.palette.mode === 'blue'
//          ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
//          : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//    '.Mui-focusVisible &': {
//       outline: '2px auto rgba(19,124,189,.6)',
//       outlineOffset: 2,
//    },
//    'input:hover ~ &': {
//       backgroundColor: theme.palette.mode === 'blue' ? '#30404d' : '#ebf1f5',
//    },
//    'input:disabled ~ &': {
//       boxShadow: 'none',
//       background:
//          theme.palette.mode === 'dark'
//             ? 'rgba(57,75,89,.5)'
//             : 'rgba(206,217,224,.5)',
//    },
// }))
