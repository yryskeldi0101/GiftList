import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import AdminCard from '../../components/adminCard/AdminCard'
import Ananim from '../../assets/icons/anonim.svg'
import Lock from '../../assets/icons/key.svg'
import Present from '../../assets/icons/present.svg'
import Dislike from '../../assets/icons/dislake.svg'
import { useMeatballs } from '../../hooks/useMeatballs'
import PlusIcon from '../../assets/icons/plusIcon.svg'
import { dataHolidays } from '../../utlis/constants/constnats'

const meatballsContent = [
   {
      icon: Lock,
      title: 'Забронировать',
   },
   {
      icon: Ananim,
      title: 'Забронировать анонимно',
   },
   {
      icon: Present,
      title: 'Добавить в мои подарки',
   },
   {
      icon: Dislike,
      title: 'Пожаловаться',
   },
]

const MyHolidays = () => {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()

   return (
      <>
         <Container>
            <Title>Мои праздники</Title>
            <StyledButton
               variant
               hoverbackgroundcolor
               disabled
               activebackgroundcolor
               defaultcolor
               disabledcolor
            >
               <img src={PlusIcon} alt="Plus Icon" />
               Добавить праздник
            </StyledButton>
         </Container>
         <StyledContainer>
            <AdminCard
               dataCategory="holidays"
               dataWishlist
               dataHolidays={dataHolidays}
               dataCharity
               meatballsContent={meatballsContent}
               handleClick={handleClick}
               handleClose={handleClose}
               open={open}
               anchorEl={anchorEl}
            />
         </StyledContainer>
      </>
   )
}

export default MyHolidays

const StyledButton = styled(Button)({
   width: '25%',
   backgroundColor: '#8639B5',
   color: '#FFFFFF',
   gap: '10px',
   padding: '10px 26px',
   '&:hover': {
      background: '#8639B5',
   },
   '&:active': {
      background: '#AB62D8',
   },
   '&:disabled': {
      color: '#FFFFFF',
   },
})

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
})

const Title = styled('p')({
   fontSize: '24px',
   fontWeight: 'bold',
})

const StyledContainer = styled('div')({})
