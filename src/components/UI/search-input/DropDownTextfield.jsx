import React, { useState } from 'react'
import { InputBase, styled } from '@mui/material'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import { ReactComponent as IconDelete } from '../../../assets/icons/Отмена.svg'
import CustomSelect from './Select'
import {
   categoryArray,
   countriesArray,
   stateArray,
   subcategoryArray,
} from '../../../utlis/constants/constnats'

const CustomIcon = () => {
   return (
      <div
         style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}
      >
         <IconSearch />
      </div>
   )
}

const TextFieldWithDropDown = ({
   inputChangeHandler,
   value,
   setCategory,
   category,
   state,
   countries,
   subCategory,
   setCountries,
   setState,
   setSubCategory,
   ...rest
}) => {
   const [isChecked, setIsChecked] = useState(false)

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
               changeSelect={setState}
               value={state}
               arraySelect={stateArray}
            />
            <CustomSelect
               title="Категория"
               changeSelect={setCategory}
               value={category}
               arraySelect={categoryArray}
            />
            <CustomSelect
               title="Подкатегория"
               value={subCategory}
               changeSelect={setSubCategory}
               arraySelect={subcategoryArray}
            />
            <CustomSelect
               title="Страна"
               value={countries}
               changeSelect={setCountries}
               arraySelect={countriesArray}
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
