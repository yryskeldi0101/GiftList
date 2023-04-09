import React from 'react'
import Meatballs from './components/UI/Meatballs'
import Anonim from './assets/icons/anonim.svg'
import KeyIcon from './assets/icons/key.svg'
import { useMeatballs } from './hooks/useMeatballs'

const arrayIcon = [
   {
      icon: KeyIcon,
      title: 'Заблокировать',
   },
   {
      icon: Anonim,
      title: 'Заблокировать анонимно',
   },
]
function App() {
   const { open, handleClick, anchorEl, handleClose } = useMeatballs()

   return (
      <div className="App">
         <Meatballs
            arrayIcon={arrayIcon}
            open={open}
            handleClick={handleClick}
            anchorEl={anchorEl}
            handleClose={handleClose}
         />
      </div>
   )
}

export default App
