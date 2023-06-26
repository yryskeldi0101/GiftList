import { styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { memo } from 'react'
import User1 from '../assets/images/user1.png'
import User2 from '../assets/images/user2.png'
import User3 from '../assets/images/user3.png'
import User4 from '../assets/images/user4.png'
import User5 from '../assets/images/user5.png'
import User6 from '../assets/images/user6.png'

const data = [
   {
      userImage: User1,
      title: 'Катя, ведущий дизайнер TailGroup',
      id: '1',
   },
   {
      userImage: User2,
      title: 'Марина, маркетолог Headers Market',
      id: '2',
   },
   {
      userImage: User3,
      title: 'Сава, PR-менеджер Central Media',
      id: '3',
   },
   {
      userImage: User4,
      title: 'Паша, основатель LeadCompany',
      id: '4',
   },
   {
      userImage: User5,
      title: 'Саша, главный редактор Just Journal',
      id: '5',
   },
   {
      userImage: User6,
      title: 'Лёня, ведущий разработчик Ymail',
      id: '6',
   },
]

const FiveSection = () => {
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 500,
      cssEase: 'linear',
   }
   return (
      <GlobalContainer>
         <Container>
            <StyledSlider {...settings}>
               {data.map((item) => {
                  return (
                     <div key={item.id}>
                        <img src={item.userImage} alt="img" />
                        <StyledTitle>{item.title}</StyledTitle>
                     </div>
                  )
               })}
            </StyledSlider>
         </Container>
      </GlobalContainer>
   )
}

export default memo(FiveSection)
const GlobalContainer = styled('div')(() => ({
   maxWidth: '100%',
   height: '221px',
   marginTop: '120px',
}))
const Container = styled('div')(() => ({
   maxWidth: '80%',
   margin: 'auto',
   display: 'flex',
   paddingTop: '120px',
   padding: '25px 0 120px 0',
}))
const StyledTitle = styled('div')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '130%',
   color: '#fff',
   marginTop: '20px',
}))
const StyledSlider = styled(Slider)`
   display: flex;
   width: 100%;
   padding: 30px;
   border-radius: 20px;
   background: #8639b5;
`
