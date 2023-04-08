import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import lightTheme from './utlis/constants/theme'

const theme = createTheme(lightTheme)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
)
