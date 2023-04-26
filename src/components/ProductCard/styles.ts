import styled, { css } from 'styled-components/native'

import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../styles/theme/colors'

type ActionButtonProps = TouchableOpacityProps & {
  hasCurrentProduct: boolean
}

export const Container = styled.View`
  background-color: ${colors.WHITE};
  flex: 1;
  max-width: 160px;
  padding: 5px 16px;
  margin-top: 20px;
  margin-right: 24px;
  border-radius: 8px;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
`

export const Name = styled.Text`
  color: ${colors.BLACK};
  font-size: 15px;
  margin-top: 20px;
  max-width: 130px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Amount = styled.Text`
  color: ${colors.GRAY100};
  font-size: 13px;
  text-decoration-line: line-through;
  margin-top: 8px;
`

export const DicountAmount = styled.Text`
  color: ${colors.GREEN200};
  font-size: 16px;
  margin-top: 4px;
  font-weight: 700;
`

export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
}) <ActionButtonProps>`
  justify-content: center;
  align-items: center;
  border-radius: 8px ;
  margin-top: 10px;
  height: 45px;
  background: ${({ hasCurrentProduct }) =>
    hasCurrentProduct ? '#FF4F2C' : '#000000'};
`

export const ActionIcon = styled(Feather).attrs(({ name }) => ({
  name,
  size: 22,
}))`
  color: ${colors.WHITE};
`
