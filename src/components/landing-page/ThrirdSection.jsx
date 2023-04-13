import { styled } from '@mui/material'
import React from 'react'
import KidsImage from '../../assets/images/thirdImage.png'

const ThrirdSection = () => {
   return (
      <GlobalContainer>
         <Container>
            <div>
               <img src={KidsImage} alt="img" />
            </div>
            <TextContainer>
               <StyledTitle>Благотворительность</StyledTitle>
               <StyledText>
                  Найти удачный подарок, который принесёт радость, не всегда
                  простая задача. <br /> Благодаря нашему сервису у вас есть
                  возможность не только обрадовать подарком, но и помочь другим
                  приобрести необходимые им вещи. <br /> В разделе
                  благотворительность вы можете найти список опубликованных
                  вещей, забронировав, вы связываетесь с их обладателем.
               </StyledText>
            </TextContainer>
         </Container>
      </GlobalContainer>
   )
}

export default ThrirdSection
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
const TextContainer = styled('div')(() => ({
   paddingBottom: '80px',
   marginLeft: '100px',
}))
