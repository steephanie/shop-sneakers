import React from 'react'
import FlashMessage from 'react-native-flash-message'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './src/components/ContextMessage'
import { appTheme } from './src/styles/theme'
import { Routes } from './src/routes'

const App = () => {
  return (
    <CartProvider>
      <ThemeProvider theme={appTheme}>
        <Routes />
        <FlashMessage position="bottom" />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
