import { styled } from '@mui/material'
import Scrolltrigger from 'react-scroll-trigger'
import React, { useState, memo } from 'react'
import KidsImage from '../assets/images/thirdImage.png'

const ThrirdSection = () => {
   const [scroll, setScroll] = useState(false)
   return (
      <GlobalContainer id="about-charity">
         <Scrolltrigger onEnter={() => setScroll(true)}>
            {scroll && (
               <Container>
                  <FirstAnimaton>
                     <img src={KidsImage} alt="img" />
                  </FirstAnimaton>
                  <SecondAnimation>
                     <StyledTitle>Благотворительность</StyledTitle>
                     <StyledText>
                        Найти удачный подарок, который принесёт радость, не
                        всегда простая задача. <br /> Благодаря нашему сервису у
                        вас есть возможность не только обрадовать подарком, но и
                        помочь другим приобрести необходимые им вещи. <br /> В
                        разделе благотворительность вы можете найти список
                        опубликованных вещей, забронировав, вы связываетесь с их
                        обладателем.
                     </StyledText>
                  </SecondAnimation>
               </Container>
            )}
         </Scrolltrigger>
      </GlobalContainer>
   )
}

export default memo(ThrirdSection)
const FirstAnimaton = styled('div')`
   -webkit-animation-name: bounceInLeft;
   animation-name: bounceInLeft;
   -webkit-animation-duration: 1s;
   animation-duration: 2s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes bounceInLeft {
      0%,
      60%,
      75%,
      90%,
      100% {
         -webkit-transition-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
         );
         transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-3000px, 0, 0);
         transform: translate3d(-3000px, 0, 0);
      }
      60% {
         opacity: 1;
         -webkit-transform: translate3d(25px, 0, 0);
         transform: translate3d(25px, 0, 0);
      }
      75% {
         -webkit-transform: translate3d(-10px, 0, 0);
         transform: translate3d(-10px, 0, 0);
      }
      90% {
         -webkit-transform: translate3d(5px, 0, 0);
         transform: translate3d(5px, 0, 0);
      }
      100% {
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes bounceInLeft {
      0%,
      60%,
      75%,
      90%,
      100% {
         -webkit-transition-timing-function: cubic-bezier(
            0.215,
            0.61,
            0.355,
            1
         );
         transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
         opacity: 0;
         -webkit-transform: translate3d(-3000px, 0, 0);
         transform: translate3d(-3000px, 0, 0);
      }
      60% {
         opacity: 1;
         -webkit-transform: translate3d(25px, 0, 0);
         transform: translate3d(25px, 0, 0);
      }
      75% {
         -webkit-transform: translate3d(-10px, 0, 0);
         transform: translate3d(-10px, 0, 0);
      }
      90% {
         -webkit-transform: translate3d(5px, 0, 0);
         transform: translate3d(5px, 0, 0);
      }
      100% {
         -webkit-transform: none;
         transform: none;
      }
   }
`
const SecondAnimation = styled('div')`
   padding-bottom: 80px;
   margin-left: 100px;
   -webkit-animation-name: fadeInRightBig;
   animation-name: fadeInRightBig;
   -webkit-animation-duration: 1s;
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
const GlobalContainer = styled('div')(() => ({
   background: '#8639B5',
   maxWidth: '100%',
   height: '602px',
   marginTop: '120px',
}))
const Container = styled('div')(() => ({
   maxWidth: '80%',
   margin: 'auto',
   display: 'flex',
   padding: '25px 0 120px 0',
   paddingTop: '120px',
}))
const StyledTitle = styled('h1')(() => ({
   color: '#FDFDFD',
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
   color: '#FDFDFD',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '150%',
   margin: 0,
   marginTop: '32px',
}))
