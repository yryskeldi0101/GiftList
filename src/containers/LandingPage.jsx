import { styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Scrolltrigger from 'react-scroll-trigger'
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
import SignUp from '../components/form/SignUp'
import SignIn from '../components/form/SignIn'
import ForgotPassword from '../components/form/ForgotPassword'
import ResetPassword from '../components/form/ResetPassword'

export const LandingPage = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const { open } = Object.fromEntries(searchParams)
   const [token, setToken] = useState('')
   useEffect(() => {
      const splittedOpen = open?.split('/')

      if (splittedOpen?.length > 1) {
         const substrings = splittedOpen?.slice(1)
         setToken(substrings[0])
      }
   }, [open])

   const onCloseModal = () => setSearchParams({})
   const onCloseModalResetPassword = () => {
      setSearchParams({})
      setToken('')
   }
   const openSignUpModal = () => setSearchParams({ open: 'register' })
   const openSignInModal = () => setSearchParams({ open: 'login' })
   const openForgotModal = () => setSearchParams({ open: 'forgot-password' })
   const [scroll, setScroll] = useState(false)
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
                        <StyledLink href="https://www.facebook.com/login/">
                           <Facebook />
                        </StyledLink>
                        <SecondStyledLink href="https://www.instagram.com/">
                           <Instagram />
                        </SecondStyledLink>
                        <ThirdStyledLink href="https://vk.com/">
                           <Vk />
                        </ThirdStyledLink>
                     </SocialIcons>
                     <Scrolltrigger onEnter={() => setScroll(true)}>
                        {scroll && (
                           <FirtstAnimation>
                              <SocialImageContent src={SocialImg} alt="/" />
                           </FirtstAnimation>
                        )}
                     </Scrolltrigger>
                  </SocialContent>
                  <Scrolltrigger>
                     {scroll && (
                        <InfoContent>
                           <InfoTitle>
                              Социальная сеть нового поколения
                           </InfoTitle>
                           <InfoDescription>
                              Всегда подскажет, что подарить близким и
                              осуществит твои желания
                           </InfoDescription>
                           <ResetPassword
                              token={token}
                              setOpenModal={onCloseModalResetPassword}
                           />

                           <InfoActions>
                              <ButtonDiv>
                                 <SignIn
                                    openModal={open === 'login'}
                                    onCloseModal={onCloseModal}
                                    openForgotModal={openForgotModal}
                                    openSingUpModal={openSignUpModal}
                                 />
                                 <MyButton
                                    onClick={openSignInModal}
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
                                    onClick={openSignUpModal}
                                 >
                                    Регистрация
                                 </MyButton>
                                 <SignUp
                                    openModal={open === 'register'}
                                    onCloseModal={onCloseModal}
                                    openSingInModal={openSignInModal}
                                 />
                              </div>
                           </InfoActions>
                        </InfoContent>
                     )}
                  </Scrolltrigger>

                  <AsideContent>
                     <Scrolltrigger onEnter={() => setScroll(true)}>
                        {scroll && (
                           <SecondAnimation>
                              <AsideImageContent src={AsideImg} alt="" />
                           </SecondAnimation>
                        )}
                     </Scrolltrigger>
                     <ArrowIcon>
                        <ArrowDown>
                           <Arrowss /> Листайте вниз
                        </ArrowDown>
                     </ArrowIcon>
                  </AsideContent>
               </HeaderContent>
            </Container>
         </Header>
         <SecondSection openSingUpModal={openSignUpModal} />
         <ThrirdSection />
         <FourSection />
         <FiveSection />
         <Footer />
         <ForgotPassword
            openModal={open === 'forgot-password'}
            onCloseModal={onCloseModal}
         />
      </>
   )
}

const StyledLink = styled('a')`
   -webkit-animation-name: fadeInLeftBig;
   animation-name: fadeInLeftBig;
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes fadeInLeftBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-2000px, 0, 0);
         transform: translate3d(-2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes fadeInLeftBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-2000px, 0, 0);
         transform: translate3d(-2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
`
const SecondStyledLink = styled('a')`
   -webkit-animation-name: fadeInLeftBig;
   animation-name: fadeInLeftBig;
   -webkit-animation-duration: 1s;
   animation-duration: 2s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes fadeInLeftBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-2000px, 0, 0);
         transform: translate3d(-2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes fadeInLeftBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-2000px, 0, 0);
         transform: translate3d(-2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
`
const ThirdStyledLink = styled('a')`
   -webkit-animation-name: fadeInLeftBig;
   animation-name: fadeInLeftBig;
   -webkit-animation-duration: 1s;
   animation-duration: 3s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes fadeInLeftBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-2000px, 0, 0);
         transform: translate3d(-2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes fadeInLeftBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-2000px, 0, 0);
         transform: translate3d(-2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
`

const FirtstAnimation = styled('div')`
   -webkit-animation-name: div;
   animation-name: div;
   -webkit-animation-duration: 5s;
   animation-duration: 1.9s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;

   @-webkit-keyframes div {
      0% {
         -webkit-transform-origin: left bottom;
         transform-origin: left bottom;
         -webkit-transform: rotate3d(0, 0, 1, -45deg);
         transform: rotate3d(0, 0, 1, -45deg);
         opacity: 0;
      }
      100% {
         -webkit-transform-origin: left bottom;
         transform-origin: left bottom;
         -webkit-transform: none;
         transform: none;
         opacity: 1;
      }
   }
   @keyframes div {
      0% {
         -webkit-transform-origin: left bottom;
         transform-origin: left bottom;
         -webkit-transform: rotate3d(0, 0, 1, -45deg);
         transform: rotate3d(0, 0, 1, -45deg);
         opacity: 0;
      }
      100% {
         -webkit-transform-origin: left bottom;
         transform-origin: left bottom;
         -webkit-transform: none;
         transform: none;
         opacity: 1;
      }
   }
`
const SecondAnimation = styled('div')`
   -webkit-animation-name: rotateInDownRight;
   animation-name: rotateInDownRight;
   -webkit-animation-duration: 5s;
   animation-duration: 1.9s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes rotateInDownRight {
      0% {
         -webkit-transform-origin: right bottom;
         transform-origin: right bottom;
         -webkit-transform: rotate3d(0, 0, 1, 45deg);
         transform: rotate3d(0, 0, 1, 45deg);
         opacity: 0;
      }
      100% {
         -webkit-transform-origin: right bottom;
         transform-origin: right bottom;
         -webkit-transform: none;
         transform: none;
         opacity: 1;
      }
   }
   @keyframes rotateInDownRight {
      0% {
         -webkit-transform-origin: right bottom;
         transform-origin: right bottom;
         -webkit-transform: rotate3d(0, 0, 1, 45deg);
         transform: rotate3d(0, 0, 1, 45deg);
         opacity: 0;
      }
      100% {
         -webkit-transform-origin: right bottom;
         transform-origin: right bottom;
         -webkit-transform: none;
         transform: none;
         opacity: 1;
      }
   }
`
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
   height: '176px',
   display: 'flex',
   flexWrap: 'wrap',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '45px',
   marginBottom: '104px',
}))
const InfoContent = styled('div')`
   max-width: 542px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-items: center;
   -webkit-animation-name: fadeInDownBig;
   animation-name: fadeInDownBig;
   -webkit-animation-duration: 1s;
   animation-duration: 1.9s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes fadeInDownBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(0, -2000px, 0);
         transform: translate3d(0, -2000px, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes fadeInDownBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(0, -2000px, 0);
         transform: translate3d(0, -2000px, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
`
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
