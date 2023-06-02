import React, { Fragment } from 'react'
import { Menu, MenuItem, styled } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'

export default function Meatballs({
   arrayIcon = [],
   open,
   handleClose,
   handleClick,
   anchorEl,
   display,
   id,
   date,
   image,
   name,
   handleClickMenuItem,
   ...restProps
}) {
   const handle = (title, { date, name, image }, func) => {
      handleClickMenuItem(title, { date, name, image, id }, func, id)
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
                              handleClose()
                              handle(
                                 item.title,
                                 { date, name, image },
                                 item.func
                              )
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
