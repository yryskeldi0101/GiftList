import React from 'react'
import AppRoutes from './redux/routes/AppRoutes'
import Snackbar from './components/button/SnackBar'

const App = () => {
   return (
      <>
         <Snackbar />
         <div>
            <AppRoutes />
         </div>
      </>
   )
}
export default App
