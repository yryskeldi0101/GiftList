import React, { useState } from 'react'
import { InputBase, styled } from '@mui/material'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import { ReactComponent as IconDelete } from '../../../assets/icons/Отмена.svg'
import CustomSelect from './Select'

const CustomIcon = () => {
   return (
      <div
         style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}
      >
         <IconSearch />
      </div>
   )
}
const state = [{ name: 'Все' }, { name: 'Б/У' }, { name: 'Новое' }]
const countries = [
   {
      name: 'Кыргызстан',
   },
   {
      name: 'Азербайджан',
   },
   {
      name: 'Россия',
   },
   {
      name: 'Казахстан',
   },
   {
      name: 'Узбекистан',
   },
   {
      name: 'Таджикистан',
   },
]
const category = [
   {
      name: 'Книги',
   },
   {
      name: 'Электроника',
   },

   {
      name: 'Одежда',
   },
]
const subcategory = [
   {
      name: 'Драма',
   },
   {
      name: 'Литература',
   },
   {
      name: 'Фантастика',
   },
   {
      name: 'Apple',
   },
   {
      name: 'Samsung',
   },
   {
      name: 'Honor',
   },
   {
      name: 'Рубашки',
   },
   {
      name: 'Брюки',
   },
   {
      name: 'Аксессуары',
   },
]
const TextFieldWithDropDown = ({
   inputChangeHandler,
   value,
   arraySelect,
   ...rest
}) => {
   const [isChecked, setIsChecked] = useState(false)
   const [selectedOption, setSelectedOption] = useState('')

   const keyDownHandler = () => {
      setIsChecked(true)
   }
   return (
      <Container>
         <CustomIcon />
         <InputSearch
            {...rest}
            onChange={inputChangeHandler}
            value={value}
            onKeyDown={keyDownHandler}
            type="text"
            variant="outlined"
            placeholder="Поиск"
         />
         <ContentSelect>
            <CustomSelect
               title="Состояние"
               arraySelect={state}
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
            />
            <CustomSelect
               title="Категория"
               arraySelect={category}
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
            />
            <CustomSelect
               title="Подкатегория"
               arraySelect={subcategory}
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
            />
            <CustomSelect
               title="Страна"
               arraySelect={countries}
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
            />

            {isChecked && <StyledIcon />}
         </ContentSelect>
      </Container>
   )
}

export default TextFieldWithDropDown
const StyledIcon = styled(IconDelete)`
   color: black;
`
const Container = styled('div')`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   border: 1px solid #bdbdbd;
   border-radius: 8px;
   max-width: 821px;
   height: 40px;
   padding: 0 5px;
`

const InputSearch = styled(InputBase)(() => ({
   '&': {
      outline: 'none',
      padding: '5px 10px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '17px',
      lineHeight: '17px',
      borderBottom: 'none',
      borderTop: 'none',
      borderRight: 'none',
      borderLeft: 'none',
      marginLeft: '20px',
      width: '200px',
   },

   '& .MuiOutlinedInput-root': {
      height: '40px',

      '& fieldset': {
         border: 'none',
      },
   },
}))

const ContentSelect = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 700px;
   overflow: hidden;
`
