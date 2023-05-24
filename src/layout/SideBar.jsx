import * as React from 'react'
import { keyframes, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
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
                  <CSSTransition
                     in={true} // Always show the NavLink
                     timeout={300} // Animation duration
                     classNames="fade"
                     unmountOnExit
                  >
                     <StyledLink
                        to={item.path}
                        active={
                           path === `/${pathName}/${item.path}`
                              ? 'true'
                              : 'false'
                        }
                     >
                        <ListItemsText>
                           <img src={item.icon} alt="icon" />
                           <p>{item.title}</p>
                        </ListItemsText>
                     </StyledLink>
                  </CSSTransition>
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
   width: 20vh;
   height: 100vh;
   top: 0;
   position: fixed;
   border: 3px solid red;
   background-color: violet;
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
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
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
   animation: ${fadeIn} 0.5s ease-in-out;
`

export default SideBar
