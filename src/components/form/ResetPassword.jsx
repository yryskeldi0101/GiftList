import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/light.svg'

import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'

const ResetPassword = () => {
   const [openModal, setOpenModal] = useState(true)
   return (
      <div>
         <MyModal open={openModal}>
            <StyledTitleContainer>
               <h2>Смена пароля</h2>
               <IconButton
                  onClick={() => {
                     setOpenModal(false)
                  }}
               >
                  <LetterIcon />
               </IconButton>
            </StyledTitleContainer>
            <PasswordInput placeholder="Введите новый пароль" />
            <br />
            <PasswordInput placeholder="Повторите пароль" />
            <br />
            <MyButton
               variant="contained"
               background="#8639B5"
               propswidth="482px"
               hoverbackgroundcolor="#612386"
               activebackgroundcolor="#AB62D8"
            >
               Подтвердить
            </MyButton>
         </MyModal>
      </div>
   )
}

export default ResetPassword

const StyledTitleContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 482px;
   height: 32px;
   margin-bottom: 32px;
`
