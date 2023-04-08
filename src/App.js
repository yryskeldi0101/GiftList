import React from 'react'
import { styled } from '@mui/material'

const Test = styled('h1')(({ theme }) => ({
   '&': {
      fontfamily: theme.themePalette.typography.fontfamily,
   },
}))

const App = () => {
   return <Test>AppTest</Test>
}

export default App
