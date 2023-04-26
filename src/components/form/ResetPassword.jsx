import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/light.svg'

import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'

const ResetPassword = ({ openModal, setOpenModal }) => {
   const [newPassword, setNewPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const submitChange = (e) => {
      e.preventDefault()
   }
   return (
      <form onSubmit={submitChange}>
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
            <PasswordInput
               placeholder="Введите новый пароль"
               value={newPassword}
               onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <PasswordInput
               placeholder="Повторите пароль"
               value={confirmPassword}
               onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br />
            <MyButton
               variant="contained"
               background="#8639B5"
               propswidth="482px"
               hoverbackgroundcolor="#612386"
               activebackgroundcolor="#AB62D8"
               disabled={confirmPassword !== newPassword || !confirmPassword}
            >
               Подтвердить
            </MyButton>
         </MyModal>
      </form>
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
