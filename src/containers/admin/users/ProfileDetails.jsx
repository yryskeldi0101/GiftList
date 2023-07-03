import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import CustomProfile from '../../../components/UI/CustomProfile'
import { getOneUserById } from '../../../redux/user/userThunk'
import {
   blockUserRequest,
   deleteUserRequest,
} from '../../../service/userService'
import useToastBar from '../../../hooks/useToastBar'
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
         const data = await deleteUserRequest(id)
         navigate('/admin/users')
         showToast('')
         return data
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
         const data = await blockUserRequest(id, !isBlocked)
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
   const { state } = useLocation()
   const dataHoliday = profileData.holidayResponses || []
   const dataWishList = profileData.wishResponseUserList || []
   const dataCharity = profileData.charityResponseUsers || []
   console.log(state)
   const appSelectData = [
      dataWishList.length > 0 && {
         display: true,
         dataWishlist: dataWishList?.slice(0, 3),
         dataCategory: ACTION_TYPES.WISHLIST,
         anchorEl,
         open,
         handleClick,
         handleClose,
         id: '1',
         title: 'Желаимые подарки',
         pathName: 'wishes',
         pathTitle: 'Смотреть все',
      },
      dataHoliday.length > 0 && {
         display: true,
         dataHoliday: dataHoliday?.slice(0, 3),
         dataCategory: ACTION_TYPES.HOLIDAYS,
         anchorEl,
         open,
         handleClick,
         handleClose,
         id: '2',
         title: 'Праздники',
         pathName: 'holidays',
         pathTitle: 'Смотреть все',
      },
      dataCharity.length > 0 && {
         display: true,
         dataCharity: dataCharity?.slice(0, 3),
         dataCategory: ACTION_TYPES.CHARITIES,
         anchorEl,
         open,
         handleClick,
         handleClose,
         id: '3',
         title: 'Благотворительность',
         pathName: 'charities',
         pathTitle: 'Смотреть все',
      },
   ]
   return (
      <>
         <div>
            <CustomProfile
               profileData={profileData}
               deleteHandler={deleteUser}
               blockHandler={blockUser}
               adminVariant
               isBlocked={state?.isBlocked}
            />
         </div>
         <Container>
            {appSelectData?.map((item) => {
               return (
                  <ItemContainer key={item.id}>
                     <StyledTitileContainer>
                        <h2>{item.title}</h2>
                        <StyledNavlink
                           to={item.pathName}
                           state={{
                              dataHoliday,
                              dataWishList,
                              dataCharity,
                           }}
                        >
                           {item.pathTitle}
                        </StyledNavlink>
                     </StyledTitileContainer>
                     <ArrayContainer>
                        <AdminCard
                           key={item.id}
                           display={item.display}
                           dataWishlist={item.dataWishlist}
                           dataHolidays={item.dataHoliday}
                           dataCharity={item.dataCharity}
                           dataCategory={item.dataCategory}
                           anchorEl={item.anchorEl}
                           open={item.open}
                           handleClick={item.handleClick}
                           handleClose={item.handleClose}
                        />
                     </ArrayContainer>
                  </ItemContainer>
               )
            })}
         </Container>
      </>
   )
}

export default memo(ProfileDetails)
const Container = styled('div')`
   margin-top: 56px;
   display: flex;
   flex-direction: column;
   padding-right: 1.5vw;
`

const StyledTitileContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   align-items: center;
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
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: center;
`
const ArrayContainer = styled('div')`
   margin-top: 45px;
   display: flex;
   align-items: center;
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
   color: #3772ff;
`
