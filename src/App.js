import React from 'react'
import AppSelect from './components/UI/AppSelect'
import options from './utlis/constants/constnats'

const App = () => {
   return (
      <div>
         <AppSelect options={options} />
      </div>
   )
}

export default App
