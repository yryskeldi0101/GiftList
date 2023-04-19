import React, { useState } from 'react'
import AppSelect from './components/UI/AppSelect'

const options = [
   {
      title: 'Электроника',
      id: 1,
   },
   {
      title: 'Одежда',
      id: 2,
   },
   {
      title: 'Школа',
      id: 3,
   },
   {
      title: 'Дом и сад',
      id: 4,
   },
   {
      title: 'Овувь',
      id: 5,
   },
   {
      title: 'Транспорт',
      id: 6,
   },
]
const App = () => {
   const [val, setValue] = useState('')
   return (
      <div>
         <AppSelect
            options={options}
            width="393px"
            height="256px"
            placeholder="Выберите категорию"
            setValue={setValue}
            value={val}
         />
      </div>
   )
}

export default App
