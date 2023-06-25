import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ListCardIcon } from '../../assets/icons/listcardicon.svg'
import { ReactComponent as IconTable } from '../../assets/icons/tablecard.svg'
import { getLentaCard, getLentaInfoCard } from '../../redux/lenta/lentaThunk'
import useToastBar from '../../hooks/useToastBar'
import Snackbar from '../../components/button/SnackBar'
import Cards from '../../components/card/Card'
import { deleteRequestLentaBooking } from '../../service/lenta.service'

const Lenta = () => {
   const [card, setCard] = useState(true)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const lentaArray = useSelector((state) => state.lenta.card)
   const { showToast } = useToastBar()

   const navigationHandler = (id) => {
      navigate(`${id}/lenta_details`)
   }
   const changeCard = () => {
      setCard(false)
   }

   useEffect(() => {
      dispatch(getLentaCard())
         .unwrap()
         .then()
         .catch(() =>
            showToast('error', 'Ошибка', 'При загрузке данных произошла ошибка')
         )
   }, [])

   const requesById = (id) => {
      dispatch(getLentaInfoCard(id))
         .unwrap()
         .then()
         .catch(() =>
            showToast('error', 'Ошибка', 'При загрузке данных произошла ошибка')
         )
      navigationHandler(id)
   }
   const deleteLentaBooking = async (charityId) => {
      const idMyCharities = {
         id: charityId,
      }
      try {
         const response = await deleteRequestLentaBooking(idMyCharities)
         showToast('success', 'Успешно', 'успешно удален')
         return response
      } catch (error) {
         return showToast('error', 'Ошибка', 'Что-то пошло не так')
      }
   }

   return (
      <>
         <Snackbar />
         <div>
            <StyledMain>
               <StyledIcon onClick={() => setCard(true)}>
                  <StyledTableIcon cardColor={card} />
               </StyledIcon>
               <StyledButton onClick={changeCard}>
                  <StyledListIcon cardColor={card} />
               </StyledButton>
            </StyledMain>
            <StyledCard>
               {lentaArray.map((item) => {
                  return (
                     <Cards
                        key={item.userId}
                        requestById={requesById}
                        openMeatballs={true}
                        changeCard={card}
                        userId={item.wishId}
                        id={item.wishId}
                        icon={item.image}
                        reserveUserImage={item.reserveUserImage}
                        userName={item.fullName}
                        birthDate={item.holidayName}
                        title={item.wishName}
                        img={item.photo}
                        date={item.date}
                        navigateToCharityDetails={navigationHandler}
                        bookChange={false}
                        reserve={item.isReserved}
                        isAnonymous={item.isAnonymous}
                        lentaCard={true}
                        deleteHandler={deleteLentaBooking}
                        bookedDelete={false}
                     />
                  )
               })}
            </StyledCard>
         </div>
      </>
   )
}

export default Lenta

const StyledCard = styled('div')(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '55px',
   marginTop: '30px',
}))

const StyledMain = styled('div')(() => ({
   marginTop: '30px',
   display: 'flex',
   marginRight: '40px',
   justifyContent: 'end',
}))

const StyledButton = styled(Button)(() => ({
   border: '1px solid #EBEAED',
   borderRadius: '4px 0px 0px 4px',
   padding: '14px 8px',
}))

const StyledListIcon = styled(ListCardIcon)(({ cardColor }) => ({
   path: {
      fill: cardColor ? 'gray' : '#8639B5',
   },
}))
const StyledTableIcon = styled(IconTable)(({ cardColor }) => ({
   path: {
      fill: cardColor ? '#8639B5' : '#84818A',
   },
}))
const StyledIcon = styled(Button)(() => ({
   border: '1px solid #EBEAED',
   borderRadius: '4px 0px 0px 4px',
   padding: '13px 8px',
}))
