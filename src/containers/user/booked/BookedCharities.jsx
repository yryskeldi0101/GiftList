import React from 'react'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import Cards from '../../../components/card/Card'
import { deleteCharityReq } from '../../../service/bookedService'
// import { postBookedCharityReq } from '../../../service/bookedService'

export const BookedCharities = ({ getChraititesData }) => {
   // const addToMyPresents = async (id) => {
   //    try {
   //       await postBookedCharityReq(id)
   //    } catch (error) {
   //       console.log(error)
   //    }
   // }

   console.log(getChraititesData)

   const deleteMyCharities = async (charityId) => {
      const idMyCharities = {
         id: charityId,
      }
      try {
         await deleteCharityReq(idMyCharities)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div>
         <CardsContainer>
            <Link to="/charity">
               <Main>
                  <h2>Благотворительность</h2>
                  <ShowAll type="button">
                     <Link to="booked-charity">Смотреть все</Link>
                  </ShowAll>
               </Main>
            </Link>

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
                           meatballsChangeHandler={item.meatballsChangeHandler}
                           changeCard={true}
                           bookChange={false}
                           reserveHandler={deleteMyCharities}
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
