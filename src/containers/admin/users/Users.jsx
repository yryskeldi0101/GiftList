import React, { useEffect, useState, memo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { styled } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../../../components/UI/user-cards/UserCard'
import MyModal from '../../../components/UI/modal/Modal'
import { ReactComponent as MoveToTrash } from '../../../assets/icons/trahsicon.svg'
import MyButton from '../../../components/UI/Button'

import useToastBar from '../../../hooks/useToastBar'
import {
   blockUserRequest,
   deleteUserRequest,
} from '../../../service/userService'
import { getAllAdminUsers } from '../../../redux/search/searchThunk'

const Users = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const [userId, setUserId] = useState(null)
   const searchedAdminUsers = useSelector((state) => state.search.data)
   const { open } = Object.fromEntries(searchParams)
   const { showToast } = useToastBar()
   const onCloseModal = () => setSearchParams({})
   const openDeleteModal = (id) => {
      setUserId(id)
      setSearchParams({ open: 'delete', id })
   }
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const navigateToDetails = (id, isBlocked) => {
      return navigate(`${id}/user_detail`, { state: { isBlocked } })
   }
   const booleanOpen = Boolean(open)

   const deleteUser = async () => {
      try {
         await deleteUserRequest(userId)
         showToast('success', 'Успешно', 'Пользователь успешно удален!')
         onCloseModal()
         return dispatch(getAllAdminUsers())
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const blockUser = async (id, isBlocked) => {
      try {
         await blockUserRequest(id, !isBlocked)
         if (isBlocked) {
            showToast(
               'success',
               'Успешно',
               'Пользователь успешно разблокирован!'
            )
         } else {
            showToast(
               'success',
               'Успешно',
               'Пользователь успешно заблокирован!'
            )
         }
         return dispatch(getAllAdminUsers())
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      dispatch(getAllAdminUsers())
         .unwrap()
         .then()
         .catch(() =>
            showToast(
               'error',
               'Ошибка',
               'При загрузке данных произошла ошибка! повторите попытку позже'
            )
         )
   }, [])

   const handleScroll = () => {
      if (
         window.innerHeight + document.documentElement.scrollTop ===
         document.documentElement.offsetHeight
      ) {
         dispatch(getAllAdminUsers())
      }
   }
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])
   return (
      <>
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
               dataLength={searchedAdminUsers.length}
               hasMore={true}
            >
               <Container>
                  {searchedAdminUsers?.map((item) => {
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
                           isBlocked={item.isBlocked}
                        />
                     )
                  })}
               </Container>
            </InfiniteScroll>
         </div>
      </>
   )
}

export default memo(Users)

const Container = styled('div')`
   margin-top: 45px;
   display: flex;
   gap: 35px;
   width: 100%;
   height: 75vw;
   flex-wrap: wrap;
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
