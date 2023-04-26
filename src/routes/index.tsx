import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Products } from '../pages/Products'
import { Cart } from '../pages/Cart'
import { Menu } from '../pages/Menu'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Products: undefined;
      Cart: undefined;
      Menu: undefined;
    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Products" component={Products} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Menu" component={Menu} />
    </Navigator>
  </NavigationContainer>
)
