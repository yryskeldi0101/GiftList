import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sideBarRoles } from '../utlis/constants/constnats'

const SideBar = () => {
   const role = useSelector((state) => state.auth.role)

   return (
      <Box>
         <StyledSideBar variant="permanent" anchor="left">
            <StyledTitle>Gift List</StyledTitle>
            {sideBarRoles[role]?.map((item) => {
               return (
                  <LinkContainer key={item.id}>
                     <StyledLink to={item.path}>
                        <ListItemsText>
                           <img src={item.icon} alt="icon" />
                           <p>{item.title}</p>
                        </ListItemsText>
                     </StyledLink>
                  </LinkContainer>
               )
            })}
         </StyledSideBar>
      </Box>
   )
}
const ListItemsText = styled('div')`
   display: flex;
   align-items: center;
   color: #ffffff;
   font-family: 'Inter', sans-serif;
   cursor: pointer;
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0.02em;
   gap: 17px;
`
const StyledSideBar = styled(Drawer)({
   flexShrink: 0,
   padding: 0,
   width: '294px',
   height: '100%',
   position: 'fixed',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
   paddingTop: '23px',
   zIndex: 4,
   '& .MuiDrawer-paper': {
      width: '294px',
      boxSizing: 'border-box',
      background: 'linear-gradient(180deg, #8639B5 0%, #092056 100%)',
   },
})
const StyledTitle = styled('h1')`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 700;
   color: #ffffff;
   text-align: center;
   padding-bottom: 30px;
   text-transform: uppercase;
   letter-spacing: 1px;
   margin-bottom: 10px;
   margin-top: 23px;
`
const LinkContainer = styled('div')`
   display: flex;
   align-items: center;
`
const StyledLink = styled(Link)`
   display: flex;
   align-items: center;
   border-radius: 8px;
   text-decoration: none;
   margin-bottom: 36px;
   height: 50px;
   width: 250px;
   border-radius: 8px;
   margin-left: 30px;
   padding: 0px 20px;
`

export default SideBar
