import { styled } from '@mui/material'
import React, { useState, memo } from 'react'
import Scrolltrigger from 'react-scroll-trigger'
import LaptopImg from '../assets/images/laptopImage.png'

const FourSection = () => {
   const [scroll, setScroll] = useState(false)

   return (
      <GlobalContainer id="about-project">
         <Scrolltrigger onEnter={() => setScroll(true)}>
            {scroll && (
               <Container>
                  <FirstAnimaton>
                     <StyledTitle>О проекте</StyledTitle>
                     <StyledText>
                        Найти удачный подарок, который принесёт радость, не
                        всегда простая задача. <br /> Благодаря нашему сервису у
                        вас есть возможность не только обрадовать подарком, но и
                        помочь другим приобрести необходимые им вещи. <br /> В
                        разделе благотворительность вы можете найти список
                        опубликованных вещей, забронировав, вы связываетесь с их
                        обладателем.
                     </StyledText>
                  </FirstAnimaton>
                  <SecondAnimation>
                     <img src={LaptopImg} alt="img" />
                  </SecondAnimation>
               </Container>
            )}
         </Scrolltrigger>
      </GlobalContainer>
   )
}

export default memo(FourSection)

const GlobalContainer = styled('div')(() => ({
   maxWidth: '100%',
   height: '318px',
   marginTop: '120px',
}))
const Container = styled('div')(() => ({
   maxWidth: '80%',
   margin: 'auto',
   display: 'flex',
   paddingTop: '120px',
   padding: '25px 0 120px 0',
   alignItems: 'center',
}))
const StyledTitle = styled('h1')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '46px',
   lineHeight: '120%',
   margin: 0,
   textAlign: 'start',
}))
const StyledText = styled('p')(() => ({
   width: '480px',
   textAlign: 'start',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '150%',
   margin: 0,
   marginTop: '32px',
}))

const FirstAnimaton = styled('div')`
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
const SecondAnimation = styled('div')`
   padding-left: 120px;
   padding-bottom: 80px;
   margin-left: 100px;
   -webkit-animation-name: fadeInRightBig;
   animation-name: fadeInRightBig;
   -webkit-animation-duration: 2s;
   animation-duration: 2s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes fadeInRightBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(2000px, 0, 0);
         transform: translate3d(2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes fadeInRightBig {
      0% {
         opacity: 0;
         -webkit-transform: translate3d(2000px, 0, 0);
         transform: translate3d(2000px, 0, 0);
      }
      100% {
         opacity: 1;
         -webkit-transform: none;
         transform: none;
      }
   }
`
