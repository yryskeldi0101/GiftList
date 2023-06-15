import React from 'react'
import { styled } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch } from 'react-redux'
import Menu from '@mui/material/Menu'
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg'
import { ReactComponent as ArrowIcon } from '../assets/icons/Arrows.svg'
import { UserMenuData } from '../utlis/constants/constnats'
import { signOut } from '../redux/reducer/auth/authThunk'

const ITEM_HEIGHT = 48

function MenuList({ id, anchorEl, open, onClose }) {
   const dispatch = useDispatch()
   const navigateToLogOutHandler = () => {
      dispatch(signOut())
   }
   const handleMenuItemClick = (id) => {
      onClose()
      if (id === '1') {
         //
      }
      if (id === '2') {
         navigateToLogOutHandler()
      }
   }

   return (
      <Menu
         id={id}
         anchorEl={anchorEl}
         keepMounted
         open={open}
         onClose={onClose}
         PaperProps={{
            style: {
               maxHeight: ITEM_HEIGHT * 4.5,
               maxWidth: '20ch',
            },
         }}
      >
         {UserMenuData.map((item) => (
            <MenuItem
               key={Math.random()}
               onClick={() => handleMenuItemClick(item.id)}
            >
               <img src={item.icon} alt="" />
               <StyledMenuText onClick={handleMenuItemClick}>
                  {item.name}
               </StyledMenuText>
            </MenuItem>
         ))}
      </Menu>
   )
}

export default function UserMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const open = Boolean(anchorEl)
   const id = open ? 'simple-popover' : undefined

   return (
      <div>
         <StyledContainer
            aria-controls={id}
            aria-haspopup="true"
            onClick={handleClick}
         >
            <ProfileIcon />
            <StyledUserName>Naruto Uzumaki</StyledUserName>
            <ArrowIcon />
         </StyledContainer>
         <MenuList
            id={id}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
         />
      </div>
   )
}
const StyledUserName = styled('p')`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 1.2rem;
   line-height: 1.3rem;
   margin: 0;
   letter-spacing: 0.02em;
   color: #020202;
   cursor: pointer;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.9rem;
`
const StyledMenuText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 0.875rem;
   line-height: 1.5rem;
   color: #020202;
   gap: 4px;
`
