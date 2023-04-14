import React, { useState } from 'react'
import Card from './components/card/Card'

function App() {
   const [state, setState] = useState(false)

   const onChange = () => {
      setState((prevS) => !prevS)
   }

   return (
      <div>
         <Card onChange={onChange} expect={state} />
      </div>
   )
}

export default App
