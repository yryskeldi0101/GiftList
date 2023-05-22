import React, { Fragment } from 'react'
import { Menu, MenuItem, styled } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'

export default function Meatballs({
   arrayIcon = [],
   open,
   handleClose,
   handleClick,
   anchorEl,
   reserveHandler,
   display,
   id,
   ...restProps
}) {
   return (
      <>
         <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            {...restProps}
         >
            <MeatballsIcon />
         </Button>
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
                              reserveHandler(item.id, id)
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
const Button = styled('div')`
   cursor: pointer;
   padding: 6px 20px;
`
