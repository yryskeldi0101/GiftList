import { styled } from '@mui/material'
import React from 'react'
import Like from '../../assets/svg/Like.svg'
import Heart from '../../assets/svg/Heart.svg'
import Hand from '../../assets/svg/Hand.svg'
import MyButton from '../UI/Button'

const SecondSection = () => {
   return (
      <Container>
         <Section>
            <Header>
               <HeaderTitle>
                  <HeaderNumberStyle>100 K+</HeaderNumberStyle>
                  <HeaderTitleStyle>Пользователей</HeaderTitleStyle>
               </HeaderTitle>
               <HeaderTitle>
                  <HeaderNumberStyle>10 K+</HeaderNumberStyle>
                  <HeaderTitleStyle>Размещенных подарков</HeaderTitleStyle>
               </HeaderTitle>
               <HeaderTitle>
                  <HeaderNumberStyle>15 K+</HeaderNumberStyle>
                  <HeaderTitleStyle>Подаренных подарков</HeaderTitleStyle>
               </HeaderTitle>
               <HeaderTitle>
                  <HeaderNumberStyle>9 K+</HeaderNumberStyle>
                  <HeaderTitleStyle>
                     Реализованной <br /> благотворительной помощи
                  </HeaderTitleStyle>
               </HeaderTitle>
            </Header>
            <SecondContainer>
               <div>
                  <Card>
                     <img src={Heart} alt="heartIcon" />
                     <TitleStyle>Дари то, что необходимо</TitleStyle>
                  </Card>
                  <UlList>
                     <ListItem>Находи своих близких</ListItem>
                     <ListItem>Просматривай их списки желаний</ListItem>
                     <ListItem>Узнавай о ближайших мероприятиях</ListItem>
                  </UlList>
               </div>
               <div>
                  <Card>
                     <img src={Like} alt="likeIcon" />
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
               </div>
               <div>
                  <Card>
                     <img src={Hand} alt="handIcon" />
                     <h3>Твори добро</h3>
                  </Card>
                  <UlList>
                     <ListItem>Дари благотворительные подарки</ListItem>
                     <ListItem>Делись своими вещами</ListItem>
                     <ListItem>Помогай другим приобрести необходимое</ListItem>
                  </UlList>
               </div>
            </SecondContainer>
            <ButtonContainer>
               <MyButton
                  hoverbackgroundcolor="#612386"
                  activebackgroundcolor="#AB62D8"
                  variant="contained"
                  background="#8639B5"
               >
                  Зарегистрироваться
               </MyButton>
            </ButtonContainer>
         </Section>
      </Container>
   )
}
const Container = styled('div')`
   width: '1440px';
   height: 100%;
   margin: 0 auto;
   margin-top: 120px;
   padding: 0;
`
const ButtonContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
`
const Header = styled('div')`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
`
const Card = styled('div')`
   display: flex;
   align-items: center;
   width: 400px;
   gap: 10px;
`
const HeaderTitle = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
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
   width: 100%;
   margin-top: 156px;
   flex-wrap: wrap;
   justify-content: space-around;
`
const UlList = styled('ul')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-left: 10px;
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
   padding: 25px 0 120px 0;
`

export default SecondSection
