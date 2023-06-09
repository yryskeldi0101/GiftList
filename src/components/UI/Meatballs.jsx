import React from 'react'
import { Menu, MenuItem, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import { takeOffBooked } from '../../redux/booked/bookedThunk'

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
   const dispatch = useDispatch()

   console.log(id)

   const handleClickBtn = (id) => {
      reserveHandler(id)
      handleClose()
   }

   // eslint-disable-next-line no-unused-vars
   const takeOffBookedHanlder = () => {
      dispatch(takeOffBooked(id))
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
                           onClick={
                              // item.id === '2'
                              // ? takeOffBookedHanlder
                              () => handleClickBtn(id)
                           }
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
