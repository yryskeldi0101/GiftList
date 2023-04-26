import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import MyModal from '../UI/modal/Modal'
import ReusableInput from '../UI/input/Input'
import { ReactComponent as LetterIcon } from '../../assets/icons/light.svg'

import MyButton from '../UI/Button'

const ForgotPassword = () => {
   const [openModal, setOpenModal] = useState(true)
   return (
      <div>
         <StyledModal open={openModal}>
            <StyledTitleContainer>
               <h2>Забыли пароль?</h2>
               <IconButton
                  onClick={() => {
                     setOpenModal(false)
                  }}
               >
                  <LetterIcon />
               </IconButton>
            </StyledTitleContainer>
            <StyledText>
               Вам будет отправлена ссылка для сброса пароля
            </StyledText>
            <StyledInput placeholder="Email" />
            <MyButton
               variant="contained"
               background="#8639B5"
               propswidth="482px"
               hoverbackgroundcolor="#612386"
               activebackgroundcolor="#AB62D8"
            >
               Отправить
            </MyButton>
            <br />
            <br />
            <MyButton propswidth="482px">Отмена</MyButton>
         </StyledModal>
      </div>
   )
}

export default ForgotPassword
const StyledModal = styled(MyModal)`
   width: 546px;
   transform: translate(-50%, -50%);
   position: absolute;
   top: 50%;
   z-index: 10;
   border: none;
   background-color: #fff;
   left: 50%;
`
const StyledTitleContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 482px;
   height: 32px;
   margin-bottom: 32px;
`
const StyledInput = styled(ReusableInput)`
   width: 482px;
   height: 32px;
   margin-bottom: 32px;
`
const StyledText = styled('p')`
   width: 482px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   color: #87898e;
   display: inline-block;
   margin-bottom: 32px;
`
