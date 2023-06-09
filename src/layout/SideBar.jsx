import * as React from 'react'
import { keyframes, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sideBarRoles } from '../utlis/constants/constnats'
import { useCurrentPath } from '../hooks/useCurrentPath'

const SideBar = () => {
   const path = useCurrentPath()
   const role = useSelector((state) => state.auth.role)
   const pathName = role === 'USER' ? 'user' : 'admin'
   return (
      <StyledSideBar variant="permanent" anchor="left">
         <StyledTitle>Gift List</StyledTitle>
         {sideBarRoles[role]?.map((item) => {
            return (
               <LinkContainer key={item.id}>
                  <StyledLink
                     to={item.path}
                     active={
                        path === `/${pathName}/${item.path}` ? 'true' : 'false'
                     }
                  >
                     <ListItemsText>
                        <img src={item.icon} alt="icon" />
                        <p>{item.title}</p>
                     </ListItemsText>
                  </StyledLink>
               </LinkContainer>
            )
         })}
      </StyledSideBar>
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
   gap: 5px;
`

const StyledSideBar = styled('nav')`
   box-sizing: border-box;
   width: 20vw;
   height: 100vh;
   top: 0;
   left: 0;
   position: fixed;
   background: linear-gradient(180deg, #8639b5 0%, #092056 100%);
`

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
   justify-content: center;
   width: 100%;
`
const fadeIn = keyframes`
   from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
const StyledLink = styled(NavLink)`
   display: flex;
   align-items: center;
   border-radius: 8px;
   text-decoration: none;
   margin-bottom: 36px;
   height: 50px;
   width: 18vw;
   border-radius: 8px;
   padding: 0px 10px;
   background-color: ${({ active }) => {
      return active === 'true' ? '#7f48af' : 'none'
   }};
   animation: ${fadeIn} 1s ease-in-out;
`

export default SideBar
