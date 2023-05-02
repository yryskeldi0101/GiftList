import { Card, styled } from '@mui/material'
import MyButton from '../components/UI/Button'

const Info = [
   {
      id: Math.random(),
      icon: 'https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png',
      userName: 'Аида Каримова',
      number: '+996 705 86 95 44',
      title: 'Рубашка',
      text: 'Рубашка с технологией ProMotion и быстрым, плавным откликом. Грандиозный апгрейд системы камер, открывающий совершенно новые возможности. Исключительная прочность. A15 Bionic — самый быстрый чип для iPhone. И впечатляющее время работы без подзарядки. Всё это Pro.',
      img: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg',
      reserve: 'Забронирован',
      category: 'Школьные',
      subcategory: 'Сумка',
      state: 'Б/У',
      date_added: '12.04.2022',
   },
]

function DetailedPage() {
   return (
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
                           <UserNumber>{item.number}</UserNumber>
                        </StyledTitle>
                     </TitleBox>
                     <StyledReserve>
                        <IconImage src={item.icon} />
                        <p>{item.reserve}</p>
                     </StyledReserve>
                  </HeaderBox>
                  <StyledText>
                     <h3>{item.title}</h3>
                     <p>{item.text}</p>
                  </StyledText>
                  <StyledData>
                     <div>
                        <Category>Категория:</Category>
                        <span>{item.category}</span>
                        <State>Состояние:</State>
                        <span>{item.state}</span>
                     </div>
                     <StyledSubcategory>
                        <Subcategory>Подкатогория:</Subcategory>
                        <span>{item.subcategory}</span>
                        <Dates>Дата добавления:</Dates>
                        <span>{item.date_added}</span>
                     </StyledSubcategory>
                  </StyledData>
               </InfoBox>
            </StyledInfo>
         ))}
         <StyledButton>
            <MyButton variant="outlined" border="none" defaultcolor="#8D949E">
               Удалить
            </MyButton>
            <MyButton
               variant="contained"
               background="#8639B5"
               hoverbackgroundcolor="#860cd1"
               activebackgroundcolor="#510680"
            >
               Заблокировать
            </MyButton>
         </StyledButton>
      </StyledCard>
   )
}

export default DetailedPage

const StyledCard = styled(Card)(() => ({
   padding: '20px',
   background: '#FFFFFF',
   border: '2px solid #FFFFFF',
   borderRadius: '10px',
   width: '1170px',
   height: '100%',
   position: 'relative',
   marginTop: '26px',
   paddingBottom: '200px',
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
const UserNumber = styled('h4')(() => ({
   marginTop: '4px',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '17px',
   letterSpacing: '0.02em',
   color: '#5C5C5C',
}))
const StyledReserve = styled('div')(() => ({
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

const State = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   marginTop: '20px',
}))

const Subcategory = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
}))

const Dates = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   marginTop: '20px',
}))

const StyledButton = styled('div')(() => ({
   display: 'flex',
   marginLeft: '75%',
   marginTop: '66px',
   gap: '30px',
}))
