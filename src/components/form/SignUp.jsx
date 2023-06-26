import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IconButton, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import MyModal from '../UI/modal/Modal'
import Checkboxes from '../UI/Checkbox'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import ReusableInput from '../UI/input/Input'
import Spinner from '../UI/Spinner'
import { postAuthGoogle, signUpPost } from '../../redux/reducer/auth/authThunk'
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleBlack.svg'
import useToastBar from '../../hooks/useToastBar'

const SignUp = React.forwardRef(
   ({ openModal, onCloseModal, openSingInModal }, ref) => {
      const isLoading = useSelector((state) => state.auth.isloading)
      const [checkbox, setCheckbox] = useState(false)
      const { showToast } = useToastBar()

      const dispatch = useDispatch()

      const changeHandle = () => {
         setCheckbox((prevS) => !prevS)
      }
      const {
         register,
         handleSubmit,
         formState: { errors },
      } = useForm()
      const submitHandler = (data) => {
         const sendData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            checkbox,
         }
         if (data.confirmPassword === data.password) {
            dispatch(signUpPost(sendData))
               .unwrap()
               .then(() => showToast('success', 'Успешно', 'Вы вошли успешно'))
               .catch(() =>
                  showToast('error', 'Ошибка', 'Не верный пороль или email')
               )
         }
      }
      const submitDataWithGoogle = () => {
         dispatch(postAuthGoogle())
      }
      return (
         <MyModal open={openModal} onClose={onCloseModal} ref={ref}>
            <form onSubmit={handleSubmit(submitHandler)}>
               <FormContainer>
                  <StyledTitleContainer>
                     <h2>Регистрация</h2>
                     <IconButton onClick={onCloseModal}>
                        <LetterIcon />
                     </IconButton>
                  </StyledTitleContainer>
                  {errors.firstName && (
                     <StyledErrorColor>
                        {errors.firstName?.message}
                     </StyledErrorColor>
                  )}
                  <StyledInput
                     placeholder="Имя"
                     id="firstName"
                     name="firstName"
                     {...register('firstName', {
                        required: 'Имя обязательна',
                     })}
                     onBlur={handleSubmit(submitHandler)}
                  />
                  {errors.lastName && (
                     <StyledErrorColor>
                        {errors.lastName?.message}
                     </StyledErrorColor>
                  )}
                  <StyledInput
                     placeholder="Фамилия"
                     id="lastName"
                     name="lastName"
                     {...register('lastName', {
                        required: 'Фамилия обязательна',
                     })}
                     onBlur={handleSubmit(submitHandler)}
                  />
                  {errors.email && (
                     <StyledErrorColor>
                        {errors.email?.message}
                     </StyledErrorColor>
                  )}
                  <StyledInput
                     placeholder="Email"
                     id="email"
                     name="email"
                     onBlur={handleSubmit(submitHandler)}
                     {...register('email', {
                        required: 'Электронная почта обязательна',
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
                     placeholder="Введите пароль"
                     id="password"
                     name="password"
                     onBlur={handleSubmit(submitHandler)}
                     {...register('password', {
                        required: 'Необходим пароль',
                        minLength: {
                           value: 8,
                           message:
                              'Пароль должен содержать не менее 8 символов',
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
                     onBlur={handleSubmit(submitHandler)}
                     name="confirmPassword"
                     {...register('confirmPassword', {
                        required: 'Подвердите пароль',
                        minLength: {
                           value: 8,
                           message:
                              'Пароль должен содержать не менее 8 символов',
                        },
                     })}
                  />
                  <StyledCheckboxContainer>
                     <Checkboxes onChange={changeHandle} checked={checkbox} />
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
                     type="submit"
                  >
                     {isLoading ? <Spinner /> : 'Создать аккаунт'}
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
                     onClick={submitDataWithGoogle}
                     type="button"
                  >
                     <GoogleIcon />
                     Продолжить с Google
                  </MyButton>
                  <StyledRegistrationText>
                     У вас уже есть аккаунт?
                  </StyledRegistrationText>
                  <StyledForrgotPassword onClick={openSingInModal}>
                     Войти
                  </StyledForrgotPassword>
               </FormContainer>
            </form>
         </MyModal>
      )
   }
)

export default SignUp

const StyledErrorColor = styled('h2')`
   font-size: 15px;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
`
const FormContainer = styled('div')`
   max-height: 700px;
   overflow-y: scroll;
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
