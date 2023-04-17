import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import MyModal from '../UI/modal/Modal'
import ReusableInput from '../UI/input/Input'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import Checkboxes from '../UI/Checkbox'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleBlack.svg'

const SingIn = () => {
   const [openModal, setOpenModal] = useState(true)
   return (
      <div>
         <form>
            <MyModal open={openModal}>
               <StyledTitleContainer>
                  <h2>Вход</h2>
                  <IconButton
                     onClick={() => {
                        setOpenModal(false)
                     }}
                  >
                     <LetterIcon />
                  </IconButton>
               </StyledTitleContainer>
               <StyledInput placeholder="Email" />
               <PasswordInput placeholder="Пароль" />
               <StyledCheckboxContainer>
                  <Checkboxes />
                  <StyledCheckboxText>Запомнить меня</StyledCheckboxText>
               </StyledCheckboxContainer>
               <MyButton
                  variant="contained"
                  background="#8639B5"
                  propswidth="482px"
                  hoverbackgroundcolor="#612386"
                  activebackgroundcolor="#AB62D8"
               >
                  Войти
               </MyButton>
               <StyledForrgotPasswordContainer>
                  <StyledForrgotPassword href="/">
                     Забыли пароль?
                  </StyledForrgotPassword>
               </StyledForrgotPasswordContainer>
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
                  Продолжить с Google
               </MyButton>
               <StyledRegistrationText>
                  Нет аккаунта?
                  <StyledForrgotPassword href="/">
                     Зарегистрироваться
                  </StyledForrgotPassword>
               </StyledRegistrationText>
            </MyModal>
         </form>
      </div>
   )
}

export default SingIn

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

const StyledForrgotPasswordContainer = styled('div')`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 32px;
   margin-bottom: 32px;
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
