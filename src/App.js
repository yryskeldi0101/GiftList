import React from 'react'
import Meatballs from './components/UI/Meatballs'
import Anonim from './assets/icons/anonim.svg'
import KeyIcon from './assets/icons/key.svg'

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
   return (
      <div className="App">
         <Meatballs arrayIcon={arrayIcon} />
      </div>
   )
}

export default App
