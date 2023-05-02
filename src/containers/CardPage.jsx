import { Card, styled } from '@mui/material'
import MyButton from '../components/UI/Button'

const Info = [
   {
      id: Math.random(),
      icon: 'https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png',
      userName: 'Аида Каримова',
      title: 'iphone 13 pro',
      text: 'Дисплей Super Retina XDR с технологией ProMotion и быстрым, плавным откликом. Грандиозный апгрейд системы камер, открывающий совершенно новые возможности. Исключительная прочность. A15 Bionic — самый быстрый чип для iPhone. И впечатляющее время работы без подзарядки. Всё это Pro.',
      img: 'https://www.istore.kg/media/documents/2021-09-21/camera_redesign__ro5b5rs2s8i2_large-min.jpg',
      holiday_name: 'День рождение',
      date_added: '12.04.2022',
      pending: 'В ожидании',
   },
]

function CardPage() {
   return (
      <>
         <StyledHeader>
            <Span>Лента </Span>/ iphone 13 pro
         </StyledHeader>
         <StyledCard>
            {Info.map((item) => (
               <StyledInfo key={item.id}>
                  <StyledImage>
                     <Img src={item.img} alt="cat" />
                  </StyledImage>
                  <InfoBox>
                     <HeaderBox>
                        <TitleBox>
                           <ImgIcon src={item.icon} />
                           <StyledTitle>
                              <UserName>{item.userName}</UserName>
                           </StyledTitle>
                        </TitleBox>
                        <StyledPending>
                           <IconImage src={item.icon} />
                           <p>{item.pending}</p>
                        </StyledPending>
                     </HeaderBox>
                     <StyledText>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                     </StyledText>
                     <StyledData>
                        <div>
                           <Category>Дата праздника:</Category>
                           <span>{item.date_added}</span>
                        </div>
                        <StyledSubcategory>
                           <Subcategory>Название праздника:</Subcategory>
                           <span>{item.holiday_name}</span>
                        </StyledSubcategory>
                     </StyledData>
                  </InfoBox>
               </StyledInfo>
            ))}
            <StyledButton>
               <p>Забронировать анонимно</p>
               <MyButtonPage>Забронировать</MyButtonPage>
            </StyledButton>
         </StyledCard>
      </>
   )
}

export default CardPage

const Span = styled('span')(() => ({
   color: '#B4B4B4',
   marginLeft: '23%',
}))

const StyledHeader = styled('div')(() => ({
   marginTop: '40px',
}))

const StyledCard = styled(Card)(() => ({
   padding: '16px',
   background: '#FFFFFF',
   border: '2px solid #FFFFFF',
   borderRadius: '10px',
   width: '1086px',
   height: '871px',
   position: 'relative',
   marginTop: '26px',
}))

const StyledInfo = styled('div')(() => ({
   display: 'flex',
}))
const StyledImage = styled('div')(() => ({
   display: 'flex',
}))
const Img = styled('img')(() => ({
   borderRadius: '8px',
   width: '343px',
   height: '343px',
}))

const InfoBox = styled('div')(() => ({
   marginTop: '30px',
   marginLeft: '20px',
   display: 'flex',
   flexDirection: 'column',
}))

const HeaderBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const TitleBox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))
const ImgIcon = styled('img')(() => ({
   width: '40px',
   height: ' 40px',
}))
const StyledTitle = styled('div')(() => ({
   marginLeft: '16px',
   p: {
      color: '#5C5C5C',
   },
}))
const UserName = styled('h4')(() => ({
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '19px',
   letterSpacing: '0.02em',
}))

const StyledPending = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   p: {
      marginRight: '4px',
      marginLeft: '10px',
      color: '#3774D0',
   },
}))
const IconImage = styled('img')(() => ({
   width: '20px',
   height: '20px',
}))

const StyledText = styled('div')(() => ({
   marginTop: '40px',
   p: {
      marginTop: '30px',
   },
}))

const StyledData = styled('div')(() => ({
   display: 'flex',
   marginTop: '20px',
   span: {
      color: 'green',
   },
}))

const StyledSubcategory = styled('div')(() => ({
   marginLeft: '159px',
}))

const Category = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
}))

// const State = styled('p')(() => ({
//    color: '#5C5C5C',
//    fontWeight: '400',
//    fontSize: '14px',
//    lineHeight: '130%',
//    marginTop: '20px',
// }))

const Subcategory = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
}))

// const Date = styled('p')(() => ({
//    color: '#5C5C5C',
//    fontWeight: '400',
//    fontSize: '14px',
//    lineHeight: '130%',
//    marginTop: '20px',
// }))

const StyledButton = styled('div')(() => ({
   display: 'flex',
   marginLeft: '65%',
   marginTop: '40px',
}))

// const ButtonMui = styled(Button)(() => ({
//    color: '#8D949E',
//    fontWeight: '500',
//    fontSize: '12px',
//    lineHeight: '17px',
// }))

const MyButtonPage = styled(MyButton)(() => ({
   color: '#FFFFFF',
   fontWeight: '500',
   fontSize: '12px',
   lineHeight: '17px',
   background: '#8639B5',
   padding: '10px 26px',
   marginLeft: '14px',
}))
