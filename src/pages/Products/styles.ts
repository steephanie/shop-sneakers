import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ProductProps } from '../../services/procucts'
import { colors } from '../../styles/theme/colors'

export const Header = styled.View`
  background-color: ${colors.BLACK} ;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
`

export const MenuIcon = styled(Ionicons).attrs({
  name: 'menu',
  size: 32,
})`
  color: ${colors.GREEN100};
`;

export const Logo = styled.Image`
  width: 60px;
  height: 53px;
`

export const CartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
`

export const CartIcon = styled(Ionicons).attrs({
  name: 'ios-cart-outline',
  size: 32,
})`
  color: ${colors.GREEN100};
`

export const NumberOfCartProducts = styled.Text`
    color: ${colors.WHITE};
    font-size: 13px;
    margin-left: 4px;
`

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  padding-left: 24px;
`

export const ProductList = styled(
  FlatList as new () => FlatList<ProductProps>
).attrs({
  numColumns: 2,
  columnWrapperStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})`
  margin-top: 10px;
`
