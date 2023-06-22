import React from 'react'
import { styled } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useSelector } from 'react-redux'
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg'
import { ReactComponent as ArrowIcon } from '../assets/icons/Arrows.svg'
import { UserMenuData } from '../utlis/constants/constnats'
import Logout from '../containers/user/Logout'

const ITEM_HEIGHT = 48

function MenuList({ id, anchorEl, open, onClose, openLogOutModal, userId }) {
   const navigate = useNavigate()
   const navigateToProfileHandler = () => {
      navigate(`${userId}/profile`)
   }
   const handleMenuItemClick = (id) => {
      onClose()
      if (id === '1') {
         navigateToProfileHandler()
      }
      if (id === '2') {
         openLogOutModal()
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
               <StyledMenuText onClick={() => handleMenuItemClick(item.id)}>
                  {item.name}
               </StyledMenuText>
            </MenuItem>
         ))}
      </Menu>
   )
}

export default function UserMenu() {
   const [searchParams, setSearchParams] = useSearchParams()
   const { opened } = Object.fromEntries(searchParams)
   const onCloseModal = () => setSearchParams({})
   const openLogOutModal = () => setSearchParams({ opened: 'logout' })
   const [anchorEl, setAnchorEl] = React.useState(null)
   const { userId, firstName, lastName } = useSelector((state) => state.auth)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const openMenu = Boolean(anchorEl)
   const id = opened ? 'simple-popover' : undefined

   return (
      <div>
         <StyledContainer
            aria-controls={id}
            aria-haspopup="true"
            onClick={handleClick}
         >
            <ProfileIcon />
            <StyledUserName>
               {firstName} {lastName}
            </StyledUserName>
            <ArrowIcon />
         </StyledContainer>
         <MenuList
            id={id}
            userId={userId}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            openLogOutModal={openLogOutModal}
         />
         <Logout onClose={onCloseModal} open={opened} />
      </div>
   )
}
const StyledUserName = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 0.8rem;
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
