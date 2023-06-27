import { styled } from '@mui/material'
import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as GalleryCard } from '../../../assets/icons/galleryCard.svg'
import { ReactComponent as ListCard } from '../../../assets/icons/listCard.svg'
import { ReactComponent as Plus } from '../../../assets/icons/plusIcon.svg'
import MyButton from '../../../components/UI/Button'
import AdminCard from '../../../components/adminCard/AdminCard'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'
import { useMeatballs } from '../../../hooks/useMeatballs'
import { deleteWishReq, getAllWishesReq } from '../../../service/wishService'
import useToastBar from '../../../hooks/useToastBar'

const WishList = () => {
   const [changeCard, setChangeCard] = useState(true)
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   const [wishes, setAllWishes] = useState([])
   const navigate = useNavigate()
   const { showToast } = useToastBar()

   const changeCardHAndler = () => {
      setChangeCard(false)
   }
   const addWishHandler = () => {
      navigate('add_wishlist')
   }

   const deleteWishHandler = async (id) => {
      try {
         const response = await deleteWishReq(id)
         showToast('success', 'Success', 'Успешно удалено')
         return response
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }

   const editChangeHandler = (item) => {
      return navigate(`${item.id}/edit_wish`, { state: { item } })
   }

   const getAllWishes = async () => {
      try {
         const { data } = await getAllWishesReq()
         setAllWishes(data)
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
      getAllWishes()
   }, [])

   return (
      <div>
         <HeaderWish>
            <WishTitle>Список желаний</WishTitle>
            <HeaderActions>
               <div>
                  <StGalleryCard
                     onClick={() => setChangeCard(true)}
                     changeCard={true}
                  >
                     <GalleryCard />
                  </StGalleryCard>
                  <StListCard onClick={changeCardHAndler} changeCard={false}>
                     <ListCard />
                  </StListCard>
               </div>
               <MyButton
                  variant="contained"
                  background="#8639B5"
                  hoverbackgroundcolor="#8639B5"
                  onClick={addWishHandler}
               >
                  <Plus />
                  Добавить желание
               </MyButton>
            </HeaderActions>
         </HeaderWish>
         <Wishes>
            <AdminCard
               dataCategory={ACTION_TYPES.WISHLIST}
               dataWishlist={wishes}
               changecard={changeCard}
               open={open}
               anchorEl={anchorEl}
               handleClick={handleClick}
               handleClose={handleClose}
               reserveHandler={deleteWishHandler}
               editChangeHandler={editChangeHandler}
               wishes={true}
               bookedDelete={false}
            />
         </Wishes>
      </div>
   )
}
export default memo(WishList)

const WishTitle = styled('h1')`
   font-weight: 500;
   font-size: 24px;
   line-height: 24px;
   letter-spacing: 0.2px;
`
const HeaderWish = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 32px 0 24px;
`
const HeaderActions = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 16px;

   div {
      width: 82px;
      display: flex;
      align-items: center;
   }
`
const StGalleryCard = styled('div')`
   background: #fbfafc;
   padding: 14px 12px 14px;
   border-radius: 4px 0 0 4px;
   border: 1px solid #ebeaed;
   &:hover {
      color: #84818a;
      background-color: #f7f8fa;
   }
`
const StListCard = styled('div')`
   background: #fbfafc;
   padding: 16px 12px 15.6px;
   border-radius: 0 4px 4px 0;
   border: 1px solid #ebeaed;
   &:hover {
      color: #84818a;
      background-color: #f7f8fa;
   }
`
const Wishes = styled('div')`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: wrap;
   gap: 20px;
   width: 100%;
`
