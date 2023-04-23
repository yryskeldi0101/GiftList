import { styled } from '@mui/material'
import React from 'react'
import SocialImg from '../assets/images/firstImage.png'
import AsideImg from '../assets/images/secondImage.png'
import { ReactComponent as Facebook } from '../assets/svg/FaceBook.svg'
import { ReactComponent as Instagram } from '../assets/svg/Instagram.svg'
import { ReactComponent as Vk } from '../assets/svg/WkIcon.svg'
import { ReactComponent as ArrowIcons } from '../assets/svg/ArrowDown.svg'
import MyButton from '../components/UI/Button'
import SecondSection from './SecondSection'
import ThrirdSection from './ThrirdSection'
import FourSection from './FourSection'
import FiveSection from './FiveSection'
import Footer from './Footer'

export const LandingPage = () => {
   return (
      <>
         <Header>
            <Container>
               <HeaderNav>
                  <NavMenu href="#about-project">О проекте</NavMenu>
                  <GiftList>Gift list</GiftList>
                  <NavMenu href="#about-charity">Благотворительность</NavMenu>
               </HeaderNav>
               <HeaderContent>
                  <SocialContent>
                     <SocialIcons>
                        <a href="https://www.facebook.com/login/">
                           <Facebook />
                        </a>
                        <a href="https://www.instagram.com/">
                           <Instagram />
                        </a>
                        <a href="https://vk.com/">
                           <Vk />
                        </a>
                     </SocialIcons>
                     <SocialImageContent src={SocialImg} alt="/" />
                  </SocialContent>

                  <InfoContent>
                     <InfoTitle>Социальная сеть нового поколения</InfoTitle>
                     <InfoDescription>
                        Всегда подскажет, что подарить близким и осуществит твои
                        желания
                     </InfoDescription>
                     <InfoActions>
                        <ButtonDiv>
                           <MyButton
                              hoverbackgroundcolor="#C5243C"
                              activebackgroundcolor="#E72E49 "
                              variant="contained"
                              background="#F91C3D"
                              propswidth="291px"
                           >
                              Войти
                           </MyButton>
                        </ButtonDiv>
                        <div>
                           <MyButton
                              hoverbackgroundcolor="#612386"
                              activebackgroundcolor="#AB62D8"
                              variant="outlined"
                              background="#ffffff"
                              defaultcolor="#ffffff"
                              outlinedbordercolor="#ffffff"
                              propswidth="291px"
                           >
                              Регистрация
                           </MyButton>
                        </div>
                     </InfoActions>
                  </InfoContent>
                  <AsideContent>
                     <div>
                        <AsideImageContent src={AsideImg} alt="" />
                     </div>
                     <ArrowIcon>
                        <ArrowDown>
                           <Arrowss /> Листайте вниз
                        </ArrowDown>
                     </ArrowIcon>
                  </AsideContent>
               </HeaderContent>
            </Container>
         </Header>
         <SecondSection />
         <ThrirdSection />
         <FourSection />
         <FiveSection />
         <Footer />
      </>
   )
}
const ButtonDiv = styled('div')`
   display: flex;
   align-items: center;
   margin-bottom: 17px;
`
const Header = styled('header')(() => ({
   maxWidth: '100%',
   height: '100%',
   background: '#8639B5',
   margin: 'auto',
   overflow: 'hidden',
   display: 'flex',
   flexWrap: 'wrap',
}))
const Container = styled('div')(() => ({
   maxWidth: '1440px',
   margin: ' 0 auto',
   paddingBottom: '75px',
}))
const HeaderNav = styled('nav')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '1140px',
   paddingTop: '25px',
}))
const NavMenu = styled('a')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '100%',
   color: '#FDFDFD',
   textDecoration: 'none',
}))
const GiftList = styled('nav')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '700',
   fontSize: '24px',
   lineHeight: '29px',
   textTransform: 'uppercase',
   color: '#FFFFFF',
}))
const HeaderContent = styled('nav')(() => ({
   marginTop: '73px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   maxWidth: '1440px',
}))
const SocialContent = styled('div')(() => ({}))
const SocialIcons = styled('div')(() => ({
   maxWidth: '22px',
   height: '156px',
   display: 'flex',
   flexWrap: 'wrap',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '30px',
   marginBottom: '104px',
}))
const InfoContent = styled('div')(() => ({
   maxWidth: '542px',
   display: 'flex',
   flexWrap: 'wrap',
   flexDirection: 'column',
   alignItems: 'center',
}))
const InfoTitle = styled('h1')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '54px',
   lineHeight: '120%',
   textAlign: 'center',
   color: '#FFFFFF',
}))
const InfoDescription = styled('p')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '150%',
   textAlign: 'center',
   color: '#FFFFFF',
   margin: '30px 0 50px',
   maxWidth: '370px',
}))
const InfoActions = styled('div')(() => ({
   gap: '17px',
}))

const AsideContent = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
   height: '553px',
}))
const ArrowIcon = styled('p')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   color: '#FFFFFF',
   transform: 'rotate(-90deg) scale(1.5)',
   display: 'flex',
}))
const ArrowDown = styled('span')(() => ({
   position: 'relative',
   display: 'flex',
   top: '85px',
   height: '128px',
   gap: '15px',
}))
const Arrowss = styled(ArrowIcons)(() => ({
   transform: 'rotate(90deg)',
}))
const AsideImageContent = styled('img')(() => ({
   display: 'inline-block',
   maxWidth: '240px',
}))
const SocialImageContent = styled('img')(() => ({
   display: 'inline-block',
   maxWidth: '240px',
}))
