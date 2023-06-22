import { Button, Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import { useMeatballs } from '../../../hooks/useMeatballs'
import { ReactComponent as MeatballsIcon } from '../../../assets/icons/meatballs.svg'
import BlockIcon from '../../../assets/icons/bookIcon.svg'
import TrashIcon from '../../../assets/icons/deleteIcon.svg'
import MyButton from '../Button'
import LockUser from '../../../assets/icons/lockicon.svg'

const UserCard = ({
   buttons,
   changeContent,
   flexchange,
   changeFlexContent,
   navigateHandler,
   openModalHandler,
   fullName,
   image,
   count,
   countOfWish,
   id,
   handleBlock,
   acceptHandler,
   rejectHandler,
   isBlocked,
}) => {
   const { open, handleClick, handleClose, anchorEl } = useMeatballs()
   const clickHandler = () => {
      openModalHandler()
   }
   return (
      <Container>
         <NavigationContainer onClick={() => navigateHandler(id, isBlocked)}>
            <ProfileContainer>
               <StyledProfileIcon src={image} alt="userIcon" />
            </ProfileContainer>
            <ContentContainer>
               <UserNameContainer>
                  <p>{fullName}</p>
               </UserNameContainer>
               <InfoContainer flexchange={flexchange}>
                  <InfoItemContainer>
                     <p>{countOfWish}</p>
                     <p>желаемых подарков</p>
                  </InfoItemContainer>
                  {changeFlexContent && (
                     <InfoItemContainer>
                        <p>{count}</p>
                        <p>праздников</p>
                     </InfoItemContainer>
                  )}
               </InfoContainer>
            </ContentContainer>
         </NavigationContainer>
         <div>
            {buttons && (
               <ButtonContainer>
                  <MyButton
                     variant="contained"
                     background="#8639B5"
                     hoverbackgroundcolor="#7f05cb"
                     activebackgroundcolor="#6504a0"
                     propswidth="240px"
                     onClick={() => acceptHandler(id)}
                  >
                     Принять заявку
                  </MyButton>
                  <MyButton
                     variant="outlined"
                     defaultcolor="#8D949E"
                     propswidth="240px"
                     onClick={() => rejectHandler(id)}
                  >
                     Отклонить
                  </MyButton>
               </ButtonContainer>
            )}
            {changeContent && (
               <MeatballsContainer>
                  <StyledButton
                     id="demo-positioned-button"
                     aria-controls={open ? 'demo-positioned-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                     sx={{ margin: '2px' }}
                  >
                     <MeatballsIcon />
                  </StyledButton>
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
                     {isBlocked ? (
                        <MenuItem
                           onClick={() => {
                              handleBlock(id, isBlocked)
                              handleClose()
                           }}
                        >
                           <img
                              src={LockUser}
                              alt="#"
                              style={{ marginRight: '10px' }}
                           />
                           Разблокировать
                        </MenuItem>
                     ) : (
                        <MenuItem
                           onClick={() => {
                              handleBlock(id, isBlocked)
                              handleClose()
                           }}
                        >
                           <img
                              src={BlockIcon}
                              alt="#"
                              style={{ marginRight: '10px' }}
                           />
                           Заблокировать
                        </MenuItem>
                     )}
                     <MenuItem
                        onClick={() => {
                           clickHandler()
                           handleClose()
                        }}
                     >
                        <img
                           src={TrashIcon}
                           alt="#"
                           style={{ marginRight: '10px' }}
                        />
                        Удалить
                     </MenuItem>
                  </Menu>
               </MeatballsContainer>
            )}
         </div>
      </Container>
   )
}

export default UserCard
const NavigationContainer = styled('div')`
   cursor: pointer;
`
const Container = styled('div')`
   width: 257px;
   border-radius: 8px;
   background: #ffffff;
   height: fit-content;
`
const ProfileContainer = styled('div')`
   background: rgba(134, 57, 181, 0.2);
   height: 103px;
   border-radius: 8px;
`
const ContentContainer = styled('div')`
   background: #ffffff;
   height: 184px;
   padding: 10px;
`
const StyledProfileIcon = styled('img')`
   margin-left: 55px;
   margin-top: 26px;
   width: 150px;
   height: 150px;
   border-radius: 100%;
   object-fit: cover;
`
const UserNameContainer = styled('h2')`
   margin-top: 73px;
   display: flex;
   align-items: center;
   justify-content: center;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #020202;
   }
`
const InfoContainer = styled('div')`
   display: flex;
   margin-top: 16px;
   margin-bottom: 26px;
   justify-content: ${(props) =>
      props.flexchange ? 'center' : 'space-between'};
`
const InfoItemContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #020202;
   }
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.02em;
      width: 100px;
      color: #606060;
   }
`

const MeatballsContainer = styled('div')`
   float: right;
   margin-bottom: 10px;
   cursor: pointer;
`
const ButtonContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 15px;
   padding: 10px;
`
const StyledButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      padding: '10px',
      width: '20px',
      background: 'transparent',
   },
}))
