import React from 'react'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
import { IconButton, styled } from '@mui/material'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/light.svg'
import MyButton from '../UI/Button'
import PasswordInput from '../UI/input/PasswordInput'

const ResetPassword = ({ openModal, setOpenModal }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const onSubmit = (data) => {
      if (data.confirmPassword === data.password) {
         console.log(data)
      }
   }
   return (
      <MyModal open={openModal}>
         <form onSubmit={handleSubmit(onSubmit)}>
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
               {...register('password', {
                  required: 'Необходим пароль',
                  minLength: {
                     value: 8,
                     message: 'Пароль должен содержать не менее 8 символов',
                  },
               })}
               id="password"
               name="password"
            />
            {errors.password && (
               <StyledErrorColor>{errors.password?.message}</StyledErrorColor>
            )}
            <br />
            <PasswordInput
               placeholder="Повторите пароль"
               {...register('confirmPassword', {
                  required: 'Необходим пароль',
                  minLength: {
                     value: 8,
                     message: 'Пароль должен содержать не менее 8 символов',
                  },
               })}
               id="confirmPassword"
               name="confirmPassword"
            />
            {errors.password && (
               <StyledErrorColor>
                  {errors.confirmPassword?.message}
               </StyledErrorColor>
            )}
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
      </MyModal>
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
const StyledErrorColor = styled('h2')`
   font-size: large;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
`
