import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { getAllBooked } from '../../../redux/booked/bookedThunk'
import Cards from '../../../components/card/Card'

export const AllCharityPage = () => {
   const dispatch = useDispatch()

   const allCharityBooked = useSelector((state) => state.booked.postAllBooked)

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
                        display={true}
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
