import { FormControl, InputBase, MenuItem, Select } from '@mui/material'
import React from 'react'

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 8
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 150,
         color: '#8D949E',
      },
   },
}

const CustomSelect = ({
   arraySelect,
   title,
   selectedOption,
   setSelectedOption,
}) => {
   const handleChange = (event) => {
      const {
         target: { value },
      } = event
      setSelectedOption(typeof value === 'string' ? value.split(',') : value)
   }
   return (
      <FormControl>
         <Select
            displayEmpty
            value={selectedOption}
            onChange={handleChange}
            input={<InputBase />}
            renderValue={(selected) => {
               if (selected.length === 0) {
                  return <em>{title}</em>
               }

               return selected.join(', ')
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
         >
            <MenuItem disabled value="">
               <em>{title}</em>
            </MenuItem>
            {arraySelect.map((item) => {
               return (
                  <MenuItem key={item.name} value={item.name}>
                     {item.name}
                  </MenuItem>
               )
            })}
         </Select>
      </FormControl>
   )
}

export default CustomSelect
