import React from 'react'
import MySnackbar from './components/button/SnackBar'

function App() {
   return (
      <div>
         <MySnackbar title="Информация" message="Текст сообщения" type="info" />
      </div>
   )
}

export default App
