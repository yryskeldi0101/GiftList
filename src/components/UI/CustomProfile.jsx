import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { IconButton, styled } from '@mui/material'
import MyButton from './Button'
import { ReactComponent as WkIcon } from '../../assets/icons/wkontacteicon.svg'
import { ReactComponent as InsatagramIcon } from '../../assets/icons/instagramicon.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegramicon.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebookicons.svg'
import ProfileResetPassword from '../form/ProfileResetPassword'

const CustomProfile = ({
   variant,
   onNavigate,
   profileData,
   height,
   deleteHandler,
   blockHandler,
   adminVariant,
   deleteOrAddToFriendHandler,
   acceptHandler,
   rejectHandler,
   isBlocked,
}) => {
   const [searchParams, setSearchParams] = useSearchParams()
   const { open } = Object.fromEntries(searchParams)
   const onCloseModal = () => setSearchParams({})
   const openResetPasswordModal = () =>
      setSearchParams({ open: 'reset_password' })
   const openResetPasswordModalHandler = (e) => {
      e.preventDefault()
      openResetPasswordModal()
   }
   return (
      <StyledGlobalContainer height={height}>
         <StyledLocalContainer>
            <div>
               <StyledImg src={profileData.image} alt="img" />
               <StyledUserNameContainer>
                  <StyledUserName>{profileData.fullName}</StyledUserName>
               </StyledUserNameContainer>
               {variant && (
                  <>
                     <StyledButton1Container>
                        <MyButton
                           variant="contained"
                           hoverbackgroundcolor="#9C04FA"
                           background="#8639B5"
                           activebackgroundcolor="#44046B"
                           defaultcolor="#ffff"
                           onClick={onNavigate}
                           propswidth="206px"
                        >
                           Редактировать
                        </MyButton>
                     </StyledButton1Container>
                     <StyledButton2Container>
                        <MyButton
                           variant="outlined"
                           hoverbackgroundcolor="#9C04FA"
                           activebackgroundcolor="#44046B"
                           defaultcolor="#8D949E"
                           outlinedbordercolor="#8D949E"
                           outlinedhoverandactivetextcolor="#fff"
                           propswidth="206px"
                           onClick={openResetPasswordModalHandler}
                        >
                           Сменить пароль
                        </MyButton>
                        <ProfileResetPassword
                           open={open}
                           onCloseModal={onCloseModal}
                        />
                     </StyledButton2Container>
                  </>
               )}
               {profileData.inFriends && (
                  <StyledDeleteButton>
                     <MyButton
                        variant="outlined"
                        defaultcolor="#8D949E"
                        propswidth="196px"
                        onClick={() =>
                           deleteOrAddToFriendHandler(profileData.id)
                        }
                     >
                        Удалить из друзей
                     </MyButton>
                  </StyledDeleteButton>
               )}
               {profileData.inFriends &&
                  profileData.inRequests === undefined && (
                     <StyledDeleteButton>
                        <MyButton
                           variant="contained"
                           background="#8639B5"
                           hoverbackgroundcolor="#7f05cb"
                           activebackgroundcolor="#6504a0"
                           propswidth="240px"
                           onClick={() =>
                              deleteOrAddToFriendHandler(profileData.id)
                           }
                        >
                           Добавить в друзья
                        </MyButton>
                     </StyledDeleteButton>
                  )}
               {profileData.inRequests && (
                  <FriendRequstsButtons>
                     <MyButton
                        variant="contained"
                        background="#8639B5"
                        hoverbackgroundcolor="#7f05cb"
                        activebackgroundcolor="#6504a0"
                        propswidth="240px"
                        onClick={() => acceptHandler(profileData.id)}
                     >
                        Принять заявку
                     </MyButton>
                     <MyButton
                        variant="outlined"
                        defaultcolor="#8D949E"
                        propswidth="240px"
                        onClick={() => rejectHandler(profileData.id)}
                     >
                        Отклонить
                     </MyButton>
                  </FriendRequstsButtons>
               )}
               <StyledIconButtonsContainer>
                  <IconButton>
                     <a href={profileData.whatsApp}>
                        <WkIcon />
                     </a>
                  </IconButton>
                  <IconButton>
                     <a href={profileData.instagram}>
                        <InsatagramIcon />
                     </a>
                  </IconButton>
                  <IconButton>
                     <a href={profileData.telegram}>
                        <TelegramIcon />
                     </a>
                  </IconButton>
                  <IconButton>
                     <a href={profileData.facebook}>
                        <FacebookIcon />
                     </a>
                  </IconButton>
               </StyledIconButtonsContainer>
            </div>
            <StyledContent>
               <StyledGlobalContainerOfBlock2>
                  <div>
                     <StyledTitle>Основная информация</StyledTitle>
                     <StyledContainerSubText>
                        <div>
                           <StyledSubTitle>Город:</StyledSubTitle>
                           <StyledSubTitleSubText>
                              {profileData.country}
                           </StyledSubTitleSubText>
                        </div>
                     </StyledContainerSubText>
                     <StyledContainerSubText2>
                        <div>
                           <StyledSubTitle>Email:</StyledSubTitle>
                           <StyledSubTitleSubText>
                              {profileData.email}
                           </StyledSubTitleSubText>
                        </div>
                     </StyledContainerSubText2>
                  </div>
                  <div>
                     <StyledTitle2> Интересы, хобби</StyledTitle2>
                     <StyledContainerSubText>
                        <div>
                           <StyledSubTitle>Интересы,хобби:</StyledSubTitle>
                           <StyledSubTitleSubText>
                              {profileData.hobby}
                           </StyledSubTitleSubText>
                        </div>
                     </StyledContainerSubText>
                  </div>
                  <div>
                     <StyledTitle3>Доп. инфа</StyledTitle3>
                     <StyledContainerSubText>
                        <div>
                           <StyledSubTitle>Размер одежды:</StyledSubTitle>
                           <StyledSubTitleSubText>
                              {profileData.clothingSize}
                           </StyledSubTitleSubText>
                        </div>
                     </StyledContainerSubText>
                  </div>
               </StyledGlobalContainerOfBlock2>
               <StyledSubTitleSubText2Container>
                  <div>
                     <StyledSubTitle1>Дата рождения:</StyledSubTitle1>
                     <StyledSubTitleSubText>
                        {profileData.dateOfBirth}
                     </StyledSubTitleSubText>
                  </div>
                  <div>
                     <StyledSubTitle2>Номер телефона:</StyledSubTitle2>
                     <StyledSubTitleSubText>
                        {profileData.phoneNumber}
                     </StyledSubTitleSubText>
                  </div>
                  <div>
                     <StyledSubTitle3>Важно знать:</StyledSubTitle3>
                     <StyledSubTitleSubText>
                        {profileData.important}
                     </StyledSubTitleSubText>
                  </div>
                  <div>
                     <StyledSubTitle4>Размер обуви:</StyledSubTitle4>
                     <StyledSubTitleSubText>
                        {profileData.shoeSize}
                     </StyledSubTitleSubText>
                  </div>
               </StyledSubTitleSubText2Container>
            </StyledContent>
         </StyledLocalContainer>
         {adminVariant && (
            <StyledButtonsVariantFalseContainer>
               <MyButton
                  variant="outlined"
                  background="none"
                  defaultcolor="#8D949E"
                  propswidth="121px"
                  outlinedbordercolor="#fff"
                  outlinedhoverandactivetextcolor="#fff"
                  onClick={() => deleteHandler(profileData.id)}
               >
                  Удалить
               </MyButton>
               <StyledButtonContainer>
                  <MyButton
                     variant="contained"
                     hoverbackgroundcolor="#9C04FA"
                     background="#8639B5"
                     activebackgroundcolor="#44046B"
                     defaultcolor="#ffff"
                     propswidth="177px"
                     onClick={() => blockHandler(profileData.id, isBlocked)}
                  >
                     {isBlocked ? 'Разблокировать' : 'Заблокировать'}
                  </MyButton>
               </StyledButtonContainer>
            </StyledButtonsVariantFalseContainer>
         )}
      </StyledGlobalContainer>
   )
}
export default CustomProfile
const StyledGlobalContainer = styled('div')`
   padding: 20px;
   max-width: 1170px;
   background-color: #ffff;
   margin-top: 83px;
   border-radius: 8px;
   height: ${(props) => props.height};
`
const StyledLocalContainer = styled('div')`
   display: flex;
`
const StyledTitle = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #8639b5;
`
const StyledTitle2 = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   margin-top: 30px;
   color: #8639b5;
`
const StyledTitle3 = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   margin-top: 30px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #8639b5;
`
const StyledGlobalContainerOfBlock2 = styled('div')`
   margin-left: 40px;
