import React from 'react'
import { styled } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg'
import { ReactComponent as ArrowIcon } from '../assets/icons/Arrows.svg'
import { UserMenuData } from '../utlis/constants/constnats'

const ITEM_HEIGHT = 48

function MenuList({ id, anchorEl, open, onClose }) {
   const handleMenuItemClick = () => {
      onClose()
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
         {UserMenuData.map((item, index) => (
            <MenuItem
               key={Math.random()}
               onClick={(event) => handleMenuItemClick(event, index)}
            >
               <img src={item.icon} alt="" />
               <StyledMenuText>{item.name}</StyledMenuText>
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
      <Container>
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
      </Container>
   )
}
const StyledUserName = styled('p')`
   width: 7rem;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 1rem;
   line-height: 1.3rem;
   margin: 0;
   letter-spacing: 0.02em;

   color: #020202;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.25rem;
`
const Container = styled('div')`
   /* margin-left: 50px; */
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
