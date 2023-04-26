import React from 'react'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import FlashMessage from 'react-native-flash-message'

import { ThemeProvider } from 'styled-components'

import { CartProvider } from './src/components/ContextMessage'
import { appTheme } from './src/styles/theme'
import { Routes } from './src/routes'
import Skeleton from 'react-loading-skeleton'

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
