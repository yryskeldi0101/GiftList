import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import CustomProfile from '../../../components/UI/CustomProfile'
import { getOneUserById } from '../../../redux/user/userThunk'
import {
   blockUserRequest,
   deleteUserRequest,
} from '../../../service/userService'
import useToastBar from '../../../hooks/useToastBar'
import Snackbar from '../../../components/button/SnackBar'

const ProfileDetails = () => {
   const profileData = useSelector((state) => state.users.oneUser)
   const params = useParams()
   const { showToast } = useToastBar()
   const navigate = useNavigate()
   const id = +params.id
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getOneUserById(id))
   }, [])
   const deleteUser = async () => {
      try {
         const data = await deleteUserRequest()
         navigate('/admin/users')
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
         navigate('/admin/users')
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   console.log(profileData)
   return (
      <>
         <Snackbar />
         <div>
            <CustomProfile
               profileData={profileData.data}
               deleteHandler={deleteUser}
               blockHandler={blockUser}
            />
         </div>
         <Container>
            <ItemContainer>
               <StyledTitile>Желаемые подарки</StyledTitile>
            </ItemContainer>
            <ItemContainer>
               <StyledTitile>Праздники</StyledTitile>
            </ItemContainer>
            <ItemContainer>
               <StyledTitile>Благотворительность</StyledTitile>
            </ItemContainer>
         </Container>
      </>
   )
}

export default ProfileDetails
const Container = styled('div')`
   margin-top: 56px;
`
const StyledTitile = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   letter-spacing: 0.2px;
   color: #020202;
`
const ItemContainer = styled('div')`
   margin-top: 54px;
`
