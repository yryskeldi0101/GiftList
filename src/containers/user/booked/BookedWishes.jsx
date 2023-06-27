import React from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from '../../../components/card/Card'
import useToastBar from '../../../hooks/useToastBar'
import { deleteWishReq } from '../../../service/bookedService'

export default function BookedWishes({ getWishesData }) {
   const dispatch = useDispatch()
   const { showToast } = useToastBar()

   const deleteMyWishes = (wishId) => {
      const idMyWishes = {
         id: wishId,
      }
      try {
         const response = dispatch(deleteWishReq(idMyWishes))
         showToast('success', 'Успешно', 'успешно удален')
         return response
      } catch (error) {
         return showToast('error', 'Ошибка', 'Что-то пошло не так')
      }
   }

   return (
      <div>
         <CardsContainer>
            <Main>
               <Title>Желания</Title>
               <StyledLink to="booked-wish">Смотреть все</StyledLink>
            </Main>
            <StyledContainer>
               {getWishesData?.map((item) => {
                  return (
                     <div key={item.wishId}>
                        <Cards
                           id={item.wishId}
                           icon={item.photo}
                           userName={item.fullName}
                           birthDate={item.birthDate}
                           title={item.holidayName}
                           img={item.image}
                           date={item.date}
                           openMeatballs={item.openMeatballs}
                           changeCard={true}
                           bookChange={true}
                           deleteHandler={deleteMyWishes}
                           bookedCard={true}
                           bookedDelete={true}
                        />
                     </div>
                  )
               })}
            </StyledContainer>
         </CardsContainer>
      </div>
   )
}

const CardsContainer = styled('div')({
   display: 'flex',
   flexDirection: 'column',
})
const StyledContainer = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   alignItems: 'center',
   gap: '50px',
})
const Main = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: '30px 0 24px',
})
const Title = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
`
const StyledLink = styled(Link)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   text-decoration-line: underline;
   color: #3772ff;
`
