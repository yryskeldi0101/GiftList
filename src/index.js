import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import lightTheme from './utlis/constants/theme'
import { store } from './redux/store'

const theme = createTheme(lightTheme)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </Provider>
)
