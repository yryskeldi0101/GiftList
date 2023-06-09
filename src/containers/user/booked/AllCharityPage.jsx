import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import {
   getAllBooked,
   // postBookedCharities,
} from '../../../redux/booked/bookedThunk'
import Cards from '../../../components/card/Card'

export const AllCharityPage = () => {
   const dispatch = useDispatch()

   const allCharityBooked = useSelector((state) => state.booked.postAllBooked)
   console.log(allCharityBooked, 'allCharityBooked')

   useEffect(() => {
      dispatch(getAllBooked())
   }, [])

   return (
      <div>
         <h2>Благотворительность</h2>
         <Container>
            {allCharityBooked.charities?.map((item) => {
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
                        // openMeatballs={item.openMeatballs}
                        // meatballsChangeHandler={item.meatballsChangeHandler}
                        // changeCard={true}
                        // bookChange={true}
                        display={true}
                        // reserveHandler={addToMyPresents}
                        // deleteHandler={deleteMyCharities}
                     />
                  </div>
               )
            })}
         </Container>
      </div>
   )
}

const Container = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
})
