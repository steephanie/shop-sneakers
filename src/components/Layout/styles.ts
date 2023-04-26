import styled from 'styled-components/native'
import { statusBarHeight, bottomSpaceHeight } from '../../utils/constants'

export const Container = styled.View`
  flex: 1;
  background-color: #F1F1F1;
  padding: ${statusBarHeight} 0 ${bottomSpaceHeight} 0;
`
