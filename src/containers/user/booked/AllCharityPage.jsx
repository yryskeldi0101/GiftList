import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { getAllBooked } from '../../../redux/booked/bookedThunk'
import Cards from '../../../components/card/Card'
import useToastBar from '../../../hooks/useToastBar'

export const AllCharityPage = () => {
   const dispatch = useDispatch()
   const { showToast } = useToastBar()
   const allCharityBooked = useSelector((state) => state.booked.postAllBooked)

   useEffect(() => {
      dispatch(getAllBooked())
         .unwrap()
         .then()
         .catch(() =>
            showToast('error', 'Ошибка', 'При загрузке данных произошла ошибка')
         )
   }, [])

   return (
      <GlobalContainer>
         <Title>Благотворительность</Title>
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
      </GlobalContainer>
   )
}

const Container = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   marginTop: '20px',
   gap: '100px',
   alignItems: 'center',
   rowGap: '30px',
})

const GlobalContainer = styled('div')`
   margin-top: 50px;
`
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
