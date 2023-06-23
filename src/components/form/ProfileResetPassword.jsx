import React from 'react'
import { useForm } from 'react-hook-form'
import { IconButton, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'
import useToastBar from '../../hooks/useToastBar'
import { addProfileResetPasswordRequest } from '../../service/profileService'

const ProfileResetPassword = React.forwardRef(({ open, onCloseModal }, ref) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { showToast } = useToastBar()
   const navigate = useNavigate()
   const { id } = useParams()

   const submitHandler = async (values) => {
      if (values.newPassword !== values.repeatPassword) {
         return showToast('warning', 'Пожалуйста!', 'Пароли должны совпадать!')
      }

      try {
         await addProfileResetPasswordRequest({ ...values, id: +id })
         return navigate('/user/profile')
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const booleanOpen = Boolean(open)

   return (
      <MyModal open={booleanOpen} onClose={onCloseModal} ref={ref}>
         <div>
            <form onSubmit={handleSubmit(submitHandler)}>
               <StyledTitleContainer>
                  <h2>Смена пароля</h2>
                  <IconButton onClick={onCloseModal}>
                     <LetterIcon />
                  </IconButton>
               </StyledTitleContainer>
               {errors.oldPassword && (
                  <StyledErrorColor>
                     {errors.oldPassword?.message}
                  </StyledErrorColor>
               )}
               <PasswordInput
                  placeholder="Введите старый пароль"
                  {...register('oldPassword', {
                     required: 'Необходим пароль',
                     minLength: {
                        value: 8,
                        message: 'Пароль должен содержать не менее 8 символов',
                     },
                  })}
                  id="oldPassword"
                  name="oldPassword"
               />

               <br />
               {errors.newPassword && (
                  <StyledErrorColor>
                     {errors.newPassword?.message}
                  </StyledErrorColor>
               )}
               <PasswordInput
                  placeholder="Введите новый пароль"
                  {...register('newPassword', {
                     required: 'Необходим пароль',
                     minLength: {
                        value: 8,
                        message: 'Пароль должен содержать не менее 8 символов',
                     },
                  })}
                  id="newPassword"
                  name="newPassword"
               />

               <br />
               {errors.repeatPassword && (
                  <StyledErrorColor>
                     {errors.repeatPassword?.message}
                  </StyledErrorColor>
               )}
               <PasswordInput
                  placeholder="Повторите пароль"
                  {...register('repeatPassword', {
                     required: 'Необходим пароль',
                     minLength: {
                        value: 8,
                        message: 'Пароль должен содержать не менее 8 символов',
                     },
                  })}
                  id="repeatPassword"
                  name="repeatPassword"
               />

               <br />
               <MyButton
                  variant="contained"
                  background="#8639B5"
                  propswidth="482px"
                  hoverbackgroundcolor="#612386"
                  activebackgroundcolor="#AB62D8"
                  type="submit"
               >
                  Подтвердить
               </MyButton>
            </form>
         </div>
      </MyModal>
   )
})

export default ProfileResetPassword

const StyledTitleContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 482px;
   height: 32px;
   margin-bottom: 32px;
`
const StyledErrorColor = styled('h2')`
   font-size: large;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
`
