import styled from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'
import { colors } from '../../styles/theme/colors'

export type ButtonTypeProps = { type: string }

type ButtonProps = TouchableOpacityProps & ButtonTypeProps

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Content = styled.View`
  background-color: ${colors.WHITE};
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Description = styled.Text`
  color: ${colors.GRAY100};
  font-size: 16px;
  line-height: 22px;
  margin-top: 8px;
`

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
}) <ButtonProps>`
  background-color: ${({ type }) =>
    type === 'remove' ? '#FF4F2C' : '#F1F1F1'}; 
  margin-left: 20px;
  padding: 12px 16px;
  border-radius: 8px;
`

export const ButtonText = styled.Text<ButtonTypeProps>`
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
`
