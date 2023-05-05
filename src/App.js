import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { LandingPage } from './containers/LandingPage'
import { CLIENT_ID } from './utlis/constants/constnats'

function App() {
   return (
      <div>
         <GoogleOAuthProvider clientId={CLIENT_ID}>
            <LandingPage />
         </GoogleOAuthProvider>
      </div>
   )
}
export default App
