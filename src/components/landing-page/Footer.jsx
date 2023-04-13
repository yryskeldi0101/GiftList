import { IconButton, InputLabel, styled } from '@mui/material'
import React from 'react'
import ReusableInput from '../UI/input/Input'
import { ReactComponent as IconFacebook } from '../../assets/icons/FaceBook.svg'
import { ReactComponent as IconInstagram } from '../../assets/icons/Instagram.svg'
import { ReactComponent as IconWk } from '../../assets/icons/WkIcon.svg'

const Footer = () => {
   return (
      <>
         <GlobalContainer>
            <Container>
               <TitleContainer>
                  <StyledTitle>Gift list</StyledTitle>
                  <StyledText>Социальная сеть нового поколения</StyledText>
                  <IconButton
                     sx={{
                        path: {
                           fill: '#353A3A',
                           opacity: 0.3,
                        },
                     }}
                  >
                     <a href="https://www.facebook.com/login/">
                        <IconFacebook />
                     </a>
                  </IconButton>
                  <IconButton
                     sx={{
                        path: {
                           fill: '#353A3A',
                           opacity: 0.3,
                        },
                     }}
                  >
                     <a href="https://vk.com/">
                        <IconWk />
                     </a>
                  </IconButton>
                  <IconButton
                     sx={{
                        path: {
                           fill: '#353A3A',
                           opacity: 0.3,
                        },
                     }}
                  >
                     <a href="https://www.instagram.com/">
                        <IconInstagram />
                     </a>
                  </IconButton>
               </TitleContainer>
               <NavigationContainer>
                  <StyledNavText href="/">Навигация</StyledNavText>
                  <StyledNavText href="/">О проекте</StyledNavText>
                  <StyledNavText href="/">Благотворительность</StyledNavText>
               </NavigationContainer>
               <EmailContainer>
                  <StyledEmailTitle>Подписаться на рассылку</StyledEmailTitle>
                  <ReusableInput />
               </EmailContainer>
            </Container>
         </GlobalContainer>
         <div>
            <StyledCompanyName>
               Peaksoft © 2022 Все права защищены
            </StyledCompanyName>
         </div>
      </>
   )
}

export default Footer
const GlobalContainer = styled('div')(() => ({
   maxWidth: '100%',
   borderBottom: '1px solid #353A5A',
   borderTop: '1px solid #353A5A',
   marginTop: '120px',
}))
const Container = styled('div')(() => ({
   maxWidth: '80%',
   margin: '0 auto',
   display: 'flex',
   padding: '25px 0px 0px 0px',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const TitleContainer = styled('div')(() => ({
   textAlign: 'start',
}))
const StyledTitle = styled('h1')(() => ({
   textAlign: 'start',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '24px',
   lineHeight: '29px',
   textTransform: 'uppercase',
}))
const StyledText = styled('h1')(() => ({
   textAlign: 'start',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '130%',
   color: '#353A5A',
}))
const NavigationContainer = styled('div')(() => ({
   width: '152px',
   display: 'flex',
   flexWrap: 'wrap',
}))
const StyledNavText = styled('a')(() => ({
   textAlign: 'start',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '150%',
   color: 'black',
   textDecoration: 'none',
}))
const EmailContainer = styled(InputLabel)(() => ({
   width: '350px',
   display: 'flex',
   flexWrap: 'wrap',
   textAlign: 'start',
}))
const StyledEmailTitle = styled('p')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '100%',
   color: 'black',
}))

const StyledCompanyName = styled('p')(() => ({
   textAlign: 'center',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '130%',
   color: '#353A5A',
   padding: '25px 0',
}))
