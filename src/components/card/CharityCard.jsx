import { Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import Ananim from '../../assets/icons/anonim.svg'
import Lock from '../../assets/icons/key.svg'
import Avatar from '../../assets/icons/avatar.png'
import { useMeatballs } from '../../hooks/useMeatballs'
import DeleteIcon from '../../assets/icons/deleteIcon.svg'

const CharityCard = ({
   id,
   userId,
   icon,
   userName,
   title,
   img,
   state,
   date,
   reserve,
   isAnonymous,
   adminCharity,
   handleDelete,
   reserveIcon,
   handleBlock,
   reserveHandler,
   navigateToCharityDetails = () => {},
   disableMeatalls,
   userCharity,
   ...rest
}) => {
   const { open, handleClick, handleClose, anchorEl } = useMeatballs()

   return (
      <GlobalContainer {...rest}>
         <Container onClick={() => navigateToCharityDetails(id, userId)}>
            <TitleContainer>
               <img src={icon} alt="icon" />
               <h2>{userName}</h2>
            </TitleContainer>
            <StyledContainer>
               <h3>{title}</h3>
               {state === 'Новое' ? (
                  <p style={{ color: '#0BA360' }}>Новое</p>
               ) : (
                  <p style={{ color: '#FD5200' }}>Б/У</p>
               )}
            </StyledContainer>
            <ImageContainer>
               <img src={img} alt="bg" />
            </ImageContainer>
         </Container>
         <FooterContainer>
            <h4>{date}</h4>
            <div>
               {reserveIcon === null ? (
                  <img src={Avatar} alt="avatar" />
               ) : (
                  <ReserveUserImage src={reserveIcon} alt="icon" />
               )}
               <p>{reserve ? 'Забронирован' : 'В ожидании'}</p>
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
               {disableMeatalls && userCharity ? null : (
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
                     {adminCharity && (
                        <div>
                           <MenuItem onClick={() => handleBlock(id)}>
                              <img
                                 src={Lock}
                                 alt="#"
                                 style={{ marginRight: '10px' }}
                              />
                              Заблокировать
                           </MenuItem>
                           <MenuItem onClick={() => handleDelete(id)}>
                              <img
                                 src={DeleteIcon}
                                 alt="#"
                                 style={{ marginRight: '10px' }}
                              />
                              Удалить
                           </MenuItem>
                        </div>
                     )}
                     {userCharity && (
                        <div>
                           <MenuItem onClick={() => reserveHandler(id, false)}>
                              <img
                                 src={Lock}
                                 alt="#"
                                 style={{ marginRight: '10px' }}
                              />
                              Забронировать
                           </MenuItem>
                           <MenuItem onClick={() => reserveHandler(id, true)}>
                              <img
                                 src={Ananim}
                                 alt="#"
                                 style={{ marginRight: '10px' }}
                              />
                              Забронировать анонимно
                           </MenuItem>
                        </div>
                     )}
                  </Menu>
               )}
            </div>
         </FooterContainer>
      </GlobalContainer>
   )
}

export default CharityCard

const StyledButton = styled('button')(() => ({
   margin: 0,
   padding: 0,
   background: 'transparent',
   border: 'none',
}))
const ReserveUserImage = styled('img')(() => ({
   width: '46px',
   height: '46px',
}))

const GlobalContainer = styled('div')`
   display: flex;
   flex-direction: column;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   width: 349px;
   padding: 25px 16px 20px 16px;
   cursor: pointer;
`
const TitleContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 12px;
   h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #020202;
   }

   img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
   }
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 24px;
   h3 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
      color: #020202;
      max-width: 50%;
   }
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
   }
`
const ImageContainer = styled('div')`
   width: 100%;
   img {
      border-radius: 6px;
      height: 153px;
      width: 100%;
      object-fit: contain;
   }
`
const FooterContainer = styled('div')`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   margin-top: 13px;
   h4 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #636c84;
   }
   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
   }
   img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
   }
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #636c84;
   }
`
const Container = styled('div')``