`
const StyledImg = styled('img')`
   max-width: 217px;
   max-height: 217px;
   border-radius: 8px;
`
const StyledUserNameContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 200px;
   margin-top: 16px;
`
const StyledUserName = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
`
const StyledButton1Container = styled('div')`
   margin-top: 21px;
`
const StyledButton2Container = styled('div')`
   margin-top: 16px;
`
const StyledIconButtonsContainer = styled('div')`
   margin-top: 31px;
   max-width: 200px;
   display: flex;
   justify-content: space-between;
`
const StyledContainerSubText = styled('div')`
   display: flex;
   max-width: 100%;
   margin-top: 16px;
`
const StyledContainerSubText2 = styled('div')`
   display: flex;
   max-width: 100%;
   margin-top: 16px;
`
const StyledContent = styled('div')`
   display: flex;
   justify-content: space-around;
   width: 70%;
`
const StyledSubTitle1 = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #5c5c5c;
`
const StyledSubTitle = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #5c5c5c;
`
const StyledSubTitle2 = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   margin-top: 17px;
   display: flex;
   align-items: center;
   color: #5c5c5c;
`
const StyledSubTitle3 = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   margin-top: 66px;
   display: flex;
   align-items: center;
   color: #5c5c5c;
`
const StyledSubTitle4 = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   margin-top: 69px;
   display: flex;
   align-items: center;
   color: #5c5c5c;
`
const StyledSubTitleSubText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #000000;
   margin-top: 6px;
`
const StyledButtonsVariantFalseContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   width: 100%;
   margin-top: 56px;
   padding-right: 40px;
`
const StyledButtonContainer = styled('div')`
   margin-left: 42px;
`
const StyledSubTitleSubText2Container = styled('div')`
   max-width: 100%;
   margin-left: 129px;
   margin-top: 37px;
`
const StyledDeleteButton = styled('div')`
   margin-top: 24px;
`
const FriendRequstsButtons = styled('div')`
   margin-top: 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 24px;
`
