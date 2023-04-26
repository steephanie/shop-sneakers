import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { CartItemProps } from '../../components/ContextMessage'
import { bottomSpaceHeight } from '../../utils/constants'
import { colors } from '../../styles/theme/colors'

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 40px;
`

export const Header = styled.View`
  padding: 18px 24px;
`
export const BackButton = styled(Feather).attrs({
  name: 'arrow-left',
  size: 28,
})`
  color: ${colors.BLACK};
`

export const CartItemList = styled(
  FlatList as new () => FlatList<CartItemProps>
)`
  margin-top: 10px;
`

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`
export const EmptyImageContainer = styled.View`
  width: 240px;
  height: 240px;
  border-radius: 22px;
  background-color: ${colors.GRAY50};
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 90px;
`

export const EmptyImage = styled.Image`
  width: 200px;
  height: 200px;
`
export const Description = styled.Text`
  color: ${colors.GRAY100};
  font-size: 16px;
  line-height: 22px;
  margin-top: 8px;
  text-align: center;
`
export const AllProductsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.WHITE};
  padding: 24px;
  padding-bottom: ${bottomSpaceHeight};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const AllProductsText = styled.Text`
  color: ${colors.BLACK};
  font-size: 16px;
  line-height: 24px;
  margin-left: 6px;
  
`

export const BuyButton = styled.TouchableOpacity`
  padding: 14px 24px;
  background-color: ${colors.GREEN200}; 
  border-radius: 8px;
`

export const BuyButtonText = styled.Text`
  color: ${colors.WHITE};
  font-size: 16px;
`
