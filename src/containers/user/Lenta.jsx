import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ListCardIcon } from '../../assets/icons/listcardicon.svg'
import { ReactComponent as IconTable } from '../../assets/icons/tablecard.svg'
import {
   getLentaCard,
   getLentaInfoCard,
   postLentaReserve,
} from '../../redux/lenta/lentaThunk'
import Cards from '../../components/card/Card'

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

   const requesById = (id) => {
      dispatch(getLentaInfoCard(id))
      navigationHandler(id)
   }

   const reservesLenta = (id) => {
      dispatch(postLentaReserve(id))
   }
   console.log(lentaArray, 'lentaArray')

   return (
      <div>
         <StyledMain>
            <StyledIcon onClick={() => setCard(true)}>
               <StyledTableIcon card={toString(card)} />
            </StyledIcon>
            <StyledButton onClick={changeCard}>
               <StyledListIcon card={toString(card)} />
            </StyledButton>
         </StyledMain>
         <StyledCard>
            {lentaArray.map((item) => {
               return (
                  <Cards
                     key={item.userId}
                     reserveHandler={reservesLenta}
                     requestById={requesById}
                     openMeatballs={true}
                     changeCard={card}
                     id={item.userId}
                     icon={item.image}
                     friendPhoto={item.friendPhoto}
                     userName={item.fullName}
                     birthDate={item.holidayName}
                     title={item.wishName}
                     img={item.photo}
                     date={item.date}
                     navigateToCharityDetails={navigationHandler}
                     bookChange={false}
                     charityMeatballsHandler={false}
                     charityMeatballs={false}
                     reserve={item.status}
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
   marginRight: '125px',
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
