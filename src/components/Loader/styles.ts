import styled from 'styled-components/native'
import { Circle } from 'react-native-animated-spinkit'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Spinner = styled(Circle).attrs(() => ({
  color: '${colors.BLACK}',
  size: 52,
}))``
