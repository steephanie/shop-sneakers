import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../styles/theme/colors'


export const Container = styled.View`
  background-color: ${colors.WHITE};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 30px;
`

export const QuantityOfItems = styled.View`
  align-items: center;
 //flex-direction: row;

`

export const AddItem = styled(Feather).attrs({
  name: 'plus',
  size: 20,
})`
  color: ${colors.BLACK};
`

export const NumberContainer = styled.View`
  width: 25px;
  height: 25px;
  margin: 4px 0px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND};
`

export const NumberText = styled.Text`
  color: ${colors.GREEN200};
`

export const RemoveItem = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`

export const RemoveIcon = styled(Feather).attrs({
  name: 'minus',
  size: 20,
})`
  color: ${colors.BLACK};
`

export const Item = styled.View`
  flex-direction: row;
`

export const Image = styled.Image`
  width: 80px;
  height: 90px;
`

export const TextGroup = styled.View`
  padding-top: 10px;
  max-width: 160px;
`

export const Name = styled.Text`
  color: ${colors.BLACK};
  font-size: 16px;
  
`

export const Amount = styled.Text`
    color: ${colors.GREEN200};
    font-size: 16px;
    margin-top: 6px;
    
`

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 8px;
  border-radius: 8px;
  background-color: ${colors.RED50};
  
`

export const TrashIcon = styled(Feather).attrs({
  name: 'trash',
  size: 20,
})`
  color: ${colors.RED100};
  
`
