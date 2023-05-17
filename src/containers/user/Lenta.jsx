import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/card/Card'
import { ReactComponent as ListCardIcon } from '../../assets/icons/listcardicon.svg'
import { ReactComponent as IconTable } from '../../assets/icons/tablecard.svg'
import {
   getLentaCard,
   getLentaInfoCard,
   postLentaReserve,
} from '../../redux/lenta/lentaThunk'

const Lenta = () => {
   const [card, setCard] = useState(true)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const lentaArray = useSelector((state) => state.lenta.card)
   const navigationHandler = (id) => {
      navigate(`${id}/lenta_details`)
   }
   const changeCard = () => {
      setCard(false)
   }
   useEffect(() => {
      dispatch(getLentaCard())
   }, [])

   const sentRequestById = (id) => {
      dispatch(getLentaInfoCard(id))
      navigationHandler(id)
   }

   const reservesLenta = (id) => {
      dispatch(postLentaReserve(id))
   }

   return (
      <div>
         <StyledMain>
            <StyledIcon onClick={() => setCard(true)}>
               <StyledTableIcon card={card} />
            </StyledIcon>
            <StyledButton onClick={changeCard}>
               <StyledListIcon card={card} />
            </StyledButton>
         </StyledMain>
         <StyledCard>
            {lentaArray.map((item) => {
               return (
                  <Cards
                     reserveHandler={reservesLenta}
                     sentRequestById={sentRequestById}
                     openMeatballs={true}
                     meatballsChangeHandler={item.meatballsChangeHandler}
                     changeCard={card}
                     id={item.userId}
                     image={item.image}
                     fullName={item.fullName}
                     holidayName={item.holidayName}
                     title={item.title}
                     wishName={item.wishName}
                     navigationHandler={navigationHandler}
                     img={item.photo}
                     friendPhoto={item.friendPhoto}
                     date={item.date}
                     reserve={item.reserve}
                     expectation={item.expectation}
                  />
               )
            })}
         </StyledCard>
      </div>
   )
}

export default Lenta

const StyledCard = styled('div')(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
   marginTop: '30px',
}))

const StyledMain = styled('div')(() => ({
   marginTop: '30px',
   display: 'flex',
   marginRight: '20px',
   justifyContent: 'end',
}))

const StyledButton = styled(Button)(() => ({
   border: '1px solid #EBEAED',
   borderRadius: '4px 0px 0px 4px',
   padding: '14px 8px',
}))

const StyledListIcon = styled(ListCardIcon)(({ card }) => ({
   path: {
      fill: card ? 'gray' : '#8639B5',
   },
}))
const StyledTableIcon = styled(IconTable)(({ card }) => ({
   path: {
      fill: card ? '#8639B5' : 'gray',
   },
}))
const StyledIcon = styled(Button)(() => ({
   border: '1px solid #EBEAED',
   borderRadius: '4px 0px 0px 4px',
   padding: '13px 8px',
}))
