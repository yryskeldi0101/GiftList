import React from 'react'
import { styled } from '@mui/material'
import MyModal from './modal/Modal'
import ReusableInput from './input/Input'
import MyButton from './Button'
import { ReactComponent as AddImage } from '../../assets/icons/iconaddimage.svg'
import Snackbar from '../button/SnackBar'

const MailingModal = React.forwardRef(
   (
      {
         open,
         onClose,
         imageFileChangeHandler,
         mailingValue,
         mailingDescriptionValue,
         mailingTitleChangeHandler,
         mailingDescriptionChangeHandler,
         imageValue,
         clickHandler,
      },
      ref
   ) => {
      const booleanOpen = Boolean(open)
      return (
         <>
            <Snackbar />
            <MyModal open={booleanOpen} onClose={onClose} ref={ref}>
               <GlobalContainer>
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
                        placeholder="Введите тему рассылки"
                        value={mailingValue}
                        onChange={mailingTitleChangeHandler}
                     />
                     <p>Текст рассылки</p>
                     <ReusableInput
                        placeholder="Введите текст рассылки"
                        value={mailingDescriptionValue}
                        onChange={mailingDescriptionChangeHandler}
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
                        onClick={clickHandler}
                     >
                        Отправить
                     </MyButton>
                  </ButtonContainer>
               </GlobalContainer>
            </MyModal>
         </>
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
