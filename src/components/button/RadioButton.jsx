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
