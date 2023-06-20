import React from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postBookedWishReq } from '../../../service/bookedService'
import Cards from '../../../components/card/Card'

export default function BookedWishes({ getWishesData }) {
   const dispatch = useDispatch()

   const addToMyPresents = async (id) => {
      try {
         await postBookedWishReq(id)
      } catch (error) {
         console.log(error)
      }
   }

   const deleteMyWishes = (id, wishId) => {
      const idMyWishes = {
         id: wishId,
         anonymous: id !== '1',
      }
      return dispatch(deleteMyWishes(idMyWishes))
   }

   return (
      <div>
         <CardsContainer>
            <Link to="/wish">
               <Main>
                  <h2>Желания</h2>
                  <ShowAll type="button">
                     <Link to="booked-wish">Смотреть все</Link>
                  </ShowAll>
               </Main>
            </Link>
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
                           meatballsChangeHandler={item.meatballsChangeHandler}
                           changeCard={true}
                           bookChange={true}
                           reserveHandler={addToMyPresents}
                           deleteHandler={deleteMyWishes}
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

   a: {
      textDecoration: 'none',
      fontWeight: 500,
      letterSpacing: '0.2px',
      color: '#020202',
   },
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
