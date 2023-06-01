import React from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import UserCard from '../../../components/UI/user-cards/UserCard'
import useToastBar from '../../../hooks/useToastBar'
import {
   acceptApplicationRequest,
   rejectApplicationRequest,
} from '../../../service/friendsService'
import Snackbar from '../../../components/button/SnackBar'

const RequestsToFriends = ({ requestToFriend }) => {
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const navigationHandler = (id) => navigate(`${id}/profile`)
   const acceptApplicationHandler = async (id) => {
      try {
         await acceptApplicationRequest(id)
         return navigate('/user/friends')
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const rejectApplicationHandler = async (id) => {
      try {
         await rejectApplicationRequest(id)
         return navigate('/user/friends')
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   return (
      <>
         <Snackbar />
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
                        navigateHandler={navigationHandler}
                        acceptHandler={acceptApplicationHandler}
                        rejectHandler={rejectApplicationHandler}
                     />
                  )
               })}
            </Container>
         </div>
      </>
   )
}
const Container = styled('div')`
   margin-top: 24px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 30px;
`
export default RequestsToFriends
