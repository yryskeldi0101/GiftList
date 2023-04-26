import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import MyModal from '../UI/modal/Modal'
import ReusableInput from '../UI/input/Input'
import { ReactComponent as LetterIcon } from '../../assets/icons/light.svg'
import Checkboxes from '../UI/Checkbox'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'
import { ReactComponent as GoogleIcon } from '../../assets/icons/googleBlack.svg'

const SingUp = () => {
   const [openModal, setOpenModal] = useState(true)
   return (
      <div>
         <form>
            <MyModal open={openModal}>
               <StyledTitleContainer>
                  <h2>Регистрация</h2>
                  <IconButton
                     onClick={() => {
                        setOpenModal(false)
                     }}
                  >
                     <LetterIcon />
                  </IconButton>
               </StyledTitleContainer>
               <StyledInput placeholder="Имя" />
               <StyledInput placeholder="Фамилия" />
               <StyledInput placeholder="Email" />
               <PasswordInput placeholder="Введите пароль" />
               <br />
               <PasswordInput placeholder="Повторите пароль" />
               <StyledCheckboxContainer>
                  <Checkboxes />
                  <StyledCheckboxText>
                     Подписаться на рассылку
                  </StyledCheckboxText>
               </StyledCheckboxContainer>
               <MyButton
                  variant="contained"
                  background="#8639B5"
                  propswidth="482px"
                  hoverbackgroundcolor="#612386"
                  activebackgroundcolor="#AB62D8"
               >
                  Создать аккаунт
               </MyButton>
               <StyledTextContainer>
                  <StyledBorderStyle> </StyledBorderStyle>
                  <StyledText>или</StyledText>
                  <StyledBorderStyle> </StyledBorderStyle>
               </StyledTextContainer>
               <MyButton
                  variant="contained"
                  background="#f1f1f1"
                  propswidth="482px"
                  hoverbackgroundcolor="#d6d5d5"
                  activebackgroundcolor="#d6d6d6"
                  defaultcolor="black"
               >
                  <GoogleIcon />
                  Зарегистрироваться с Google
               </MyButton>
               <StyledRegistrationText>
                  У вас уже есть аккаунт?
                  <StyledForrgotPassword href="/">Войти</StyledForrgotPassword>
               </StyledRegistrationText>
            </MyModal>
         </form>
      </div>
   )
}

export default SingUp

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
   margin-bottom: 20px;
`
const StyledRegistrationText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   color: #23262f;
   text-align: center;
   margin-top: 32px;
   margin-bottom: 0px;
`
const StyledTextContainer = styled('div')`
   width: 482px;
   height: 32px;
   display: flex;
   margin-bottom: 32px;
   margin-top: 32px;
   align-items: center;
   justify-content: center;
`
const StyledText = styled('p')`
   margin: 21px;
`
const StyledBorderStyle = styled('span')`
   width: 174px;
   height: 0px;

   border: 1px solid #f1f1f1;
`

const StyledForrgotPassword = styled('a')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 16px;
   text-decoration: none;
   color: #3772ff;
`

const StyledCheckboxContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-bottom: 32px;
   margin-top: 20px;
`
const StyledCheckboxText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   color: #87898e;
   line-height: 16px;
`
