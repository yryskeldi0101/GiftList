import React from 'react'
import { IconButton, styled } from '@mui/material'

import MyButton from './Button'
import { ReactComponent as WkIcon } from '../../assets/icons/wkontacteicon.svg'
import { ReactComponent as InsatagramIcon } from '../../assets/icons/instagramicon.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegramicon.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebookicons.svg'

const CustomProfile = ({
   variant,
   onNavigate,
   profileData = {},
   deleteHandler,
   blockHandler,
}) => {
   return (
      <StyledGlobalContainer>
         <div>
            <StyledImg src={profileData.image} alt="img" />
            <StyledUserNameContainer>
               <StyledUserName>{profileData.fullName}</StyledUserName>
            </StyledUserNameContainer>
            {variant ? (
               <>
                  <StyledButton1Container>
                     <MyButton
                        variant="contained"
                        hoverbackgroundcolor="#9c04fa"
                        background="#8639B5"
                        activebackgroundcolor="#44046b"
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
                        hoverbackgroundcolor="#9c04fa"
                        activebackgroundcolor="#44046b"
                        defaultcolor="#8D949E"
                        outlinedbordercolor="#8D949E"
                        outlinedhoverandactivetextcolor="#fff"
                        propswidth="206px"
                     >
                        Сменить пароль
                     </MyButton>
                  </StyledButton2Container>
               </>
            ) : null}
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
         <StyledGlobalContainerOfBlock2>
            <div>
               <StyledTitle>Основная информация</StyledTitle>
               <StyledContainerSubText>
                  <div>
                     <StyledSubTitle>Страна:</StyledSubTitle>
                     <StyledSubTitleSubText>
                        {profileData.country}
                     </StyledSubTitleSubText>
                  </div>
                  <StyledSubText1Margins>
                     <StyledSubTitle>Дата рождения:</StyledSubTitle>
                     <StyledSubTitleSubText>
                        {profileData.dateOfBirth}
                     </StyledSubTitleSubText>
                  </StyledSubText1Margins>
               </StyledContainerSubText>
               <StyledContainerSubText2>
                  <div>
                     <StyledSubTitle>Email:</StyledSubTitle>
                     <StyledSubTitleSubText>
                        {profileData.email}
                     </StyledSubTitleSubText>
                  </div>
                  <StyledSubText4Margins>
                     <StyledSubTitle>Номер телефона:</StyledSubTitle>
                     <StyledSubTitleSubText>
                        {profileData.phoneNumber}
                     </StyledSubTitleSubText>
                  </StyledSubText4Margins>
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
                  <StyledSubText2Margins>
                     <StyledSubTitle>Важно знать:</StyledSubTitle>
                     <StyledSubTitleSubText>
                        {profileData.important}
                     </StyledSubTitleSubText>
                  </StyledSubText2Margins>
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
                  <StyledSubText3Margins>
                     <StyledSubTitle>Размер обуви:</StyledSubTitle>
                     <StyledSubTitleSubText>
                        {profileData.shoeSize}
                     </StyledSubTitleSubText>
                  </StyledSubText3Margins>
               </StyledContainerSubText>
            </div>
            {!variant ? (
               <StyledButttonsVariantFalseContainer>
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
                        hoverbackgroundcolor="#9c04fa"
                        background="#8639B5"
                        activebackgroundcolor="#44046b"
                        defaultcolor="#ffff"
                        propswidth="177px"
                        onClick={() => blockHandler(profileData.id)}
                     >
                        Заблокировать
                     </MyButton>
                  </StyledButtonContainer>
               </StyledButttonsVariantFalseContainer>
            ) : null}
         </StyledGlobalContainerOfBlock2>
      </StyledGlobalContainer>
   )
}

export default CustomProfile

const StyledGlobalContainer = styled('div')`
   padding: 20px;
   width: 1170px;
   background-color: #ffff;
   margin-top: 43px;
   border-radius: 8px;
   display: flex;
   height: fit-content;
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
   width: 217px;
   height: 217px;
   border-radius: 8px;
`

const StyledUserNameContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 190px;
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
   width: 200px;
   display: flex;
   justify-content: space-between;
`
const StyledContainerSubText = styled('div')`
   display: flex;
   width: 100%;
   margin-top: 16px;
`
const StyledContainerSubText2 = styled('div')`
   display: flex;
   width: 100%;
   margin-top: 16px;
`
const StyledSubText1Margins = styled('div')`
   margin-left: 351px;
`
const StyledSubText2Margins = styled('div')`
   margin-left: 129px;
`
const StyledSubText3Margins = styled('div')`
   margin-left: 300px;
`
const StyledSubText4Margins = styled('div')`
   margin-left: 250px;
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

const StyledButttonsVariantFalseContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-top: 56px;
   margin-left: 530px;
`
const StyledButtonContainer = styled('div')`
   margin-left: 42px;
`
