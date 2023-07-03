import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { ReactComponent as BallIcon } from '../assets/icons/ball.svg'
import UserMenu from './HeaderMenu'
import Notification from '../components/UI/notification/Notification'
import SearchInput from '../components/UI/search-input/SearchInput'

const Header = () => {
   const [searchInputValue, setSearchInputValue] = useState('')
   const [searchParams, setSearchParams] = useSearchParams()
   const { open } = Object.fromEntries(searchParams)
   const openNotification = () => setSearchParams({ open: 'notification' })
   const closeNotification = () => setSearchParams({})
   const booleanOpen = Boolean(open)
   const inputChangeHandler = (e) => setSearchInputValue(e.target.value)
   const cleanHandler = () => {
      setSearchInputValue('')
   }
   return (
      <>
         <div>
            <StyledHeader>
               <SearchInput
                  inputChangeHandler={inputChangeHandler}
                  value={searchInputValue}
                  cleanHandler={cleanHandler}
               />
               <StyledContainer>
                  <StyledIconButton onClick={openNotification}>
                     <BallIcon />
                  </StyledIconButton>
                  <UserMenu />
               </StyledContainer>
            </StyledHeader>
         </div>
         <Notification
            open={booleanOpen}
            onClose={closeNotification}
            openHandler={openNotification}
         />
      </>
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
