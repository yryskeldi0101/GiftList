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
   category,
   subCategory,
   stateSelect,
   countries,
   categoryChangeHnadler,
   counrtyChangeHandler,
   stateChangeHandler,
   subCategouryChangeHandler,
   ...rest
}) => {
   const [isChecked, setIsChecked] = useState(false)
   const selectArray = [
      {
         onChange: stateChangeHandler,
         value: stateSelect,
         placeholder: 'Состояние',
         width: '13vw',
         height: '35px',
         border: 'none',
         options: stateArray,
         id: '1',
      },
      {
         onChange: categoryChangeHnadler,
         value: category,
         placeholder: 'Категория',
         width: '13vw',
         height: '35px',
         border: 'none',
         options: categoryArray,
         id: '2',
      },
      {
         value: subCategory,
         width: '15vw',
         height: '35px',
         placeholder: 'Подкатегория',
         border: 'none',
         onChange: subCategouryChangeHandler,
         options: subcategoryArray,
         id: '3',
      },
      {
         value: countries,
         width: '13vw',
         height: '35px',
         placeholder: 'Страна',
         border: 'none',
         onChange: counrtyChangeHandler,
         options: countriesArray,
         id: '4',
      },
   ]
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
            autoComplete="off"
            placeholder="Поиск"
         />
         <ContentSelect>
            {selectArray?.map((item) => {
               return (
                  <AppSelect
                     key={item.id}
                     value={item.value}
                     width={item.width}
                     height={item.height}
                     placeholder={item.placeholder}
                     border={item.border}
                     onChange={item.onChange}
                     options={item.options}
                  />
               )
            })}
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
