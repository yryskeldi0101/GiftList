import React from 'react'
import { styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import MyModal from './modal/Modal'
import ReusableInput from './input/Input'
import MyButton from './Button'
import { ReactComponent as AddImage } from '../../assets/icons/iconaddimage.svg'

const MailingModal = React.forwardRef(
   (
      { open, onClose, imageFileChangeHandler, imageValue, clickHandler },
      ref
   ) => {
      const {
         register,
         handleSubmit,
         formState: { errors },
      } = useForm({
         defaultValues: {
            mailingTitle: '',
            mailingDescription: '',
         },
      })
      const booleanOpen = Boolean(open)
      return (
         <MyModal open={booleanOpen} onClose={onClose} ref={ref}>
            <GlobalContainer>
               <form onSubmit={handleSubmit(clickHandler)}>
                  <ImageContainer>
                     <h2>Создание рассылки</h2>
                     <StyledImageContainer>
                        <label htmlFor="image">
                           {imageValue ? (
                              <StyledImage src={imageValue} alt="profile" />
                           ) : (
                              <>
                                 <AddImage />
                                 <p>Нажмите для добавления фотографии</p>
                              </>
                           )}
                        </label>
                        <StyledFileInput
                           type="file"
                           id="image"
                           onChange={imageFileChangeHandler}
                        />
                     </StyledImageContainer>
                  </ImageContainer>
                  <InputContainer>
                     <p>Тема</p>
                     <ReusableInput
                        id="mailingTitle"
                        name="mailingTitle"
                        placeholder="Введите тему рассылки"
                        {...register('mailingTitle', {
                           required: true,
                        })}
                        borderError={errors?.mailingTitle ? 'true' : 'false'}
                     />
                     <p>Текст рассылки</p>
                     <ReusableInput
                        id="mailingDescription"
                        name="mailingDescription"
                        placeholder="Введите текст рассылки"
                        {...register('mailingDescription', {
                           required: true,
                        })}
                        borderError={
                           errors?.mailingDescription ? 'true' : 'false'
                        }
                     />
                  </InputContainer>
                  <ButtonContainer>
                     <MyButton
                        variant="outlined"
                        defaultcolor="#8D949E"
                        outlinedbordercolor="#8D949E"
                        onClick={onClose}
                        propswidth="232px"
                     >
                        Отмена
                     </MyButton>
                     <MyButton
                        variant="contained"
                        defaultcolor="#ffffff"
                        background="#8639B5"
                        hoverbackgroundcolor="#840fcd"
                        activebackgroundcolor="#5e0695"
                        propswidth="232px"
                        type="submit"
                     >
                        Отправить
                     </MyButton>
                  </ButtonContainer>
               </form>
            </GlobalContainer>
         </MyModal>
      )
   }
)

export default MailingModal

const GlobalContainer = styled('div')`
   width: 544px;
   height: 550px;
`
const ImageContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 24px;
   cursor: pointer;
   h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: #23262f;
   }
`
const StyledImage = styled('img')`
   width: 217px;
   height: 217px;
   border-radius: 8px;
   cursor: pointer;
`
const StyledImageContainer = styled('div')`
   margin-top: 32px;
   width: 217px;
   height: 217px;
   background: #f6f6f9;
   border: 1px solid #dcdce4;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   cursor: pointer;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #8e8ea9;
      margin-top: 16px;
   }
`
const StyledFileInput = styled('input')`
   display: none;
`
const InputContainer = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 55px;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      color: #464444;
   }
`
const ButtonContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 25px;
`
