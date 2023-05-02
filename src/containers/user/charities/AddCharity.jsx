import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as AddImg } from '../../../assets/svg/charityImgAddIcon.svg'
import ReusableInput from '../../../components/UI/input/Input'
import AppSelect from '../../../components/UI/AppSelect'
import {
   categoryArray,
   stateArray,
   subcategoryArray,
} from '../../../utlis/constants/constnats'
import EmptyTextarea from '../../../components/UI/textarea/Textarea'
import MyButton from '../../../components/UI/Button'
import { store } from '../../../redux/store'
import { addCharities } from '../../../redux/charities/charityThunk'

const CharityAdd = () => {
   const [stateValue, setStateValue] = useState('')
   const [categoryValue, setCategoryValue] = useState('')
   const [subCategoryValue, setSubCategoryValue] = useState('')
   const [titleInputValue, setTitleInputValue] = useState('')
   const [selectedFile, setSelectedFile] = useState('')
   const [descriptionValue, setDescriptionValue] = useState('')
   const titleInputChangeHandler = (event) => {
      setTitleInputValue(event.target.value)
   }
   const handleFileInput = (event) => {
      setSelectedFile(event.target.value)
   }
   const descriptionChangeHandler = (event) => {
      setDescriptionValue(event.target.value)
   }
   const { token } = store.getState().auth
   console.log(token)
   const navigate = useNavigate()
   const navigateToCharityHandler = () => {
      navigate(-1)
   }
   const dispatch = useDispatch()
   const hadleSubmit = () => {
      const data = {
         name: titleInputValue,
         state: stateValue,
         category: categoryValue,
         subCategory: subCategoryValue,
         description: descriptionValue,
         image: selectedFile,
      }
      console.log(data)
      dispatch(addCharities(data))
   }
   return (
      <StyledGlobalContainer>
         <StyledImgContainer>
            <div>
               <StyledImgIconContainer>
                  <AddImg />
               </StyledImgIconContainer>
               <StyledImgText
                  type="text"
                  value={selectedFile}
                  placeholder="Нажмите для добавления фотографии"
                  onChange={handleFileInput}
               />
            </div>
         </StyledImgContainer>

         <StyledInputAndSelctsGlobalContainer>
            <div>
               <StyledTitle>Добавление вещи</StyledTitle>
            </div>
            <StyledInputAndSelectsContainer>
               <div>
                  <StyledTitleForSelects>
                     Название подарка
                  </StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Введите название подарка"
                     value={titleInputValue}
                     onChange={titleInputChangeHandler}
                  />
               </div>
               <StyledMarginLefts>
                  <StyledTitleForSelects>Cостояние</StyledTitleForSelects>
                  <AppSelect
                     background="none"
                     options={stateArray}
                     height="30px"
                     placeholder="Укажите состояние"
                     value={stateValue}
                     setValue={setStateValue}
                  />
               </StyledMarginLefts>
               <div>
                  <StyledTitleForSelects>Категория</StyledTitleForSelects>
                  <AppSelect
                     background="none"
                     options={categoryArray}
                     height="30px"
                     placeholder="Выберите категорию"
                     value={categoryValue}
                     setValue={setCategoryValue}
                  />
               </div>
               <StyledMarginLefts>
                  <StyledTitleForSelects>Подкатегория</StyledTitleForSelects>
                  <AppSelect
                     background="none"
                     options={subcategoryArray}
                     height="30px"
                     placeholder="Выберите подкатегорию"
                     value={subCategoryValue}
                     setValue={setSubCategoryValue}
                  />
               </StyledMarginLefts>
            </StyledInputAndSelectsContainer>
            <div>
               <StyledDescription>Описание</StyledDescription>
               <EmptyTextarea
                  value={descriptionValue}
                  onChange={descriptionChangeHandler}
                  title="Введите описание подарка"
                  rows="4"
               />
            </div>
            <StyledButtonContainer>
               <MyButton
                  variant="outlined"
                  background="#ffffff"
                  defaultcolor="#8D949E"
                  propswidth="113px"
                  outlinedbordercolor="#8D949E"
                  propsborderradius="10px"
                  onClick={navigateToCharityHandler}
               >
                  Отмена
               </MyButton>
               <MyButton
                  variant="contained"
                  propswidth="113px"
                  background="#8639B5"
                  defaultcolor="#ffffff"
                  hoverbackgroundcolor="#612386"
                  activebackgroundcolor="#AB62D8"
                  propsborderradius="10px"
                  onClick={hadleSubmit}
               >
                  Добавить
               </MyButton>
            </StyledButtonContainer>
         </StyledInputAndSelctsGlobalContainer>
      </StyledGlobalContainer>
   )
}

export default CharityAdd

const StyledReusebleInput = styled(ReusableInput)`
   width: 396px;
`
const StyledButtonContainer = styled('div')`
   width: 260px;
   display: flex;
   justify-content: space-between;
   margin-top: 57px;
   margin-left: 548px;
`
const StyledTitle = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 20px;
`
const StyledTitleForSelects = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin: 0;
   padding: 0;
`
const StyledDescription = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin-left: 10px;
   padding: 0;
`
const StyledMarginLefts = styled('div')`
   margin-left: 16px;
`

const StyledGlobalContainer = styled('div')`
   display: flex;
`
const StyledInputAndSelctsGlobalContainer = styled('div')`
   margin-left: 20px;
`
const StyledInputAndSelectsContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 825px;
   flex-wrap: wrap;
   margin-bottom: 20px;
`

const StyledImgContainer = styled('div')`
   width: 217px;
   height: 217px;
   background: #f6f6f9;
   border: 1px solid #dcdce4;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
`

const StyledImgIconContainer = styled('div')`
   text-align: center;
`

const StyledImgText = styled('input')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   border: none;
   display: flex;
   align-items: center;
   text-align: center;

   color: #8e8ea9;
`
