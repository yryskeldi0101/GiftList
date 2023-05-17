import React, { useEffect, useState } from 'react'
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
   const [userData, setUserData] = useState()
   const [userId, setUserId] = useState(null)
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
         const data = await getAllUsersRequest()
         return data.data.elements
      } catch (error) {
         return console.error(error)
      }
   }
   const deleteUser = async () => {
      try {
         const data = await deleteUserRequest(userId)
         showToast('success', 'Успешно', 'Пользователь успешно удален!')
         onCloseModal()
         return data
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
         const data = await blockUserRequest(id)
         showToast('success', 'Успешно', 'Пользователь успешно заблокирован!')
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      const getData = async () => {
         const data = await getAllUsers()
         setUserData(data)
      }
      getData()
   }, [])
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
                     onClick={() => deleteUser()}
                  >
                     Удалить
                  </MyButton>
               </ButtonContainer>
            </GlobalModalContainer>
         </MyModal>
         <div>
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
                        handleBlock={blockUser}
                     />
                  )
               })}
            </Container>
         </div>
      </>
   )
}

export default Users

const Container = styled('div')`
   margin-top: 45px;
   display: flex;
   gap: 40px;
   row-gap: 50px;
   width: 100%;
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
