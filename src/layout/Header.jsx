import React from 'react'
import { IconButton, styled } from '@mui/material'
import SearchInput from '../components/UI/search-input/SearchInput'
import { ReactComponent as BallIcon } from '../assets/icons/ball.svg'
import UserMenu from './HeaderMenu'

const Header = () => {
   return (
      <div>
         <StyledHeader>
            <SearchInput />
            <StyledContainer>
               <StyledIconButton>
                  <BallIcon />
               </StyledIconButton>
               <UserMenu />
            </StyledContainer>
         </StyledHeader>
      </div>
   )
}

export default Header
const StyledHeader = styled('header')`
   width: 100%;
   display: flex;
   padding: 20px 40px 20px 14px;
   background-color: #ffffff;
   margin-right: 80px;
   justify-content: space-between;
`
const StyledContainer = styled('div')`
   display: flex;
   margin-right: 20px;
   align-items: center;
   gap: 0.25rem;
`
const StyledIconButton = styled(IconButton)`
   margin-left: 0;
   margin-right: 0.4vw;
`
