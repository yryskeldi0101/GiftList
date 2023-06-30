import React from 'react'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteCharityReq } from '../../../service/bookedService'
import useToastBar from '../../../hooks/useToastBar'
import { getBookedCharities } from '../../../redux/booked/bookedThunk'
import Cards from '../../../components/card/Card'

export const BookedCharities = ({ getChraititesData }) => {
   const { showToast } = useToastBar()
   const dispatch = useDispatch()

   const deleteMyCharities = async (charityId) => {
      const idMyCharities = {
         id: charityId,
      }
      try {
         await deleteCharityReq(idMyCharities)
         showToast('success', 'Успешно', 'успешно удален')
         return dispatch(getBookedCharities())
      } catch (error) {
         return showToast('error', 'Ошибка', 'Что-то пошло не так')
      }
   }

   return (
      <div>
         <CardsContainer>
            <Main>
               <Titile>Благотворительность</Titile>
               <StyledLink to="booked-charity">Смотреть все</StyledLink>
            </Main>
            <StyledContainer>
               {getChraititesData?.map((item) => {
                  return (
                     <div key={item.charityId}>
                        <Cards
                           id={item.charityId}
                           icon={item.photo}
                           userName={item.fullName}
                           birthDate={item.birthDate}
                           title={item.holidayName}
                           img={item.image}
                           date={item.date}
                           openMeatballs={item.openMeatballs}
                           changeCard={true}
                           bookChange={false}
                           deleteHandler={deleteMyCharities}
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
const CardsContainer = styled('div')`
   display: flex;
   flex-direction: column;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 40px;
`
const Main = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 30px;
   margin-bottom: 24px;
`
const Titile = styled('h2')`
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
