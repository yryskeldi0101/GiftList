import { MenuItem } from '@mui/material'
import React from 'react'

const Example = ({
   handleClose,
   title,
   func,
   date,
   name,
   image,
   icon,
   handleClick,
   cardId,
   ...restProps
}) => {
   return (
      <MenuItem
         onClick={() => handleClick(title, { date, name, image }, func)}
         {...restProps}
      >
         <img src={icon} alt="#" style={{ marginRight: '10px' }} />
         {title}
      </MenuItem>
   )
}

export default Example
