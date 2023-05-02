import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import Cards from '../../components/card/Card'
import { cardData } from '../../utlis/constants/cardData'
import { ReactComponent as ListCardIcon } from '../../assets/icons/listcardicon.svg'
import { ReactComponent as IconTable } from '../../assets/icons/tablecard.svg'

const Lenta = () => {
   const [card, setCard] = useState(true)

   const changeCard = () => {
      setCard(false)
   }
   return (
      <div>
         <StyledMain>
            <div>Лента</div>
            <div>
               <StyledIcon onClick={() => setCard(true)}>
                  <StyledTableIcon card={card} />
               </StyledIcon>
               <StyledButton onClick={changeCard}>
                  <StyledListIcon card={card} />
               </StyledButton>
            </div>
         </StyledMain>
         {cardData.map((item) => {
            return (
               <Link to={`${item.id}/lenta_details`}>
                  <Cards
                     id={item.id}
                     icon={item.icon}
                     userName={item.userName}
                     birthDate={item.birthDate}
                     title={item.title}
                     img={item.img}
                     date={item.date}
                     reserve={item.reserve}
                     expectation={item.expectation}
                     openMeatballs={item.openMeatballs}
                     meatballsChangeHandler={item.meatballsChangeHandler}
                     changeCard={card}
                  />
               </Link>
            )
         })}
      </div>
   )
}

export default Lenta

const StyledMain = styled('div')(() => ({
   marginTop: '30px',
   display: 'flex',
   marginRight: '30px',
   justifyContent: 'space-between',
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
