import React, { useEffect, useState, memo } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Tabs from '../../../components/UI/tabs/Tabs'
import UserCard from '../../../components/UI/user-cards/UserCard'
import useToastBar from '../../../hooks/useToastBar'
import { getAllRequestsToFriend } from '../../../service/friendsService'
import RequestsToFriends from './RequstsToFriends'
import { getAllFriends } from '../../../redux/search/searchThunk'

const Friends = () => {
   const searchedUsers = useSelector((state) => state.search.data)
   const [requestFirends, setRequestFriends] = useState([])
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const dispatch = useDispatch()
   const errorFunction = (error) => {
      return error
         ? showToast(
              'error',
              'Ошибка',
              'Что-то пошло не так повторите попытку позже'
           )
         : showToast(
              'error',
              'Ошибка',
              'При загрузке данных произошла ошибка! повторите попытку позже'
           )
   }

   const getAllRequests = async () => {
      try {
         const data = await getAllRequestsToFriend()
         const users = data.data
         setRequestFriends(users)
         return users
      } catch (error) {
         return errorFunction()
      }
   }
   useEffect(() => {
      dispatch(getAllFriends())
         .unwrap()
         .then()
         .catch(() =>
            showToast(
               'error',
               'Ошибка',
               'При загрузке данных произошла ошибка! повторите попытку позже'
            )
         )
      getAllRequests()
      return () => {
         dispatch(getAllFriends())
      }
   }, [dispatch])

   const allrequestToFriend = requestFirends || []
   return (
      <GlobalContainer>
         <Tabs
            followersCount={searchedUsers?.length}
            requestsCount={allrequestToFriend?.length}
            requestTab={
               <RequestsToFriends
                  requestToFriend={allrequestToFriend}
                  getAllRequests={getAllRequests}
                  errorFunction={errorFunction}
               />
            }
         >
            <Container>
               {searchedUsers?.map((item) => {
                  return (
                     <UserCard
                        key={item.id}
                        id={item.id}
                        fullName={item.fullName}
                        changeFlexContent
                        image={item.image}
                        count={item.countOfHolidays}
                        countOfWish={item.countOfWishes}
                        navigateHandler={() => navigate(`${item.id}/profile`)}
                     />
                  )
               })}
            </Container>
         </Tabs>
      </GlobalContainer>
   )
}
const GlobalContainer = styled('div')`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`
const Container = styled('div')`
   margin-top: 24px;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   gap: 40px;
`
export default memo(Friends)
