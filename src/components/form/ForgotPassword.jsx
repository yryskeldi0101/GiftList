import React from 'react'
import { IconButton, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import MyModal from '../UI/modal/Modal'
import { ReactComponent as LetterIcon } from '../../assets/icons/Light.svg'
import MyButton from '../UI/Button'
import ReusableInput from '../UI/input/Input'

const ForgotPassword = ({ openModal, onCloseModal }) => {
   const { register, handleSubmit, formState } = useForm()
   const submitHandler = (data) => {
      console.log(data)
   }
   return (
      <div>
         <StyledModal
            propswidth="564px"
            open={openModal}
            onClose={onCloseModal}
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
                        required: 'Электронная почта обязательна',
                        pattern: {
                           value: /\S+@\S+\.\S+/,
                           message: 'Неверный формат электронной почты',
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
         </StyledModal>
      </div>
   )
}

export default ForgotPassword

const StyledModal = styled(MyModal)`
   width: 564px;
   position: 'absolute';
   top: 50%;
   z-index: 10;
   border: 'none';
   background-color: '#fff';
   left: 50%;
   transform: translate(-50%, -50%);
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

const StyledTitle = styled('h2')`
   display: inline-block;
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
const StyledErrorColor = styled('h2')`
   font-size: large;
   color: #d91c1c;
   font-weight: 400;
   font-family: 'Inter';
`
