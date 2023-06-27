import React, { memo } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import UserCard from '../../../components/UI/user-cards/UserCard'
import {
   acceptApplicationRequest,
   rejectApplicationRequest,
} from '../../../service/friendsService'

const RequestsToFriends = ({
   requestToFriend,
   getAllRequests,
   errorFunction,
}) => {
   const navigate = useNavigate()
   const acceptApplicationHandler = async (id) => {
      try {
         await acceptApplicationRequest(id)
         return await getAllRequests()
      } catch (error) {
         return errorFunction(error)
      }
   }
   const rejectApplicationHandler = async (id) => {
      try {
         await rejectApplicationRequest(id)
         return await getAllRequests()
      } catch (error) {
         return errorFunction(error)
      }
   }
   return (
      <div>
         <Container>
            {requestToFriend?.map((item) => {
               return (
                  <UserCard
                     key={item.id}
                     id={item.id}
                     fullName={item.fullName}
                     buttons
                     changeFlexContent
                     image={item.image}
                     count={item.countOfHolidays}
                     countOfWish={item.countOfWishes}
                     navigateHandler={() => navigate(`${item.id}/profile`)}
                     acceptHandler={acceptApplicationHandler}
                     rejectHandler={rejectApplicationHandler}
                  />
               )
            })}
         </Container>
      </div>
   )
}
const Container = styled('div')`
   margin-top: 24px;
   display: flex;
   flex-wrap: wrap;
   gap: 40px;
`
export default memo(RequestsToFriends)
