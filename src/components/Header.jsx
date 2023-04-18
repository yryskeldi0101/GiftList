import React from 'react'
import { IconButton, styled } from '@mui/material'
import SearchInput from './UI/search-input/SearchInput'
import { ReactComponent as BallIcon } from '../assets/icons/ball.svg'
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg'
import CustomSelect from './UI/search-input/Select'
import { UserMenu } from '../utlis/constants/constnats'
// import { ReactComponent as ArrowIcon } from '../assets/icons/Arrows.svg'
// import { UserMenu } from '../utlis/constants/constnats'

const Header = () => {
   return (
      <div>
         <StyledHeader>
            <SearchInput />
            <StyledContainer>
               <StyledIconButton>
                  <BallIcon />
               </StyledIconButton>
               <StyledContainer>
                  <ProfileIcon />
                  <StyledUserName>Naruto Uzumaki</StyledUserName>
                  <CustomSelect arraySelect={UserMenu} />
                  {/* <ArrowIcon /> */}
               </StyledContainer>
            </StyledContainer>
         </StyledHeader>
      </div>
   )
}

export default Header
const StyledHeader = styled('header')`
   display: flex;
   padding: 20px 40px 20px 20px;
   background-color: #ffffff;
   margin-left: 294px;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 4px;
`
const StyledIconButton = styled(IconButton)`
   margin-left: 20px;
   margin-right: 20px;
`
const StyledUserName = styled('p')`
   width: 120px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   margin: 0;
   letter-spacing: 0.02em;

   color: #020202;
`
