import React, { useState } from 'react'
import { InputBase, styled } from '@mui/material'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import { ReactComponent as IconDelete } from '../../../assets/icons/Отмена.svg'
import {
   categoryArray,
   countriesArray,
   stateArray,
   subcategoryArray,
} from '../../../utlis/constants/constnats'
import AppSelect from '../AppSelect'

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
   stateSelect,
   countries,
   subCategory,
   setCountries,
   setStateSelect,
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
            <AppSelect
               setValue={setStateSelect}
               value={stateSelect}
               placeholder="Состояние"
               width="150px"
               height="35px"
               border="none"
               options={stateArray}
            />
            <AppSelect
               setValue={setCategory}
               value={category}
               width="170px"
               height="35px"
               placeholder="Категория"
               border="none"
               options={categoryArray}
            />
            <AppSelect
               value={subCategory}
               width="170px"
               height="35px"
               placeholder="Подкатегория"
               border="none"
               setValue={setSubCategory}
               options={subcategoryArray}
            />
            <AppSelect
               value={countries}
               width="170px"
               height="35px"
               placeholder="Страна"
               border="none"
               setValue={setCountries}
               options={countriesArray}
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
   max-width: 921px;
   background-color: #ffffff;
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
      maxWidth: '309px',
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
   max-width: 900px;
   overflow: hidden;
`
