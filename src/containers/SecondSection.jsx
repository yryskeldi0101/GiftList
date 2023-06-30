import { keyframes, styled } from '@mui/material'
import React, { useState, memo } from 'react'
import Scrolltrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import Like from '../assets/svg/Like.svg'
import Heart from '../assets/svg/Heart.svg'
import Hand from '../assets/svg/Hand.svg'
import MyButton from '../components/UI/Button'

const SecondSection = ({
   openSingUpModal,
   userCount = 100,
   placedGifts = 10,
   giftsGiven = 15,
   charitiesCount = 9,
}) => {
   const [counterOn, setCounterOn] = useState(false)
   const [scroll, setScroll] = useState(false)
   return (
      <Container>
         <Section>
            <Header>
               <HeaderTitle>
                  <Scrolltrigger
                     onEnter={() => setCounterOn(true)}
                     onExit={() => setCounterOn(false)}
                  >
                     <HeaderNumberStyle>
                        {counterOn && (
                           <CountUp
                              start={0}
                              end={userCount}
                              duration={2}
                              delay={0}
                           />
                        )}
                        K+
                     </HeaderNumberStyle>
                     <HeaderTitleStyle>Пользователей</HeaderTitleStyle>
                  </Scrolltrigger>
               </HeaderTitle>
               <HeaderTitle>
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={placedGifts}
                           duration={2}
                           delay={0}
                        />
                     )}
                     K+
                  </HeaderNumberStyle>
                  <HeaderTitleStyle>Размещенных подарков</HeaderTitleStyle>
               </HeaderTitle>
               <HeaderTitle>
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={giftsGiven}
                           duration={2}
                           delay={0}
                        />
                     )}
                     K+
                  </HeaderNumberStyle>
                  <HeaderTitleStyle>Подаренных подарков</HeaderTitleStyle>
               </HeaderTitle>
               <HeaderTitle>
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={charitiesCount}
                           duration={2}
                           delay={0}
                        />
                     )}
                     K+
                  </HeaderNumberStyle>
                  <HeaderTitleStyle>
                     Реализованной <br /> благотворительной помощи
                  </HeaderTitleStyle>
               </HeaderTitle>
            </Header>
            <SecondContainer>
               <Scrolltrigger onEnter={() => setScroll(true)}>
                  {scroll && (
                     <FirstAnimation>
                        <Card>
                           <StyledImage src={Heart} alt="heartIcon" />
                           <TitleStyle>Дари то, что необходимо</TitleStyle>
                        </Card>
                        <UlList>
                           <ListItem>Находи своих близких</ListItem>
                           <ListItem>Просматривай их списки желаний</ListItem>
                           <ListItem>Узнавай о ближайших мероприятиях</ListItem>
                        </UlList>
                     </FirstAnimation>
                  )}
               </Scrolltrigger>
               {scroll && (
                  <ThirdAnimation>
                     <Card>
                        <StyledImage src={Like} alt="likeIcon" />
                        <TitleStyle>Удобство в использовании</TitleStyle>
                     </Card>
                     <UlList>
                        <ListItem>
                           Создавай неограниченное количество желаний
                        </ListItem>
                        <ListItem>
                           Добавляй подарки которые ты действительно хочешь
                        </ListItem>
                        <ListItem>Делись своими желаниями с другими</ListItem>
                     </UlList>
                  </ThirdAnimation>
               )}

               {scroll && (
                  <SecondAnimation>
                     <Card>
                        <StyledImage src={Hand} alt="handIcon" />
                        <h3>Твори добро</h3>
                     </Card>
                     <UlList>
                        <ListItem>Дари благотворительные подарки</ListItem>
                        <ListItem>Делись своими вещами</ListItem>
                        <ListItem>
                           Помогай другим приобрести необходимое
                        </ListItem>
                     </UlList>
                  </SecondAnimation>
               )}
            </SecondContainer>
            {scroll && (
               <ButtonContainer>
                  <MyButton
                     hoverbackgroundcolor="#612386"
                     activebackgroundcolor="#AB62D8"
                     variant="contained"
                     background="#8639B5"
                     onClick={openSingUpModal}
                  >
                     Зарегистрироваться
                  </MyButton>
               </ButtonContainer>
            )}
         </Section>
      </Container>
   )
}
const slideIn = keyframes`
   from {
      transform: rotate(0);
   }
   to {
      transform: rotate(360deg);
   }
`
const StyledImage = styled('img')`
   animation: ${slideIn} 4.5s infinite;
`
const FirstAnimation = styled('div')`
   -webkit-animation-name: bounceInLeft;
   animation-name: bounceInLeft;
   -webkit-animation-duration: 1s;
   animation-duration: 1.9s;
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
   -webkit-animation-name: bounceInRight;
   animation-name: bounceInRight;
   -webkit-animation-duration: 1s;
   animation-duration: 1.9s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes bounceInRight {
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
         -webkit-transform: translate3d(3000px, 0, 0);
         transform: translate3d(3000px, 0, 0);
      }
      60% {
         opacity: 1;
         -webkit-transform: translate3d(-25px, 0, 0);
         transform: translate3d(-25px, 0, 0);
      }
      75% {
         -webkit-transform: translate3d(10px, 0, 0);
         transform: translate3d(10px, 0, 0);
      }
      90% {
         -webkit-transform: translate3d(-5px, 0, 0);
         transform: translate3d(-5px, 0, 0);
      }
      100% {
         -webkit-transform: none;
         transform: none;
      }
   }
   @keyframes bounceInRight {
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
         -webkit-transform: translate3d(3000px, 0, 0);
         transform: translate3d(3000px, 0, 0);
      }
      60% {
         opacity: 1;
         -webkit-transform: translate3d(-25px, 0, 0);
         transform: translate3d(-25px, 0, 0);
      }
      75% {
         -webkit-transform: translate3d(10px, 0, 0);
         transform: translate3d(10px, 0, 0);
      }
      90% {
         -webkit-transform: translate3d(-5px, 0, 0);
         transform: translate3d(-5px, 0, 0);
      }
      100% {
         -webkit-transform: none;
         transform: none;
      }
   }
`
const ThirdAnimation = styled('div')`
   -webkit-animation-name: zoomIn;
   animation-name: zoomIn;
   -webkit-animation-duration: 1s;
   animation-duration: 3s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes zoomIn {
      0% {
         opacity: 0;
         -webkit-transform: scale3d(0.3, 0.3, 0.3);
         transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
         opacity: 1;
      }
   }
   @keyframes zoomIn {
      0% {
         opacity: 0;
         -webkit-transform: scale3d(0.3, 0.3, 0.3);
         transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
         opacity: 1;
      }
   }
`
const Container = styled('div')`
   width: 100%;
   min-height: 600px;
   margin: 0 auto;
   margin-top: 120px;
   padding: 0;
`
const ButtonContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   -webkit-animation-name: zoomIn;
   animation-name: zoomIn;
   -webkit-animation-duration: 3.8s;
   animation-duration: 3.8s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes zoomIn {
      0% {
         opacity: 0;
         -webkit-transform: scale3d(0.3, 0.3, 0.3);
         transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
         opacity: 1;
      }
   }
   @keyframes zoomIn {
      0% {
         opacity: 0;
         -webkit-transform: scale3d(0.3, 0.3, 0.3);
         transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
         opacity: 1;
      }
   }
`
const Header = styled('div')`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   width: 100%;
`
const Card = styled('div')`
   display: flex;
   align-items: center;
   width: 400px;
   margin-left: 60px;
   gap: 10px;
`
const HeaderTitle = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 5vw;
`
const HeaderNumberStyle = styled('span')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 54px;
   line-height: 100%;
   text-align: center;
   color: #8639b5;
`

const HeaderTitleStyle = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-align: center;
   color: #353a5a;
   margin-top: 19px;
`
const SecondContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   max-width: '1440px';
   margin-top: 156px;
   flex-wrap: wrap;
   justify-content: space-around;
`
const UlList = styled('ul')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-left: 90px;
   width: 380px;
   margin-bottom: 150px;
`

const ListItem = styled('li')`
   padding: 0;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 150%;
   color: #020202;
`

const TitleStyle = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 150%;
   color: #020202;
`
const Section = styled('div')`
   max-width: 1440px;
   margin: 0 auto;
`

export default memo(SecondSection)
