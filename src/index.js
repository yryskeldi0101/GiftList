import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import lightTheme from './utlis/constants/theme'

const theme = createTheme(lightTheme)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>
)
