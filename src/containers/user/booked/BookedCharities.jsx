import React from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from '../../../components/card/Card'
import { postBookedCharityReq } from '../../../service/bookedService'

export const BookedCharities = ({ getChraititesData }) => {
   const dispatch = useDispatch()

   const addToMyPresents = async (id) => {
      console.log(id, 's')
      try {
         await postBookedCharityReq(id)
      } catch (error) {
         console.log(error)
      }
   }

   const deleteMyCharities = (id, wishId) => {
      const idMyWishes = {
         id: wishId,
         anonymous: id !== '1',
      }
      dispatch(deleteMyCharities(idMyWishes))
   }

   return (
      <div>
         <CardsContainer>
            <Main>
               <h2>Подарки </h2>
               <ShowAll type="button">
                  <Link to="booked-charity">Смотреть все</Link>
               </ShowAll>
            </Main>

            <StyledContainer>
               {getChraititesData?.map((item) => {
                  return (
                     <div key={item.id}>
                        <Cards
                           id={item.id}
                           icon={item.photo}
                           userName={item.fullName}
                           birthDate={item.birthDate}
                           title={item.holidayName}
                           img={item.image}
                           date={item.date}
                           openMeatballs={item.openMeatballs}
                           meatballsChangeHandler={item.meatballsChangeHandler}
                           changeCard={true}
                           bookChange={true}
                           reserveHandler={addToMyPresents}
                           deleteHandler={deleteMyCharities}
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
   justifyContent: 'space-between',
   fontSize: '20px',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '500',
   alignItems: 'center',
   letterSpacing: '0.2px',
})
const Main = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: '30px 0 24px',
})
const ShowAll = styled('h3')({
   display: 'flex',
   color: 'blue',
   textDecoration: 'underline',
})
