import React, { Fragment } from 'react'
import { Menu, styled } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import Example from './Example'

export default function Meatballs({
   arrayIcon,
   open,
   handleClose,
   handleClick,
   anchorEl,
   reserveHandler,
   display,
   id,
   date,
   image,
   name,
   handleClickMenuItem,
   ...restProps
}) {
   const handle = (title, { date, name, image }, func) => {
      console.log(id, 'sub detail')
      handleClickMenuItem(title, { date, name, image }, func, id)
   }

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
                  {arrayIcon.map((item) => (
                     <Example
                        key={item.id}
                        {...item}
                        date={date}
                        image={image}
                        name={name}
                        handleClose={handleClose}
                        cardId={id}
                        handleClick={handle}
                     />
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
