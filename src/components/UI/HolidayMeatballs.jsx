import React from 'react'
import { Menu, MenuItem, styled } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'

export default function HolidayMeatballs({
   arrayIcon = [],
   open,
   handleClose,
   handleClick,
   anchorEl,
   display,
   handleClickMenuItem,
   id,
   ...restProps
}) {
   const handle = (title, func) => {
      handleClickMenuItem(title, func)
   }

   return (
      <>
         <Buttons
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            {...restProps}
         >
            <MeatballsIcon />
         </Buttons>

         <div>
            {display ? (
               ''
            ) : (
               <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                  }}
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                  }}
               >
                  {arrayIcon?.map((item) => (
                     <div key={item.id}>
                        <MenuItem
                           onClick={() => {
                              handle(item.title, item.func)
                              handleClose()
                           }}
                           {...restProps}
                        >
                           <img
                              src={item.icon}
                              alt="#"
                              style={{ marginRight: '10px' }}
                           />

                           {item.title}
                        </MenuItem>
                     </div>
                  ))}
               </Menu>
            )}
         </div>
      </>
   )
}
const Buttons = styled('div')(() => ({
   cursor: 'pointer',
   width: 'auto',
}))
