import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import CustomProfile from '../../../components/UI/CustomProfile'
import { getOneUserById } from '../../../redux/user/userThunk'
import {
   blockUserRequest,
   deleteUserRequest,
} from '../../../service/userService'
import useToastBar from '../../../hooks/useToastBar'
import Snackbar from '../../../components/button/SnackBar'
import AdminCard from '../../../components/adminCard/AdminCard'
import { useMeatballs } from '../../../hooks/useMeatballs'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'

const ProfileDetails = () => {
   const profileData = useSelector((state) => state.users.oneUser)
   const params = useParams()
   const { anchorEl, open, handleClick, handleClose } = useMeatballs()
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

   const dataHoliday = profileData.holidayResponses || []
   const dataWishList = profileData.wishResponseUserList || []
   const dataCharity = profileData.charityResponseUsers || []
   console.log(profileData)
   return (
      <>
         <Snackbar />
         <div>
            <CustomProfile
               profileData={profileData}
               deleteHandler={deleteUser}
               blockHandler={blockUser}
            />
         </div>
         <Container>
            <ItemContainer>
               <StyledTitileContainer>
                  <h2>Желаемые подарки</h2>
                  <StyledNavlink to="wishes" state={dataWishList}>
                     Смотреть все
                  </StyledNavlink>
               </StyledTitileContainer>
               <ArrayContainer>
                  <AdminCard
                     dataWishlist={dataWishList?.slice(0, 3)}
                     dataCategory={ACTION_TYPES.WISHLIST}
                     anchorEl={anchorEl}
                     open={open}
                     handleClick={handleClick}
                     handleClose={handleClose}
                     meatballsContent={[]}
                  />
               </ArrayContainer>
            </ItemContainer>
            <ItemContainer>
               <StyledTitileContainer>
                  <h2>Праздники</h2>
                  <StyledNavlink to="holidays" state={dataHoliday}>
                     Смотреть все
                  </StyledNavlink>
               </StyledTitileContainer>
               <ArrayContainer>
                  <AdminCard
                     dataHolidays={dataHoliday?.slice(0, 3)}
                     dataCategory={ACTION_TYPES.HOLIDAYS}
                     meatballsContent={[]}
                     anchorEl={anchorEl}
                     open={open}
                     handleClick={handleClick}
                     handleClose={handleClose}
                  />
               </ArrayContainer>
            </ItemContainer>
            <ItemContainer>
               <StyledTitileContainer>
                  <h2>Благотворительность</h2>
                  <StyledNavlink to="charities" state={dataCharity}>
                     Смотреть все
                  </StyledNavlink>
               </StyledTitileContainer>
               <ArrayContainer>
                  <AdminCard
                     dataCharity={dataCharity?.slice(0, 3)}
                     dataCategory={ACTION_TYPES.CHARITIES}
                     meatballsContent={[]}
                     anchorEl={anchorEl}
                     open={open}
                     handleClick={handleClick}
                     handleClose={handleClose}
                  />
               </ArrayContainer>
            </ItemContainer>
         </Container>
      </>
   )
}

export default ProfileDetails
const Container = styled('div')`
   margin-top: 56px;
`
const StyledTitileContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 24px;
   h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.2px;
      color: #020202;
   }
`
const ItemContainer = styled('div')`
   margin-top: 54px;
   max-width: 1170px;
`
const ArrayContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 50px;
   row-gap: 50px;
`
const StyledNavlink = styled(NavLink)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   text-decoration-line: underline;

   color: #3772ff;
`
