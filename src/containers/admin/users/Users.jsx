import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { styled } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import UserCard from '../../../components/UI/user-cards/UserCard'
import MyModal from '../../../components/UI/modal/Modal'
import { ReactComponent as MoveToTrash } from '../../../assets/icons/trahsicon.svg'
import MyButton from '../../../components/UI/Button'

import useToastBar from '../../../hooks/useToastBar'
import {
   blockUserRequest,
   deleteUserRequest,
   getAllUsersRequest,
} from '../../../service/userService'
import Snackbar from '../../../components/button/SnackBar'

const Users = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const [userData, setUserData] = useState([])
   const [userId, setUserId] = useState(null)
   const [page, setPage] = useState(3)

   const { open } = Object.fromEntries(searchParams)
   const { showToast } = useToastBar()
   const onCloseModal = () => setSearchParams({})
   const openDeleteModal = (id) => {
      setUserId(id)
      setSearchParams({ open: 'delete', id })
   }
   const navigate = useNavigate()
   const navigateToDetails = (id) => navigate(`${id}/user_detail`)

   const booleanOpen = Boolean(open)
   const getAllUsers = async () => {
      try {
         const data = await getAllUsersRequest(page)
         const users = data.data.elements
         setUserData(users)
         setPage((prevPage) => prevPage + 3)

         return users
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'При загрузке данных произошла ошибка! повторите попытку позже'
         )
      }
   }
   const deleteUser = async () => {
      try {
         await deleteUserRequest(userId)
         showToast('success', 'Успешно', 'Пользователь успешно удален!')
         onCloseModal()
         return getAllUsers()
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const blockUser = async (id) => {
      try {
         await blockUserRequest(id)
         showToast('success', 'Успешно', 'Пользователь успешно заблокирован!')
         return getAllUsers()
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      getAllUsers()
   }, [])

   const handleScroll = () => {
      if (
         window.innerHeight + document.documentElement.scrollTop ===
         document.documentElement.offsetHeight
      ) {
         getAllUsers()
      }
   }
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [page])

   return (
      <>
         <Snackbar />
         <MyModal open={booleanOpen} onClose={onCloseModal}>
            <GlobalModalContainer>
               <SecondContainer>
                  <MoveToTrash />
                  <ContentContainer>
                     <h3>Удаление</h3>
                     <p>Вы точно уверены что хотите удалить ?</p>
                  </ContentContainer>
               </SecondContainer>
               <ButtonContainer>
                  <MyButton
                     propswidth="232px"
                     defaultcolor="#8D949E"
                     outlinedbordercolor="#8D949E"
                     variant="outlined"
                     onClick={onCloseModal}
                  >
                     Отмена
                  </MyButton>
                  <MyButton
                     propswidth="232px"
                     variant="contained"
                     background="#E53535"
                     hoverbackgroundcolor="#dc1a1a"
                     activebackgroundcolor="#c40707"
                     onClick={deleteUser}
                  >
                     Удалить
                  </MyButton>
               </ButtonContainer>
            </GlobalModalContainer>
         </MyModal>
         <div>
            <InfiniteScroll
               dataLength={userData.length}
               next={getAllUsers}
               hasMore={true}
            >
               <Container>
                  {userData?.map((item) => {
                     return (
                        <UserCard
                           key={item.id}
                           changeFlexContent={false}
                           flexchange="center"
                           changeContent={true}
                           buttons={false}
                           navigateHandler={navigateToDetails}
                           openModalHandler={() => openDeleteModal(item.id)}
                           fullName={item.fullName}
                           image={item.photo}
                           count={item.count}
                           id={item.id}
                           countOfWish={item.count}
                           handleBlock={blockUser}
                        />
                     )
                  })}
               </Container>
            </InfiniteScroll>
         </div>
      </>
   )
}

export default Users

const Container = styled('div')`
   margin-top: 45px;
   display: flex;
   gap: 45px;
   max-width: 1170px;
   height: 75vw;
   flex-wrap: wrap;
   justify-content: center;
`
const ContentContainer = styled('div')`
   display: flex;
   flex-direction: column;
   row-gap: 10px;
`
const SecondContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 20px;
`
const ButtonContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 30px;
`
const GlobalModalContainer = styled('div')`
   width: 544px;
`
