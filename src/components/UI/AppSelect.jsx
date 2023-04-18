import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import styled from '@emotion/styled'

function AppSelect({ options, ...restProps }) {
   console.log(options)
   const [val, setValue] = useState('')

   const handleChange = (event) => {
      // const optionsData = {
      //    title: options.title,
      //    id: options.id,
      // }
      // console.log(optionsData)
      // setValue()
      setValue(event.target.value)
   }
   console.log(val, 'sssssss')
   return (
      <FormControlMui sx={{ m: 1, minWidth: 200 }}>
         <SelectMui value={val} onChange={handleChange} {...restProps}>
            {options.map((item) => (
               <MenuItemMui value={item.title} key={item.id}>
                  {item.title}
               </MenuItemMui>
            ))}
         </SelectMui>
      </FormControlMui>
   )
}

export default AppSelect
const FormControlMui = styled(FormControl)(() => ({
   borderRadius: '10px',
}))
const MenuItemMui = styled(MenuItem)(() => ({
   width: '396px',

   '&:hover': {
      backgroundColor: ' rgba(134, 57, 181, 0.2)',
   },
   '&:active': {
      backgroundColor: '  rgba(134, 57, 181, 0.4);',
   },
}))

const SelectMui = styled(Select)(() => ({
   '&:hover': {
      backgroundColor: 'transparent',
   },
}))
