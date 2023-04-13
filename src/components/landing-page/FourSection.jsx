import { styled } from '@mui/material'
import React from 'react'
import LaptopImg from '../../assets/images/laptopImage.png'

const FourSection = () => {
   return (
      <GlobalContainer>
         <Container>
            <div>
               <StyledTitle>О проекте</StyledTitle>
               <StyledText>
                  Найти удачный подарок, который принесёт радость, не всегда
                  простая задача. <br /> Благодаря нашему сервису у вас есть
                  возможность не только обрадовать подарком, но и помочь другим
                  приобрести необходимые им вещи. <br /> В разделе
                  благотворительность вы можете найти список опубликованных
                  вещей, забронировав, вы связываетесь с их обладателем.
               </StyledText>
            </div>
            <ImageContainer>
               <img src={LaptopImg} alt="img" />
            </ImageContainer>
         </Container>
      </GlobalContainer>
   )
}

export default FourSection

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
const ImageContainer = styled('div')(() => ({
   paddingLeft: '120px',
}))
