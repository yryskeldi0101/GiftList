import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { getAllBooked, postBookedWish } from '../../../redux/booked/bookedThunk'
import Cards from '../../../components/card/Card'

export const AllWishesPage = () => {
   const dispatch = useDispatch()

   const allWishBooked = useSelector((state) => state.booked.postAllBooked)
   console.log(allWishBooked, 'allWishBookeddd')

   useEffect(() => {
      dispatch(getAllBooked())
   }, [])

   const addToMyPresents = (id, whisId) => {
      const dataIconMyPresents = {
         id: whisId,
         anonymous: id !== '1',
      }
      dispatch(postBookedWish(dataIconMyPresents))
   }

   return (
      <div>
         <h2>Желания</h2>
         <Main>
            {allWishBooked.wishes?.map((item) => {
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
                        // deleteHandler={deleteMyWishes}
                     />
                  </div>
               )
            })}
         </Main>
      </div>
   )
}

const Main = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
})
