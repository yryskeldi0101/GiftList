import React from 'react'
import { MenuItem, styled } from '@mui/material'
import SelectMui from '@mui/material/Select'

const Placeholder = ({ children }) => {
   return <div style={{ color: '#8D949E' }}>{children}</div>
}

const CustomProfileSelect = ({ options, onSelect, value, placeholder }) => {
   return (
      <StyledSelect
         value={value || ''}
         onChange={onSelect}
         renderValue={
            value !== ''
               ? undefined
               : () => <Placeholder>{placeholder}</Placeholder>
         }
      >
         {options.map((option) => (
            <StyledMenuItem key={option.id} value={option.type}>
               <StyledSelectOptions>{option.type}</StyledSelectOptions>
            </StyledMenuItem>
         ))}
      </StyledSelect>
   )
}

export default CustomProfileSelect

const StyledSelect = styled(SelectMui)(() => ({
   '&': {
      background: 'none',
      width: '396px',
      borderRadius: '6px',
      height: '35px',
      padding: '8px 18px',
      marginRight: '10px',
   },
   '& .MuiSelect-select': {
      width: '396px',
      overflow: 'hidden',
   },
}))
const StyledMenuItem = styled(MenuItem)(() => ({
   '&': {
      display: 'inline-flex',
   },
}))
const StyledSelectOptions = styled('p')`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 4px 8px;
   gap: 10px;

   background: #fbfbfb;
   border: 1px solid #d5d5d5;
   border-radius: 6px;
   :hover {
      background-color: #8639b5;
      color: #ffffff;
   }
   :active {
      background: #ab62d8;
      border: 1px solid #8639b5;
      border-radius: 6px;
      color: #ffffff;
   }
`
