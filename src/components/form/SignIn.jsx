import React from 'react'
import { useForm } from 'react-hook-form'
import { IconButton, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import Checkboxes from '../UI/Checkbox'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'
import ReusableInput from '../UI/input/Input'
import { postAuthGoogle, signIn } from '../../redux/reducer/auth/authThunk'
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleBlack.svg'
import Spinner from '../UI/Spinner'
import useToastBar from '../../hooks/useToastBar'

const SignIn = ({
   openModal,
   onCloseModal,
   openForgotModal,
   openSingUpModal,
}) => {
   const isLoading = useSelector((state) => state.auth.isloading)
   const dispatch = useDispatch()
   const { showToast } = useToastBar()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()
   const submitHandler = (data) => {
      dispatch(signIn(data))
         .unwrap()
         .then(() => showToast('success', 'Успешно', 'Вы вошли успешно'))
         .catch(() =>
            showToast('error', 'Ошибка', 'Не верный пороль или email')
         )
   }
   const submitDataWithGoogle = () => {
      dispatch(postAuthGoogle())
   }
   return (
      <div>
         <MyModal open={openModal} onClose={onCloseModal}>
            <form onSubmit={handleSubmit(submitHandler)}>
               <StyledTitleContainer>
                  <h2>Вход</h2>
                  <IconButton onClick={onCloseModal}>
                     <LetterIcon />
                  </IconButton>
               </StyledTitleContainer>
               {errors.email && (
                  <StyledErrorColor>{errors.email?.message}</StyledErrorColor>
               )}
               <StyledInput
                  placeholder="Email"
                  id="email"
                  name="email"
                  {...register('email', {
                     required: 'Электронная почта обязательнo',
                     pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Электронная почта должна включать @',
                     },
                  })}
               />
               {errors.password && (
                  <StyledErrorColor>
                     {errors.password?.message}
                  </StyledErrorColor>
               )}
               <PasswordInput
                  placeholder="Пароль"
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
                  type="submit"
               >
                  {isLoading ? <Spinner /> : 'Войти'}
               </MyButton>
               <StyledForrgotPasswordContainer>
                  <StyledForrgotPassword onClick={openForgotModal}>
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
                  onClick={submitDataWithGoogle}
                  type="button"
               >
                  <GoogleIcon />
                  Продолжить с Google
               </MyButton>
               <StyledRegistrationText>Нет аккаунта?</StyledRegistrationText>
               <StyledForrgotPassword onClick={openSingUpModal}>
                  Зарегистрироваться
               </StyledForrgotPassword>
            </form>
         </MyModal>
      </div>
   )
}

export default SignIn

const StyledErrorColor = styled('h2')`
   font-size: 15px;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
   margin-bottom: 5px;
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
   text-align: center;
   cursor: pointer;
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
