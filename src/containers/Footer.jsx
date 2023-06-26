import { IconButton, InputLabel, styled, OutlinedInput } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import React, { memo } from 'react'
import { ReactComponent as IconFacebook } from '../assets/icons/FaceBook.svg'
import { ReactComponent as IconInstagram } from '../assets/icons/instagramicon.svg'
import { ReactComponent as IconWk } from '../assets/icons/WkIcon.svg'
import { ReactComponent as Inactive } from '../assets/icons/inactive.svg'

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
                  <StyledTextField
                     placeholder="Введите ваш Email"
                     endAdornment={
                        <InputAdornment position="end">
                           <Inactive />
                        </InputAdornment>
                     }
                  />
               </EmailContainer>
            </Container>
         </GlobalContainer>
         <div>
            <StyledCompanyName>
               Peaksoft © 2023 Все права защищены
            </StyledCompanyName>
         </div>
      </>
   )
}

export default memo(Footer)
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
   alignItems: 'center',
   padding: '10px 0px 10px 0px',
   justifyContent: 'space-between',
}))
const TitleContainer = styled('div')(() => ({
   textAlign: 'start',
   paddingTop: '20px',
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
   alignItems: 'center',
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
   alignItems: 'center',
}))
const StyledEmailTitle = styled('p')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '100%',
   color: 'black',
   marginBottom: '10px',
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

const StyledTextField = styled(OutlinedInput)(() => ({
   '&.MuiOutlinedInput-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '39px',
      width: '322px',
      background: '#FCFCFD',
      borderRadius: '6px 35px 35px 6px',
      padding: 0,
      '&:hover fieldset': {
         borderColor: '#6200EE',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#6200EE',
      },
   },
}))
