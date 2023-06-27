import { Card, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, memo } from 'react'
import { useParams } from 'react-router-dom'
import MyButton from '../components/UI/Button'
import { postRequestLentaBooking } from '../service/lentaService'
import Checkboxes from '../components/UI/Checkbox'
import { getLentaInfoCard } from '../redux/lenta/lentaThunk'

function CardPage() {
   const dispatch = useDispatch()
   const infoLenta = useSelector((state) => state.lenta.getOneLenta)
   const [isAnonym, setAnonym] = useState(false)
   const param = useParams()
   const [isLocked, setLocked] = useState(false)

   useEffect(() => {
      dispatch(getLentaInfoCard(param.id))
   }, [])

   const changeIsAnonym = (e) => {
      setAnonym(e.target.checked)
   }

   const postLentaBooking = async () => {
      await postRequestLentaBooking(param.id, isAnonym)
      setLocked(true)
   }
   return (
      <StyledCard>
         <StyledInfo>
            <StyledImage>
               <Img src={infoLenta.photo} alt="#" />
            </StyledImage>
            <InfoBox>
               <HeaderBox>
                  <TitleBox>
                     <ImgIcon src={infoLenta.image} />
                     <StyledTitle>
                        <UserName>{infoLenta.fullName}</UserName>
                     </StyledTitle>
                  </TitleBox>
                  <StyledPending>
                     {infoLenta.isAnonymous && !isLocked ? (
                        <IconImage src={infoLenta.image} />
                     ) : null}
                     <p>
                        {infoLenta.isReserved ? 'Забронирован' : 'В ожидании'}
                     </p>
                  </StyledPending>
               </HeaderBox>
               <StyledText>
                  <h3>{infoLenta.wishName}</h3>
                  <p>{infoLenta.description}</p>
               </StyledText>
               <StyledData>
                  <div>
                     <Category>Дата праздника:</Category>
                     <span>{infoLenta.date}</span>
                  </div>
                  <StyledSubcategory>
                     <Subcategory>Название праздника:</Subcategory>
                     <StyledSpan>{infoLenta.holidayName}</StyledSpan>
                  </StyledSubcategory>
               </StyledData>
            </InfoBox>
         </StyledInfo>
         <StyledButton>
            <StyledCheckbox>
               <Checkboxes checked={isAnonym} handleChange={changeIsAnonym} />
               <p>Забронировать анонимно</p>
            </StyledCheckbox>
            <MyButtonPage
               onClick={postLentaBooking}
               disabled={infoLenta.isReserved}
               variant="contained"
            >
               Забронировать
            </MyButtonPage>
         </StyledButton>
      </StyledCard>
   )
}

export default memo(CardPage)

const StyledCheckbox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))

const StyledCard = styled(Card)(() => ({
   padding: '16px',
   background: '#FFFFFF',
   border: '2px solid #FFFFFF',
   borderRadius: '10px',
   height: '571px',
   width: '100%',
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
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '100%',
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
   marginLeft: '25rem',
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
   h3: { color: ' #3774D0' },
   p: {
      marginTop: '30px',
   },
}))

const StyledData = styled('div')(() => ({
   display: 'flex',
   marginTop: '20px',
}))

const StyledSpan = styled('span')(() => ({
   color: '#0BA360',
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

const Subcategory = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
}))

const StyledButton = styled('div')(() => ({
   display: 'flex',
   marginLeft: '60%',
   marginTop: '40px',
}))

const MyButtonPage = styled(MyButton)(() => ({
   color: '#FFFFFF',
   fontWeight: '500',
   fontSize: '12px',
   lineHeight: '17px',
   background: '#8639B5',
   padding: '10px 26px',
   marginLeft: '14px',
   '&:hover': {
      background: ' #8639B5',
   },
}))
