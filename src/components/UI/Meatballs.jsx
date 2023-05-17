import { Button, Menu, MenuItem } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'

export default function Meatballs({
   arrayIcon,
   open,
   handleClose,
   handleClick,
   anchorEl,
   reserveHandler,
   id,
   ...restProps
}) {
   return (
      <div>
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
               <MenuItem
                  onClick={() => item.clickHandler(id)}
                  key={item.id}
                  {...restProps}
               >
                  <img
                     src={item.icon}
                     alt="#"
                     style={{ marginRight: '10px' }}
                  />
                  {item.title}
               </MenuItem>
            ))}
         </Menu>
      </div>
   )
}
