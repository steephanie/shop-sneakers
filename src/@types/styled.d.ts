import 'styled-components'
import { colors } from '../styles/theme/colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
  }
}
