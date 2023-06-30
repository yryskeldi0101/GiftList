import React from 'react'
import { IconButton, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import MyButton from '../UI/Button'
import ReusableInput from '../UI/input/Input'

import { postForgetPassword } from '../../redux/reducer/auth/authThunk'
import useToastBar from '../../hooks/useToastBar'

const ForgotPassword = React.forwardRef(({ openModal, onCloseModal }, ref) => {
   const { register, handleSubmit, formState } = useForm()
   const dispatch = useDispatch()
   const baseUrl = window.location.origin
   const { showToast } = useToastBar()
   const submitHandler = ({ email }) => {
      dispatch(postForgetPassword({ email, baseUrl }))
         .unwrap()
         .then(() => showToast('success', 'Успешно', 'Пароль успешно изменен'))
         .catch(() => showToast('error', 'Ошибка', 'Что-то пошло не так'))
   }
   return (
      <div>
         <MyModal
            propswidth="546px"
            open={openModal}
            onClose={onCloseModal}
            ref={ref}
         >
            <div>
               <form onSubmit={handleSubmit(submitHandler)}>
                  <StyledTitleContainer>
                     <StyledTitle>Забыли пароль?</StyledTitle>
                     <IconButton onClick={onCloseModal}>
                        <LetterIcon />
                     </IconButton>
                  </StyledTitleContainer>
                  <StyledText>
                     Вам будет отправлена ссылка для сброса пароля
                  </StyledText>
                  {formState.errors.email && (
                     <StyledErrorColor>
                        {formState.errors.email.message}
                     </StyledErrorColor>
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
                  <MyButton
                     variant="contained"
                     background="#8639B5"
                     propswidth="482px"
                     hoverbackgroundcolor="#612386"
                     activebackgroundcolor="#AB62D8"
                     type="submit"
                  >
                     Отправить
                  </MyButton>
                  <br />
                  <br />
                  <MyButton propswidth="482px" onClick={onCloseModal}>
                     Отмена
                  </MyButton>
               </form>
            </div>
         </MyModal>
      </div>
   )
})

export default ForgotPassword

const StyledTitle = styled('h2')`
   display: inline-block;
`

const StyledTitleContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 482px;
   height: 32px;
   margin-right: 0;
   padding: 0;
   margin-bottom: 32px;
`
const StyledInput = styled(ReusableInput)(() => ({
   width: '482px',
   height: '32px',
   marginBottom: '32px',
}))

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
const StyledErrorColor = styled('h2')`
   font-size: 15px;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
`
