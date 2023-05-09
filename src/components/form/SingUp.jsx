import React from 'react'
import { IconButton, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import Checkboxes from '../UI/Checkbox'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleBlack.svg'
import ReusableInput from '../UI/input/Input'

const SingUp = ({ openModal, onCloseModal, openSingInModal }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()
   const submitHandler = (data) => {
      if (data.confirmPassword === data.password) {
         console.log(data)
      }
   }
   return (
      <MyModal open={openModal} onClose={onCloseModal}>
         <form onSubmit={handleSubmit(submitHandler)}>
            <StyledTitleContainer>
               <h2>Регистрация</h2>
               <IconButton onClick={onCloseModal}>
                  <LetterIcon />
               </IconButton>
            </StyledTitleContainer>
            {errors.name && (
               <StyledErrorColor>{errors.name?.message}</StyledErrorColor>
            )}
            <StyledInput
               placeholder="Имя"
               id="name"
               name="name"
               {...register('name', {
                  required: 'Имя обязательна',
               })}
            />
            {errors.lastName && (
               <StyledErrorColor>{errors.lastName?.message}</StyledErrorColor>
            )}
            <StyledInput
               placeholder="Фамилия"
               id="lastName"
               name="lastName"
               {...register('lastName', {
                  required: 'Фамилия обязательна',
               })}
            />
            {errors.email && (
               <StyledErrorColor>{errors.email?.message}</StyledErrorColor>
            )}
            <StyledInput
               placeholder="Email"
               id="email"
               name="email"
               {...register('email', {
                  required: 'Электронная почта обязательна',
                  pattern: {
                     value: /\S+@\S+\.\S+/,
                     message: 'Неверный формат электронной почты',
                  },
               })}
            />
            {errors.password && (
               <StyledErrorColor>{errors.password?.message}</StyledErrorColor>
            )}
            <PasswordInput
               placeholder="Введите пароль"
               id="password"
               name="password"
               {...register('password', {
                  required: 'Необходим пароль',
                  minLength: {
                     value: 8,
                     message: 'Пароль должен содержать не менее 8 символов',
                  },
               })}
            />
            <br />
            {errors.confirmPassword && (
               <StyledErrorColor>
                  {errors.confirmPassword?.message}
               </StyledErrorColor>
            )}
            <PasswordInput
               placeholder="Повторите пароль"
               id="confirmPassword"
               name="confirmPassword"
               {...register('confirmPassword', {
                  required: 'Подвердите пароль',
                  minLength: {
                     value: 8,
                     message: 'Пароль должен содержать не менее 8 символов',
                  },
               })}
            />
            <StyledCheckboxContainer>
               <Checkboxes />
               <StyledCheckboxText>Подписаться на рассылку</StyledCheckboxText>
            </StyledCheckboxContainer>
            <MyButton
               variant="contained"
               background="#8639B5"
               propswidth="482px"
               hoverbackgroundcolor="#612386"
               activebackgroundcolor="#AB62D8"
               type="submit"
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
            </StyledRegistrationText>
            <StyledForrgotPassword onClick={openSingInModal}>
               Войти
            </StyledForrgotPassword>
         </form>
      </MyModal>
   )
}

export default SingUp

const StyledErrorColor = styled('h2')`
   font-size: large;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
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

const StyledForrgotPassword = styled('div')`
   cursor: pointer;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 16px;
   text-decoration: none;
   color: #3772ff;
   text-align: center;
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
