import React, { useState } from 'react'
import { LandingPage } from './containers/LandingPage'
import ForgotPassword from './components/form/ForgotPassword'
import SingIn from './components/form/SingIn'
import SingUp from './components/form/SingUp'
import ResetPassword from './components/form/ResetPassword'

function App() {
   const [openModal, setOpenModal] = useState(false)
   return (
      <div>
         <LandingPage setOpenModal={setOpenModal} />
         <ForgotPassword openModal={openModal} />
         <ResetPassword openModal={openModal} />
         <SingIn openModal={openModal} />
         <SingUp openModal={openModal} />
      </div>
   )
}

export default App
